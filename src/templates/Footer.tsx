import { AppConfig } from "../utils/AppConfig"
import React from "react"
import Image from "next/image"

const Footer = () => {
  return (
    <div className='bg-gray-800 h-13  text-white p-1 text-center'>
      <span className='inline-flex items-center text-white mt-2'>
        <Image
          src='/arcglobalchain.png'
          alt='logo'
          width={33}
          height={33}
          style={{ display: "flex", marginRight: "12px" }}
        />
        {AppConfig.site_name}
      </span>
    </div>
  )
}

export { Footer }
