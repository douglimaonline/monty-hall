import Link from 'next/link'
import Card from '../components/Card'
import styles from '../styles/gameSet.module.css'
import NumberEntries from '../components/NumberEntries'

export default function GameSet() {
  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberEntries text="Doors" value="7" />
        </Card>
      </div>
      <div>
        <Card>
          <NumberEntries text="Gift" value="3" />
        </Card>
        <Link href={`/doors/7/4`}>
          <Card bgcolor="#28a085">
            <h2>Start</h2>
          </Card>
        </Link>
      </div>
    </div>
  )
}
