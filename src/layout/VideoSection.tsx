import type { ReactNode } from "react"

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
};

const VideoSection = (props: ISectionProps) => (
  <div
    className={`mx-auto flex relative  w-full justify-center object-cover  ${
      props.yPadding ? props.yPadding : ""
    }`}
  >
    {props.children}
  </div>
)

export { VideoSection }
