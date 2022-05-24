const irARestaurante = ()=>'Legue';
const comer = ()=>'Comer pizza';
const pagar = ()=>'Paga, no seas rata'

const pedirComida = ()=>{
    // setTimeout(()=>{
    //     console.log('Tengo la Pizza') 
    // },2000)

//resolve ->cambia a estado aceptado
//reject-> cambia a estado rechazado

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(comida==='pizza'){
                resolve('Tengo la Pizza'); 
            }else{
                reject('no hay ingredientes')
            }
        
        },2000)
    })
}
//se ejecuta cuando se resuelve la promesa a correcta 
// https://pokeapi.co/api/v2/pokemon/ditto

pedirComida('pizza').then((response)=>{
    console.log('se resolvio: ', response)
}).catch(error=>{
    console.log(error)
}).finally(()=>{
    console.log('retirarse')
})

// fetch(url de la api)
// fetch('https://pokeapi.co/api/v2/pokemon/ditto
// ').then(res=>{
//  console.log(res)
// })