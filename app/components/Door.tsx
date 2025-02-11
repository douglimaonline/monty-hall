import styles from '../styles/door.module.css'
import DoorModel from '../models/Door'

interface DoorPops {
  door: DoorModel
  onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorPops) {
  const { door } = props
  const selected = door?.selected ? styles.selected : ''

  const switchSelect = (e) => props.onChange(door.switchSelected())

  return (
    <div className={styles.area}>
      <div className={`${styles.door} ${selected}`} onClick={switchSelect}>
        <div className={styles.number}>{door?.number}</div>
        <div className={styles.knob}></div>
      </div>
      <div className={styles.floor}></div>
    </div>
  )
}
