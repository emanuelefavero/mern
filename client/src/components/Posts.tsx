import { useEffect, useState } from 'react'

function Posts() {
  const [loading, setLoading] = useState(true)

  interface Post {
    _id: string
    title: string
    content: string
  }
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    // Add { mode: 'cors',} as second argument to fetch() to avoid CORS errors
    fetch('/api/blog', { mode: 'cors' })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
        setLoading(false)
      })
  }, [])

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))
      )}
    </>
  )
}

export default Posts
