import styles from '../styles/door.module.css'
import DoorModel from '../models/Door'

interface DoorPops {
  door: DoorModel
}

export default function Door(props: DoorPops) {
  const { door } = props
  const selected = door?.selected ? styles.selected : ''
  return (
    <div className={styles.area}>
      <div className={`${styles.door} ${selected}`}>
        <div className={styles.number}>{door?.number}</div>
        <div className={styles.knob}></div>
      </div>
      <div className={styles.floor}></div>
    </div>
  )
}
