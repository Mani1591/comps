import { useState } from 'react';
import Dropdown from '../components/Dropdown';

export default function DropdownPage(){
    const [selected, setSelected] = useState(null);

    const onSelect = (option) => {
        setSelected(option);
    }

    const options = [
        {
            label: 'Red',
            value: 'red'
        },
        {
            label: 'Green',
            value: 'green'
        },
        {
            label: 'Blue',
            value: 'blue'
        },
    ];

    return (
        <div>
            <Dropdown value={selected} onChange={onSelect} options={options} />
        </div>
    );
}