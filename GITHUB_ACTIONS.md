# GitHub Actions CI/CD Setup Guide

## Overview

This project includes GitHub Actions workflows for automated CI/CD pipeline that:
- Builds and tests the application
- Creates Docker images
- Pushes images to Docker Hub
- Deploys to Kubernetes using Helm

## Quick Start

### 1. Configure GitHub Secrets

Go to your repository → Settings → Secrets and variables → Actions, and add:

#### Docker Hub Credentials
```
DOCKER_USERNAME=your-dockerhub-username
DOCKER_PASSWORD=your-dockerhub-password-or-token
```

#### Kubernetes Configuration
```bash
# Generate base64-encoded kubeconfig
cat ~/.kube/config | base64 -w 0

# Add as secret:
KUBECONFIG=<base64-encoded-content>
```

### 2. Push Code

The workflow will automatically run on:
- Push to `main` or `master` branch
- Pull requests
- Version tags (e.g., `v1.0.0`)

## Workflow Details

### CI/CD Pipeline (`ci-cd.yml`)

**Jobs:**

1. **build-and-test**
   - Installs Node.js dependencies
   - Runs linter
   - Builds the application
   - Uploads build artifacts

2. **build-and-push-image**
   - Builds Docker image using Buildx
   - Tags image with branch name, SHA, and version
   - Pushes to Docker Hub
   - Uses GitHub Actions cache for faster builds

3. **deploy**
   - Sets up Helm and kubectl
   - Configures Kubernetes access
   - Deploys using Helm chart
   - Verifies deployment status

### Test Workflow (`test.yml`)

Runs on every push and pull request:
- Linting
- Build verification
- Basic smoke tests

### Release Workflow (`release.yml`)

Triggers on version tags:
- Builds and pushes versioned Docker image
- Creates GitHub release
- Tags image with version and `latest`

## Image Tagging Strategy

Images are tagged with:
- `latest` - for main/master branch
- `v1.0.0` - for version tags
- `main-<sha>` - for main branch commits
- `pr-<number>` - for pull requests (not pushed)

## Deployment Strategy

### Automatic Deployment
- **Main/Master branch**: Deploys to production automatically
- **Version tags**: Deploys tagged version to production

### Manual Deployment

You can manually trigger deployment:
1. Go to Actions tab
2. Select "CI/CD Pipeline"
3. Click "Run workflow"
4. Select branch and run

## Environment Configuration

### Production Environment

Configure in GitHub:
1. Settings → Environments → New environment
2. Name: `production`
3. Add environment-specific secrets if needed

### Custom Values

Override Helm values in the workflow or create environment-specific values files.

## Monitoring

### Check Workflow Status
- Go to Actions tab in GitHub
- View workflow runs and logs

### Verify Deployment
```bash
# Check pods
kubectl get pods -l app.kubernetes.io/name=tutorial-shop

# Check services
kubectl get svc -l app.kubernetes.io/name=tutorial-shop

# View logs
kubectl logs -l app.kubernetes.io/name=tutorial-shop -f
```

## Customization

### Change Registry

Edit workflow files and update:
```yaml
env:
  REGISTRY: your-registry.com
  IMAGE_NAME: your-org/tutorial-shop
```

### Change Kubernetes Namespace

Update deploy step:
```yaml
--namespace your-namespace
```

### Add Environment Variables

Add to Helm values or workflow:
```yaml
--set env.KEY=value
```

## Troubleshooting

### Workflow Not Running
- Check workflow file syntax
- Verify branch names match (`main` vs `master`)
- Check GitHub Actions is enabled for repository

### Docker Build Fails
- Check Dockerfile syntax
- Verify build context
- Review build logs

### Kubernetes Deploy Fails
- Verify kubeconfig is correct
- Check cluster connectivity
- Review Helm chart values
- Check resource limits

### Image Pull Errors
- Verify image exists in registry
- Check image pull secrets in Kubernetes
- Verify registry credentials

## Best Practices

1. **Use Version Tags**: Tag releases with semantic versioning (`v1.0.0`)
2. **Review PRs**: Always review pull requests before merging
3. **Monitor Deployments**: Check deployment status after each deploy
4. **Use Secrets**: Never commit credentials to repository
5. **Test Locally**: Test Docker builds locally before pushing

## Advanced Configuration

### Multi-Environment Deployment

Create separate workflows or use environments:
- `staging` - for develop branch
- `production` - for main/master branch

### Custom Build Arguments

Add to Docker build step:
```yaml
build-args: |
  BUILD_DATE=${{ github.event.head_commit.timestamp }}
  VCS_REF=${{ github.sha }}
```

### Slack Notifications

Add notification step:
```yaml
- name: Slack Notification
  uses: slackapi/slack-github-action@v1
  with:
    webhook-url: ${{ secrets.SLACK_WEBHOOK }}
```

## Support

For issues or questions:
- Check workflow logs in Actions tab
- Review Helm chart documentation
- Consult Kubernetes documentation
