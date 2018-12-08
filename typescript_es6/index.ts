/// <reference path="ExternalDependency/index.d.ts" />

// Test 1
// import { Person, Player, CreatePlayer } from "./dependency.js";

// Test 2
// import { Person, Player, CreatePlayer } from "./ExternalDependency/index.js";

// Test 3
// import { ExternalDependency } from "./ExternalDependency/index.js";

// Test 4
// import * as ExternalDependency from 'ExternalDependency';

class Startup {

    public static main(): number {

        // Test 1
        // var player = new Player(new Person('Buffon', 'Gianluigi'));
        // player.showPlayerName();

        // Test 1 => Test 2
        // var player = CreatePlayer('Buffon', 'Gianluigi');
        // player.showPlayerName();

        // Test 3
        // var player = ExternalDependency.CreatePlayer('Buffon', 'Gianluigi');
        // player.showPlayerName();

        // Test 4
        var player = ExternalDependency.CreatePlayer('Buffon', 'Gianluigi');
        player.showPlayerName();

        return 0;
    }
}

Startup.main();
