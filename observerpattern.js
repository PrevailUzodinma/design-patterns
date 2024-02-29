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

    notifyObservers(data){
        for(let observer of this.observers){
            observer.update(data)
        }
    }
}

class Observer{
    constructor(){

    }
    update(){

    }
}

/* define the TELEPHONE Subject - make it implement SUBJECT Interface */
class Telephone extends Subject{
    constructor(){
        super();
    this.phonenumbers = [];
    }
    addPhoneNumber(phonenumber){
        this.phonenumbers.push(phonenumber);
    }
    removePhoneNumber(phonenumber){
        this.phonenumbers = this.phonenumbers.filter((number => number !== phonenumber))
    }
    dialPhoneNumber(phonenumber){
        //put conditional statement, that if the dialed number is not added to "PhoneBook", it cannot be dialed
        let checkedphonenumber = this.phonenumbers.find((number => number === phonenumber))
        if(checkedphonenumber){
            this.notifyObservers(checkedphonenumber);
        } else{
            console.log(`Oops! Sorry ${checkedphonenumber} has not been added to the PhoneBook, so cannot be dialed./n Please add number to PhoneBook and dial again`)
        }
        
    }
}


/* define two different Observers to inherit Observer Interface */
class PrintNumber extends Observer{
    constructor(){
        super();
    }

    update(phonenumber){
        console.log(`Phone Number: ${phonenumber}`)
    }
}

class PrintNowDialingNumber extends Observer{
    constructor(){
        super();
    }

    update(phonenumber){
        console.log(`Now dialing ${phonenumber}`);
    }
}