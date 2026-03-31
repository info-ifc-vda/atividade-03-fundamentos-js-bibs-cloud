function boasVindas(nome, hora){
    if(hora>= 5 & hora <= 12){
        console.log("Bom dia " + nome);
        
    }else if(hora >= 13 & hora <=18){
        console.log("Boa tarde " + nome);
        
    }else{
        console.log("Boa noite " + nome);
        
    }

}

boasVindas('Vitor', 10);
