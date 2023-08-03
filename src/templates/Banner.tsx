import Image from "next/image"
import React, { useEffect, useState } from "react"

import { TwoCardSection } from "@/layout/TwoCardSection"

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
    <div className='mx-auto flex w-full'>
      {isScreenMd ? (
        <>
          <div className='flex flex-1 flex-col items-center justify-center space-y-5 bg-gray-100  '>
            <h4 className='  w-[600px] text-left text-4xl font-extrabold leading-9 text-gray-700'>Sugar</h4>
         
          	<ul className=" flex flex-col gap-y-2 list-disc">

<li className='w-[500px] text-left text-lg  leading-7 '>Obtained from natural and pure sunflowers.</li>

<li className='w-[500px] text-left text-lg  leading-7'>High nutritional value and natural fatty acids.</li>

<li className='w-[500px] text-left text-lg  leading-7'>Suitable for a healthy diet.</li>

<li className='w-[500px] text-left text-lg  leading-7'>Available in various packaging sizes to cater to customer preferences.</li>

</ul>
<div className='flex  w-[500px] items-center'>
              <button className='h-12 w-36 rounded-md border-2 border-orange-500 bg-orange-500 text-sm font-semibold text-white'>
                Speficitions
              </button>
            </div>
          </div>
          <div>
            <Image src='/left.png' alt='human work' width={950} height={200} style={{ display: "flex" }} />
          </div>
        </>
      ) : (
        <>
          <div className='flex  flex-col items-center justify-center space-y-5 bg-gray-100 px-5 py-3 md:p-0'>
            <h1 className=' text-left text-4xl font-light leading-9 text-gray-800 '>
              Validate your Business Idea and Reach Product Market Fit
            </h1>
            <p className=' text-left text-lg   leading-7'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere veritatis inventore eum, cupiditate esse
              debitis consectetur nisi harum. Tempore, assumenda ducimus vero totam labore. Ipsam, eos odit eaque,
              voluptatum minima, odio eveniet soluta saepe, culpa quo enim omnis iusto. Possimus, at numquam beatae non
              atque?
            </p>
            <div className='  flex items-center'>
              <button className='mr-6 h-12 w-36 rounded-md border-2 border-gray-600 font-semibold'>LEARN MORE</button>
              <button className='h-12 w-36 rounded-md border-2 border-orange-500 bg-orange-500 text-sm font-semibold text-white'>
                TRY IT FOR FREE
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

const Banner = () => (
  <TwoCardSection>
    <MyComponent />
  </TwoCardSection>
)

export { Banner }
