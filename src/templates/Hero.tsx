// import Link from 'next/link'

import {Background} from '../background/Background'
import {NavbarTwoColumns} from '../navigation/NavbarTwoColumns'
import {Logo} from './Logo'
import {VideoSection} from '@/layout/VideoSection'
import {NavSection} from '@/layout/NavSection'
import { Link as ScrollLink } from 'react-scroll';
import { useEffect, useState } from 'react'
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
  const [isScreenMd, setIsScreenMd] = useState(false)

  useEffect(() => {
    // Function to check if the screen size matches the specified media query
    const checkScreenSize = () => {
      setIsScreenMd(window.matchMedia("(min-width: 768px)").matches)
    }

    // Run the initial check
    checkScreenSize()

    // Add an event listener to recheck the screen size when the window is resized
    window.addEventListener("resize", checkScreenSize)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])




	return (
		<Background color="bg-gray-100 ">
			<VideoSection>
			<div className=' md:black-overlay z-1'></div>
				<VideoBackground />
				<div className='absolute top-[50%] left-[50%] z-10 ' style={{"transform":"translate(-50%, -55%)"}}>
					<div className='text-white flex flex-col justify-center items-center gap-y-8 w-[800px] text-center'>
					<h2 className='text-xl  md:text-3xl'>
					Sugar and Sunflower Oil
					
					</h2>
					<h1 className='text-2xl md:text-5xl font-bold'>Providing the finest commodity</h1>
					{/* <p className='text-lg font-base'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p> */}
				<h2 className='text-xl  md:text-3xl'>
				The right price, the right time
					</h2>
					</div>
				</div>

				{isScreenMd && (
					<NavSection yPadding="py-6" >
					<NavbarTwoColumns logo={<Logo  />}>

						<li  className="w-24 h-10  flex items-center justify-center rounded-md text-white text-2xl    hover:text-white transition-all ease-in-out cursor-pointer">
						<ScrollLink offset={-150} to="about" smooth={true} duration={1000}>
							About 
						</ScrollLink>
						</li>
						<li className="w-32 h-10  flex items-center justify-center rounded-md  text-white   text-2xl  hover:text-white transition-all ease-in-out cursor-pointer">
						<ScrollLink offset={-150} to="products" smooth={true} duration={1000}>
							Products
							</ScrollLink>
						</li>
						<li className="w-32 h-10  flex items-center justify-center rounded-md  text-white  text-2xl   hover:text-white transition-all ease-in-out cursor-pointer">
						<ScrollLink offset={-150} to="contact" smooth={true} duration={1000}>
							 Contact Us
							</ScrollLink>
						</li>
						
					</NavbarTwoColumns>
				</NavSection>
				)}
			</VideoSection>
		</Background>
	)
}

export {Hero}
