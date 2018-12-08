// Test 3
// declare module ExternalDependency {
//     class Person {
//         constructor(name: string, firstName: string);
//         showPersonName(): void; 
//     }
    
//     class Player {
//         constructor(person: Person);
//         showPlayerName(): void;
//     }
    
//     function CreatePlayer(name: string, firstName: string): Player;    

// }

// Test 4
declare module 'externalDependency' {

    namespace externalDependency {
        // export class Person {
        //     constructor(name: string, firstName: string);
        //     showPersonName(): void; 
        // }
        
        // export class Player {
        //     constructor(person: Person);
        //     showPlayerName(): void;
        // }
            
        export function CreatePlayer(name: string, firstName: string): void;    
    }

    export = externalDependency;
}


declare module 'jqueryz' {
    
    namespace jqueryz {
      export function load (): string | void;
    
    }
    
    export = jqueryz;
    }


declare module 'jquery' {
    
    namespace jquery {
      export function load (): string | void;
    
    }
    
    export = jquery;
    }


declare module 'debug' {
    
    // function debug (namespace: string): debug.Debugger;
    
    namespace debug {
    //   export interface Debugger {
    //     (message: any, ...args: any[]): void;
    //     enabled: boolean;
    //     namespace: string;
    //     log: Function;
    //   }
    
    //   export function coerce (value: any): any;
    //   export function disable (): void;
    //   export function enable (namespaces: string): void;
    //   export function enabled (namespace: string): boolean;
    
      // Node implementation exports.
    //   export var log: Function;
    //   export function formatArgs (...args: any[]): any;
    //   export function save (namespaces?: string): void;
      export function load (): string | void;
    //   export function useColors (): boolean;
    //   export var colors: number[];
    }
    
    export = debug;
    }