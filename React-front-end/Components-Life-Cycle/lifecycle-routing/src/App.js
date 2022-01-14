import React from 'react';
import AppRouting from './components/app_routing';
import Footer from './components/footer';
import Lifecycle from "../src/components/lifecycle";


const App = () => {
    return (
        <>
         {/* <AppRouting/>
         <Footer/> */}
        <Lifecycle loggedIn = "false"/>
        </>    
    )
}

export default App;
