pipeline {
    agent any
    environment {
        TELEGRAM_BOT_TOKEN = credentials('TELEGRAM_BOT_TOKEN')
        TELEGRAM_CHAT_ID = '7883793545'
        BUCKET = "doscarnes"
        CLOUDFRONT_DISTRIBUTION_ID = "E2EGY63Z0GY3PT"
        AWS_REGION = "eu-central-1"
    }

    stages {
        stage('Install Requirements') {
            steps {
                script {
                    sh 'pnpm install'
                }
            }
        }
        stage('Check Project Astro') {
            steps {
                script {
                    catchError(buildResult: 'FAILURE', stageResult: 'FAILURE'){
                        sh 'pnpm astro check'
                    }
                        if (currentBuild.currentResult == 'FAILURE') {
                            sendTelegramMessage("❌ Prueba fallida")
                        } else {
                            sendTelegramMessage("✅ Prueba completada con éxito")
                    }
                }
            }
        }
        stage('Deploy Project Astro') {
            steps {
                script {
                    catchError(buildResult: 'FAILURE', stageResult: 'FAILURE'){
                        sh 'pnpm run build'
                    }
                        if (currentBuild.currentResult == 'FAILURE') {
                            sendTelegramMessage("❌ Construcción fallida")
                        } else {
                            sendTelegramMessage("✅ Construcción completada con éxito")
                    }   
                }
            }
        }
        stage('Upload Project AWS S3') {
            steps {
                script {
                    withAWS(credentials: 'aws-alabrador', region: 'eu-central-1') {
                        sh 'aws s3 sync ./dist/ s3://$BUCKET --delete --exclude ".git/*"'
                        sh 'aws s3 ls s3://$BUCKET'
                        sendTelegramMessage("✅ Subida a AWS S3 completada con éxito")
                    }
                }
            }
        }
        stage('Invalidate Cache CloudFront') {
            steps {
                script {
                    withAWS(credentials: 'aws-alabrador', region: 'eu-central-1') {
                        sh 'aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_DISTRIBUTION_ID} --paths "/*" --region ${AWS_REGION}'
                        sendTelegramMessage("✅ Limpieza de cache completada con éxito")
                    }
                }
            }
        }
    }
    post {
        success {
            script {
                sendTelegramMessage("🎉 Despliegue completado exitosamente")
            }
        }
        failure {
            script {
                sendTelegramMessage("🚨 Despliegue falló en algún stage")
            }
        }
    }
}

// Función para enviar mensajes a Telegram
def sendTelegramMessage(String message) {
    sh """
        curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
        -d chat_id=${TELEGRAM_CHAT_ID} \
        -d text="${message}"
    """
}