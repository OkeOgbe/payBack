import React from 'react';
import styles from '../../styles/Auth.module.css';
const InputGroup = ({formType, formName, placeholder, onChange, label}) => {
    return (
        <div>
            <div className={styles.formElement}>
                <label>{label}:</label>
                <input
                    type={formType}
                    name={formName}
                    placeholder={placeholder}
                    onChange={onChange}
                    required
                    className='w-100'/>
            </div>
        </div>
    )
}

export default InputGroup;
