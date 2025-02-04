import Gift from '@/app/components/Gift'
import Door from '@/app/components/Door'

export default function Home() {
  return (
    <div style={{ display: 'flex' }}>
      <div>Home</div>
      <Gift />
      <Door selected />
    </div>
  )
}
