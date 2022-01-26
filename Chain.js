class Chain{
    //el constructor debe aceptar dos cuerpos como argumentos y debemos crear la restricción entre ellos
    constructor(bodyA, bodyB){ 
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    // función de visualización para mostrar la restricción, no olvidar agregar esta clase a nuestro index.html
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}