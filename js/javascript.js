function agregarFruta(){
  var frutas = [];
  frutas.push(document.getElementById('agregar').value);

  var lista = document.createElement("LI");
  var elementos =    document.createTextNode(document.getElementById('agregar').value);
    lista.appendChild(elementos);
    document.getElementById("listaFruta").appendChild(lista);
};
