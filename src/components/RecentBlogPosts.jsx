import {getPayloadHMR} from '@payloadcms/next/utilities'
import React from 'react'
import config from '@payload-config'

export default async function RecentBlogPosts() {
     const payload = await getPayloadHMR({config})

     const blogPosts = await payload.find({
        collection:'blogArticles'
     })

  return (
    <div>
        <h2>Recent blog Articles</h2>
        <div className="grid grid-cols-3 gap-10">
            {blogPosts.docs.map((post) =>{
                return(
                    <div key={post.id} className='bg-gray-200 p-4 rounded-lg'>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>

                    </div>
                )
            })}
        </div>
    </div>
  )
}
