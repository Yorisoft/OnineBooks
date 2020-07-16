node ('worker'){
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