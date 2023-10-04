import Navbar from "./Navbar.jsx"


const Layout = ({ children }) => {

    return (
        <div className="w-auto max-w-[1440px] flex flex-col justify-center mx-auto">
            <div className="fixed top-0 z-50 w-full max-w-[1440px] p-3 ">
                <Navbar />   
            </div>
            <div className="z-0 mt-[6rem] desktop-mode:mt-[7rem] max-w-[1440px] p-3 w-full">
             {children}   
            </div>
            

        </div>
    )

}

export default Layout