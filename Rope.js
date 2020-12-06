class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB : {x:this.offsetX, y : this.offsetY},
            stiffness : 0.04,
            length : 10
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        var A1X = pointA.x;
        var A1Y = pointA.y;
        var A2X = pointB.x + this.offsetX;
        var A2Y = pointB.y + this.offsetY;
        line(A1X, A1Y, A2X, A2Y); 
    }
}