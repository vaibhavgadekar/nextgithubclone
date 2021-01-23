import { useRouter } from 'next/router'

function ActiveLink({ children, href }) {
  const router = useRouter()
  const {  postNo } = router.query

  return (
    <div>
    <a>
      { postNo}
    </a>
    <h1>jdj</h1>
    </div>
  )
}

export default ActiveLink
