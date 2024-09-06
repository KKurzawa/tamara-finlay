import './Header.css'
import Navbar from '../Navbar/Navbar'
import MobileNavbar from '../MobileNavbar/MobileNavbar'

const Header = () => {
    return (
        <main className='header-main flex flex-col h-auto'>
            <header id='Top' className='header-container flex justify-between items-center w-full'>
                <section className='flex-col relative m-5'>
                    <h1 className='text-3xl md:text-5xl lg:text-6xl relative'>Tamara Finlay</h1>
                    <h2 className='justify-items-center text-xl lg:text-3xl lg:my-4 relative'>Stop Motion Animator</h2>
                </section>
                <MobileNavbar />
                <Navbar />
            </header>
            <img className='header-pic' src='/TableMobile2.jpg' />
        </main>
    )
}

export default Header