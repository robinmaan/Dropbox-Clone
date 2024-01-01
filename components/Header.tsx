import { UserButton , SignInButton,SignOutButton} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import imagespng from "../public/dropbox.png";
import { Button } from "./ui/button";
import { ThemeToggler } from "./ThemeToggler";


function Header() {
  return (
    <div className="flex justify-between ">
      <Link href="/" className="flex items-center space-x-3">
        <div>
        <Image src={imagespng}alt="dropbox" height={40} width={40}/>
        </div>
        <h1 className="font-bold text-xl ">Dropbox</h1>
        
      </Link>
       <div className="flex px-5 items-center space-x-3">
          <ThemeToggler />
        <UserButton afterSignOutUrl="/" />
        <SignOutButton>
          <SignInButton afterSignInUrl="/dashboard" mode="modal"/>
        </SignOutButton>
      </div>

      
    </div>
  );
}

export default Header;
