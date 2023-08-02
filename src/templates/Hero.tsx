import Link from 'next/link'

import {Background} from '../background/Background'
import {NavbarTwoColumns} from '../navigation/NavbarTwoColumns'
import {Logo} from './Logo'
import {VideoSection} from '@/layout/VideoSection'
import {NavSection} from '@/layout/NavSection'
import { Link as ScrollLink } from 'react-scroll';
const VideoBackground = () => {


	return (
		<div className='youtube-container'>

		<iframe
		className='opacity-90'
			src="https://www.youtube-nocookie.com/embed/QKduOuB4Yyc?controls=0&autoplay=1&mute=1&loop=1&showInfo=0&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=QKduOuB4Yyc"
			title="YouTube video player"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			>
			

			</iframe>
			
			</div>
	)
}

const Hero = () => {
	return (
		<Background color="bg-gray-100 ">
			<VideoSection>
			<div className=' black-overlay z-1'></div>
				<VideoBackground />
				<div className='absolute top-[50%] left-[50%] z-10 ' style={{"transform":"translate(-50%, -55%)"}}>
					<div className='text-white flex flex-col justify-center items-center gap-y-8 w-[800px] text-center'>
					<h2 className='text-3xl'>
					We Are Creative
					</h2>
					<h1 className='text-5xl font-bold'>The Best Digital Experience</h1>
					<p className='text-lg font-base'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<div className='flex gap-x-4'>
					<button className="h-12 w-36 rounded-md border-2 border-red-700 bg-red-700 text-sm font-semibold text-white shadow-md">
               Get Started
              </button>
							<button className="h-12 w-36 rounded-md border-2 border-white-700  text-sm font-semibold text-white">
               View Work
              </button>
					</div>
					</div>
				</div>

				<NavSection yPadding="py-6" >
					<NavbarTwoColumns logo={<Logo  />}>

						<li  className="w-24 h-10  flex items-center justify-center rounded-md text-white text-base    hover:text-white transition-all ease-in-out cursor-pointer">
						<ScrollLink to="footer" smooth={true} duration={1000}>
							About
						</ScrollLink>
						</li>
						<li className="w-32 h-10  flex items-center justify-center rounded-md  text-white   text-base hover:text-white transition-all ease-in-out cursor-pointer">
							<Link href="/">Features</Link>
						</li>
						<li className="w-32 h-10  flex items-center justify-center rounded-md  text-white  text-base  hover:text-white transition-all ease-in-out cursor-pointer">
							<Link href="/">Pricing</Link>
						</li>
						<li className="w-32 h-10  flex items-center justify-center rounded-md  text-white  text-base hover:text-white transition-all ease-in-out cursor-pointer">
							<Link href="/">Products</Link>
						</li>
					</NavbarTwoColumns>
				</NavSection>
			</VideoSection>
		</Background>
	)
}

export {Hero}
