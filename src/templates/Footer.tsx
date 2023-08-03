import { AppConfig } from "../utils/AppConfig"
import React from "react"
import Image from "next/image"

const Footer = () => {
  return (
    <div className='bg-gray-800 p-4 text-white text-center'>
      <span className='inline-flex items-center text-white'>
        <Image
          src='/arcglobalchain.png'
          alt='logo'
          width={44}
          height={44}
          style={{ display: "flex", marginRight: "12px" }}
        />
        {AppConfig.site_name}
      </span>
    </div>
  )
}

export { Footer }
