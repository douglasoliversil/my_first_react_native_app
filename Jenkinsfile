pipeline {
    agent any

    stages {
        stage('Build') {
            sh 'cd app_vendas && npm install'
        }
        stage('Build') {
            sh 'cd android && ./gradlew assembleDebug'
            archiveArtifacts artifacts: '*.apk', followSymlinks: false
        }
    }
}
