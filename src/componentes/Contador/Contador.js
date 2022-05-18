import {useState} from 'react';

const Contador=(props)=>{
    console.log(props.color)

    // const state = useState(0)
    // const setCount = state[1]

    const[count, setCount]=useState(0);

    const incremento=()=>{
        if(count<5){

            setCount(count+1)
        }else{
            console.log('no podes sumar mas')
        }
    }
    const decremento=()=>{
        setCount(count-1)
    }

    return(
        <>
        <h1 style={{color:props.color}}>{props.texto}</h1>

        <div style={{display:'flex', justifyContent:'center'}}>
            <button onClick={incremento}>+</button>
                <h1 style={{color:props.color}}>{count}</h1>
            <button onClick={decremento}>-</button>

        </div>

        </>
    )
}
export default Contador