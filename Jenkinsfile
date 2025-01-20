pipeline {
    agent any
    environment {
        DOCKER_SSH_CONTEXT = 'ec2' // The context name for SSH to EC2
        CI = 'false'
    }
    stages {
        stage('Clone Repo') {
            steps {
                // Clone your repo to get the Dockerfile and application code
                git 'https://github.com/jmrossi98/website.git'
            }
        }
        
        // Stage to install npm dependencies
        stage('Install Dependencies') {
            steps {
                script {
                    // Ensure Node.js is installed and available
                    sh 'npm install'  // Run npm install to install dependencies
                }
            }
        }

        // Stage to build the application using npm
        stage('Build Application') {
            steps {
                script {
                    // Run the build command
                    sh 'npm run build'  // Run npm build script (you can replace this with your actual build command)
                }
            }
        }

        stage('Set up Docker Context') {
            steps {
                script {
                    // Check if the Docker context already exists
                    def contextExists = sh(script: "docker context ls -q | grep ${DOCKER_SSH_CONTEXT}", returnStatus: true) == 0
                    
                    if (!contextExists) {
                        // Set up Docker context using SSH credentials to access EC2 if it doesn't exist
                        sh 'docker context create ${DOCKER_SSH_CONTEXT} --docker "host=ssh://ec2"'
                    } else {
                        echo "Docker context '${DOCKER_SSH_CONTEXT}' already exists, skipping creation."
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Use the created context to build the Docker image
                    sh 'docker context use ${DOCKER_SSH_CONTEXT}'
                    sh 'docker stop website; exit 0;'
                    sh 'docker build -t website .'
                }
            }
        }
        
        stage('Deploy Docker Container') {
            steps {
                script {
                    // Use Docker to deploy the container
                    sh 'docker run -p 3000:80 -d --name website --rm website'
                }
            }
        }
    }
}