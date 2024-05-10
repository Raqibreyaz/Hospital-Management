import React from 'react'

const Hero = ({ title, imageUrl }) => {
    return (
        <div className='w-full sm:min-h-[50vh] min-h-[100vh] gap-[5vmax] flex p-[2vw] max-sm:flex-col justify-between relative z-20'>
            <div className='sm:w-1/2 w-[90%]'>
                <h1 className='capitalize sm:text-[30px]  max-sm:text-[30px] font-bold leading-tight mb-[5vmin] '>{title}</h1>
                <p className='leading-tight sm:text-[15px] max-sm:text-[17px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos, ducimus quisquam iste quis inventore ipsam accusantium iure rerum quaerat sunt voluptatibus reprehenderit laboriosam, exercitationem doloremque totam mollitia. Facere, perferendis voluptatibus ratione voluptatem eius esse nostrum, qui illum deserunt aspernatur perspiciatis blanditiis alias quae explicabo at voluptas aut quaerat nulla?</p>
            </div>
            <div className='sm:w-1/2 w-full relative sm:h-full min-h-[50vh]' >
                <img src={imageUrl} alt="hero" className='sm:w-[35vmin] sm:h-[70vmin] h-[130vmin] w-[90vmin] mx-auto transition-transform translate-y-[10%] animate-spin ' style={{ animationDuration: "2s", animationDirection: "alternate" }} />
            </div>
        </div>
    )
}

export default Hero
