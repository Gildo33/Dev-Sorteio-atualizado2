function botão () {
    const min = Math.ceil(document.querySelector(".input").value)
    const max = Math.floor(document.querySelector(".input2").value)
    //const result = document.querySelector(".input3")
    const h1 = document.querySelector(".h1")
    

    const resultado1 = Math.floor(Math.random() * (max - min + 1))+min;
    //result.innerHTML = resultado1
    h1.innerHTML = resultado1
   
}