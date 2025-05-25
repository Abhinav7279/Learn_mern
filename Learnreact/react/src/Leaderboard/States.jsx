import React, { useState } from 'react';

function States() {
    const [age, setAge] = useState(20);


    function changeAge(){
        setAge(age + 1);
    }
  return (
    <>
    <button onClick={changeAge}>Click</button>
    <p>{age}</p>
    </>
  )
}

export default States
