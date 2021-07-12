## Desafios 2/3 - Imersão Full Cycle 3

Para rodar, basta clonar este projeto e rodar um `docker compose up` :)

Se preferir, pode também rodar via Kubernetes (k8s) com Kind:

`kind create cluster`

Backend:

`kubectl apply -f k8s/backend-deployment.yaml`

`kubectl apply -f k8s/backend-service.yaml`

`kubectl port-forward service/backend-service 3000:3000`

Frontend:

`kubectl apply -f k8s/frontend-deployment.yaml`

`kubectl apply -f k8s/frontend-service.yaml`

`kubectl port-forward service/frontend-service 3001:3001`
