// Test 2
// export declare class Person {
//     constructor(name: string, firstName: string);
//     showPersonName(): void; 
// }

// export declare class Player {
//     constructor(person: Person);
//     showPlayerName(): void;
// }

// export declare function CreatePlayer(name: string, firstName: string): Player;


// Test 3
// export declare module ExternalDependency {
//     class Person {
//         constructor(name: string, firstName: string);
//         showPersonName(): void; 
//     }
    
//     class Player {
//         constructor(person: Person);
//         showPlayerName(): void;
//     }
    
//     export function CreatePlayer(name: string, firstName: string): Player;    

// }

// Test 4
declare module ExternalDependency {
    //namespace ExternalDependency {
        class Person {
            constructor(name: string, firstName: string);
            showPersonName(): void; 
        }
        
        class Player {
            constructor(person: Person);
            showPlayerName(): void;
        }
        
        export function CreatePlayer(name: string, firstName: string): Player;    
    //}

    //export = ExternalDependency;
}