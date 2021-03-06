"use strict";
var fs = require("fs");
var FileExplorer = (function () {
    function FileExplorer(directoriesHierarchy) {
        this.directoriesHierarchy = directoriesHierarchy;
    }
    FileExplorer.prototype.load = function (el) {
        var _this = this;
        // extract the choice according to the name of the element. the form is nav-choice
        //let choice = el.getAttribute('id').split('-').length > 0 ? el.getAttribute('id').split('-')[1] : null;
        var path = this.directoriesHierarchy.getPathFromName(el.getAttribute('id'));
        if (!path)
            throw new Error("Error : directory not defined for " + el.getAttribute('id'));
        fs.readdir(path, function (err, items) {
            if (err)
                throw new Error("Erreur : " + err);
            //Set the clicked menu element to active         
            _this.removeMenuActive();
            _this.setCurrentMenuActive(el);
            var bodyContent = "";
            var dirIcon = '<span class="icon icon-folder"></span>';
            var fileIcon = '<span class="icon icon-doc"></span>';
            //build the fileHierarchy
            for (var i = 0; i < items.length; i++) {
                var stats = fs.statSync(path + "/" + items[i]);
                var icon = stats.isDirectory() ? dirIcon : fileIcon;
                bodyContent += "\n                <tr>\n                    <td>\n                        " + icon + " " + items[i] + "\n                    </td>\n                </tr>\n            ";
            }
            document.querySelector('tbody').innerHTML = bodyContent;
        });
    };
    FileExplorer.prototype.removeMenuActive = function () {
        for (var _i = 0, _a = document.querySelectorAll('.nav-group-item'); _i < _a.length; _i++) {
            var domEl = _a[_i];
            domEl.setAttribute('class', 'nav-group-item');
        }
    };
    FileExplorer.prototype.setCurrentMenuActive = function (el) {
        el.setAttribute('class', el.getAttribute('class') + ' active');
    };
    return FileExplorer;
}());
exports.FileExplorer = FileExplorer;
