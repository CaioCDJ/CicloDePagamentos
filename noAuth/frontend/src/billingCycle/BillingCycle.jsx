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
import {create, init,update,remove} from './billingCycleActions.js';

import List from './billingCycleList.jsx';
import Form from './billingCycleForm.jsx';

class BillingCycle extends Component{

    componentWillMount(){
        this.props.init();
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
                                <Form onSubmit={this.props.create}
                                    submitLabel='Incluir' submitClass='primary'/> 
                            </TabContent> 
                            <TabContent id='tabUpdate'>
                                <Form onSubmit={this.props.update} 
                                    submitLabel='Alterar' submitClass='info'/>
                            </TabContent> 
                            <TabContent id='tabDelete'>
                                <Form onSubmit={this.props.remove} 
                                submitLabel='Excluir' submitClass='danger' readOnly={true} />
                            </TabContent> 
                        </TabsContent>
                    </Tabs>    
                </Content>
            </div>
        )

    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
       create,update,remove,init
    },dispatch);
export default connect(null,mapDispatchToProps)(BillingCycle);
