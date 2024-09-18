import Image from 'next/image'
import logo from '/public/logo.svg'
import React from 'react'

function Header() {
  return (
    <div>
      <Image src={logo} width={160} height={100} alt="Logo" />
    </div>
  )
}

export default Header
