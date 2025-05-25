function Counter(){

    return (
        <>
        <h2>Counter App</h2>
        <button onClick={increment}>Increment</button>
        <p>{counter}</p>
        <button onClick={decrement}>Decrement</button>
        </>
    );
} 
export default Counter;