node{
    stage('Initialize'){
      def dockerHome = tool 'docker'
      def npmHome = tool 'node'
      env.PATH = "${dockerHome}/bin:${npmHome}/bin:${env.PATH}"
    }
    stage('Checkout'){
        git credentialsId: 'afb29c50-d501-4c1d-8852-ce1a6193e8a6', url: 'https://github.com/Elevate2020/Store-React-UI.git'
    }
    stage('Build'){
        sh 'npm install'
    }
    stage('Build docker Image'){
        sh 'docker build -t targetelevate/ss-react-ui:latest .'
    }
    stage('Docker Image push'){
        withDockerRegistry(credentialsId: 'target, toolName: 'docker') {
            sh 'docker push targetelevate/ss-react-ui:latest'
        }
    }
    stage('Kuberneetes Deploy'){
        kubernetesDeploy configs: 'ui-deployment.yml, ui-ingress.yml', dockerCredentials: [[credentialsId: 'target']], enableConfigSubstitution: false, kubeConfig: [path: ''], kubeconfigId: 'minikube', secretName: '', ssh: [sshCredentialsId: '*', sshServer: ''], textCredentials: [certificateAuthorityData: '', clientCertificateData: '', clientKeyData: '', serverUrl: 'https://']
    }
}
