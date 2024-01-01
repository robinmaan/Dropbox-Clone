import Link from "next/link"
import { ArrowRight } from "lucide-react"
import dropimg from "../public/dropimg.png"
import Image from "next/image"


const page = () => {
  return (
    <main>
        <div className="flex flex-col  dark:bg-slate-800">
          <div className="p-10 flex flex-col bg-[#2B2929]
          dark:bg-slate-800 text-white space-y-5">
            <h1 className="text-4xl font-bold">Welcome to Dropbox<br />
            <br />
            Storing everything for you and your business needs. All in one place.</h1>
            <p className="pb-15">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloremque maiores itaque unde exercitationem culpa hic quasi iusto sapiente ipsam maxime ut voluptas inventore odit perferendis corrupti laboriosam corporis repudiandae, quidem voluptatum numquam cumque illo! Odio, dolore, molestias autem quaerat doloribus quasi sed accusantium alias veniam assumenda, consectetur sequi suscipit!</p>
            <Link href="/dashboard" className="flex bg-blue-500 cursor-pointer p-3 font-bold w-fit rounded-sm "> Try it for free!
            <ArrowRight className="ml-6 font-bold " /  >
            </Link>
          </div>
          <div className="bg-[#1E1919] item-center justify-center flex p-10 h-full dark:bg-slate-900">
           
              <Image className="rounded-lg" src={dropimg} alt="dropboximg" height={100}width={300} />
              
            
           
          </div>
        </div>
      <p className="text-center font-bold text-xl pt-5 "> Disclaimer</p>
      <p className="text-center font-light p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptas aliquid non fugiat quo laborum perspiciatis, fuga molestias voluptatem itaque ex porro totam blanditiis repudiandae. Impedit quis nesciunt necessitatibus natus!
      </p>
    </main>
    
  ) 
}

export default page
