'use client'

import Gift from './components/Gift'
import Door from './components/Door'
import DoorModel from './models/Door'

export default function Home() {
  const door1 = new DoorModel(1, false, true, false)
  const door2 = new DoorModel(2, false, false, false)
  const door3 = new DoorModel(3, false, true, false)

  return (
    <div style={{ display: 'flex' }}>
      <div>Home</div>
      <Gift />
      <Door door={door1} />
      <Door door={door2} />
      <Door door={door3} />
    </div>
  )
}
