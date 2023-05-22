function anoBissexto(ano){
    if((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0){
        return true;
    }
    return false;
}

let ano = window.prompt("Informe o ano: ");

if(anoBissexto(ano)){
    window.alert("Ano bissexto!");
}
else{
    window.alert("Não é bissexto!");
}