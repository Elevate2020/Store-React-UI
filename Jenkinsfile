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
        sh 'docker build -t swaraj1123/ss-react-ui:latest .'
    }
    stage('Docker Image push'){
        withDockerRegistry(credentialsId: '064af0a5-cde4-480c-8a14-87eabe184f04', toolName: 'docker') {
            sh 'docker push swaraj1123/ss-react-ui:latest'
        }
    }
    stage('Kuberneetes Deploy'){
        kubernetesDeploy configs: 'ui-deployment.yml, ui-ingress.yml', dockerCredentials: [[credentialsId: '064af0a5-cde4-480c-8a14-87eabe184f04']], enableConfigSubstitution: false, kubeConfig: [path: ''], kubeconfigId: 'e9d7ade7-21d9-4f64-ae80-891fd1b25713', secretName: '', ssh: [sshCredentialsId: '*', sshServer: ''], textCredentials: [certificateAuthorityData: '', clientCertificateData: '', clientKeyData: '', serverUrl: 'https://']
    }
}
