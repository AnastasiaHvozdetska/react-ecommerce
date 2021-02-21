import React from 'react';
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

const LayoutComponent = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                { children }
            </main>
            <Footer />
        </>
    )
}


export default LayoutComponent
