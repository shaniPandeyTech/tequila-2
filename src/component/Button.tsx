'use client'
import { ReactNode } from 'react'
interface ButtonProps {
  text: string
  extraClasses?: string
  onClick: () => void
}

const Button = ({ text, extraClasses, onClick }: ButtonProps) => {
  return (
    <button
      type={'button'}
      className={`tq__button ${extraClasses ? extraClasses : ''}`}
      onClick={onClick}
    >
      <div className="tq__button__text">{text}</div>
      <div className="tq__button__layer">
        <div className="tq__button__layer-text">{text}</div>
        <div className="tq__button__layer-background"></div>
      </div>
    </button>
  )
}

export default Button
