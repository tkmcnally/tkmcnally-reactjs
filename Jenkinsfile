// Environment configuration definitions.
def getEnvironmentConfig() {
    return [
        host: [
            ip: credentials('jenkins-target-host-ip'),
            user: credentials('jenkins-target-host-username'),
            path: credentials('jenkins-target-host-path')
        ]
    ]
}

// Assigning the targetHost for execution.
def targetHost = getEnvironmentConfig()[0]
def targetHostUser = getEnvironmentConfig()[1]
def targetHostPath = getEnvironmentConfig()[2]

// Execute remote ssh commands on targetHost.
def executeOnRemote(targetHost, commandsList) {
    sshagent (['deploy-to-target']) {
        def commands = commandsList.join(' && ')
        result = sh returnStdout: true, script: "ssh -o StrictHostKeyChecking=no $targetHost@$targetHostPath '${commands}'"
        return result
    }
}

// Main pipeline definition.
pipeline {
    agent any
    stages {
        // Checkout latest code from GIT - master branch.
        stage('Checkout Code from GIT') {
            when {
                expression { params['Execute Git updates'] == true }
            }
            steps {
                echo "Pulling new code..."
                executeOnRemote(targetHost, ["cd $targetHostPath", "git reset --hard HEAD", "git pull"])
                echo "Finished."
            }
        }


        // Build docker images and start them.
        stage('Docker Compose and Run') {
            when {
                expression { params['Rebuild Docker containers'] == true }
            }
            steps {
                echo "Building docker images..."
                executeOnRemote(targetHost, ["cd $targetHostPath", "docker-compose down", "docker-compose up -d --build"])
                echo "Finished."
            }
        }
    }
}