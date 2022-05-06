1. brew install skaffold
2. brew install minikube
3. minikube start --profile custom
skaffold config set --global local-cluster true
eval $(minikube -p custom docker-env)

4. app-a/skaffold run
5. app-b/skaffold run
