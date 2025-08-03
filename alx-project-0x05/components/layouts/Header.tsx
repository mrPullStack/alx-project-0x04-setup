import Link from "next/link";
import Button from "../common/Button";
import { usePathname } from "next/navigation";
import { useCount } from "@/context/CountContext"; // ✅ FIXED typo: extra double quotes

const Header: React.FC = () => {
    const pathname = usePathname();
    const { count } = useCount();

    return (
        <header className="fixed w-full bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
            <Link
            href="/"
            className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight"
            >
            Splash App
            </Link>

            <div className="flex gap-4">
            {!["/counter-app"].includes(pathname) ? (
                <>
                <Button buttonLabel="Sign In" buttonBackgroundColor="red" action={() => console.log("Sign In Clicked")}/>
                <Button buttonLabel="Sign Up" buttonBackgroundColor="blue" action={() => console.log("Sign In Clicked")} />
                </>
            ) : (
                <p className="font-semibold text-lg">Current count : {count}</p>
            )}
            </div>
        </div>
        </header>
    );
};

export default Header;
