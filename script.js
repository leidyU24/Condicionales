function oneHomework() {
    let max = prompt("ingresa la cantidad maxima de los numeros");
    let index = 0;
    const numeroRamdon = [];
    while (index < max) {
        numeroRamdon.push(Math.floor(Math.random() * max));
        index++
    }
    console.log(numeroRamdon);
}
function twoHomework() {
    const textComas = document.getElementById("textComas").value;
    const arrgloComas = textComas.split(',');
    console.log(arrgloComas);
}
function threeHomework() {
    const numeros = [10, 40, 30, 20, 15, 5];
    console.log("El numero menor es: " + Math.min(...numeros));
    console.log("El numero menor es: " + Math.max(...numeros));
}
function fourHomework() {
    const numMultiplos = parseInt(document.getElementById("numMultiplos").value);
    let multiplos = [];
    for (let i = 5; i <= numMultiplos; i += 5) {
        multiplos.push(i);
    }
    console.log("Los múltiplos de 5 hasta " + numMultiplos + " son: " + multiplos.join(", "));
}

function fiveHomework() {
    const numOne = parseInt(document.getElementById("numOne").value);
    const numTwo = parseInt(document.getElementById("numTwo").value);
    const result = document.getElementById("result");
    let rifa = 50;
    if (numOne < 50 && numTwo < 50) {
        result.innerHTML = "";
        for (let i = 0; i <= rifa; i++) {
            if (i == numOne || i == numTwo) {
                console.log("¡Lotería!")
            } else {
                console.log(i);
            }
        }
    } else {
        result.innerHTML = "Los numeros debe ser menor a 50";
    }
}

function sixHomework() {
    const numerosInto = [];
    let num;

    do {
        num = parseInt(prompt("Escribe un número"));
        numerosInto.push(num);
    }
    while (!(num == 0)) {
        console.log(numerosInto);
    }
}

function sevenHomework() {
    const numerosInto = [];
    let letra;
    while (!(letra == "")) {
        letra = prompt("Escribe un número");
        numerosInto.push(letra);
    }
    console.log(numerosInto);
}

function eigthHomework() {
    const mensaje = {
        lunes: "feliz inicio de semana",
        martes: "aun tienes energia",
        miercoles: "bueno vamos que aun falta dar otro poquito",
        jueves: "ya casi te vas a descanzar",
        viernes: "fin de trabajar",
        sabado: "puedes irte de compras",
        domingo: "Ve a descansar"
    }
    let letra;
    while (!(letra == "domingo")) {
        letra = prompt("Escribe un día");
        alert(mensaje[letra.toLowerCase()]);
        console.log(letra);
        typeof letra;
    } alert(mensaje[letra]);
}

function nineHomework() {
    for (let i = 0; i < 50; i++) {
        console.log(i);
        if (i % 2 != 0) {
            i++;
        }
    }
}
function tenHomework() {
    const array = [4,'dos',8,'tres',5,9,1,'cero'];
    const soloenteros = [];
    for (var i = 0; i < array.length; i++) {
        if (typeof(array[i])=="number"){
                soloenteros.push(array[i]);
            };
    } console.log(soloenteros);
}

function elevenHomework(){
    const pokemons = [ 'bulbasaur','ivysaur','venusaur','charmander','charmeleon','charizard','squirtle','wartortle',
        'blastoise','caterpie','metapod','butterfree','weedle','kakuna','beedrill','pidgey','pidgeotto','pidgeot',
        'rattata','raticate','spearow','fearow','ekans','arbok','pikachu','raichu','sandshrew','sandslash','nidoran-f',
        'nidorina','nidoqueen','nidoran-m','nidorino','nidoking','clefairy','clefable','vulpix','ninetales','jigglypuff',
        'wigglytuff','zubat','golbat','oddish','gloom','vileplume','paras','parasect','venonat','venomoth','diglett',
        'dugtrio','meowth','persian','psyduck','golduck','mankey','primeape','growlithe','arcanine','poliwag',
        'poliwhirl','poliwrath','abra','kadabra','alakazam','machop','machoke','machamp','bellsprout','weepinbell',
        'victreebel','tentacool','tentacruel','geodude','graveler','golem','ponyta','rapidash','slowpoke','slowbro',
        'magnemite','magneton','farfetchd','doduo','dodrio','seel','dewgong','grimer','muk','shellder','cloyster',
        'gastly','haunter','gengar','onix','drowzee','hypno','krabby','kingler','voltorb' ]

        const numOne = parseInt(document.getElementById("numOneP").value);
        const result = document.getElementById("result");
        const listNum = [];
        let rifa = 50;
        if (numOne <= 100) {
            result.innerHTML = "";
            for (let i =0; i <= numOne; i++) {
                if (i % 5 == 0) {
                    listNum.push(pokemons[i]);
                    console.log(i,pokemons[i])
                }
            }console.log(listNum);
        } else {
            result.innerHTML = "Los numeros debe ser menor a 100";
        }

}