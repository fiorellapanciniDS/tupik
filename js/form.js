class Form {
    constructor(fields) {
        this.fields = fields
        this.inputs = []
        this.nodo = document.createElement('form')
        this.agregarInputs()
    }

    agregarInputs() {
        for (let field of this.fields) {
            const input = new Input(field.id, field.label)
            this.inputs.push(input)
            this.nodo.appendChild(input.nodo)
        }
    }

    guardarForm() {
        const usuario = {}
        for (const input of this.inputs) {
            usuario[input.id] = document.getElementById(input.id).value;
        }
        localStorage.setItem('usuario', JSON.stringify(usuario))
    }
}