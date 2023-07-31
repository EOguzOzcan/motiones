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
      <div className='flex flex-col text-center text-white'>
        <div className='my-5 text-right'>
          <label className=' mr-4 '>GET THE NEWSLETTER</label>
          <input
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            className='bg-gray-50 border border-gray-300 text-gray-900  focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
          <button
            type='button'
            className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-sm px-5 py-0.4'
            onClick={handleSendEmail}
          >
            Light
          </button>
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
