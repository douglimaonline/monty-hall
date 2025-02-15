import DoorModel from '../models/Door'

export function createDoors(qnt: number, selected?: number): DoorModel[] {
  return Array.from(
    { length: qnt },
    (_, i) => new DoorModel(i, false, false, false)
  )
}
