import type { ReactNode } from "react"

type ISectionProps = {
  title?: string
  description?: string
  yPadding?: string
  children: ReactNode
}

const Section = (props: ISectionProps) => (
  <div
    className={`mx-auto w-full px-3 mt-6   ${
      props.yPadding ? props.yPadding : "py-4"
    }`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-5xl font-normal text-gray-700">{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 mb-24 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
)

export { Section }
