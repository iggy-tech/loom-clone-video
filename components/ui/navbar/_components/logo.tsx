
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
         <div>
            <Link href={"/"}>
                <Image
                    src="/logos/bird-logo.png"
                    alt="logo"
                    width={150}
                    height={150}
                    className="w-40"
                    />

            </Link>
       
    </div> );
}
 
export default Logo;