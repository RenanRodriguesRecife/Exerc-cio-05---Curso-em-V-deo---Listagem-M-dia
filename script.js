var lista = []



function adicionar(){
    let txtn = window.document.getElementById("txtn")
    let res = window.document.getElementById("res")

    if (txtn.value == ""){
        window.alert("entre com um valor")
    }else{
        let num = Number.parseInt(txtn.value)
        if(valorJaExiste(lista, num)){
            lista.push(num)
            let item = document.createElement('option')
            item.text += `Valor ${num} adicionado`
            res.appendChild(item)
        }else{
            window.alert("Numero já adicionado")
        }
        txtn.value = ''
        txtn.focus()
    }
    
}

function finalizar(){
    if(lista.length == 0){
        window.alert("Adicione valores antes de finalizar")
    }else{
        let res = window.document.getElementById("resolucao")
        let soma = sum(lista)
        let media = avg(lista)

        res.innerHTML = ''
        res.innerHTML += `Ao todo, temos ${lista.length} números cadastrados.<br>
        O maior valor informado foi ${max(lista)}<br>
        O menor valor informado foi ${min(lista)}<br>
        Somando todos os valores, temos ${soma}<br>
        A média dos valores digitados é ${media}`
        
    }

}

function valorJaExiste(array, num){
    return array.indexOf(num) == -1
}

function sum(array){
    aux = 0
    for (i in array) { aux += array[i] } 
    return aux
}

function avg(array){
    return sum(array)/array.length
}

function max(array){
    return Math.max(...array)
}

function min(array){
    return Math.min(...array)
}
