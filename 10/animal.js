class Animal {
    emiteSom(){
        console.log("O animal fez barulho!");
    }
}

class Cachorro extends Animal {
    emiteSom(){
        console.log("Au! Au! Au! ");
    }
}

class Gato extends Animal {
    emiteSom(){
        super.emiteSom();
        console.log("Minhau! Minhau! Minhau! ");
    }
}

class RSD extends Cachorro {
    emiteSom(){
        super.emiteSom();
        console.log("Au! Au! Au! Viralata ");
    }
}

let animal1 = new Cachorro();
let animal2 = new Gato();
let animal3 = new RSD();
animal1.emiteSom();
animal2.emiteSom();
animal3.emiteSom();