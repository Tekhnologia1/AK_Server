import React from 'react';
import { Form } from 'react-bootstrap';
import './dateinput.css';
import { Calendar } from 'primereact/calendar';
 
function DateInputs({ name, value, className, label, placeholder, onChange }) {
    return (
        <Form.Group controlId={name} className={`custom_date ${className}`}>
            {label && <Form.Label>{label}</Form.Label>}
            <Calendar
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            showIcon />
        </Form.Group>
    );
}
 
export default DateInputs;