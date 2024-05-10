import React from 'react'

function Biography({ imageUrl }) {
  return (
    <div className='p-[2vw] w-full flex max-sm:flex-col max-sm:min-h-[100vh]'>
      <div className='w-1/2 max-sm:w-full max-sm:h-[100vw]'>
        <img src={imageUrl} className='h-full w-full' />
      </div>
      <div className='w-1/2 max-sm:w-full text-[2.7vw] max-sm:text-[20px]'>
        <h3 className='text-[0.75em] max-sm'>Biography</h3>
        <h1 className='font-bold text-[1em]'>who we are</h1>
        <p className='text-[0.7em]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero qui voluptatum quos quasi vel saepe assumenda, aliquam provident consectetur voluptatibus libero commodi ex nulla natus unde dolores, suscipit ab ipsam, dignissimos dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iure excepturi est mollitia officia obcaecati voluptatum eos asperiores. Repudiandae cumque odit placeat ea consequuntur enim.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse dolores, fugiat repellendus voluptas magni minima odit at, nostrum deleniti quas? Amet, quia? Quo minus ducimus impedit culpa amet, beatae recusandae exercitationem facere eligendi quasi deleniti eum eius pariatur nostrum at maxime facilis? Itaque eveniet minus sit consequuntur, iusto voluptatum?
        </p>
      </div>
    </div>
  )
}

export default Biography
