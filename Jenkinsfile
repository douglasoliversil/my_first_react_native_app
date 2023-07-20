pipeline {
    agent any

    stages {
        stage('Build') {
            step {
                sh 'cd app_vendas && npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'cd android && ./gradlew assembleDebug'
                archiveArtifacts artifacts: '*.apk', followSymlinks: false
            }
        }
    }
}
