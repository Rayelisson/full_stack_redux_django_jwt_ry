import Navbar from "./Navbar"
import { Helmet } from 'react-helmet'

const Layout = ({title, children, content}) => (
     <>
      <Helmet>
         <title>{title}</title>
         <meta name="description" content={content}/>
      </Helmet>
      <Navbar/>
      <div className="container mt-5">{children}</div>
     </>
    )

export default Layout