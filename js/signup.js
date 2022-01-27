const app = document.getElementById('formulario')
const form = new Form(userFields)
const button = new Button('Guardar')

button.agregarEvento(form.guardarForm.bind(form))

$(app).append(form.nodo,button.nodo)

document.querySelector('p > div')