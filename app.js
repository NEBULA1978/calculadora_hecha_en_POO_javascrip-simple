class Resolve {
    constructor(num1, num2, opSum) {
        this.num1 = num1;
        this.num2 = num2;
        this.opSum = opSum;

    }
}

class UI {
    // metodo
    sumar(num1, num2) {
        const checkbox = document.getElementById('checkS').checked
        if (checkbox == true) {
            document.getElementById('Sum').value = `${parseInt(num1) + parseInt(num2)}`
        }
    }




    message(mensage, codeCss) {
        const div = document.createElement('div');
        div.className = `alert alert-${codeCss}`
        let container = document.querySelector('.container')
        let antes = document.querySelector('#antes')

        div.innerHTML = `
        <strong>${mensage}</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close" >
                <span aria-hidden="true">&times;</span>
            </button> 
        `


        container.insertBefore(div, antes)

    }

    resolve(resolve) {
        let div = document.createElement('div')
        div.innerHTML = `
            <div>
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>numero 1</strong> : ${resolve.num1}<br>
                    <strong>numero 2</strong> : ${resolve.num2}<br>
                    <strong>suma de numero 1 y 2</strong> : ${
                      resolve.num1 + resolve.num2
                    }<br>
            
                    <a href="#" class="btn btn-danger btn-block" name="delete">Delete</a>
                </div>
            </div>
        </div>
        `;
        const resultados = document.querySelector('#resultados')

        resultados.appendChild(div)
    }

    eliminarResolve(elemento) {
        if (elemento.name == "delete") {
            elemento.parentElement.parentElement.parentElement.parentElement.remove()
        }
    }

    eliminarAlert() {
        document.querySelector('.alert').remove()
    }
}

document.getElementById('form-resolve').addEventListener('submit', (e) => {
    // para no recargar otra pagina
    e.preventDefault();

    // consigo valor de input numero1
    const num1 = document.getElementById('numero1').value
    const num2 = document.getElementById('numero2').value
    const opSum = document.getElementById('Sum').value


    console.log(num1);

    // creo una clase
    const ui = new UI()
    const resolve = new Resolve(num1, num2, opSum)
        // validamos si los datos son correctos
    if (num1.length === 0 || num2.length === 0) {
        ui.message('No se puede aceptar numeros vacios', 'warning')
    } else {
        ui.message('Operacion Exitosa', 'success')
        ui.sumar(num1, num2)

        ui.resolve(resolve)
    }

})

document.getElementById('resultados').addEventListener('click', (e) => {
    const elemento = e.target;

    const ui = new UI();
    ui.eliminarResolve(elemento);
    ui.message('borrado exitosamente', 'danger')
})

document.querySelector('.container').addEventListener('click', () => {
    const ui = new UI()
    ui.eliminarAlert();
})