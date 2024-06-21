import React, { createContext, useContext, useState } from 'react'



export const MyContext = createContext(name, setName);

export default function useForm () {
    return (useContext(MyContext))

}
