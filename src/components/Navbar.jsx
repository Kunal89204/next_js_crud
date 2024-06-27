import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <div className='flex bg-blue-200 items-center justify-between p-4'>
      <ul className='flex gap-4  '>
        <Link href={'/'}>Home</Link>
        <Link href={'/books'}>Books</Link>
        <Link href={'/addbooks'}>Add  Book</Link>
        <Link href={'/shop'}>Shop</Link>
      </ul>
      <div className='h-10 w-10 rounded-full aspect-square bg-gray-600'>

      </div>
    </div>
  )
}

export default Navbar
