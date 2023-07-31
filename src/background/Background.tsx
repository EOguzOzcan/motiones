import type { ReactNode } from "react"

type IBackgroundProps = {
  children: ReactNode;
  color: string;
};

const Background = (props: IBackgroundProps) => (
  <div className={`${props.color} relative mx-auto`}>{props.children}</div>
)

export { Background }
