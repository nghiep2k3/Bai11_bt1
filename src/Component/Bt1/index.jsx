import React, { useState } from 'react'

export default function Bt1() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [sum, setSum] = useState(0);
    const [multiply , setmultiply] = useState(0);

    const handlerSum = () =>{
        const result = Number(number1) + Number(number2);
        setSum(result);
    }

    const handlerMultiply = () =>{
        const result = number1 * number2;
        setmultiply(result);
    }
  return (
    <div>
        <label>
            Number 1
            <input  type="number" value={number1} onChange={(e) => setNumber1(e.target.value)}/>
        </label>
        <br />
        <label>
            Number 2
            <input  type="number" value={number2} onChange={(e) => setNumber2(e.target.value)}/>
        </label>

        <div>
            <button onClick={handlerSum}>Sum</button>
            <button onClick={handlerMultiply}>Multiply</button>
        </div>

        <div>
            <p>Sum: {sum}</p>
            <p>Multiply: {multiply}</p>
        </div>
    </div>
  )
}
