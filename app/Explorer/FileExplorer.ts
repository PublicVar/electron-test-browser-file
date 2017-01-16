import fs = require('fs');

export class FileExplorer {

    directories = {
        "documents": "/home/nicolas/Documents",
        "home": "/home/nicolas",
        "downloads": "/home/nicolas/Téléchargements",
        "applications": "/usr/local/bin"
    }


    load(el: Element): void {
        let choice = el.getAttribute('id').split('-').length > 0 ? el.getAttribute('id').split('-')[1] : null;
        let path = this.directories[choice] ? this.directories[choice] : null

        if (!path) throw new Error("Error : directory not defined for " + choice)

        fs.readdir(path,  (err: Error, items: string[]) => {
            if (err)
                throw new Error("Erreur : " + err)
         
            
            this.removeMenuActive()
            this.setCurrentMenuActive(el)
            let bodyContent = ""
            const dirIcon = '<span class="icon icon-folder"></span>'
            const fileIcon = '<span class="icon icon-doc"></span>'
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
