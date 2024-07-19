import React,{ useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import Container from '../components/Container'
import Card from '../components/Card'


function Home() {

    const[posts,setPosts]=useState([])
    
    useEffect(()=>{
        appwriteService.getPosts().then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])

  if(posts.length === 0){
    return (
        <div className='w-full py-8 mt-4 text-center'>
            <Container>
                <h1 className='text-2xl font-bold'>
                    No posts
                </h1>
            </Container>
        </div>
  )}

  return(
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post)=>(
                    <div key={post.$id} className='p-2 w-1/4'>
                        <Card {...post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default Home