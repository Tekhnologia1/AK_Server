// import { MultiSelect } from 'primereact/multiselect';
import 'primereact/resources/themes/saga-blue/theme.css';  // Theme file
import 'primereact/resources/primereact.min.css';          // Core CSS
import 'primeicons/primeicons.css';                        // Icons
// import { Form } from "react-bootstrap";
import '../common.css';
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
// import '../common.css';

export default function SearchDropdown({
    placeholder,
    value,
    className,
    isSearchabel,
    name,
    options,
    onChange }) {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];

    return (
        <Dropdown
            name={name}
            value={value}
            onChange={onChange}
            options={options}
            optionLabel="label"
            optionValue="option"
            placeholder={placeholder}
            filter={isSearchabel}
            className={`w-100 custom_drop ${className}`} />
    )
}
