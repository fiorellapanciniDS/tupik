class Input {
    constructor(id, label) {
        this.id = id
        this.label = label
        this.nodo = document.createElement('div')
        this.nodo.innerHTML = this.generarHTML()
    }
    
    generarHTML() {
        return `
            <label for="${this.id}">${this.label}</label>
            <input id="${this.id}" />
        `
    }

}
