"use strict";
var fs = require("fs");
var FileExplorer = (function () {
    function FileExplorer() {
        this.directories = {
            "documents": "/home/nicolas/Documents",
            "home": "/home/nicolas",
            "downloads": "/home/nicolas/Téléchargements",
            "applications": "/usr/local/bin"
        };
    }
    FileExplorer.prototype.load = function (el) {
        var _this = this;
        var choice = el.getAttribute('id').split('-').length > 0 ? el.getAttribute('id').split('-')[1] : null;
        var path = this.directories[choice] ? this.directories[choice] : null;
        if (!path)
            throw new Error("Error : directory not defined for " + choice);
        fs.readdir(path, function (err, items) {
            if (err)
                throw new Error("Erreur : " + err);
            _this.removeMenuActive();
            _this.setCurrentMenuActive(el);
            var bodyContent = "";
            var dirIcon = '<span class="icon icon-folder"></span>';
            var fileIcon = '<span class="icon icon-doc"></span>';
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
