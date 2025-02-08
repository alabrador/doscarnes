pipeline {
    agent any
    environment {
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
        stage('Project Test Astro') {
            steps {
                script {
                    sh 'pnpm astro check'
                }
            }
        }
        stage('Project Deploy Astro') {
            steps {
                script {
                    sh 'pnpm run build'
                }
            }
        }
        stage('Project Upload AWS S3') {
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