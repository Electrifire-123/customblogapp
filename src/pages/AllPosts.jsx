import {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
    console.log("post :",posts)
  return (
    <div className='w-full h-screen py-8'>
        <Container>
            <div className='flex flex-wrap'>

                {posts.length>0?posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                        {/* {post.title} */}
                    </div>
                ))
                : <h3 className=' h-[500px] align-middle content-center text-lg'>Oops! its seems lik no posts has been created.</h3>
                }
            </div>
            </Container>
    </div>
  )
}

export default AllPosts