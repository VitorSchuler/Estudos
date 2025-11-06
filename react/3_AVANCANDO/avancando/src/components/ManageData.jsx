import { useState } from "react";

const ManageData = () => {
    let someData = 10;
  
    const [number, setNumber] = useState(15)

    return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar variável</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(number + 1)}>Aumentar o state</button>
            <button onClick={() => setNumber(number - 1)}>Diminuir o state</button>
        </div>
    </div>
  )
}

export default ManageData