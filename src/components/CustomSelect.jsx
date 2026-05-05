import { useState, useEffect, useRef } from 'react'
import './CustomSelect.css'

function CustomSelect({ options, value, onChange, placeholder, name }) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    // Փակել dropdown-ը, եթե սեղմում ենք դրսում
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (optionValue) => {
        onChange({ target: { name, value: optionValue } });
        setIsOpen(false);
    };

    const selectedOption = options.find(opt => opt.value === value);

    return (
        <div className={`custom-select-container ${isOpen ? 'open' : ''}`} ref={containerRef}>
            <div className="custom-select-trigger" onClick={() => setIsOpen(!isOpen)}>
                <span>{selectedOption ? selectedOption.label : placeholder}</span>
                <div className="custom-select-arrow"></div>
            </div>
            <div className="custom-select-options">
                {options.map((option) => (
                    <div 
                        key={option.value} 
                        className={`custom-select-option ${value === option.value ? 'selected' : ''}`}
                        onClick={() => handleSelect(option.value)}
                    >
                        {option.label}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CustomSelect
