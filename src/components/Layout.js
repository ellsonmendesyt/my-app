import React from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'
const Layout = ({children}) => {
    return (
        <LayoutWrapper>
            <Navbar/>
            <main className="container">
                {children}
            </main>
        </LayoutWrapper>
    )
}



const LayoutWrapper = styled.div`
background-color:#232F3E;
width:100%;

.container{
    max-width:1000px;
    width:100%;
    margin: 0 auto;
    background-color: #131921;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

`

export default Layout
