# GitHub Actions Workflows

This directory contains GitHub Actions workflows for CI/CD automation.

## Workflows

### 1. CI/CD Pipeline (`.github/workflows/ci-cd.yml`)

Main workflow that runs on every push to main/master branches and pull requests.

**Stages:**
- **Build and Test**: Installs dependencies, runs linter, and builds the application
- **Build and Push Docker Image**: Builds Docker image and pushes to Docker Hub
- **Deploy to Kubernetes**: Deploys the application to Kubernetes using Helm

**Triggers:**
- Push to `main` or `master` branches
- Push tags starting with `v*`
- Pull requests to `main` or `master`

### 2. Test Workflow (`.github/workflows/test.yml`)

Runs tests and linting on push and pull requests.

**Triggers:**
- Push to `main`, `master`, or `develop` branches
- Pull requests to `main`, `master`, or `develop`

### 3. Release Workflow (`.github/workflows/release.yml`)

Creates a GitHub release when a version tag is pushed.

**Triggers:**
- Push tags matching `v*.*.*` pattern (e.g., `v1.0.0`)

## Required Secrets

Configure the following secrets in your GitHub repository settings:

### Docker Hub Credentials
- `DOCKER_USERNAME`: Your Docker Hub username
- `DOCKER_PASSWORD`: Your Docker Hub password or access token

### Kubernetes Configuration
- `KUBECONFIG`: Base64-encoded kubeconfig file content

To generate the base64-encoded kubeconfig:
```bash
cat ~/.kube/config | base64
```

## Setup Instructions

1. **Add Docker Hub Secrets:**
   - Go to Repository Settings → Secrets and variables → Actions
   - Add `DOCKER_USERNAME` and `DOCKER_PASSWORD`

2. **Add Kubernetes Secrets:**
   - Generate base64-encoded kubeconfig:
     ```bash
     cat ~/.kube/config | base64
     ```
   - Add `KUBECONFIG` secret with the base64 value

3. **Configure Environment (Optional):**
   - Go to Repository Settings → Environments
   - Create `production` environment
   - Add any environment-specific secrets or variables

## Usage

### Automatic Deployment

The workflow automatically deploys when:
- Code is pushed to `main` or `master` branch
- A version tag is pushed (e.g., `v1.0.0`)

### Manual Deployment

You can manually trigger the workflow:
1. Go to Actions tab
2. Select "CI/CD Pipeline"
3. Click "Run workflow"

### Creating a Release

To create a new release:
```bash
git tag v1.0.0
git push origin v1.0.0
```

This will:
- Build and push Docker image with version tag
- Create a GitHub release
- Deploy to Kubernetes (if configured)

## Customization

### Change Docker Registry

Edit `.github/workflows/ci-cd.yml`:
```yaml
env:
  REGISTRY: your-registry.com
  IMAGE_NAME: your-org/tutorial-shop
```

### Change Kubernetes Namespace

Edit the deploy step in `.github/workflows/ci-cd.yml`:
```yaml
--namespace your-namespace
```

### Add Ingress Configuration

Modify the Helm values in the deploy step:
```yaml
--set ingress.enabled=true \
--set ingress.hosts[0].host=your-domain.com
```

## Troubleshooting

### Build Fails
- Check Node.js version compatibility
- Verify all dependencies are in `package.json`
- Review build logs in Actions tab

### Docker Push Fails
- Verify `DOCKER_USERNAME` and `DOCKER_PASSWORD` secrets are set
- Check Docker Hub rate limits
- Ensure repository name matches Docker Hub repository

### Kubernetes Deployment Fails
- Verify `KUBECONFIG` secret is correctly base64-encoded
- Check cluster connectivity
- Review Helm chart values
- Check pod logs: `kubectl logs -l app.kubernetes.io/name=tutorial-shop`
