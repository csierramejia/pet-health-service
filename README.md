# Pet Health Service

A microservice for managing the health records of pets. Built with Node.js, Express, and MongoDB.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [pnpm](https://pnpm.io/)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/tu-usuario/pet-health-service.git
    cd pet-health-service
    ```

2. Install dependencies:
    ```bash
    pnpm install
    ```

## Environment Variables

> [! Important ]
Create a `src/.env` file in the root directory and add the following variables:
```env
URL_MONGODB=mongodb://localhost:27017/petHealthService
PORT=3000
