import { useState } from "react"
import Layout from "./layout";

function ClientComponent() {
  console.log('hey');
  const [first, setFirst] = useState(0)
  function onclick() {
    console.log('helloooo');
  }
  return (
    <div>
      ClientComponent
      <button onClick={onclick}>CLICK</button>
    </div>
  )
}

export default ClientComponent