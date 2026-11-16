import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/songs')({
  component: songs,
})

function songs() {
  return (
    <div className="p-2">
      <h3>Welcome tos ongs!</h3>
    </div>
  )
}