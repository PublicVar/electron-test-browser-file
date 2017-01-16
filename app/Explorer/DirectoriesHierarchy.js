"use strict";
var DirectoriesHierarchy = (function () {
    function DirectoriesHierarchy() {
    }
    DirectoriesHierarchy.prototype.getPathFromName = function (nameElement) {
        var choice = nameElement.split('-').length > 0 ? nameElement.split('-')[1] : null;
        var directories = this.getDirectories();
        return directories[choice] || null;
    };
    DirectoriesHierarchy.prototype.getDirectories = function () {
        var home = process.env.HOME || process.env.USERPROFILE;
        return {
            "documents": home + "/Documents",
            "home": home,
            "downloads": home + "/Téléchargements",
            "applications": "/usr/local/bin"
        };
    };
    return DirectoriesHierarchy;
}());
exports.DirectoriesHierarchy = DirectoriesHierarchy;
