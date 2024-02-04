//Base class for all objects
class AnimalKingdom {
    constructor(name, reproductionStatus, feeding, cellStatus, senseOrgans) {
      this.name = name;
      this.reproductionStatus = `Sexual Reprduction`;
      this.feeding = `Heterotroph`;
      this.cellStatus = `Multicellular eukaryotes`;
      this.senseOrgans = `eyes`;
  
      if (this.constructor == AnimalKingdom) {
        throw new Error("AnimalKingdom cannot be Instantiated");
      }
    }
    //A Protected class
    #eat() {
      console.log(`I am a ${this.feeding}.`);
      return;
    }
  
    move() {
      console.log("I can move.");
      return this.move;
    }
    //Calling the Protected class eat()
    callEat() {
      this.#eat();
      return this.callEat;
    }
  }
  
  var listOfAnimalclass = [];
  //Sub class Invertebrates
  class Invertebrates extends AnimalKingdom {
    name = "Invertebrates";
    listOfAnimalclass = ["Arthropoda"];
  }
  //Sub class Vertebrates
  class Vertebrates extends AnimalKingdom {
    name = "vertebrates";
    listOfAnimalclass = ["Fish, Amphibia, Reptiles, Aves, Mammals."];
  }
  
  const invertebrates = new Invertebrates();
  const vertebrates = new Vertebrates();
  
  console.log(invertebrates);
  console.log(vertebrates);
  console.log(vertebrates.callEat());
  console.log(invertebrates.move());
  
  class WarmBlooded extends Vertebrates {
    //overide name in super class
    name = "Warm Blooded";
    listOfAnimalclass = ["Aves, Mammals"];
  }
  
  class ColdBlooded extends Invertebrates {
    name = "Cold Blooded";
    listOfAnimalclass = ["Arthropoda"];
  }
  
  const warmBlooded = new WarmBlooded();
  
  const coldBlooded = new ColdBlooded();
  
  console.log(coldBlooded);
  console.log(warmBlooded);