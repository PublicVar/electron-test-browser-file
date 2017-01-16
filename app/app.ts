
import  { FileExplorer }  from './Explorer/FileExplorer'
import { DirectoriesHierarchy } from './Explorer/DirectoriesHierarchy';
let fileExplorer = new FileExplorer( new DirectoriesHierarchy());
let load = (el: Element) => {
    fileExplorer.load(el);
}

load(document.querySelector("#nav-home"))