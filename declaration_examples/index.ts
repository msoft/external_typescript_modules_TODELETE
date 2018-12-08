/// <reference path="ExternalDependencies/index.d.ts" />

// Test 1
// import { Person, Player, CreatePlayer } from "./dependencies";

// Test 2
// import { Person, Player, CreatePlayer } from "./ExternalDependencies/External";

// Test 3
// /// <reference path="ExternalDependencies/index.d.ts" />


import * as externalDependency from 'externalDependency';
import * as debug from 'debug';
import * as jquery from 'jquery';
import * as jqueryz from 'jqueryz';

class Startup {

        public static main(): number {
    
        // var player = new Player(new Person('Buffon', 'Gianluigi'));
        // player.showPlayerName();

        // Test 1 => Test 2
        // var player = CreatePlayer('Buffon', 'Gianluigi');
        // player.showPlayerName();

        // Test 3
        // var player = ExternalDependency.CreatePlayer('Buffon', 'Gianluigi');
        // player.showPlayerName();

        // Test 4
        // var player = ExternalDependency.CreatePlayer('Buffon', 'Gianluigi');
        // player.showPlayerName();
            debug.load();
        // c.CreatePlayer('Buffon', 'Gianluigi');
        jquery.load();
        jqueryz.load();
        // externalDependency.CreatePlayer('Buffon', 'Gianluigi');


        return 0;
    }

}

Startup.main();
