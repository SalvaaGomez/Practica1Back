
type Lugar = {
    id: number,
    nombre: string,
    tipo: string,
    peligro: number
}

const lugares: Lugar[] = [
  { id: 1, nombre: "Bosque Misterioso", tipo: "bosque", peligro: 2 },
  { id: 2, nombre: "Cueva Oscura", tipo: "cueva", peligro: 5 },
  { id: 3, nombre: "Castillo Abandonado", tipo: "castillo", peligro: 4 }
];
 
type Personaje = {
    id: number,
    nombre: string,
    fuerza: number,
    aliado: boolean
}

const personajes: Personaje[] = [
  { id: 1, nombre: "Guardián", fuerza: 8, aliado: false },
  { id: 2, nombre: "Sabio", fuerza: 2, aliado: true },
  { id: 3, nombre: "Bandido", fuerza: 6, aliado: false }
];

type Objeto = {
    id: number,
    nombre: string,
    poder: number,
    categoria: string
}
 
const objetos: Objeto[] = [
  { id: 1, nombre: "Espada", poder: 5, categoria: "arma" },
  { id: 2, nombre: "Antorcha", poder: 1, categoria: "herramienta" },
  { id: 3, nombre: "Amuleto", poder: 3, categoria: "mágico" },
  { id: 4, nombre: "Escudo", poder: 4, categoria: "arma" }
];


//Crear función para listar los lugares
const listarLugares = ():void => { 
    lugares.forEach((n)=>{
        console.log("El lugar", n.nombre, "tiene un peligro de nivel", n.peligro.toString())
    });
}
// listarLugares();


//Crear función para buscar un personaje por nombre
const buscarPersonaje = (nombre: string):void => {
    personajes.filter((n)=>{
        if(n.nombre.includes(nombre)){
            console.log("El",n.nombre, "tiene una fuerza de", n.fuerza.toString(), n.aliado ? "y es un aliado" : "y no es un aliado" )
        }
    })
}
// buscarPersonaje("Sabio")


//Crear función para crear un array con frase del inventario
const inventarioConFrases = ():string[] =>  {

    return objetos.map((n) => {
        return n.nombre + " (+" + n.poder.toString() + " poder, categoría: " + n.categoria + ")";
    })
}
// const inventario:string[] = inventarioConFrases()
// console.log(inventario)


const agruparObjetosPorCategoria = ():Record<string, number> =>{ 
    const initial = {
        arma: 0,
        herramienta: 0,
        mágico: 0
    }
    return objetos.reduce((acc, c) => {
    if(c.categoria=="arma"){
        acc.arma += c.poder 
        return {
            ...acc, 
            arma: acc.arma,
        }
    }else if(c.categoria=="herramienta"){
        acc.herramienta += c.poder 
        return {
            ...acc, 
            herramienta: acc.herramienta,
        }
    }else if(c.categoria=="mágico"){
        acc.mágico += c.poder 
        return {
            ...acc, 
            mágico: acc.mágico
        }
    }
    else {
        return acc;
    }
    },initial)
}
// const agrupacion:Record<string, number> = agruparObjetosPorCategoria();
// console.log(agrupacion)


const poderTotalInventario = ():number => {
    return objetos.reduce((acc,c) => acc+c.poder, 0)
}
// console.log("Poder Total:", poderTotalInventario())


const main = (): void => {
  const opcion: number = 2; // Cambia este número para probar
 
  switch (opcion) {
    case 1:
      listarLugares();
      break;
    case 2:
      const nombreBuscado = "test"; // Cambia el nombre para probar
      buscarPersonaje(nombreBuscado);
      break;
    case 3:
      console.log(inventarioConFrases());
      break;
    case 4:
      console.log(agruparObjetosPorCategoria());
      break;
    case 5:
      console.log("Poder total:", poderTotalInventario());
      break;
    default:
      console.log("Opción no válida.");
  }
};
main();
