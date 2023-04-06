import React from 'react'

function Hero() {
  return (
    <div className="w-full sm:pl-[80px] lg:pl-[100px] lg:pr-[350px] pt-[80px] sm:py-10 lg:py-14 border border-black border-opacity-[10%]  bg-herobg bg-repeat dots">
      <div className='sm:mx-10 mx-5 my-10 sm:my-0'>
        <h1 className=' font-Inter font-bold text-[24px] '>Szia, Hai vagyok!</h1>
        <p className='font-Inter mt-2 text-black/60'>Üdvözöllek a személyes blogomon, ahol írásban osztonám meg tapasztalataimat a programozásról és webfejlesztésről. </p>
      </div>


    </div>
  )
}

export default Hero
