//promises

//Se crea la promesa
const aplicarDescuento = new Promise((resolve,reject)=>{

        setTimeout(() =>{
            let descuento=true;

            if(descuento){
                resolve('Descuento Aplicado');

            }else{
                reject('No se pudo aplicar el descuento');
            }
        },3000);
});

//Ejecutamos la promesa y mostramos resultado
aplicarDescuento.then(resultado=>{
    console.log(resultado);
}).catch(error=>{

    console.log(error);
})