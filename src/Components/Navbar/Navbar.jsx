import './Navbar.css'
import NavLinks from '../../Utils/NavLinks'

const Navbar = () => {
    return (
        <nav className='navbar hidden md:flex gap-3 lg:gap-16 m-5 lg:m-10'>
            {NavLinks.map((item) => (
                <button
                    className='nav-link w-fit h-fit text-2xl lg:text-3xl'
                    onClick={() => setTimeout(() => {
                        const element = document.querySelector(item.id);
                        element?.scrollIntoView({ behavior: 'smooth' })
                    }, 500)}
                    key={item.key}>{item.title}</button>
            ))}
        </nav>

    )
}

export default Navbar