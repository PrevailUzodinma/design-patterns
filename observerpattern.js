/*This codebase illustrates the use of the OBSERVER PATTERN to structure a telephone package*/

/* define my SUBJECT and OBSERVER Interface: learning a best practice of defining interfaces
and have my intending classes extend the interface(blueprint)*/

class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.find((obs => obs !== observer));
  }

  notifyObservers(data) {
    for (let observer of this.observers) {
      observer.update(data);
    }
  }
}

class Observer {
  constructor() {}
  update() {}
}

/* define the TELEPHONE Subject - make it implement SUBJECT Interface */
class Telephone extends Subject {
  constructor() {
    super();
    this.phonenumbers = [];
  }
  addPhoneNumber(phonenumber) {
    this.phonenumbers.push(phonenumber);
  }
  removePhoneNumber(phonenumber) {
    this.phonenumbers = this.phonenumbers.filter(
      (number) => number !== phonenumber
    );
  }
  dialPhoneNumber(phonenumber) {
    //put conditional statement, that if the dialed number is not added to "Telephone", it cannot be dialed
    let checkedphonenumber = this.phonenumbers.find(
      (number) => number === phonenumber
    );
    if (checkedphonenumber) {
      // if it exists in our PhoneBook, notify the different observers.
      this.notifyObservers(checkedphonenumber);
    } else {
      console.log(
        `\nOops! Sorry ${phonenumber} has not been added to the Telephone, and so cannot be dialed, please add the number to the TelePhone and dial again.`
      );
    }
  }
}

/* define two different Observers to inherit Observer Interface */
class PrintNumber extends Observer {
  constructor() {
    super();
  }

  update(phonenumber) {
    console.log(`\nPhone Number: ${phonenumber}`);
  }
}

class PrintNowDialingNumber extends Observer {
  constructor() {
    super();
  }

  update(phonenumber) {
    console.log(`\nNow dialing ${phonenumber}`);
  }
}

/* TIME TO TEST OUR CODEBASE*/

/* ADD PHONE NUMBERS TO THE TELEPHONE
create a telephone object*/
const telephone = new Telephone();

telephone.addPhoneNumber("09034567890");
telephone.addPhoneNumber("08037594848");
telephone.addPhoneNumber("08037409079");

// REMOVE A PHONENUMBER FROM THE TELEPHONE
telephone.removePhoneNumber("09034567890");

/*ADD OBSERVER TO TELEPHONE
first create a observer object */
printNumberObserver = new PrintNumber();
printNowDialingObserver = new PrintNowDialingNumber();

telephone.addObserver(printNumberObserver);
telephone.addObserver(printNowDialingObserver);

// DIAL A PHONENUMBER (that is present in TELEPHONE to test our Observers)
telephone.dialPhoneNumber("08037594848");
// DIAL A PHONENUMBER (that is not present in TELEPHONE)
telephone.dialPhoneNumber("09034567890");
