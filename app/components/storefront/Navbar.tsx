import Link from "next/link";
import { Navlinks } from "./NavLinks";
import {
  getKindeServerSession,
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { ShoppingBagIcon } from "lucide-react";
import { UserDropDown } from "./UserDropdown";
import { Button } from "@/components/ui/button";
import redis from "@/app/lib/redis";
import { Cart } from "@/app/lib/interfaces";

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const cart: Cart | null = await redis.get(`cart-${user?.id}`);
  const total = cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-black font-bold text-xl lg:text-3xl">
            Khoms<span className="text-primary ">Shop</span>
          </h1>
        </Link>
        <Navlinks />
      </div>

      <div className="flex items-center">
        {user ? (
          <>
            <Link href="/bag" className="group  p-2 flex items-center mr-2">
              <ShoppingBagIcon className="size-6 text-gray-400 group-hover:text-gray-500" />
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                {total}
              </span>
            </Link>
            <UserDropDown
              email={user.email as string}
              name={user.given_name as string}
              image={user.picture ?? ""}
            />
          </>
        ) : (
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-content:md:space-x-2">
            <Button asChild variant="ghost">
              <LoginLink>Sign In</LoginLink>
            </Button>
            <span className=" h-6 w-px bg-gray-200"></span>
            <Button asChild variant="ghost">
              <RegisterLink>Create Account</RegisterLink>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
