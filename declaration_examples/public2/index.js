/// <reference path="ExternalDependencies/index.d.ts" />
import * as debug from 'debug';
import * as jquery from 'jquery';
import * as jqueryz from 'jqueryz';
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
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
    };
    return Startup;
}());
Startup.main();
