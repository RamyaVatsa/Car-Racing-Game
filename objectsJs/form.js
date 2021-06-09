    class Form{
    constructor(){
    this.title=createElement('h2')
    this.input=createInput('name')
    this.play=createButton('play');
    this.end=createButton('reset');
    this.greeting=createElement('h3')

          }
    display(){
  
    this.title.html('Car Racing Game')
    this.title.position(displayWidth/2-50,10)   
    this.input.position(displayWidth/2-40,displayHeight/2-40)
    this.play.position(displayWidth/2,displayHeight/2)   
    this.end.position(displayWidth/2,10) 
    this.end.mousePressed(()=>{
        player.updateCount(0)
        game.updateState(0)
    })  
    this.play.mousePressed(()=>{
    this.input.hide()
    this.play.hide()
    player.name=this.input.value()
    playerCount=playerCount+1
    player.index=playerCount
    player.updateCount(playerCount)
    player.update(player.name)
    this.greeting.html('Hello '+player.name+'!')
    this.greeting.position(displayWidth/2-40,displayHeight/2-40)
    })
}
    hide(){
    this.input.hide()
    this.play.hide()
    this.greeting.hide()
}

}