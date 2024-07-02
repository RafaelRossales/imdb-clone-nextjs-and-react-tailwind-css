import React from 'react'
import NavBarItem from './NavBarItem'

export default function NavBar() {
  return (
    <div className='flex flex-row bg-amber-100 dark:bg-gray-600 p-4 lg:text-lg justify-center gap-3'>
        <NavBarItem title="Trending" param="fetchTranding"/>
        <NavBarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}
