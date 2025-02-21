import styles from '../styles/numberEntries.module.css'

interface NumberEntriesProps {
  text: string
  value: number
  onChange: (newValue: number) => void
}

export default function NumberEntries(props: NumberEntriesProps) {
  return (
    <div className={styles.entries}>
      <span className={styles.text}>{props.text}</span>
      <span className={styles.number}>{props.value}</span>
      <div className={styles.btn}>
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  )
}
