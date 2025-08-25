import Link from "next/link";
import CustomInput from "../CustomInput";
import { IoSearch } from "react-icons/io5";
import CustomButton from "../CustomButton";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";

export default function Header() {
  return (
    // / <- significa que eu estoun usando apenas 95% da cor e 5% de trasnparencia
    <header
      className="sticky top-0 z-50 bg-[#111418]/95
        backdrop-blur-sm w-full border-b border-[#2e3237]"
    >
      <div className="w-full flex h-16 items-center justify-between">
        <div className="w-[33%] pl-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-blue-500/70 flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-500/70 bg-clip-text text-transparent">
              ECommerce
            </span>
          </Link>
        </div>
        <div className="w-[33%] hidden md:flex flex-1 px-8 justify-center">
          <CustomInput
            type="text"
            placeholder="buscar produtos..."
            icon={<IoSearch />}
          />
        </div>
        <div className="w-[33%] flex items-center space-x-4 justify-end pr-4">
          <CustomButton
            variant="ghost"
            width="w-10"
            className="h-10 rounded-md hover:bg-[#5593f7] hover:text-[#111418] "
          >
            <FiShoppingCart />
          </CustomButton>
          <CustomButton
            variant="ghost"
            width="w-10"
            className="h-10  rounded-full hover:bg-[#5593f7] hover:text-[#111418] "
          >
            <FaRegBell />
          </CustomButton>
          <CustomButton
            variant="ghost"
            width="w-10"
            className="h-10 rounded-full hover:bg-[#5593f7] hover:text-[#111418] "
          >
            <FiShoppingCart />
          </CustomButton>
        </div>
      </div>
    </header>
  );
}
