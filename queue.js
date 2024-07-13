class Queue {
  elements

  constructor() {
    this.elements = []
  }

  adicionarElemento(element) {
    this.elements.push(element)
    return element
  }

  calcularTamanhoDaFila() {
    return this.elements.length
  }

  buscarPrimeiroElemento() {
    if (this.elements.length === 0) {
      throw new Error("A lista está vazia ");
    }
    return this.elements[0];
  }

  removerPrimeiroItem() {
    if (this.elements.length === 0) {
      throw new Error("A fila esta vazia");
    }
    return this.elements.shift();
  }

}

module.exports = Queue