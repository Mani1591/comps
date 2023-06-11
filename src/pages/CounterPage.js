import Button from '../components/Button';
import useCount from '../hooks/use-count';

export default function CounterPage({ initialCount }){

    const { count, incrementCount } = useCount(initialCount);

    return (
        <div>
            <h1>Count is {count}</h1>
            <Button primary onClick={incrementCount}>Increment</Button>
        </div>
    )
}