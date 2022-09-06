// const birthYear = Number(prompt("ingrese su año de nacimiento"))
// const actualYear = 2022
// const difference = (actualYear-birthYear);
// const condition = difference >= 18;

/*
- Necesito saber cuantos son y si la/s persona/s supera/n el minimo +18
- Necesito saber si necesita alojamiento y si es asi , cual de los disponibles
- Mensaje depende las opciones con los costos de los mismos
*/


function integrantes() {
    const nombre = (prompt ("Ingrese sus nombres"));
    console.log("Bienvenido " + nombre)
}

const cantidad = Number(prompt("Ingrese la cantidad de integrantes"))

for (let i = 0; i < cantidad; i++) {
    integrantes();
}

do {
    console.log("1. Cordoba $3500 \n 2. Mendoza $4000 \n 3. Bariloche $5000 \n 4. Jujuy $3000 \n 0.Cerrar");
    precio = prompt("Elige un destino");
    break
} while (lugar !== "0");

let a = Number(prompt("Ingrese los dias que van a estar"))
let b = Number(prompt("ingrese el valor por dia del destino elegido"))

let presupuestoDia = (a, b) => {
    return a * b;
}

const listaEquipaje = [];

let valorNumericoEquipaje = 3;

do {
    let variedadEquipaje = prompt("Ingresa los tipos de equipaje que llevas");
    listaEquipaje.push(variedadEquipaje.toUpperCase());
    console.log(listaEquipaje.length); 
} while(listaEquipaje.length != valorNumericoEquipaje)

const nuevaLista = listaEquipaje.concat(["RIÑONERA", "EQUIPO DE MATE"]);

alert (nuevaLista.join("\n"));

const eliminar = (RIÑONERA) => {
    let x = nuevaLista.indexOf(RIÑONERA)
    if (x != -1) {
        nuevaLista.splice(x,1)
    }
}

eliminar(RIÑONERA)
