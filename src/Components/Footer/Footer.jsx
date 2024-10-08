import './Footer.css'

const Footer = () => {
    const today = new Date();
    return (
        <footer className='footer-main flex flex-col items-center gap-1 py-3'>
            <a className='email-btn text-xl' href='mailto:tfinlayart@gmail.com'>Email Me</a>
            <button onClick={() => setTimeout(() => window.open('https://www.kriskurzawadev.com/', '_blank'), 500)} className='dev-link text-sm md:text-base '>Site Designed and Built by Kris Kurzawa</button>
            <p className='copyright text-sm md:text-base'>Copyright &copy; {today.getFullYear()} Tamara Finlay - All Rights Reserved</p>
        </footer>
    )
}

export default Footer