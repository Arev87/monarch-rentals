import { useState, useRef, useEffect } from 'react';

function CustomSelect({ name, placeholder, options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    // Փակել ընտրացանկը, եթե սեղմում են դրանից դուրս
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleToggle = () => setIsOpen(!isOpen);

    const handleSelect = (optionValue) => {
        onChange({ target: { name, value: optionValue } });
        setIsOpen(false);
    };

    const selectedOption = options.find(opt => opt.value === value);

    return (
        <div className="relative w-full cursor-pointer font-book" ref={containerRef}>
            <div
                className="flex justify-between items-center h-[2.135vw] border-b border-accent bg-transparent text-primary-dark text-[1.6rem] uppercase transition-colors duration-300 hover:border-b-[#8c7d4d] p-0 md:h-[11vw]"
                onClick={handleToggle}
            >
                <span>{selectedOption ? selectedOption.label : placeholder}</span>
                <div className={`w-[0.919vw] h-[0.459vw] bg-[url('/images/arrow_down.svg')] bg-no-repeat bg-center bg-contain transition-transform duration-300 mb-[0.5vw] md:w-[3vw] md:h-[3vw] ${isOpen ? 'rotate-180' : ''}`}></div>
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-primary-dark border border-accent border-t-0 z-50 max-h-[250px] overflow-y-auto shadow-[0_10px_25px_rgba(0,0,0,0.2)] animate-[slideDown_0.2s_ease-out] md:max-h-[160px] scrollbar-thin scrollbar-track-[#2c3136] scrollbar-thumb-accent">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`p-[1vw_1.5vw] text-[1.5rem] text-accent uppercase transition-colors duration-200 hover:bg-[#4a4a4a] hover:text-white md:text-[2.7vw] ${value === option.value ? 'bg-[#2c3136] text-white' : ''}`}
                            onClick={() => handleSelect(option.value)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CustomSelect;
