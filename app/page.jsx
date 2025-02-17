'use client'

import Gift from './components/Gift'
import Door from './components/Door'
import { useState } from 'react'
import { createDoors, handleDoorChange } from './utils/doorsFunctions'

export default function Home() {
  const doorList = createDoors(5, 3)
  const [doors, setDoors] = useState(doorList)

  return (
    <div style={{ display: 'flex' }}>
      <Gift />
      {doors.map((d) => {
        return (
          <Door
            list={doorList}
            key={d?.number}
            door={d}
            onChange={(e) => handleDoorChange(e, setDoors)}
          />
        )
      })}
    </div>
  )
}
