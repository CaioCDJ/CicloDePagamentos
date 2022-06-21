import React,{Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Content from '../common/template/content.jsx';
import ContentHeader from '../common/template/contentHeader.jsx';

import Tabs from '../common/tab/tabs.jsx';
import TabHeader from '../common/tab/tabHeader.jsx';
import TabsHeader from '../common/tab/tabsHeader.jsx';
import TabsContent from '../common/tab/tabsContent.jsx';
import TabContent from '../common/tab/tabContent.jsx';
import {selectTab, showTabs} from '../common/tab/tabActions.jsx';
import {create} from './billingCycleActions.js';

import List from './billingCycleList.jsx';
import Form from './billingCycleForm.jsx';

class BillingCycle extends Component{

    componentWillMount(){
        this.props.selectTab('tabList');
        this.props.showTabs('tabList', 'tabCreate');
    }

    render(){

        return(
            <div>
                <ContentHeader title="Ciclos de pagamentos" 
                               small="cadastro"/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList'/>
                            <TabHeader label='Incluir' icon='plus' target='tabCreate'/>
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate'/>
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete'/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent> 
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create} />
                            </TabContent> 
                            <TabContent id='tabUpdate'><h1>Alterar</h1></TabContent> 
                            <TabContent id='tabDelete'><h1>Excluir</h1></TabContent> 
                        </TabsContent>
                    </Tabs>    
                </Content>
            </div>
        )

    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
        selectTab, showTabs,create},dispatch);
export default connect(null,mapDispatchToProps)(BillingCycle);
