import Image from "next/image"
// import { AppConfig } from "../utils/AppConfig"
import { Link as ScrollLink } from "react-scroll"

type ILogoProps = {
  xl?: boolean
}

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl ? "font-semibold text-3xl" : "font-semibold text-xl"

  return (
    <span>
      {/* <svg
        className="mr-1 stroke-current text-primary-500"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <rect x="3" y="12" width="6" height="8" rx="1" />
        <rect x="9" y="8" width="6" height="12" rx="1" />
        <rect x="15" y="4" width="6" height="16" rx="1" />
        <path d="M4 20h14" />
      </svg> */}
      <ScrollLink
        offset={-50}
        to='home'
        smooth={true}
        duration={1000}
        className={`flex justify-center items-center md:ml-0 text-white ${fontStyle}`}
      >
        <Image src='/motioneslogo.png' alt='logo' width={225} height={40} style={{ display: "flex" }} />

        {/* <h1 className='text-3xl md:text-3.5xl text-white font-bold font-fontHind'>{AppConfig.site_name}</h1> */}
      </ScrollLink>
    </span>
  )
}

export { Logo }
