import { useState } from "react";
import LiComponents from "./LiComponents.jsx";
import "./List.css"


const data = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Doe", age: 35 },
    { id: 4, name: "Smith", age: 40 },

];
const Lists = () => {
    const [arr, setArr] = useState(data);
    return (
        <>
        <ul>
            <LiComponents arr={arr} setArr ={setArr} />
        </ul>
        </>
    );
};
export default Lists;