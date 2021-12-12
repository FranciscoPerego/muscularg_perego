function Cliente(nombre, peso, altura) {
    this.nombre = nombre;
    this.peso = peso;
    this.altura = altura;
  }

function cargarCliente() {
  
    let nombre = document.getElementById("name").value;
    let peso = document.getElementById("weight").value;
    let altura = document.getElementById("height").value;
    
    let cliente1 = new Cliente(nombre, peso, altura);
  
    total = peso / Math.pow (altura,2)
  
    console.log(cliente1);
    mostrarCliente(cliente1);
  }

  function mostrarCliente(cliente) {
    let formulario = document.getElementById("customer");
    formulario.parentNode.removeChild(formulario);
    
    let nuevoContenido = document.createElement("div");
    nuevoContenido.innerHTML =
      cliente.nombre +
      " su IMC es: " +
      total; 
      '.'

if (total >0 && total <= 18.4) {
alert('Usted tiene bajo peso.')
}
 else if (total >18.5 && total <24.9) {
alert('Usted esta en un peso normal/saludable.')
 }
else if (total >=25.0 && total < 29.9)   {
alert ('Usted tiene sobrepeso.')
 }
 else if (total >= 30.0) {
 alert('Usted tiene obesidad.')
 }
 else {
alert('Usted NO ingreso algun dato requerido.')
}
    nuevoContenido.className = "info-cliente";
    document.body.appendChild(nuevoContenido);
  }

