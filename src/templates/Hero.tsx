import Link from "next/link"

import { Background } from '../background/Background';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import { VideoSection } from '@/layout/VideoSection'
import { NavSection } from '@/layout/NavSection'


const VideoBackground = () => {
  return (
		<video autoPlay loop muted className='h-[700px] w-full object-cover ' >

		<source src="/video.mp4" type="video/mp4" />
	</video>
  );
};



const Hero = () => {
  return (
    <Background color="bg-gray-100">
      <VideoSection>
        <VideoBackground />

        <NavSection yPadding="py-6">
          <NavbarTwoColumns logo={<Logo xl />}>
            <li className="w-24 h-10  flex items-center justify-center rounded-md  hover:border-gray-800 hover:bg-gray-800 hover:text-white transition-all ease-in-out cursor-pointer">
              <Link href="/">
                About
              </Link>
            </li>
            <li className="w-32 h-10  flex items-center justify-center rounded-md  hover:border-gray-800 hover:bg-gray-800 hover:text-white transition-all ease-in-out cursor-pointer">
              <Link href="/">Features</Link>
            </li>
            <li className="w-32 h-10  flex items-center justify-center rounded-md  hover:border-gray-800 hover:bg-gray-800 hover:text-white transition-all ease-in-out cursor-pointer">
              <Link href="/">Pricing</Link>
            </li>
            <li className="w-32 h-10  flex items-center justify-center rounded-md  hover:border-gray-800 hover:bg-gray-800 hover:text-white transition-all ease-in-out cursor-pointer">
              <Link href="/">Products</Link>
            </li>
          </NavbarTwoColumns>
        </NavSection>
      </VideoSection>
    </Background>
  )
}

export { Hero }
