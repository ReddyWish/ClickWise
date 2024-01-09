import {SocialMediaIcons} from "@/components/SocialMediaIcons";
export function Footer() {
  return (
    <footer className='border-t border-gray-500 p-15 flex justify-between items-center max-md:flex-col max-md:text-center mt-1 '>
      <SocialMediaIcons/>
      <div>
        <p className='font-playfair font-semibold text-2xl text-white'>Irina Shuvatova</p>
        <p className='font-playfair text-md text-white'>©{new Date().getFullYear()} Shuvatova. All rights reserved</p>
      </div>
    </footer>
  )
}