import { Container ,Children } from " /src/type/index"



import NavigationTable from "./NavigationTable";
import ToggleNavigation from "./ToggleNavigation";
import HeaderLogo from "./HeaderLogo";



export default class HeaderSection extends Container{
    constructor(root) {
        super(root)
        super.set(new HeaderLogo()).set(new NavigationTable() )
        
    }
    

    static build(root) {
        const ele = new HeaderSection(root);   
    }
        
}





