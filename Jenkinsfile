pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'cd app_vendas && npm install'
                sh 'cd $HOME/.jenkins/workspace/App_Vendas_main/app_vendas'
                sh 'cd android && ./gradlew assembleDebug'
                archiveArtifacts artifacts: '*.apk', followSymlinks: false
            }
        }
    }
}
