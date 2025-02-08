pipeline {
    agent any
    environment {
        TELEGRAM_BOT_TOKEN = credentials('7327847658:AAFtJCDHLziKfxDAtdy-pLOKuGJojQ9U-Fo')
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
                try {
                    script {
                        sh 'pnpm run build'
                        sendTelegramMessage("✅ Build completado con éxito")
                        } 
                    catch (Exception e) {
                    sendTelegramMessage("❌ Error en Build: ${e.message}")
                    error "Fallo en Build"
                    }
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
}