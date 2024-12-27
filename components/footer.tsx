'use client'
import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FloatingDock } from './ui/floating-dock';

interface Link {
  title: string;
  icon: React.ReactNode;
  href: string;
}

const links: Link[] = [
  {title: 'Facebook',
  icon: (<FaFacebook size={100} className="hover:text-red-500 text-red-400" />),
  href: 'https://www.facebook.com',
  },
  {title: 'Twitter',
    icon: (<FaXTwitter size={100} className="hover:text-red-500 text-red-400" />),
    href: 'https://www.twitter.com',
  },
  {title: 'Instagram',
    icon: (<FaInstagram size={100} className="hover:text-red-500 text-red-400" />),
    href: 'https://www.instagram.com',
  },

]




export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center relative bottom-0 w-full  bg-blueColor bg-red-600 text-white py-8 ">
      <div className="container mx-auto w-full px-4 flex flex-col justify-evenly items-center">
        <div className="flex w-1/3 mb-4 md:mb-0">
        </div>
        <div className="flex  w-1/3 space-x-4 w-full text-xl">

          <FloatingDock items={links} mobileClassName="invisible" desktopClassName='flex flex-row gap-5 bg-blueColor text-blueColor' />
        </div>
        <div className="flex w-1/3 mt-4 md:mt-0 justify-center w-full">
        <p translate="no">© 2024 मराठी जनतेचे कलियुग चक्र. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;