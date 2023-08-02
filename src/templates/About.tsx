import React, { useEffect, useState } from "react"

import { TwoCardSection } from "@/layout/TwoCardSection"
import { HiCheck } from "react-icons/hi2";

const VideoBackground = () => {


	return (
		<div className='youtube-container'>

		<iframe
		className='opacity-90'
			src="https://www.youtube-nocookie.com/embed/G4Ttm0R44kg?controls=0&autoplay=1&mute=1&loop=1&showInfo=0&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=G4Ttm0R44kg"
			title="YouTube video player"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			>
			

			</iframe>
			
			</div>
	)
}

const MyComponent = () => {
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
    <div className="mx-auto flex w-full h-full py-4" id="about">
      {isScreenMd ? (
        <>
			
          <div id="about" className="flex flex-1   flex-col items-center justify-center space-y-5 bg-gray-100  ">
				<div className="mb-12 flex flex-col gap-y-5  ">
				<h1 className="ml-60  w-[500px] text-left text-5xl font-light leading-9 text-gray-800">About <span className="font-semibold text-orange-500">Arc Global Chain</span></h1>
				<p className="ml-60 w-[600px] text-left text-md  leading-7">
				ARC Global Chain is established by ATG & Ruha Yağ Rafineri A.Ş.to provide the finest quality sugar and sunflower oil commodity products.
				</p>
				</div>
					  <h1 className=" ml-60 w-[600px] text-left text-3xl font-light leading-9 text-gray-800">
						We Are Digital <span className="font-semibold text-orange-500">Marketing & Branding</span>
            </h1>
            <p className="ml-60 w-[600px] text-left text-md  leading-7">
						We pride ourselves in manufacturing and delivering the highest quality commodities. We also make sure all our products undergo accredited independent quality assurance inspection testing.
            </p>
						<div className="flex items-center ml-36 justify-around w-[600px]">
							<div>
								<ul>
									<li className="flex items-center gap-x-1 text-lg"><HiCheck size={20} color="orange"/> <span>Creative Design</span></li>
									<li className="flex items-center gap-x-1 text-lg"><HiCheck size={20} color="orange"/> <span>Retina Ready</span></li>
									<li className="flex items-center gap-x-1 text-lg"><HiCheck size={20} color="orange"/> <span>Responsive Design</span></li>
								</ul>
							</div>
							<div>
								<ul>
								<li className="flex items-center gap-x-1 text-lg"><HiCheck size={20} color="orange"/> <span>Modern Design</span></li>
									<li className="flex items-center gap-x-1 text-lg"><HiCheck size={20} color="orange"/> <span>Awesome Design</span></li>
									<li className="flex items-center gap-x-1 text-lg"><HiCheck size={20} color="orange"/> <span>Digital Marketing & Branding</span></li>

								</ul>
							</div>
						</div>
            <div className="ml-60  flex w-[600px] items-center">
            
              <button className="h-12 mt-4 w-36 rounded-md border-2 border-orange-500 bg-orange-500 text-sm font-semibold text-white">
                READ MORE
              </button>
            </div>
          </div>
          <div className="w-[900px]  ">
         <VideoBackground />
          </div>
        </>
      ) : (
        <>
          <div className="flex  flex-col items-center justify-center space-y-5 bg-gray-100 px-5 py-3 md:p-0">
            <h1 className=" text-left text-4xl font-light leading-9 text-gray-800 ">
              Validate your Business Idea and Reach Product Market Fit
            </h1>
            <p className=" text-left text-lg   leading-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              veritatis inventore eum, cupiditate esse debitis consectetur nisi
              harum. Tempore, assumenda ducimus vero totam labore. Ipsam, eos
              odit eaque, voluptatum minima, odio eveniet soluta saepe, culpa
              quo enim omnis iusto. Possimus, at numquam beatae non atque?
            </p>
            <div className="  flex items-center">
              <button className="mr-6 h-12 w-36 rounded-md border-2 border-gray-600 font-semibold">
                LEARN MORE
              </button>
              <button className="h-12 w-36 rounded-md border-2 border-orange-500 bg-orange-500 text-sm font-semibold text-white">
                TRY IT FOR FREE
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

const About = () => (
  <TwoCardSection>
    <MyComponent />
  </TwoCardSection>
)

export { About }