
export class DirectoriesHierarchy{
 
    getPathFromName(nameElement: string): string{
        let choice = nameElement.split('-').length > 0 ? nameElement.split('-')[1] : null
        let directories = this.getDirectories();
        return directories[choice] || null
    }

    private getDirectories(): Object{
        let home = process.env.HOME || process.env.USERPROFILE
        
        return {
            "documents": home+"/Documents",
            "home": home,
            "downloads": home+"/Téléchargements",
            "applications": "/usr/local/bin"
        };
    }
}