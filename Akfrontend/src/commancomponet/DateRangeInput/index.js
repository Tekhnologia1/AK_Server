import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Calendar } from 'primereact/calendar';

function DateRangeInput({ name, value, className, label, placeholder, onChange }) {
    const [dates, setDates] = useState(null);
    
    return (
        <Form.Group controlId={name} className={`custom_date ${className}`}>
            {label && <Form.Label>{label}</Form.Label>}
            {/* <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput hideOnRangeSelection /> */}
            <Calendar       
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            selectionMode='range'
            hideOnRangeSelection
            readOnlyInput
            showIcon />
        </Form.Group>
    );
}

export default DateRangeInput;
