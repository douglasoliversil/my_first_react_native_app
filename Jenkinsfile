pipeline {
    agent any

    stages {
        stage('Install React Native Dependencies') {
            sh 'cd app_vendas && npm install'
        }
        stage('Build Android') {
            sh 'cd android && ./gradlew assembleDebug'
            archiveArtifacts artifacts: '*.apk', followSymlinks: false
        }
    }
}
