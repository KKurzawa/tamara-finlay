import './Header.css'
import Navbar from '../Navbar/Navbar'
import MobileNavbar from '../MobileNavbar/MobileNavbar'

const Header = () => {
    return (
        <main className='header-main flex flex-col h-auto'>
            <header id='Top' className='header-container flex justify-between items-center w-full lg:h-[5rem]'>
                <section className='lg:hidden flex-col relative m-5'>
                    <h1 className='relative text-3xl md:text-5xl lg:text-6xl'>Tamara Finlay</h1>
                    <h2 className='justify-items-center relative text-xl lg:text-3xl lg:my-4'>Stop Motion Animator</h2>
                </section>
                <section className='lg-title-subtitle hidden lg:flex lg:flex-col relative top-[28rem] mx-10'>
                    <h1 className='name text-3xl relative md:text-5xl lg:text-8xl'>Tamara Finlay</h1>
                    <h2 className='sub-name justify-items-center relative text-xl lg:text-6xl lg:my-4'>Stop Motion Animator</h2>
                </section>
                <MobileNavbar />
                <Navbar />
            </header>
            <img className='header-pic' src='/TableMobile2.jpg' />
        </main>
    )
}

export default Header