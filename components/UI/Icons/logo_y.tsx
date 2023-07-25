import { SVGProps } from "react"

export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      {...props}
    >
      <path fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M20 20 Q32 8 44 20 Q32 26 32 52" />
    </svg>
  )
}
