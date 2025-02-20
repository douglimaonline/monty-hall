import styles from '../styles/gameSet.module.css'

interface cardProps {
  bgcolor?: string
  children?: string
}

export default function Card(props: cardProps) {
  return (
    <div
      className={styles.card}
      style={{ backgroundColor: props.bgcolor ?? 'whitesmoke' }}
    >
      {props.children}
    </div>
  )
}
