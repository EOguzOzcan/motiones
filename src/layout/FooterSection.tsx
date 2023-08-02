import type { ReactNode } from "react"

type ISectionProps = {
  title?: string
  description?: string
  yPadding?: string
  children: ReactNode
}

const FooterSection = (props: ISectionProps) => (
  <div className={"mx-auto max-w-screen-xl px-3"}>
    {(props.title || props.description) && (
      <div className='mb-12 text-center'>
        {props.title && <h2 className='text-4xl font-bold text-gray-900'>{props.title}</h2>}
        {props.description && <div className='mt-4 text-xl md:px-20'>{props.description}</div>}
      </div>
    )}

    {props.children}
  </div>
)

export { FooterSection }
