'use client'
import styles from '@/app/styles/door.module.css'
import { useState } from 'react'

export default function Door() {
  const [selectedDoor, setSelectedDoor] = useState('')

  function handleDoorClick() {
    if (selectedDoor === '') {
      setSelectedDoor(styles.selected)
    } else {
      setSelectedDoor('')
    }
  }

  return (
    <div className={styles.area}>
      <div
        className={`${styles.door} ${selectedDoor}`}
        onClick={handleDoorClick}
      >
        <div className={styles.number}>3</div>
        <div className={styles.knob}></div>
      </div>
      <div className={styles.floor}></div>
    </div>
  )
}
