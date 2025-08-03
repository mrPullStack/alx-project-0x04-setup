import { useCount } from "@/context/CountContext";

const CounterApp = () => {
    const { count, increment, decrement } = useCount();

    return (
        <div className="p-8">
        <h1 className="text-2xl mb-4">Counter App</h1>
        <p className="text-xl mb-2">Count: {count}</p>
        <div className="flex gap-4">
            <button
            onClick={increment}
            className="bg-green-500 text-white px-4 py-2 rounded"
            >
            Increment
            </button>
            <button
            onClick={decrement}
            className="bg-red-500 text-white px-4 py-2 rounded"
            >
            Decrement
            </button>
        </div>
        </div>
    );
};

export default CounterApp;
