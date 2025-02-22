import styles from '../styles/numberEntries.module.css'

interface NumberEntriesProps {
  text: string
  value: number
  onChange: (newValue: number) => void
}

export default function NumberEntries(props: NumberEntriesProps) {
  function decrease() {
    props.onChange(props.value - 1)
  }

  function increase() {
    props.onChange(props.value + 1)
  }

  return (
    <div className={styles.entries}>
      <span className={styles.text}>{props.text}</span>
      <span className={styles.number}>{props.value}</span>
      <div className={styles.btn}>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
    </div>
  )
}
