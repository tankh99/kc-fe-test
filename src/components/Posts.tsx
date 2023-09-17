import { useEffect, useState } from "react"
import Post from "./Post"

export default function Posts() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    
    const fetchPosts = async () => {
      try {
        const res = await fetch(`http://localhost:4000/feed`)
        const posts = await res.json()
        setPosts(posts)
      } catch (ex) {
        console.log(ex)
      }
    }
  
    fetchPosts()
  }, [])
  
  return (
    <div>
      {posts.map((post: any, index: number) => (
        <Post key={index} post={post} />
      ))}
    </div>
  )
}
