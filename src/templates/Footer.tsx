import { FooterSection } from "@/layout/FooterSection"
import { useState } from "react"

const Footer = () => {
  const [email, setEmail] = useState("")

  const handleSendEmail = async () => {
    const response = await fetch("/api/send", {
      method: "POST", // Specify the HTTP method used by your API route
      body: JSON.stringify({ email })
    })
    if (response.ok) {
      const data = await response.json()
      console.log(data)
    }
  }

  return (
    <FooterSection>
      <div className='flex flex-col text-center text-gray-800' id="footer">
        <div className='my-12 self-end'>
          <div className='flex flex-row '>
            <div className='relative '>
              <input
                type='text'
                id='hs-leading-icon'
                name='hs-leading-icon'
                className='py-3 px-4 pl-11 block w-full border-2 border-red-700 shadow-sm rounded-l-lg text-lg placeholder:text-gray-800 focus:z-10 focus:border-blue-500 focus:ring-blue-500 bg-gray-100'
                placeholder='Please enter your email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              className='py-3 px-4 block rounded-r-lg border-red-700 bg-red-700 text-sm font-semibold text-white'
              onClick={handleSendEmail}
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className='grid grid-cols-3 mt-5 justify-center' style={{ backgroundColor: "bg-gray-100" }}>
          <div>
            600.000 users registered since January. We've created the product that will help your startup get better
            marketing results.
          </div>
          <div>
            <div className='flex flex-col pb-16 w-1/3 mx-auto'>
              <div className='basis-1/3 '>Email</div>
              <div className='basis-1/3 '>Location</div>
              <div className='basis-1/3 '>Tel No</div>
            </div>
          </div>
          <div>
            600.000 users registered since January. We've created the product that will help your startup get better
            marketing results.
          </div>
        </div>
      </div>
    </FooterSection>
  )
}

export { Footer }
