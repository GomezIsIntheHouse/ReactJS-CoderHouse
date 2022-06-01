import {useState} from 'react';

const Contador=({stock, initial = 1, onAdd})=>{
    // console.log(props.color)

    const [quantity, setQuantity] = useState(initial)


    // const state = useState(0)
    // const setCount = state[1]

    // const[count, setCount]=useState(0);

    const incremento=()=>{
        if(quantity<stock){

            setQuantity(quantity+1)
        }
    }
    const decremento=()=>{
        if(quantity>1){
            setQuantity(quantity-1)
            
            if(quantity<1){

                setQuantity(1)
            }
        }
    }

    return(
        <>
        {/* <h1 style={{}}>{props.texto}</h1> */}

        <div style={{display:'flex', justifyContent:'center'}}>
            <button onClick={incremento}>+</button>
                <h1 style={{}}>{quantity}</h1>
            <button onClick={decremento}>-</button>

        </div>

        <div className='btn' style={{display:'flex', justifyContent:'center'}}>
            <button className="Button" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
        </div>

        </>
    )
}
export default Contador