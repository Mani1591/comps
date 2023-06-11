import { useState, useEffect } from 'react';

export default function useCount(initialCount){
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log(count);
    }, [count]);
    
    const handleClick = () => {
        setCount((currCount) =>{
            return currCount+1;
        });
    }

    return { count, incrementCount: handleClick };
}