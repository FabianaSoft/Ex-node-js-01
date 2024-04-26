function somaDoisNumeros(numeroUm, numeroDois){
    return numeroUm + numeroDois;
}

function subtraiDoisNumeros(numeroUm, numeroDois){
    return numeroUm - numeroDois;
}

function multiplicaDoisNumeros(numeroUm, numeroDois){
    return numeroUm * numeroDois;
}   

function divideDoisNumeros(numeroUm, numeroDois){
    if(numeroDois===0){
        return -101;
    }
    return numeroUm / numeroDois;
}


module.exports = {
    somaDoisNumeros,
    subtraiDoisNumeros,
    multiplicaDoisNumeros,
    divideDoisNumeros
    }


