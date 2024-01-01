"use client"

import DropzoneComponent from 'react-dropzone'
import { cn } from '@/lib/utils'
import { db, stronge } from '@/firebase'
import { useState } from 'react'

import { UpdateData, doc } from 'firebase/firestore'
import { useUser } from '@clerk/nextjs'
import {addDoc, collection, serverTimestamp, updateDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

function Dropzone() {
    const [loading,setLoading] = useState(false)
    const { isLoaded , isSignedIn ,user} = useUser()
    const maxsize = 20971520
    const onDrop = (acceptedFile: File[])=>{
        acceptedFile.forEach((file)=>{
            const reader = new FileReader();

            reader.onabort = ()=> console.log("file reading was aborted");
            reader.onerror = ()=> console.log("file reading has failed ");
            reader.onload =  async () =>{
                await uploadPost(file);
            };
            reader.readAsArrayBuffer(file)
        })
            
    }
    const uploadPost = async (selectedFile:File)=>{
        if(loading) return
        if(!user) return

        setLoading(true)
        const docRef = await addDoc(collection(db,"user",user.id,"files"),{
            userId:user.id,
            filename:selectedFile.name,
            fullName:user.fullName,
            profileIng:user.imageUrl,
            timestamp:serverTimestamp(),
            type:selectedFile.type,
            size:selectedFile.size,
        });
        const imageRef = ref(stronge,`users/${user.id}/files/${docRef.id}`)
        uploadBytes(imageRef,selectedFile).then(async (snapshot) =>{
            const downloadURL = await getDownloadURL(imageRef) 

            await updateDoc(doc(db,"users",user.id,"files",docRef.id),{
                downloadURL:downloadURL,
            })
        })

        setLoading(false)
    }
  return (
    

<DropzoneComponent minSize={0} maxSize={maxsize} onDrop={onDrop}>
  {({getRootProps, getInputProps,isDragAccept,isDragActive,isDragReject,fileRejections}) => {
    const isFileTooLarge = fileRejections.length > 0 && fileRejections[0].file.size > maxsize
    return(
    <section>
      <div {...getRootProps()}
      className={cn('w-full h-52 flex justify-center items-center p-5 border border-dotted rounded-lg text-center',
          isDragActive ? "bg-[#35FFe] text-white animate-pulse" :"bg-slate-100/50 dark:bg-slate-800/80 text-slate-400"
      
      )}
      >
        <input {...getInputProps()} />
        {!isDragActive && "Click here or Drop a file to upload!!"}
        {isDragActive && !isDragReject && "Drop to upload!"}
        {isDragReject && "File type is not allowed"}
        {isFileTooLarge && "File is too large"}
      </div>
    </section>
  )}}
</DropzoneComponent>
  )
}

export default Dropzone

