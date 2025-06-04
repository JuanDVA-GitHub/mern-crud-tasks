pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/JuanDVA-GitHub/mern-crud-tasks.git'
      }
    }

    stage('Apply Kubernetes Manifests') {
      steps {
        sh 'kubectl apply -f k8s/'
      }
    }

    // Opcional: Etapa para test unitarios
    stage('Run Backend Tests') {
      steps {
        dir('backend') {
          sh 'npm install'
          sh 'npm test'
        }
      }
    }

    stage('Run Frontend Tests') {
      steps {
        dir('client') {
          sh 'npm install'
          sh 'npm run test'
        }
      }
    }
  }
}
