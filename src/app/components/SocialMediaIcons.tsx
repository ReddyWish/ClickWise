import Link, { LinkProps } from 'next/link'
import Image from "next/image";

export function SocialMediaIcons() {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      <Link href='https://www.linkedin.com/in/irina-shuvatova-807159247/' target='_blank' className='hover:scale-110 transition-transform duration-400 ease-in-out transform hover:cursor-pointer'>
          <Image src='/linkedin.png' alt='linkedin icon' width={20} height={20}></Image>
      </Link>

      <Link href='https://www.instagram.com/raspevalchik/' target='_blank' className='hover:scale-110 transition-transform duration-400 ease-in-out transform hover:cursor-pointer'>
        <Image src='/twitter.png' alt='twitter icon' width={20} height={20}></Image>
      </Link>

      <Link href='https://www.instagram.com/raspevalchik/' target='_blank' className='hover:scale-110 transition-transform duration-400 ease-in-out transform hover:cursor-pointer'>
        <Image src='/instagram.png' alt='instagram icon' width={20} height={20}></Image>
      </Link>

      <Link href='https://www.facebook.com/irina.raspevalova?locale=en_GB' target='_blank' className='hover:scale-110 transition-transform duration-400 ease-in-out transform hover:cursor-pointer'>
        <Image src='/facebook.png' alt='facebook icon' width={20} height={20}></Image>
      </Link>
    </div>
  )
}