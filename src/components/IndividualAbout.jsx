import React from 'react'

const IndividualAbout = ({quote, title, description, roles, skills}) => {
  return (
    <div className="min-h-screen h-fit w-screen bg-white z-1 rounded-t-3xl cursor-default shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.3)]">
        <div className="h-full w-3/4 mx-auto pt-[100px]">
          <div className="mb-16">
            <h3 className="text-xl montserrat font-bold uppercase">{quote}</h3>
            <h1 className="text-7xl  font-serif font-semibold ">{title}</h1>
          </div>
          <div className="flex w-full h-4/5 ">
            <div className="w-3/4 h-full pr-[17.5%] text-2xl">
            {description}  
            </div>
            <div className="w-1/4 h-full ">
              <div className="mb-12">
                <div className="text-lg font-bold mb-3">ROLE</div>
                <div className="text-2xl font-light  ">
                    {roles.map((item) => (
                        <div key={item} className="mb-1">{item}</div>
                    ))}
                  
                </div>
              </div>
              <div className="mb-12">
                <div className="text-lg font-bold mb-3">SKILLS</div>
                <div className="text-2xl font-light  ">
                {skills.map((item) => (
                        <div key={item} className="mb-1">{item}</div>
                    ))}
                </div>
              </div>
              <div className="mb-12">
                <div className="text-lg font-bold mb-3">EXPERIENCE</div>
                <div className="text-2xl font-light  ">
                  <div className="mb-1">2022 - 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default IndividualAbout