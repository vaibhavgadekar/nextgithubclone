import { useRouter } from 'next/router'

function ActiveLink({ children, href }) {
  const router = useRouter()
  const { id } = router.query

  return (
    <a>
      {id}
    </a>
  )
}

export default ActiveLink
