pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'cd app_vendas && npm install'
                sh 'cd android && ./gradlew assembleDebug'
                archiveArtifacts artifacts: '*.apk', followSymlinks: false
            }
        }
    }
}
