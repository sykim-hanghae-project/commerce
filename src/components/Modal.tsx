import { cn } from "@/lib/utils"
import React, { createContext, useContext, useEffect } from "react"

const ModalContext = createContext(null)

interface ModalProps {
  children: React.ReactNode,
  className?: string
}

const Modal = ({ children, className }: ModalProps) => {
  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, [])

  return (
   <ModalContext.Provider value={null}>
    <div className={cn('Modal', className)}>
      {children}
    </div>
   </ModalContext.Provider>
  )
}

interface ModalHeaderProps {
  title: string,
  children: React.ReactNode
}

const Header = ({ title, children }: ModalHeaderProps) => {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error("Header 컴포넌트는 Modal 컴포넌트 아래에서만 사용될 수 있습니다.")
  }

  return (
    <div className="flex p-2 bg-gray-100">
      <p className="min-w-max">{title}</p>
      {children}
    </div>
  )
}

Modal.Header = Header

interface ModalBodyProps {
  children: React.ReactNode
}

const Body = ({ children }: ModalBodyProps) => {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error("Body 컴포넌트는 Modal 컴포넌트 아래에서만 사용될 수 있습니다.")
  }

  return (
    <div className="p-2">
      {children}
    </div>
  )
}

Modal.Body = Body

interface ModalCloseProps {
  children: React.ReactNode,
  onClose: () => void
}

const Close = ({ children, onClose }: ModalCloseProps) => {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error("Close 컴포넌트는 Modal 컴포넌트 아래에서만 사용될 수 있습니다.")
  }

  const onClick = () => {
    onClose()
  }

  return (
    <div className="w-full h-fit flex justify-end" onClick={onClick}>
      <div className="cursor-pointer text-base">
        {children}
      </div>
    </div>
  )
}

Modal.Close = Close

export default Modal