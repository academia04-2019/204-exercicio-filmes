let idade= prompt("Digite sua idade");

let listaFilmes =[
  {titulo: "bastardos inglorios",idade: 10},
  {titulo: "django",idade: 10},
  {titulo: "killbill",idade: 10},
  {titulo: "pulp fiction",idade: 10},
];
  
for(let i in listaFilmes){
  if(idade == listaFilmes[i].idade){
    console.log(listaFilmes[i].titulo)
  }
}

