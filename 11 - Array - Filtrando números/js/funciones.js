function getArray(){
    //let array = [22, 233, 455, 1001, 98, 10001];
    let array = document.getElementById("val").value.split(",").map(Number);
    let result = new Array();
    result = filtranum(array, result);

    let sub = "";
    sub += sub1(result);
    sub += sub2(result);
    sub += sub3(result);
    sub += sub4(result);
    sub += sub5(result);
    sub += sub6(result);
    sub += sub7(result);

    let content = "Length (array): " + array.length + " - " + " Values (array): " + array + " | ";
    let resultado = "Length (result): " + result.length + " - " + " Values (result): " + result + " | ";

    saveFile(content+resultado+sub);
}

function filtranum(array, result){
    let arrayString = "";

    for(let i = 0; i < array.length; i++){
        arrayString = array[i].toString();

        let last = arrayString.length - 1;

        if(arrayString.charAt(0) == arrayString.charAt(last)){
            result.push(array[i]);
        }
    }

    return result;
}

function sub1(result){
    let x="";
    if(result.length == 1 && result[0] < 10){
        x += "El elemento es menor a 10 | ";
    }
    return x;
}

function sub2(result){
    let  x="";
    let verdad = 0;
    for(let i = 0; i < result.length; i++){
        if(result[i] < 10){
            verdad++;
        }
    }
    if(verdad == result.length){
        x += "Todos los elementos son menores a 10 | ";
    }
    return x;
}

function sub3(result){
    let  x="";
    if(result.length == 1 && result[0] < 20){
        x += "El elemento es menor a 20 | ";
    }
    return x;
}

function sub4(result){
    let x="";
    let verdad = 0;
    for(let i = 0; i < result.length; i++){
        if(result[i] < 20){
            verdad++;
        }
    }
    if(verdad == result.length){
        x += "Todos los elementos son menores a 20 | ";
    }
    return x;
}

function sub5(result){
    let x="";
    if(result.length == 1 && result[0] < 100){
        x += "El elemento es menor a 100 | ";
    }
    return x;
}

function sub6(result){
    let  x="";
    let verdad = 0;
    for(let i = 0; i < result.length; i++){
        if(result[i] < 100){
            verdad++;
        }
    }
    if(verdad == result.length){
        x += "Todos los elementos son menores a 100 | ";
    }
    return x;
}

function sub7(result){
    let x="";
    if(result.length == 1 && result[0] == 1){
        x += "El elemento vale 1 | ";
    }
    return x;
}

function saveFile(contenido){
    const link = document.createElement("a");

    const content = contenido;

    const file = new Blob([content], { type: 'text/plain' });

    link.href = URL.createObjectURL(file);

    link.download = "sample.txt";

    link.click();

    URL.revokeObjectURL(link.href);
}