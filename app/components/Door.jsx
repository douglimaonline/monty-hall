import styles from '@/app/styles/door.module.css'

export default function Door() {
  return (
    <div className={styles.area}>
      <div className={styles.door}>
        <div className={styles.number}>3</div>
        <div className={styles.knob}></div>
      </div>
      <div className={styles.floor}></div>
    </div>
  )
}
