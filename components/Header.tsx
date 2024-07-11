import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./ui/container";
import Search from "./ui/search";
const Header = () => {
  return (
    <header>
      <Container>
        <div className="flex flex-col md:flex-row items-center w-full p-4 justify-between gap-4">
          <Link href="/">
            <Image
              src="/teebags-logo.svg"
              alt="teebag logo"
              width={400}
              height={400}
              className="w-48"
            />
          </Link>
          <div className="flex flex-row space-x-2 justify-center items-center">
            <Link href="#">
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={100}
                height={100}
                className="w-6 md:w-8"
              />
            </Link>
            <Link href="#">
              <Image
                src="/pinterest.svg"
                alt="instagram"
                width={100}
                height={100}
                className="w-6 md:w-8"
              />
            </Link>
            <Link href="#">
              <Image
                src="/facebook.svg"
                alt="instagram"
                width={100}
                height={100}
                className="w-6 md:w-8"
              />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
