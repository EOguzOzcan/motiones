import type { ReactNode } from "react"

type ISectionProps = {
  title?: string
  description?: string
  yPadding?: string
  children: ReactNode
}

const FooterSection = (props: ISectionProps) => (
  <div className='flex flex-1 flex-col items-center justify-center space-y-5 bg-gray-100'>{props.children}</div>
)

export { FooterSection }
