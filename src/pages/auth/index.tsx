import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import AuthModal from "@/components/Modals/AuthModal";

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
      <div className="max-w-7-xl mx-auto">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
          <Image src="/hero.png" alt="Hero Image" width={750} height={750} />
        </div>
        <AuthModal />
      </div>
    </div>
  );
};
export default AuthPage;
