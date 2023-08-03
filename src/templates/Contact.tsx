import { FooterSection } from "@/layout/FooterSection"
// import { useState } from "react"
import { useForm } from "react-hook-form"

type FormValues = {
  Name: string
  Email: string
  "Phone Number": string
  Message: string
}

const Contact = () => {
  // const [email, setEmail] = useState("")
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => console.log(data)

  // const handleSendEmail = async () => {
  //   const response = await fetch("/api/send", {
  //     method: "POST", // Specify the HTTP method used by your API route
  //     body: JSON.stringify({ email })
  //   })
  //   if (response.ok) {
  //     const data = await response.json()
  //     console.log(data)
  //   }
  // }

  return (
    <FooterSection>
      <div className='bg-gray-100  p-4'>
        <div className='grid sm:grid-cols-2 grid-cols-1 mt-10 '>
          <div className=' grid grid-rows-5'>
            <h4 className='text-4xl font-normal text-orange-500'>Get In Touch</h4>
            <div className='row-span-4 grid grid-cols-6 mt-10 '>
              <div className='col-span-3  '>
                <h2 className='text-2xl text-gray-800'>
                  Let's <span className='font-normal text-orange-500'>Contact</span> Us
                </h2>
                <p className='text-lg text-gray-800'>Let Us Know How We Can Help Your Business Succeed</p>
              </div>
              <div className='col-span-2'>
                <div>
                  <span className='font-normal text-orange-500'>Email:</span> info@arcglobalchain.com
                </div>
                <div>
                  <span className='font-normal text-orange-500'>Location:</span> Başarı Sk. No:3/3, Bakırköy, İstanbul,
                  Turkey
                </div>
                <div>
                  <span className='font-normal text-orange-500'>Tel No:</span> +90 (212) 660 8457
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-4'>
                <input
                  type='text'
                  placeholder='Name'
                  {...register("Name", { required: true })}
                  className='w-full p-2 border rounded focus:outline-none focus:border-orange-500 bg-gray-300 text-orange-500 placeholder:text-gray-500'
                />
              </div>
              <div className='mb-4'>
                <input
                  type='email'
                  placeholder='Email'
                  {...register("Email", { required: true })}
                  className='w-full p-2 border rounded focus:outline-none focus:border-orange-500 bg-gray-300 text-orange-500 placeholder:text-gray-500'
                />
              </div>
              <div className='mb-4'>
                <input
                  type='tel'
                  placeholder='Phone Number'
                  {...register("Phone Number", { required: true })}
                  className='w-full p-2 border rounded focus:outline-none focus:border-orange-500 bg-gray-300 text-orange-500 placeholder:text-gray-500'
                />
              </div>
              <div className='mb-4'>
                <textarea
                  {...register("Message", { required: true })}
                  placeholder='Message'
                  rows={4}
                  className='w-full p-2 border rounded focus:outline-none focus:border-orange-500 bg-gray-300 text-orange-500 placeholder:text-gray-500'
                />
              </div>
              <div className='text-right'>
                <button
                  type='submit'
                  className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none '
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </FooterSection>
  )
}

export { Contact }
