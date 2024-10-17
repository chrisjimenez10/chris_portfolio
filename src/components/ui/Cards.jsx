import React from 'react'

const Cards = ({title, style, colorVariants, projects}) => {

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-5">
        {projects.map(({id, title, image, liveSite, gitHub})=>(
            <div key={id} className={`h-[32rem] flex items-start justify-center sm:w-[570px] w-[80vw] ${colorVariants[style].bg} rounded-2xl transition-all hover:scale-105`}>
                <div className="relative flex items-center justify-center sm:w-[590px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] m-5 p-5 bg-black rounded-2xl">
                    <div className={`relative w-full h-full overflow-hidden lg:rounded-3xl bg-black`}>
                        <img src={image} alt={title} className="absolute bottom-0 rounded-2xl px-5"/>                       
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Cards;
