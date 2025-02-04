export default class Door {
  #number
  #hasGift
  #selected
  #isOpen

  constructor(number, hasGift = false, selected = false, isOpen = false) {
    this.#number = number
    this.#hasGift = hasGift
    this.#selected = selected
    this.#isOpen = isOpen
  }

  get number() {
    return this.#number
  }

  get hasGift() {
    return this.#hasGift
  }

  get open() {
    return this.#isOpen
  }

  switchSelected() {
    const select = !this.#selected
    new Door(this.number, this.hasGift, select, this.#isOpen)
  }

  unSelect() {
    const unSelected = false
    new Door(this.number, this.hasGift, unSelected, this.#isOpen)
  }

  open() {
    const open = true
    new Door(this.number, this.hasGift, this.select, open)
  }
}
