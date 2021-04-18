import React from 'react'

import { BrandLogo } from '../ui/BrandLogo'
import { HomeNav } from '../ui/HomeNav'

export const Header = () => (
  <header
    style={{ height: '140px' }}
    className='flex justify-between items-center'
  >
    <BrandLogo />
    <HomeNav />
  </header>
)