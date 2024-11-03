import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-800 text-white text-center p-4 relative bottom-0 w-dvw'>
      <div className='flex justify-center items-center overflow-visible'>
        <SocialIcon
          className='mx-2 transform transition-transform duration-100 hover:scale-125'
          url='https://linkedin.com/in/mark-schulist-65090a286'
        />
        <SocialIcon
          className='mx-2 transform transition-transform duration-100 hover:scale-125'
          url='https://github.com/mschulist'
        />
        <SocialIcon
          className='mx-2 transform transition-transform duration-100 hover:scale-125 overflow-visible'
          url='mailto:mschulist2@gmail.com'
        />
        <div className='mx-2'> &copy; 2024 Mark Schulist </div>
      </div>
    </footer>
  )
}

export default Footer
