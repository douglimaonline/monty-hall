'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Door from '../../../components/Door'
import styles from '../../../styles/door.module.css'
import {
  createDoors,
  handleDoorChange,
  getCreateDoorProps,
} from '../../../utils/doorsFunctions'

export default function Doors() {
  const pathName = usePathname()
  const [doors, setDoors] = useState([])

  useEffect(() => {
    const [doors, hasGift] = getCreateDoorProps(pathName)
    setDoors(createDoors(doors, hasGift))
  }, [pathName])

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
        <Link href="/game-set">
          <button className={styles.button}>Restart</button>
        </Link>
      </div>
    </div>
  )
}
