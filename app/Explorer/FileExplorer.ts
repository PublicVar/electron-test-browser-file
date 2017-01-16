import fs = require('fs');
import {DirectoriesHierarchy} from './DirectoriesHierarchy';

export class FileExplorer {

    

    constructor(private directoriesHierarchy: DirectoriesHierarchy){

    }
    load(el: Element): void {
        // extract the choice according to the name of the element. the form is nav-choice
        //let choice = el.getAttribute('id').split('-').length > 0 ? el.getAttribute('id').split('-')[1] : null;
        let path = this.directoriesHierarchy.getPathFromName(el.getAttribute('id'));


        if (!path) throw new Error("Error : directory not defined for " + el.getAttribute('id'))

        fs.readdir(path,  (err: Error, items: string[]) => {
            if (err)
                throw new Error("Erreur : " + err)
            //Set the clicked menu element to active         
            this.removeMenuActive()
            this.setCurrentMenuActive(el)

            let bodyContent = ""
            const dirIcon = '<span class="icon icon-folder"></span>'
            const fileIcon = '<span class="icon icon-doc"></span>'
            //build the fileHierarchy
            for (var i = 0; i < items.length; i++) {
                let stats = fs.statSync(path + "/" + items[i])
                let icon = stats.isDirectory() ? dirIcon : fileIcon
                bodyContent += `
                <tr>
                    <td>
                        ${icon} ${items[i]}
                    </td>
                </tr>
            `
            }

            document.querySelector('tbody').innerHTML = bodyContent
        });
    }

    removeMenuActive() {
        for (let domEl of <any>document.querySelectorAll('.nav-group-item'))
            domEl.setAttribute('class', 'nav-group-item')
    }

    setCurrentMenuActive(el: Element) {
        el.setAttribute('class', el.getAttribute('class') + ' active')
    }
}
