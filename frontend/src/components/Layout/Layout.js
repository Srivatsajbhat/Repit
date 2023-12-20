import React from 'react'
import Header from './Header'
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, keywords, author }) => {
    const pageStyle = {
        background: 'url(/assets/background.jpg) center/cover no-repeat',
        minHeight: '100vh',
        padding: '0',
      };

    return (
        <div className='formation' style={pageStyle}>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: '70vh' }}>
                {children}
            </main>
        </div>
    )
}

Layout.defaultProps = {
    title: "Garage app",
    description: "Garage application",
    keywords: "Cars,vehicles,garage",
    author: "webdev"
}

export default Layout