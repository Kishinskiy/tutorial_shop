# Docker Instructions

## Build Docker Image

To build the Docker image, run:

```bash
docker build -t tutorial-shop:latest .
```

## Run Docker Container

To run the container:

```bash
docker run -d -p 8080:80 --name tutorial-shop tutorial-shop:latest
```

The application will be available at `http://localhost:8080`

## Stop Container

To stop the running container:

```bash
docker stop tutorial-shop
```

## Remove Container

To remove the container:

```bash
docker rm tutorial-shop
```

## View Logs

To view container logs:

```bash
docker logs tutorial-shop
```

## Docker Image Details

- **Base Image**: nginx:alpine (production stage)
- **Build Image**: node:20-alpine (build stage)
- **Port**: 80 (exposed)
- **Image Size**: ~77MB

## Production Deployment

For production deployment, you can:

1. Push the image to a container registry:
   ```bash
   docker tag tutorial-shop:latest your-registry/tutorial-shop:latest
   docker push your-registry/tutorial-shop:latest
   ```

2. Use docker-compose or Kubernetes for orchestration

3. Configure environment-specific nginx settings if needed
