let data = [{
    nome: "at",
    idade: 2
},
{
    nome: "af",
    idade: 1
},
{
    nome: "ad",
    idade: 3
}]

console.log(data.sort((a, b) => {
    if(a.idade >= b.idade){
        return 1
    }else{
        return -1
    }

    return 0
}));
