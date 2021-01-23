import { useRouter } from 'next/router'

function ActiveLink({ children, href }) {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
    <a>
      {id}
    </a>
    <h1>jdj</h1>
    </div>
  )
}

export default ActiveLink
