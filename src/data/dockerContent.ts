import { Section } from '../types/index';

interface DockerContentSection {
  title: string;
  examples: { title: string; code: string }[];
}

export const dockerSections: Section[] = [
  {
    id: 'images',
    title: 'Docker Images',
    icon: '📦'
  },
  {
    id: 'containers',
    title: 'Containers & Volumes',
    icon: '🐳'
  },
  {
    id: 'compose',
    title: 'Docker Compose',
    icon: '📋'
  },
  {
    id: 'networking',
    title: 'Networking',
    icon: '🌐'
  },
  {
    id: 'best-practices',
    title: 'Best Practices',
    icon: '✅'
  },
  {
    id: 'deployment',
    title: 'Deployment',
    icon: '🚀'
  }
];

export const dockerContent: { [key: string]: DockerContentSection[] } = {
  images: [
    {
      title: 'Building Images',
      examples: [
        {
          title: 'Basic Dockerfile',
          code: `# Use official Node.js runtime as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]`
        },
        {
          title: 'Multi-stage Build',
          code: `# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`
        },
        {
          title: 'Build and Tag',
          code: `# Build image with tag
docker build -t myapp:latest .

# Build with specific tag
docker build -t myapp:v1.0.0 .

# Build with multiple tags
docker build -t myapp:latest -t myapp:v1.0.0 .

# Build from specific Dockerfile
docker build -f Dockerfile.prod -t myapp:prod .`
        }
      ]
    }
  ],
  containers: [
    {
      title: 'Container Management',
      examples: [
        {
          title: 'Run Container',
          code: `# Run container in foreground
docker run nginx:alpine

# Run in background
docker run -d nginx:alpine

# Run with port mapping
docker run -d -p 8080:80 nginx:alpine

# Run with name
docker run -d --name my-nginx nginx:alpine

# Run with environment variables
docker run -d -e NODE_ENV=production myapp:latest`
        },
        {
          title: 'Volume Management',
          code: `# Create named volume
docker volume create my-data

# Run with volume
docker run -d -v my-data:/app/data myapp:latest

# Bind mount host directory
docker run -d -v /host/path:/container/path myapp:latest

# Anonymous volume
docker run -d -v /app/data myapp:latest

# List volumes
docker volume ls

# Inspect volume
docker volume inspect my-data`
        },
        {
          title: 'Container Operations',
          code: `# List running containers
docker ps

# List all containers
docker ps -a

# Stop container
docker stop container_id

# Start container
docker start container_id

# Remove container
docker rm container_id

# Execute command in running container
docker exec -it container_id /bin/bash

# View container logs
docker logs container_id

# Follow logs
docker logs -f container_id`
        }
      ]
    }
  ],
  compose: [
    {
      title: 'Docker Compose Basics',
      examples: [
        {
          title: 'Basic docker-compose.yml',
          code: `version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
    volumes:
      - .:/app
      - /app/node_modules
    depends_on:
      - db

  db:
    image: postgres:13
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:`
        },
        {
          title: 'Compose Commands',
          code: `# Start services
docker-compose up

# Start in background
docker-compose up -d

# Build and start
docker-compose up --build

# Stop services
docker-compose down

# View logs
docker-compose logs

# Follow logs
docker-compose logs -f

# Execute command in service
docker-compose exec web npm test

# Scale service
docker-compose up --scale web=3`
        },
        {
          title: 'Environment Variables',
          code: `# docker-compose.yml with env file
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    env_file:
      - .env
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:pass@db:5432/myapp

  db:
    image: postgres:13
    env_file:
      - .env.db

# .env file
NODE_ENV=production
DATABASE_URL=postgresql://user:pass@db:5432/myapp

# .env.db file
POSTGRES_DB=myapp
POSTGRES_USER=user
POSTGRES_PASSWORD=password`
        }
      ]
    }
  ],
  networking: [
    {
      title: 'Docker Networks',
      examples: [
        {
          title: 'Network Commands',
          code: `# List networks
docker network ls

# Create custom network
docker network create my-network

# Run container on specific network
docker run -d --network my-network nginx:alpine

# Connect container to network
docker network connect my-network container_id

# Inspect network
docker network inspect my-network

# Remove network
docker network rm my-network`
        },
        {
          title: 'Network Types',
          code: `# Bridge network (default)
docker run -d --network bridge nginx:alpine

# Host network
docker run -d --network host nginx:alpine

# None network (no networking)
docker run -d --network none nginx:alpine

# Custom network with driver
docker network create --driver bridge my-custom-network

# Overlay network (for swarm)
docker network create --driver overlay my-overlay-network`
        },
        {
          title: 'Service Discovery',
          code: `# docker-compose.yml with custom network
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    networks:
      - app-network
    depends_on:
      - api

  api:
    build: ./api
    networks:
      - app-network
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/myapp

  db:
    image: postgres:13
    networks:
      - app-network
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password

networks:
  app-network:
    driver: bridge`
        }
      ]
    }
  ],
  'best-practices': [
    {
      title: 'Image Optimization',
      examples: [
        {
          title: 'Use Alpine Images',
          code: `# Instead of
FROM ubuntu:20.04

# Use
FROM alpine:latest

# Or for Node.js
FROM node:18-alpine

# Benefits:
# - Smaller image size
# - Faster downloads
# - Reduced attack surface`
        },
        {
          title: 'Layer Optimization',
          code: `# Bad: Multiple RUN commands
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Good: Combine RUN commands
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install && npm run build

# Better: Use .dockerignore
# .dockerignore file:
node_modules
npm-debug.log
.git
.gitignore
README.md`
        },
        {
          title: 'Security Best Practices',
          code: `# Run as non-root user
FROM node:18-alpine
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

# Use specific versions
FROM node:18.17.0-alpine

# Scan for vulnerabilities
docker scan myapp:latest

# Use multi-stage builds
FROM node:18-alpine AS builder
# ... build steps
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html`
        }
      ]
    }
  ],
  deployment: [
    {
      title: 'Production Deployment',
      examples: [
        {
          title: 'Production Dockerfile',
          code: `# Multi-stage production build
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]`
        },
        {
          title: 'Docker Swarm',
          code: `# Initialize swarm
docker swarm init

# Deploy stack
docker stack deploy -c docker-compose.yml myapp

# List services
docker service ls

# Scale service
docker service scale myapp_web=5

# Update service
docker service update --image myapp:v2.0.0 myapp_web

# Remove stack
docker stack rm myapp

# Leave swarm
docker swarm leave --force`
        },
        {
          title: 'Kubernetes Deployment',
          code: `# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:latest
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"

# service.yaml
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  selector:
    app: myapp
  ports:
  - port: 80
    targetPort: 3000
  type: LoadBalancer`
        }
      ]
    }
  ]
};

export const loadDockerContent = async (sectionId: string): Promise<DockerContentSection[]> => {
  // Simulate async loading
  await new Promise(resolve => setTimeout(resolve, 100));
  return dockerContent[sectionId] || [];
};

export const preloadDockerSection = async (sectionId: string): Promise<void> => {
  // Preload content for better UX
  if (dockerContent[sectionId]) {
    await new Promise(resolve => setTimeout(resolve, 50));
  }
}; 