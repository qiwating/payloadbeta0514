import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'
import config from '@payload-config'

export default async function TestComponent() {
  const payload = await getPayloadHMR({config})

  const users = await payload.find({
    collection: 'users'
  })
    
  return (
    <div className='bg-green-500 p4 text-green-100'>
       Hey this is a custom component

       <h3>users:</h3>
       <div className='flex gap-2'>
        {users.docs.map((user) =>{
          return(
            <div key={user.id} className='bg-green-700 p-2 rounded'>
              {user.email}
            </div>
          )
        })}
       </div>
    </div>
  )
}