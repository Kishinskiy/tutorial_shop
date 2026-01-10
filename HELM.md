# Helm Chart Deployment Guide

## Prerequisites

- Kubernetes cluster (1.19+)
- Helm 3.0+ installed
- kubectl configured to access your cluster
- Docker image `tutorial-shop:latest` available in your cluster's container registry

## Building and Pushing Docker Image

Before deploying with Helm, ensure your Docker image is available in your Kubernetes cluster's registry:

```bash
# Build the image
docker build -t tutorial-shop:latest .

# Tag for your registry (example)
docker tag tutorial-shop:latest your-registry/tutorial-shop:latest

# Push to registry
docker push your-registry/tutorial-shop:latest
```

## Installing the Chart

### Basic Installation

```bash
helm install tutorial-shop ./helm/tutorial-shop
```

### Installation with Custom Image

```bash
helm install tutorial-shop ./helm/tutorial-shop \
  --set image.repository=your-registry/tutorial-shop \
  --set image.tag=latest
```

### Installation with Ingress Enabled

```bash
helm install tutorial-shop ./helm/tutorial-shop \
  --set ingress.enabled=true \
  --set ingress.hosts[0].host=tutorial-shop.example.com
```

### Installation with Autoscaling

```bash
helm install tutorial-shop ./helm/tutorial-shop \
  --set autoscaling.enabled=true \
  --set autoscaling.minReplicas=2 \
  --set autoscaling.maxReplicas=10
```

## Upgrading the Release

```bash
helm upgrade tutorial-shop ./helm/tutorial-shop
```

### Upgrade with New Image Tag

```bash
helm upgrade tutorial-shop ./helm/tutorial-shop \
  --set image.tag=v1.1.0
```

## Uninstalling the Release

```bash
helm uninstall tutorial-shop
```

## Verifying the Deployment

```bash
# Check pods
kubectl get pods -l app.kubernetes.io/name=tutorial-shop

# Check services
kubectl get svc -l app.kubernetes.io/name=tutorial-shop

# Check ingress (if enabled)
kubectl get ingress -l app.kubernetes.io/name=tutorial-shop

# View logs
kubectl logs -l app.kubernetes.io/name=tutorial-shop
```

## Configuration Values

Key configuration options in `values.yaml`:

- **replicaCount**: Number of pod replicas (default: 2)
- **image.repository**: Docker image repository
- **image.tag**: Docker image tag
- **service.type**: Service type (ClusterIP, NodePort, LoadBalancer)
- **ingress.enabled**: Enable ingress controller
- **resources**: CPU and memory limits/requests
- **autoscaling**: Horizontal Pod Autoscaler configuration

## Production Deployment Example

```bash
helm install tutorial-shop ./helm/tutorial-shop \
  --set replicaCount=3 \
  --set image.repository=your-registry/tutorial-shop \
  --set image.tag=v1.0.0 \
  --set ingress.enabled=true \
  --set ingress.className=nginx \
  --set ingress.hosts[0].host=shop.example.com \
  --set ingress.tls[0].secretName=tutorial-shop-tls \
  --set ingress.tls[0].hosts[0]=shop.example.com \
  --set resources.limits.cpu=500m \
  --set resources.limits.memory=512Mi \
  --set resources.requests.cpu=200m \
  --set resources.requests.memory=256Mi \
  --set autoscaling.enabled=true \
  --set autoscaling.minReplicas=3 \
  --set autoscaling.maxReplicas=10 \
  --set autoscaling.targetCPUUtilizationPercentage=80
```

## Troubleshooting

### Pods not starting

```bash
# Check pod status
kubectl describe pod <pod-name>

# Check events
kubectl get events --sort-by=.metadata.creationTimestamp
```

### Image pull errors

Ensure your image is accessible from the cluster:
- Check image registry credentials
- Verify imagePullSecrets if using private registry
- Confirm image tag exists

### Service not accessible

```bash
# Check service endpoints
kubectl get endpoints tutorial-shop

# Test service from within cluster
kubectl run -it --rm debug --image=busybox --restart=Never -- wget -O- http://tutorial-shop:80
```

## Additional Resources

- [Helm Documentation](https://helm.sh/docs/)
- [Kubernetes Documentation](https://kubernetes.io/docs/)
- See `helm/tutorial-shop/README.md` for detailed chart documentation
