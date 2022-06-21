import axios from 'axios';
import {toastr} from 'react-redux-toastr';
import {reset as resetform} from 'redux-form';
import {showTabs, selectTab} from '../common/tab/tabActions.jsx';

const BASE_URL = 'http://localhost:3003/api';

export function getList() {

    const request = axios.get(`${BASE_URL}/billingCycles`);
    return{
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values){
   
    return dispatch =>{
        axios.post(`${BASE_URL}/billingCycles`,values)
            .then(resp=> {
                toastr.success('sucesso', 'Operação Realizada com sucesso.');
                dispatch([
                    resetform('billingCycleForm1'),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList','tabCreate')
                ])
            }).catch(e=>{
                
                e.response.data.errors.forEach(error => toastr.error('Erro',error));
            })
    }
 
   
}
