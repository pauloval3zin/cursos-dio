function escrevaMeuNome(nome) {
    return nome;
}

function maiorIdade(idade) {
    if (idade < 18) {
        return escrevaMeuNome('Paulo') + '. Você é menor de Idade.';
    } else {
        return escrevaMeuNome('Paulo') + '. Você é maior de idade.';
    }
}

console.log(maiorIdade(12));