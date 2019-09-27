let compra=[]
let objeto =""

while (objeto !="salir") {
    objeto = prompt("añade el objeto que que quieras, si quieres salir,escribe'salir'")

    if(compra.includes(objeto)){
        alert("no seas gilipollas,ya lo tienes")
    }
    else{
        if(objeto != "salir") {
            compra.push(objeto)
        }
    }
    
}
console.log(compra);




