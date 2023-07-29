import Image from "next/image";
import ARHLogo from "../images/atelier_rapid_hire_logo.png";
import Link from "next/link";
import { Button } from "../ui/button";

const Nav = () => {
  return (
    <nav className="container py-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-x-12 items-center">
          <Link
            href="/"
            className="mr-12 link">
            <Image
              src={ARHLogo}
              alt="Atelier Rapid Hire Logo"
              width={35}
              height={35}
            />
          </Link>
          <Link
            className="link"
            href="/#über-rapidhire">
            Über RapidHire
          </Link>
          <Link
            className="link"
            href="/#features">
            Features
          </Link>
        </div>

        <Button variant="outline">Kontakt</Button>
      </div>
    </nav>
  );
};

export default Nav;
