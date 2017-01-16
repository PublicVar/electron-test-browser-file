
import  { FileExplorer }  from './Explorer/FileExplorer'

let load = (el: Element) => {
    let fileExplorer = new FileExplorer();
    fileExplorer.load(el);
}

load(document.querySelector("#nav-home"))