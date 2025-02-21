import Link from 'next/link'
import Card from '../components/Card'
import styles from '../styles/gameSet.module.css'

export default function GameSet() {
  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card />
      </div>
      <div>
        <Card />
        <Link href={`/doors/7/4`}>
          <Card bgcolor="#28a085" alignCenter>
            <h2>Start</h2>
          </Card>
        </Link>
      </div>
    </div>
  )
}
