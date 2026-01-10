# Tutorial Shop Helm Chart

This Helm chart deploys the Tutorial Shop application to Kubernetes.

## Prerequisites

- Kubernetes 1.19+
- Helm 3.0+
- Docker image `tutorial-shop:latest` available in your cluster's registry

## Installation

### Install from local chart

```bash
helm install tutorial-shop ./helm/tutorial-shop
```

### Install with custom values

```bash
helm install tutorial-shop ./helm/tutorial-shop -f my-values.yaml
```

### Install with specific values

```bash
helm install tutorial-shop ./helm/tutorial-shop \
  --set image.repository=my-registry/tutorial-shop \
  --set image.tag=v1.0.0 \
  --set replicaCount=3 \
  --set ingress.enabled=true
```

## Configuration

The following table lists the configurable parameters and their default values:

| Parameter | Description | Default |
|-----------|-------------|---------|
| `replicaCount` | Number of replicas | `2` |
| `image.repository` | Image repository | `tutorial-shop` |
| `image.tag` | Image tag | `latest` |
| `image.pullPolicy` | Image pull policy | `IfNotPresent` |
| `service.type` | Service type | `ClusterIP` |
| `service.port` | Service port | `80` |
| `ingress.enabled` | Enable ingress | `false` |
| `ingress.className` | Ingress class name | `nginx` |
| `ingress.hosts` | Ingress hosts | `tutorial-shop.local` |
| `resources.limits.cpu` | CPU limit | `200m` |
| `resources.limits.memory` | Memory limit | `256Mi` |
| `resources.requests.cpu` | CPU request | `100m` |
| `resources.requests.memory` | Memory request | `128Mi` |
| `autoscaling.enabled` | Enable autoscaling | `false` |
| `autoscaling.minReplicas` | Min replicas | `2` |
| `autoscaling.maxReplicas` | Max replicas | `10` |

## Upgrading

```bash
helm upgrade tutorial-shop ./helm/tutorial-shop
```

## Uninstalling

```bash
helm uninstall tutorial-shop
```

## Examples

### Deploy with Ingress

```bash
helm install tutorial-shop ./helm/tutorial-shop \
  --set ingress.enabled=true \
  --set ingress.hosts[0].host=tutorial-shop.example.com
```

### Deploy with Autoscaling

```bash
helm install tutorial-shop ./helm/tutorial-shop \
  --set autoscaling.enabled=true \
  --set autoscaling.minReplicas=2 \
  --set autoscaling.maxReplicas=10
```

### Deploy to Production

```bash
helm install tutorial-shop ./helm/tutorial-shop \
  --set replicaCount=3 \
  --set image.tag=v1.0.0 \
  --set ingress.enabled=true \
  --set ingress.hosts[0].host=shop.example.com \
  --set ingress.tls[0].secretName=tutorial-shop-tls \
  --set ingress.tls[0].hosts[0]=shop.example.com \
  --set resources.limits.cpu=500m \
  --set resources.limits.memory=512Mi \
  --set autoscaling.enabled=true
```


```sh
# Установка
helm install tutorial-shop ./helm/tutorial-shop

# С ingress
helm install tutorial-shop ./helm/tutorial-shop \
  --set ingress.enabled=true \
  --set ingress.hosts[0].host=tutorial-shop.example.com

# Обновление
helm upgrade tutorial-shop ./helm/tutorial-shop

# Удаление
helm uninstall tutorial-shop
```