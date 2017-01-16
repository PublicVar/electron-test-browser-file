"use strict";
var FileExplorer_1 = require("./Explorer/FileExplorer");
var load = function (el) {
    var fileExplorer = new FileExplorer_1.FileExplorer();
    fileExplorer.load(el);
};
load(document.querySelector("#nav-home"));
