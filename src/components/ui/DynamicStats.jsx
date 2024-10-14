import React from 'react'

const DynamicStats = ({classNames}) => {
  return (
    <div className={`${classNames || "flex"} gap-5 text-start `}>
      <div className="flex flex-col">
        <h1 className="text-primary font-extrabold text-4xl">9 +</h1>
        <h2 className="text-textColor font-semibold w-20">Years of Experience</h2>
      </div>

      {/* Vertical Line */}
      <div className="h-[5.3rem] w-[.05rem] bg-contrastBg/45"/>

      <div className="flex flex-col">
        <h1 className="text-primary font-extrabold text-4xl">231 +</h1>
        <h2 className="text-textColor font-semibold w-20">Satisfied Clients</h2>
      </div>

      {/* Vertical Line */}
      <div className="h-[5.3rem] w-[.05rem] bg-contrastBg/45"/>

      <div className="flex flex-col">
        <h1 className="text-primary font-extrabold text-4xl">602 +</h1>
        <h2 className="text-textColor font-semibold w-20">Finished Projects</h2>
      </div>
    </div>
  )
}

export default DynamicStats;
