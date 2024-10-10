function SumarNumero(){
    var numeroaux = 0;
    const sumar= (num,num2)=>{
        var suma = parseInt(num+num2);
        console.log("Total "+ suma);
    }
    

    return (<div> 
        <h1>Sumar Numero</h1>
        <button onClick={()=> sumar(4,76)}>Sumar 1 </button>
        <button onClick={()=> sumar(20,20)}>Sumar 2</button>
    </div>)

}

export default SumarNumero;