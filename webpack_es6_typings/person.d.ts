

// class Person {
//     constructor(private name: string, private firstName: string) {

//     }

//     public showName(): void {
//         console.log("Name: " + this.name + "; First Name: " + this.firstName); 
//     }
// }

declare class Person {
    constructor(name: string, firstName: string);
    showName(): void;
}


declare class Player {
    constructor(identity: Person);
    showName(): void;
}

// export = Player;