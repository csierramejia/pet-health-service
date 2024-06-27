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

⚠️ Create a `src/.env` file in the root directory and add the following variables:
```bash
URL_MONGODB=mongodb://localhost:27017/petHealthService
PORT=3000
```

## Build / Run Docker

```bash
docker build -t pet-health-service .

docker run -p PORT:PORT pet-health-service
```


## Deployment / local minikube

```bash
kubectl delete -f deployment.yaml
kubectl delete -f service.yaml

kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

minikube service pet-health-service
```