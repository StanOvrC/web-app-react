import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <div className={'form'}>
            <h3>Enter your text</h3>
            <input className={'input'} type="text" placeholder={'Enter your text'}/>
            <select className={'select'}>
                <option value={'TESTTT'}>тесстт</option>
            </select>
        </div>
    );
};

export default Form;