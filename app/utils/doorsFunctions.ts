import DoorModel from '../models/Door'

export function createDoors(qnt: number, hasGiftDoor?: number): DoorModel[] {
  return Array.from({ length: qnt }, (_, i) => {
    const num = i + 1
    const hasGift = num === Number(hasGiftDoor)
    return new DoorModel(num, hasGift)
  })
}

export function handleDoorChange(updatedDoor, setDoors) {
  setDoors((prevDoors) => {
    return prevDoors.map((door) => {
      return door.number === updatedDoor.number
        ? updatedDoor
        : updatedDoor.isOpen
        ? door
        : door.unSelect()
    })
  })
}

export function getCreateDoorProps(url: string): number[] {
  const createDoorProps: number[] = []
  createDoorProps.push(+url.split('/')[2])
  createDoorProps.push(+url.split('/')[3])
  return createDoorProps
}
