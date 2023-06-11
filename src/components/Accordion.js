import { useState } from 'react';
import { GoChevronDown, GoChevronRight } from 'react-icons/go';

export default function Accordion({ items }){
    const [ expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (index) => {
        setExpandedIndex((currentExpandedIndex) => {
            if (index === currentExpandedIndex){
                return -1;
            } else {
                return index;
            }
        });
    }

    const renderedList = items.map((item, index) => {
        const isExpanded = index === expandedIndex;        

        const icons = <span className='text-xl'>
            { isExpanded ? <GoChevronDown/> : <GoChevronRight/>}
        </span>;

        return (
            <div key={item.id}>
                <div className="flex border-b justify-between bg-gray-50 p-3 cursor-pointer items-center" onClick = {() => handleClick(index)} >
                    {item.label}
                    {icons}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        );
    });
    return (
        <div className="border-x bordet-t rounded">
            {renderedList}
        </div>
    );
}