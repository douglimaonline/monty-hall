import styles from '../styles/door.module.css'
import DoorModel from '../models/Door'

interface DoorPops {
  door: DoorModel
  onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorPops) {
  const { door } = props
  const selected = door?.selected ? styles.selected : null
  const isOpen = door?.isOpen ? styles.open : null

  const switchSelect = () => {
    if (!door.isOpen) {
      props.onChange(door.switchSelected())
    }
  }
  const open = (e) => {
    e.stopPropagation()
    if (door.selected) props.onChange(door.open())
  }
  return (
    <div className={styles.area} onClick={switchSelect}>
      <div className={`${styles.door} ${selected} ${isOpen}`}>
        {isOpen ? null : (
          <>
            <div className={styles.number}>{door?.number}</div>
            <div className={styles.knob} onClick={open}></div>
          </>
        )}
      </div>
      <div className={styles.floor}></div>
    </div>
  )
}
