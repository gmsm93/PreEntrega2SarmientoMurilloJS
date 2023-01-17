var gastos = []

function recorrerGastos(gastos, funcion) {
    for (let item of gastos) {
        funcion(item)
    }
}

function calcularDetalleGastos(item) {
    const valorImpuestos = (valorTotal = item.valor) => { valor = valorTotal * 0.19; return valor }
    console.log("Lugar: " + item.lugar + " Impuestos pagados: " + valorImpuestos + " Valor pagado: " + item.valor + " Valor pagado con propina: " + (parseFloat(item.valor) + parseFloat(item.propina)))
}


function calculadoraGastos() {
    do {
        opcion1 = prompt('Bienvenido a la calculadora de gastos personales!\n\nPor favor seleccione la operacion a realizar:\n\n1 - Ingresar un gasto\n2 - Eliminar ultimo gasto registrado\n3 - Detalle de gastos\n4 - Valor total gastado\n5 - Salir')
        opcion1 = parseInt(opcion1)
        switch (opcion1) {
            case 1:
                let gasto = new Producto();
                gasto.lugar = prompt('Por favor ingrese el nombre del lugar donde realizo el gasto')
                gasto.valor = parseFloat(prompt('Por favor ingrese el valor total gastado'))
                gasto.propina = parseFloat(prompt('Por favor ingrese el valor de la propina'))
                gastos.push(gasto)
                alert('Gasto registrado exitosamente')
                break;
            case 2:
                gastos.splice(-1, 1)
                alert('Se elimino el ultimo registro exitosamente')
                break;
            case 3:
                recorrerGastos(gastos, calcularDetalleGastos)
                alert('Detalle de gastos registrado en Consola')
                break;
            case 4:
                let total = gastos.reduce((acumulador, item) => acumulador + parseFloat(item.valor), 0)
                let totalPropina = gastos.reduce((acumuladorP, item) => acumuladorP + parseFloat(item.valor) + parseFloat(item.propina), 0)

                alert('El valor total gastado es: $' + total + ', y el valor total pagado incluyendo la propina es: $' + totalPropina)
                break;
            case 5:
                alert('saliendo')
                break;
            default:
                alert('Opcion invalida!')
        }
    } while (opcion1 != 5);
}
calculadoraGastos()