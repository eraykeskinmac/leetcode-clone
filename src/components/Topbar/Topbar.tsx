import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import Logout from "../Buttons/Logout";

type TopbarProps = {};

const Topbar: React.FC<TopbarProps> = () => {
  const [user] = useAuthState(auth)
  return (
    <nav className="relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7">
      <div className="flex w-full items-center justify-between max-w-[1200px] mx-auto">
        <Link href="/" className="h-[22px] flex-1">
          <Image
            src="/logo-full.png"
            alt=""
            width={100}
            height={40}
          />
        </Link>
        <div className="flex items-center space-x-4 flex-1 justify-end">
          <div>
            <div className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2">
              Premium
            </div>
          </div>
          {!user && (
            <Link href="/auth">
              <button className="bg-dark-fill-3 py-1 px-2 cursor-pointer rounded">
                Sign in
              </button>
            </Link>
          )}
          {user && (
            <div className="cursor-pointer group relative">
              <Image src="/avatar.png" width={32} height={32} alt="user profile" className="h-8 w-8 rounded-full" />
              <div className="absolute top-10 left-2/4 -translate-x-2/4 mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 transition-all duration-300 ease-out">
                <p className="text-sm">{user.email}</p>
              </div>
            </div>
          )}
          {user &&
            <Logout />
          }
        </div>
      </div>
    </nav>
  );
};
export default Topbar;
