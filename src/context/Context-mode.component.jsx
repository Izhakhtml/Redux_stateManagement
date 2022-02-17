import  {  createContext,useState } from "react";
export const ContextMode = createContext()
const Mode=[
    {
      background:"black",
      color:"white",
      colorBorder:"white 2px solid",
      statusMode:false
    },
    {
      background:"white",
      color:"black",
      colorBorder:"black 2px solid",
      statusMode:true
    }
]
export const Provider=({children})=>{
const[mode,setMode]=useState(Mode);
return(
    <ContextMode.Provider value={{mode,setMode}}>
     {children}
    </ContextMode.Provider>
)
}