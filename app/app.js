"use strict";
var FileExplorer_1 = require("./Explorer/FileExplorer");
var DirectoriesHierarchy_1 = require("./Explorer/DirectoriesHierarchy");
var fileExplorer = new FileExplorer_1.FileExplorer(new DirectoriesHierarchy_1.DirectoriesHierarchy());
var load = function (el) {
    fileExplorer.load(el);
};
load(document.querySelector("#nav-home"));
