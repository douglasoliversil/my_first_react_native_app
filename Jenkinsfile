pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'cd app_vendas && npm install'
                sh 'cd $HOME/.jenkins/workspace/App_Vendas_main/app_vendas/android && ./gradlew assembleDebug'
                archiveArtifacts artifacts: 'app_vendas/android/app/build/outputs/apk/debug/*.apk', followSymlinks: false
            }
        }
    }
}
