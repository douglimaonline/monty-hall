import DoorModel from '../models/Door'

export function createDoors(qnt: number, selectedDoor?: number): DoorModel[] {
  return Array.from({ length: qnt }, (_, i) => {
    const num = i + 1
    const hasGift = num === selectedDoor
    return new DoorModel(num, hasGift)
  })
}
