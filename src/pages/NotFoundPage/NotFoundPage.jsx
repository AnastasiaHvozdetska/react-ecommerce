import React from 'react'
import LayoutComponent from '../../components/Shared/LayoutComponent/LayoutComponent'

const NotFoundPage = () => {
    const style = {
        fontWeight: 'bold',
        textAlign: 'center'
    }
    return (
        <LayoutComponent>
            <p style={style}>Unfortunately we can't find that page</p>
        </LayoutComponent>
    )
}

export default NotFoundPage
