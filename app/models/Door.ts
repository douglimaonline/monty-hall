export default class DoorModel {
  #number: number
  #hasGift: boolean
  #selected: boolean
  #isOpen: boolean

  constructor(
    number: number,
    hasGift = false,
    selected = false,
    isOpen = false
  ) {
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

  get isOpen() {
    return this.#isOpen
  }

  get selected() {
    return this.#selected
  }

  switchSelected() {
    const select = !this.#selected
    return new DoorModel(this.number, this.hasGift, select, this.#isOpen)
  }

  unSelect() {
    const unSelected = false
    return new DoorModel(this.number, this.hasGift, unSelected, this.#isOpen)
  }

  open() {
    const open = true
    return new DoorModel(this.number, this.hasGift, this.#selected, open)
  }
}
