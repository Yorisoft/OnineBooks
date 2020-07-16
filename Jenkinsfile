/* node ('worker'){
    cleanWs()

    def image
    def pipeline

    currentStage = 'Setup'
    stage(currentStage){
        pipeline = new cicd.Pipeline()
        pipeline.cleanupAndCheckout()
    }

     currentStage = 'Build Docker'
    stage(currentStage){
       image = pipeline.buildDockerImage([
            appVersion: 1.0.0
            appname: 'localTest'
        ])
    }
    
}
 */
#!/users/bin/env groovy

node{
    cleanWs();
    
    def image
    def pipeline
    
    currentStage = 'Setup'
    stage(currentStage){
git credentialsId: 'cred-git', url: 'https://github.com/Hack-Diversity/cscl-team4-frontend.git'
    }