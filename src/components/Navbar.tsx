import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = async () => {
  const user = await currentUser();

  return (
    <div className="flex items-center justify-between p-4 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 ">
      {/* Search Bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-400 dark:ring-gray-600 px-2">
        <Image src="/search.png" alt="Search Icon" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-none"
        />
      </div>

      {/* Icons and User */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white dark:bg-gray-200 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="Messages" width={20} height={20} />
        </div>
        <div className="bg-white dark:bg-gray-200 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image
            src="/announcement.png"
            alt="Notifications"
            width={20}
            height={20}
          />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
            1
          </div>
        </div>
        <ThemeToggle />
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Ahmed Ali</span>
          <span className="text-[10px] text-gray-500 dark:text-gray-400 text-right font-light">
            {user?.publicMetadata?.role as string}
          </span>
        </div>
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
