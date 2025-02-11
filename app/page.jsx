'use client'

import Gift from './components/Gift'
import Door from './components/Door'
import DoorModel from './models/Door'
import { useState } from 'react'

export default function Home() {
  const [door, setDoor] = useState(new DoorModel(1, false, false, false))

  return (
    <div style={{ display: 'flex' }}>
      <Gift />
      <Door door={door} onChange={(newDoor) => setDoor(newDoor)} />
    </div>
  )
}
