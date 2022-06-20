import React,{Component} from "react";

import Content from '../common/template/content.jsx';
import ContentHeader from '../common/template/contentHeader.jsx';

import Tabs from '../common/tab/tabs.jsx';
import TabHeader from '../common/tab/tabHeader.jsx';
import TabsHeader from '../common/tab/tabsHeader.jsx';
import TabsContent from '../common/tab/tabsContent.jsx';

class BillingCycle extends Component{
    
    render(){

        return(
            <div>
                <ContentHeader title="Ciclos de pagamentos" 
                               small="cadastro"/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='listar' icon='bars' target='tagList'/>
                            <TabHeader label='Incluir' icon='plus' target='tagCreate'/>
                            <TabHeader label='Alterar' icon='pencil' target='tagUpdate'/>
                            <TabHeader label='Excluir' icon='trash-o' target='tagDelete'/>
                        </TabsHeader>
                        <TabsContent></TabsContent>
                    </Tabs>    
                </Content>
            </div>
        )

    }
}

export default BillingCycle;
