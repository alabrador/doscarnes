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
                    sh 'pnpm astro check'
                }
            }
        }
        stage('Deploy Project Astro') {
            steps {
                script {
                    sh 'pnpm run build'
                    sendTelegramMessage("✅ Build completado con éxito")
                    } 
                }
        }
        stage('Upload Project AWS S3') {
            steps {
                withAWS(credentials: 'aws-alabrador', region: 'eu-central-1') {
                    sh 'aws s3 sync ./dist/ s3://$BUCKET --delete --exclude ".git/*"'
                    sh 'aws s3 ls s3://$BUCKET'
                }
            }

        }
        stage('Invalidate Cache CloudFront') {
            steps {
                script {
                    withAWS(credentials: 'aws-alabrador', region: 'eu-central-1') {
                        sh 'aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_DISTRIBUTION_ID} --paths "/*" --region ${AWS_REGION}'
                    }
                }
            }
        }
    }
    post {
        success {
            script {
                sendTelegramMessage("🎉 Pipeline completado exitosamente")
            }
        }
        failure {
            script {
                sendTelegramMessage("🚨 Pipeline falló en algún stage")
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