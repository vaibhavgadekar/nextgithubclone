import { useRouter } from 'next/router'

function ActiveLink({ children, href }) {
  const router = useRouter()
  const {  postNo } = router.query

  return (
    <ul>
//         {posts.map((post) => (
//             <div>
//             <li>{post.id}</li>
//             <img src={post.url} alt="Vercel Logo" />
//           <li>{post.title}</li>
//     </div>
//         ))}
    <li>hkjhk</li>
      </ul>
  )
}
  
  
   export async function getServerSideProps(context) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://jsonplaceholder.typicode.com/photos/{$postNo}')
    const posts = await res.json()
    console.log(posts)
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }


export default ActiveLink
