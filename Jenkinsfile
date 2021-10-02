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
    sshagent (credentials: ['jenkins-target-host-ssh-key']) {
        def commands = commandsList.join('; ')
        echo 'ssh -v -o StrictHostKeyChecking=no $TARGETHOSTUSER@$TARGETHOST' + " '${commands}'"
        result = sh returnStdout: true, script: 'ssh -v -o StrictHostKeyChecking=no $TARGETHOSTUSER@$TARGETHOST' + " '${commands}'"
        return result
    }
}

// Main pipeline definition.
pipeline {
    agent any
    environment {
        // Assigning the targetHost for execution.
        TARGETHOST = credentials('jenkins-target-host-ip')
        TARGETHOSTUSER = credentials('jenkins-target-host-username')
        TARGETHOSTPATH = credentials('jenkins-target-host-path')
    }
    stages {
        // Checkout latest code from GIT - master branch.
        stage('Checkout Code from GIT') {
            when {
                expression { params['Execute Git updates'] == true }
            }
            steps {
                echo "Pulling new code..."
                executeOnRemote("${TARGETHOSTUSER}", "${TARGETHOST}", ["cd ${TARGETHOSTPATH}", "/usr/local/bin/git reset --hard HEAD", "/usr/local/bin/git pull"])
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
                executeOnRemote("${TARGETHOSTUSER}", "${TARGETHOST}", ["cd ${TARGETHOSTPATH}", "/usr/local/bin/docker-compose down", "/usr/local/bin/docker-compose up -d --build"])
                echo "Finished."
            }
        }
    }
}