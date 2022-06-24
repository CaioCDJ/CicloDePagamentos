import React from "react";
import Menuitem from "./Menuitem";
import MenuTree from "./MenuTree";

export default props =>(
    <ul className="sidebar-menu">
        
        <Menuitem path="/" label='Dashboard' icon="dashboard"/>
        
        <MenuTree label="Cadastro" icon="edit">
            <Menuitem path="billingCycles" 
                      label="Ciclos de Pagamentos" 
                      icon='usd'/>
        </MenuTree>        
    </ul>
);
