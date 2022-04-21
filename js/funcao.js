function ConverterMetrosCentimetros(){
    let metros = document.querySelector("#metros").value
    let centimetros = metros * 100
    console.log(centimetros)
 document.querySelector("#centimetros").value = `${centimetros} cm`
}