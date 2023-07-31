import React, { ReactNode } from "react"

export function Carousel( { children }: {children: ReactNode}){
  
  return (
    <div className="mt-11 mb-32 pl-32">
        <div className="grid grid-flow-col auto-cols-[24%]">
            {children}
        </div>
      
    </div>
  )
};
