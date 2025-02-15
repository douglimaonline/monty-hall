'use client'

import Gift from './components/Gift'
import Door from './components/Door'
import { useState } from 'react'
import { createDoors } from './utils/doorsFunctions'

export default function Home() {
  const doorList = createDoors(5, 3)
  const [doors, setDoors] = useState(doorList)

  const handleDoorChange = (updatedDoor) => {
    setDoors((prevDoors) => {
      return prevDoors.map((door) => {
        return door.number === updatedDoor.number ? updatedDoor : door
      })
    })
  }

  return (
    <div style={{ display: 'flex' }}>
      <Gift />
      {doors.map((d) => {
        return <Door key={d?.number} door={d} onChange={handleDoorChange} />
      })}
    </div>
  )
}
