# Self-Hosted Botonic Chatbot with API Integration

## Overview
This project implements a **self-hosted chatbot** using **Botonic**, which is deployed via **Docker and NGINX**. The chatbot is designed to handle customer inquiries by integrating with the **Context Cloud API**. The goal is to automate customer support processes, improve efficiency, and enhance user experience.

## Features
- 🚀 **Self-Hosted Deployment**: Runs as a standalone JavaScript bundle.
- 🔗 **Context Cloud API Integration**: Fetches dynamic responses based on user queries.
- 🌍 **Multilingual Handling**: Processes **German** language queries and responds accordingly.
- 🔄 **Scalability**: Deployed using **Docker**, making it easy to extend.
- 🎨 **Customizable UI**: Designed according to the **Moresophy branding** with integration into **Xtra-Gold's website**.
- 🔍 **Debugging & Logging**: Uses **Chrome DevTools**, **Docker logs**, and **NGINX logs** for error tracking.
- 🛠 **Flexible Configuration**: Easily adaptable through configuration files.

## Installation

### Prerequisites
Ensure you have the following installed:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [NGINX](https://nginx.org/)

### Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-repo/chatbot.git
   cd chatbot
   ```
2. **Install dependencies**
```sh
npm install
```

3. **Build the self-hosted chatbot**
```sh
npm run build:self-hosted
```
4. **Run with Docker & NGINX**
```sh
docker-compose up -d
```

5. **Access the chatbot**
   Open http://localhost in your browser.

## Configuration
Modify nginx.conf to adjust server settings.

Modify webpack.config.js for UI adjustments.

Modify package.json for project configurations.

## Debugging
- Check Docker logs: docker logs d-nginx
- Check NGINX logs: /var/log/nginx/error.log
- Use Chrome DevTools to inspect network requests and console logs.

## Deployment
- The chatbot is deployed as a JavaScript bundle (webchat.botonic.js).
- Can be embedded in any website using:

<script src="webchat.botonic.js"></script>
Hosted with NGINX as a reverse proxy.

## Future Improvements
- 📱 Mobile responsiveness
- 🌐 Support for additional languages
- 📊 Integration with monitoring tools (e.g., Prometheus, OpenSearch)

Developed as part of the IHK Fachinformatiker Anwendungsentwicklung final project.

🚀 Maintained by Soma Bhagat
