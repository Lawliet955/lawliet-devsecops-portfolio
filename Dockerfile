FROM node:20

# Install Azure CLI + zip + git
RUN curl -sL https://aka.ms/InstallAzureCLIDeb | bash && \
    apt-get update && apt-get install -y zip git && \
    node -v && npm -v && az version

WORKDIR /app
