import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs'
import Dropzone from '@/components/Dropzone'

const page = () => {
  const {userId} = auth()
  return (
  
    <div>
     <Dropzone />
    </div>
  )
}

export default page
