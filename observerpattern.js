/*This codebase illustrates the use of the OBSERVER PATTERN to structure a telephone package*/


/* define my SUBJECT and OBSERVER Interface: learning a best practice of defining interfaces
and have my intending classes extend the interface(blueprint)*/

class Subject{
    constructor(){
        this.observers = [];
    }

    addObserver(observer){

    }

    removeObserver(observer){

    }

    notifyObservers(){
    }
}

class Observer{
    constructor(){

    }
    update(){

    }
}

/*define the TELEPHONE Subject - make it implement SUBJECT Interface*/
class Telephone extends Subject{
    constructor(){
        super();
    }
    addPhoneNumber(phonenumber){

    }
    removePhoneNumber(phonenumber){

    }
    dialPhoneNumber(phonenumber){
        this.notifyObservers();
    }
}



