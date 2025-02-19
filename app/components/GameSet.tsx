import { useState } from 'react'

interface GameSetProps {
  onChange: (totalDoors: number, selectedDoor: number) => void
}

export default function GameSet() {
  return <h1>Game Set</h1>
}
