import { styled } from '@linaria/react'
import React from 'react'

const NavStyles = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    `

function Nav() {
  return (
    <div className={NavStyles} >Nav</div>
  )
}

export default Nav