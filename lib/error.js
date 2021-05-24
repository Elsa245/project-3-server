export class NotValid extends Error {
  constructor() {
    super()
    this.name = 'NotValid'

  }
}

export class NotFound extends Error {
  constructor() {
    super()
    this.name = 'NotFound'
  }
}