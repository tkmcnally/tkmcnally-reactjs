// Ensure target host has PATH environment variable set. This may require editing sshd_config to permit user environment variables in remote shell.
// More information: https://superuser.com/questions/48783/how-can-i-pass-an-environment-variable-through-an-ssh-command

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
def executeOnRemote(commandsList) {
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
                executeOnRemote(["cd ${TARGETHOSTPATH}", "git reset --hard HEAD", "git pull"])
                echo "Finished."
            }
        }
        // Build packages using NPM.
        stage('Re-build packages with NPM') {
                    when {
                        expression { params['Execute build process via NPM'] == true }
                    }
                    steps {
                        echo "Building packages..."
                        executeOnRemote(["cd ${TARGETHOSTPATH}", "npm run build"])
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
                executeOnRemote(["cd ${TARGETHOSTPATH}", "docker-compose down", "docker-compose up -d --build"])
                echo "Finished."
            }
        }
    }
}