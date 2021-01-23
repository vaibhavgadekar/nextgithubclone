import { useRouter } from 'next/router'

function ActiveLink({ children, href }) {
  const router = useRouter()
  const { id } = router.query

  return (
    <a>
      {id}
    </a>
    <h1>jdj</h1>
  )
}

export default ActiveLink
