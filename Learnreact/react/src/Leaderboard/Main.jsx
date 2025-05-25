import React, { useState } from 'react'

function main() {
    const [fname, setFName]= useState("")
    const [lname, setLName]= useState("")
    const [country, setCountry]= useState("")
    const [score, setScore]= useState("")
    const [ data, setData] = useState([]);
    function handleSubmit(e){
        e.preventDefault();
        const obj = { id:Date.now(), name:fname + " " + lname, country: country, score: score,
        }



        setData((preData)=>{
            const newData = [...preData, obj];
            return newData.sort((a,b) =>
                b.score - a.score
            )

        })

        setFName("")
        setLName("")
        setCountry("")
        setScore("")
        
    }

    function modifyScore(id, sign){
        setData(data.map((obj) => obj.id === id ? {...obj, score: sign === "+" ? Number(obj.score) + 5 :Number(obj.score) - 5} : obj));

        
        // setData((preData)=>{
        //     const newData = [...preData, obj];
        //     return newData.sort((a,b) =>
        //         b.score - a.score
        //     )

        // })
    }
    
    

    function handleDelete(id){
        setData(data.filter((obj) => obj.id !== id));
        

    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="First Name" 
        name="fname"
        value={fname}
        onChange={(e) => setFName(e.target.value)}/>
        <input type="text" placeholder="Last Name" name="lname" value={lname} onChange={(e) => setLName(e.target.value)}/>
        <select value={country} name="country" id="" onChange={(e)=> setCountry(e.target.value)}>
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
            <option value="West Indies">West Indies</option>
            <option value="Pakistan">Pakistan</option>
            <option value="New Zeeland">New Zealand</option>
        </select>
        <input type="text" placeholder="Score" value={score} name="score" onChange={(e)=> setScore(e.target.value)}/>
        <button type="submit">Add</button>
    </form>
    <div>
        {data.length > 0 && data.map((obj) => {
            return(
                <div key={obj.id} className='flex'>
                    <p className='mx-2'>{obj.name}</p>
                    <p className='mx-2'>{obj.country}</p>
                    <p className='mx-2'>{obj.score}</p>
                    <p>
                        <span className='mx-2' onClick={()=>handleDelete(obj.id)}>Delete</span>
                        <span className='mx-2' onClick={()=> modifyScore(obj.id, "+")}>+5</span>
                        <span className='mx-2' onClick={()=> modifyScore(obj.id, "-")}>-5</span>
                    </p>    
                 </div>
            )
        })}
    </div>
    </>
  )
}



export default main
