import styles from '@/app/styles/door.module.css'

export default function Door(props) {
  const selected = props.selected ? styles.selected : ''
  return (
    <div className={styles.area}>
      <div className={`${styles.door} ${selected}`}>
        <div className={styles.number}>3</div>
        <div className={styles.knob}></div>
      </div>
      <div className={styles.floor}></div>
    </div>
  )
}
