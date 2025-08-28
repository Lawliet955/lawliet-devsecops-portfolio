# Resource Group
data "azurerm_resource_group" "portfolio_rg" {
  name     = "fs_web_portfolio_rg"
}

# App Service Plan
resource "azurerm_service_plan" "portfolio_plan" {
  name                = "fs-web-portfolio-plan"
  location            = data.azurerm_resource_group.portfolio_rg.location
  resource_group_name = data.azurerm_resource_group.portfolio_rg.name
  sku_name            = "B1"
  os_type             = "Linux"
}

# Storage Account (optional, required for some App Service features)
resource "azurerm_storage_account" "portfolio_storage" {
  name                     = "fswebportfoliostg"
  resource_group_name      = data.azurerm_resource_group.portfolio_rg.name
  location                 = data.azurerm_resource_group.portfolio_rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

resource "azurerm_linux_web_app" "portfolio_app" {
  name                = "fs-web-portfolio-app"
  location            = data.azurerm_resource_group.portfolio_rg.location
  resource_group_name = data.azurerm_resource_group.portfolio_rg.name
  service_plan_id     = azurerm_service_plan.portfolio_plan.id

  site_config {
    application_stack {
      node_version = "20-lts"
    }
    app_command_line = "npx serve -s . -l 8080"
  }

  app_settings = {
    WEBSITE_RUN_FROM_PACKAGE = "1"
  }
}
# --- Deploy del codice (ZIP Deploy)
resource "null_resource" "deploy_portfolio" {
  provisioner "local-exec" {
    command = <<EOT
      sudo docker run --rm -v $(pwd)/..:/app -w /app node-azcli \
        bash -c "
          npm install && npm run build && \
          cd dist && zip -r ../build.zip . && cd .. && \
          az login \
            --service-principal \
            -u <SP_ID> \
            -p <SP_PWD> \
            --tenant <TENANT_ID> && \
          az webapp deploy \
            --resource-group ${data.azurerm_resource_group.portfolio_rg.name} \
            --name ${azurerm_linux_web_app.portfolio_app.name} \
            --src-path build.zip
        "
    EOT
  }

  depends_on = [azurerm_linux_web_app.portfolio_app]
}
