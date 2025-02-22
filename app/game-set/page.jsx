'use client'

import Link from 'next/link'
import Card from '../components/Card'
import styles from '../styles/gameSet.module.css'
import NumberEntries from '../components/NumberEntries'
import { useState } from 'react'

export default function GameSet() {
  const [doors, setDoors] = useState(7)
  const [giftDoor, setGiftDoor] = useState(3)

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberEntries
            text="Doors"
            value={doors}
            onChange={(e) => setDoors(e)}
          />
        </Card>
      </div>
      <div>
        <Card>
          <NumberEntries
            text="Gift"
            value={giftDoor}
            onChange={(e) => setGiftDoor(e)}
          />
        </Card>
        <Link href={`/doors/${doors}/${giftDoor}`}>
          <Card bgcolor="#28a085">
            <h2>Start</h2>
          </Card>
        </Link>
      </div>
    </div>
  )
}
