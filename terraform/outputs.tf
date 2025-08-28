output "app_service_url" {
  description = "Default hostname of the portfolio web app"
  value       = azurerm_linux_web_app.portfolio_app.default_hostname
}
