import { useState } from "react"
const ReactApp=(props)=>{
  const [title, setTitle] = useState("React App Title")
  return (<div>
    <h2>{title}</h2>
  </div>)
}
export default ReactApp