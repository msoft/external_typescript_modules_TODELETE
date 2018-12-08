

// class Person {
//     constructor(private name: string, private firstName: string) {

//     }

//     public showName(): void {
//         console.log("Name: " + this.name + "; First Name: " + this.firstName); 
//     }
// }

declare module testStatic {
    class Person {
        constructor(name: string, firstName: string);
        showName(): void;
    }


    class Player {
        constructor(identity: Person);
        showName(): void;
    }

    interface Factory { 
        CreatePlayer(name: string, firstName: string): Player;
    }    
}

declare var test: testStatic.Factory;