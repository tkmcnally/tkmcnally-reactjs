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

// Execute remote ssh commands on targetHost.
def executeOnRemote(targetHostUser, targetHost, commandsList) {
    sshagent (['deploy-to-target']) {
        def commands = commandsList.join(' && ')
        result = sh returnStdout: true, script: "ssh -o StrictHostKeyChecking=no $targetHostUser@$targetHost '${commands}'"
        return result
    }
}

// Main pipeline definition.
pipeline {
    agent any
    environment {
        // Assigning the targetHost for execution.
        TARGETHOST = getEnvironmentConfig()[0]
        TARGETHOSTUSER = getEnvironmentConfig()[1]
        TARGETHOSTPATH = getEnvironmentConfig()[2]
    }

    stages {
        // Checkout latest code from GIT - master branch.
        stage('Checkout Code from GIT') {
            when {
                expression { params['Execute Git updates'] == true }
            }
            steps {
                echo "Pulling new code..."
                executeOnRemote($TARGETHOST, $TARGETHOSTPATH, ["cd $TARGETHOSTPATH", "git reset --hard HEAD", "git pull"])
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
                executeOnRemote(targetHost, ["cd $TARGETHOSTPATH", "docker-compose down", "docker-compose up -d --build"])
                echo "Finished."
            }
        }
    }
}