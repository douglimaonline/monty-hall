'use client'

import { useState } from 'react'
import Link from 'next/link'
import Door from '../components/Door'
import styles from '../styles/door.module.css'
import { createDoors, handleDoorChange } from '../utils/doorsFunctions'

export default function Doors() {
  const doorList = createDoors(5, 3)
  const [doors, setDoors] = useState(doorList)

  return (
    <div className={styles.page}>
      <div className={styles.doors}>
        {doors.map((d) => {
          return (
            <Door
              key={d?.number}
              door={d}
              onChange={(e) => handleDoorChange(e, setDoors)}
            />
          )
        })}
      </div>
      <div style={{ alignSelf: 'center' }}>
        <Link href="/">
          <button className={styles.button}>Back</button>
        </Link>
      </div>
    </div>
  )
}
