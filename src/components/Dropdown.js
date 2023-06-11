import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

export default function Dropdown({ value, onChange, options }){
    const [isOpen, setIsOpen] = useState(false);

    const myRef = useRef(null);

    useEffect(()=> {
        const clickHandler = (e) =>{
            if(!myRef.current){
                return;
            }
            if(!myRef.current.contains(e.target)){
                setIsOpen(false);
            }
        }
        document.addEventListener('click', clickHandler, true);
        return () => {
            document.removeEventListener('click', clickHandler)
        }
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    const handleOptionSelect = (option) => {
        setIsOpen(false);
        onChange(option);
    }
    const renderedList = options.map((option) => {
        return (
            <div className="hover:bg-sky-100 p-1 rounded cursor-pointer" key={option.value} onClick={()=>handleOptionSelect(option)}>
                {option.label}
            </div>
        );
    });
    return (
        <div className='w-48 relative' ref={myRef}>
            <Panel  className='flex  justify-between items-center cursor-pointer' onClick={handleClick}>
                {value?.label || 'Select...'}
                < GoChevronDown/>
            </Panel>
            {isOpen && <Panel className='absolute top-full'>{renderedList}</Panel>}
        </div>
    );
}