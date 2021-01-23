import Link from 'next/link'

function post({ posts }) {
    return (
      <ul>
        {posts.map((post) => (
            <div>
         <Link
         href={{
            pathname: '/[postNo]',
            query: { postNo:post.id},
          }}
         >
<a>
            <li>{post.id}</li>
</a>
        </Link>
            <img src={post.url} alt="Vercel Logo" />
          <li>{post.title}</li>

          </div>
        ))}
      </ul>
    )
  }
  
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries. See the "Technical details" section.
  export async function getServerSideProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const posts = await res.json()
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }
  
  export default post
