
import React from "react";
import { MultiSelect } from 'primereact/multiselect';
import 'primereact/resources/themes/saga-blue/theme.css';  // Theme file
import 'primereact/resources/primereact.min.css';          // Core CSS
import 'primeicons/primeicons.css';                        // Icons
import { Form } from "react-bootstrap";
import './common.css';

const MultiSelectComponent = React.memo(({ name, label, placeholder, defaultValue, options, value, onChange, search, searchPlaceholder, ...props }) => {
    return (
        <>
            {label && <Form.Label>{label}</Form.Label>}
            <MultiSelect
                name={name}
                value={value}
                onChange={onChange}
                options={options}
                optionLabel="label"
                placeholder={placeholder}
                filter={search}
                filterplaceholder={searchPlaceholder}
                maxSelectedLabels={3}
                style={{
                    borderRadius: '4px',
                    background: 'white',
                    borderColor: 'rgba(123, 63, 0, 0.5)',
                    padding: '5px'
                }}
                className="w-100 custom_multi_select"
                {...props}
            />
        </>

    );
})


export default MultiSelectComponent;