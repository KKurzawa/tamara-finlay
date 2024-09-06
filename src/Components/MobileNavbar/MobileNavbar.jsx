import './MobileNavbar.css'
import { Fade as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    console.log(isOpen)

    function navigateToBiography() {
        setTimeout(() => {
            setIsOpen(false)
            const element = document.getElementById('Biography')
            element?.scrollIntoView({ behavior: 'smooth' })
        }, 500)
    }

    function navigateToAnimations() {
        setTimeout(() => {
            setIsOpen(false)
            const element = document.getElementById('Animations')
            element?.scrollIntoView({ behavior: 'smooth' })
        }, 500)
    }

    function navigateToContact() {
        setTimeout(() => {
            setIsOpen(false)
            const element = document.getElementById('Contact')
            element?.scrollIntoView({ behavior: 'smooth' })
        })
    }
    return (
        <main className='mobile-nav-main'>
            <Hamburger
                toggled={isOpen}
                toggle={setIsOpen}
                direction='right'
                size={35}
                className='hamburger'
            />
            {isOpen &&
                <motion.nav
                    transition={{ duration: 1, type: 'spring', stiffness: 50 }}
                    initial={{ top: '-15rem', left: 0 }}
                    animate={{ top: '5rem' }}
                    exit={{ top: '-15rem' }}
                    className='mobile-nav-dropdown absolute z-20 w-full'
                    id='dropdown'>
                    <ul className='mobile-nav flex flex-col gap-3 w-full py-5 text-xl'>
                        <motion.li
                            initial={{ left: '100%', opacity: 0 }}
                            animate={{ left: '6%', opacity: 1 }}
                            exit={{ left: '100%', opacity: 0 }}
                            transition={{ duration: .2, delay: .5 }}
                            className='mobile-nav-link w-fit rounded-xl relative'><button className='w-fit' onClick={navigateToBiography}>Biography</button></motion.li>
                        <motion.li
                            initial={{ left: '100%', opacity: 0 }}
                            animate={{ left: '6%', opacity: 1 }}
                            exit={{ left: '100%', opacity: 0 }}
                            transition={{ duration: .2, delay: .5 }}
                            className='mobile-nav-link w-fit rounded-xl relative'><button className='w-fit' onClick={navigateToAnimations}>Animations</button></motion.li>
                        <motion.li
                            initial={{ left: '100%', opacity: 0 }}
                            animate={{ left: '6%', opacity: 1 }}
                            exit={{ left: '100%', opacity: 0 }}
                            transition={{ duration: .2, delay: .9 }}
                            className='mobile-nav-link w-fit rounded-xl relative'><button className='w-fit' onClick={navigateToContact}>Contact</button></motion.li>
                    </ul>


                </motion.nav>
            }
        </main>
    )
}

export default MobileNavbar