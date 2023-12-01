import React, { useEffect, useState } from 'react'
import Context from './Context'

export default function ContextState(props) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [clickedRow, setclickedRow] = useState({});
    
  return (
    <Context.Provider value={{isSidebarOpen,setSidebarOpen,setclickedRow,clickedRow}}>
    {props.children}
    </Context.Provider>
  )
}
