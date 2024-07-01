"use client"
import React, { useState } from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import {useTheme} from 'next-themes'

export default function Switcher() {

  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
        <div>
        {
          mounted && (currentTheme === 'dark'? (
              <MdDarkMode  className='text-2xl cursor-pointer hover:text-amber-500' onClick={()=>setTheme('light')}/>           
            ):(
              <MdLightMode  className='text-2xl  cursor-pointer hover:text-amber-500' onClick={()=>setTheme('dark')}/>
            ))
          }
        </div>
    </div>
  )
}
