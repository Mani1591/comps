import SortableTable from '../components/SortableTable'

export default function TablePage(){
    const data = [
        {name: 'Apple', color: 'bg-red-400', score: 3},
        {name: 'Orange', color: 'bg-orange-400', score: 5},
        {name: 'Banana', color: 'bg-yellow-400', score: 1},
        {name: 'Lime', color: 'bg-green-400', score: 4},
    ];
    const keyFn = (fruit) => fruit.name;
    const config = [
        {
            label: 'Fruit', 
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name,
        },
        {
            label: 'Colors',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div> 
        },
        {
            label: 'Score',
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score
        }
    ];
    return (
        <div>
            <SortableTable data={data} config={config} keyFn={keyFn}/>
        </div>
    );
}