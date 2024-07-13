const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()
    expect(queue).toEqual({ elements: [] })
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue()
    queue.adicionarElemento(1)
    queue.adicionarElemento(2)
    queue.adicionarElemento(3)
    expect(queue.calcularTamanhoDaFila()).toEqual(3)
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue()
    queue.adicionarElemento(1)
    expect(queue.calcularTamanhoDaFila()).toEqual(1)
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue()
    queue.adicionarElemento(1)
    queue.adicionarElemento(2)
    queue.adicionarElemento(3)
    expect(queue.buscarPrimeiroElemento()).toEqual(1)

  })

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue()
    queue.adicionarElemento(1)
    queue.adicionarElemento(2)
    queue.adicionarElemento(3)
    expect(queue.removerPrimeiroItem()).toEqual(1)
    expect(queue.calcularTamanhoDaFila()).toEqual(2)
    expect(queue.buscarPrimeiroElemento()).toEqual(2)
  })
})