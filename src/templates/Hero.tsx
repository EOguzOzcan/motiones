import Link from 'next/link'

import {Background} from '../background/Background'
import {NavbarTwoColumns} from '../navigation/NavbarTwoColumns'
import {Logo} from './Logo'
import {VideoSection} from '@/layout/VideoSection'
import {NavSection} from '@/layout/NavSection'

const VideoBackground = () => {
	return (
		<div className='youtube-container'>

		<iframe
	
			src="https://www.youtube-nocookie.com/embed/QKduOuB4Yyc?controls=0&autoplay=1&mute=1&loop=1&showInfo=0&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=QKduOuB4Yyc"
			title="YouTube video player"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			></iframe>
			</div>
	)
}

const Hero = () => {
	return (
		<Background color="bg-gray-100">
			<VideoSection>
				<VideoBackground />

				<NavSection yPadding="py-6">
					<NavbarTwoColumns logo={<Logo  />}>
						<li className="w-24 h-10  flex items-center justify-center rounded-md text-white text-base    hover:text-white transition-all ease-in-out cursor-pointer">
							<Link href="/">About</Link>
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
