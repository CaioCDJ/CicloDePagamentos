import React from 'react';
import If from '../operador/if.jsx';

export default props =>(
    <If test={!props.hide}>
        
        <div>
                <input {...props.input}
                    className='form-control'
                    placeholder={props.placeholder}
                    readOnly={props.readOnly}
                    type={props.type}/>
                <span className={`glyphicon glyphicon-${props.icon}
                    form-control-feedback`></span>
        </div>

    </If>
)
