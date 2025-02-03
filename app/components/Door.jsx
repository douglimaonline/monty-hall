import styles from '@/app/styles/door.module.css'

export default function Door() {
  return (
    <div className={styles.door}>
      <div className={styles.number}>3</div>
      <div className={styles.knob}></div>
    </div>
  )
}
