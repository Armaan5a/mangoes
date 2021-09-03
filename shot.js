class Rubberband{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 10
        }
        this.pointB = pointB
        this.bodya = bodyA
        this.rubbrband= Constraint.create(options);
        World.add(world, this.rubbrband);
    }
 
    fly(){
        this.rubbrband.bodyA = null;
    }
 
    attach(body){
        this.rubbrband.bodyA = body
    }
    
    display(){ 
            if(this.rubberband.bodyA){
        var poA = this.bodya.position
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(0)
           line(poA.x, poA.y, pointB.x, pointB.y+20);        
}}}