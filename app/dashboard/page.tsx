import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs'
import Dropzone from '@/components/Dropzone'
import {  collection, getDocs } from 'firebase/firestore'

import { db } from '@/firebase'
import FileType from '@/typing'
import TableWrapper from '@/components/table/TableWrapper'

async function dashboard(){
  const {userId} = auth()
  const docsResult = await getDocs(collection(db,"users",userId!,"files"))
  const skeletonsFiles:FileType[] = docsResult.docs.map(doc => ({
    id:doc.id,
    filename:doc.data().filename || doc.id,
    timestamp:new Date(doc.data().timestamp?.seconds * 1000) || undefined,
    downloadURl:doc.data().downloadURL,
    fullName:doc.data().fullName,
    type:doc.data().type,
    size:doc.data().size
  }));
  // console.log(skeletonsFiles)
  return (

  
    <div className=' '>

     <Dropzone />
     <section className='container space-y-5 p-5'>
      <h2 className='font-bold'>All Files</h2>
      <div>
        <TableWrapper skeletonsFiles={skeletonsFiles} />
      </div>
     </section>
    </div>
  )
}

export default dashboard
