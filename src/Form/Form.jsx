import React, { createContext, useContext, useState } from 'react'
import useForm, { MyContext } from './Context'





function Form() {
    const [name,setName]=useState("")

    const handleChange = (e)=>{
        setName(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name);
         document.querySelector("h3").innerText={name}
    }

    
  return (
    <MyContext.Provider value={[name, setName]}>

    <h2>hii {name} </h2>
    <h3  > hii 2 </h3>

    <form onSubmit={handleSubmit}>
        <input type="text"
        placeholder='Enter Name'
        value={name}
        onChange={handleChange}
        
        />
        <button>Click</button>




    </form>
    
    
    </MyContext.Provider>
  )
}

export default Form