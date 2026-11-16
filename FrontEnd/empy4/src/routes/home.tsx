import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home')({
  component: home,
})

function home() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  )
}