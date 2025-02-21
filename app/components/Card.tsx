import styles from '../styles/gameSet.module.css'

interface cardProps {
  bgcolor?: string
  children?: string
  alignTextCenter?: boolean
}

export default function Card(props: cardProps) {
  return (
    <div
      className={styles.card}
      style={{
        backgroundColor: props.bgcolor ?? 'whitesmoke',
        alignItems: props.alignTextCenter ? 'center' : 'baseline',
      }}
    >
      {props.children}
    </div>
  )
}
