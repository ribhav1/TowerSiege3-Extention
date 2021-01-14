class block{
    constructor(x, y, w, h, bool, color){
        var options = {
            isStatic: bool
        }  
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        this.color = color;
        this.scoreVal = 0;
        World.add(world, this.body);
        this.removeFromWorld = function(){
            World.remove(world, this.body);
        }
        
    }
    score(){
        if(this.scoreVal < 50){
            this.scoreVal++;
        }
    }
    display(){
        if(this.body.velocity.x < 3){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        stroke(255);
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        }else{
        this.removeFromWorld();
        this.score();
        push();   
        }
    }

}