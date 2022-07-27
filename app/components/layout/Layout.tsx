import { FunctionComponent } from 'react';
import Header from "./Header";
import Footer from "./Footer";

const Layout: FunctionComponent = ({ children }: any) => (
  <div className="layout">
    <Header/>
        { children }
    {/*<Footer/>*/}
  </div>
);

export default Layout;
