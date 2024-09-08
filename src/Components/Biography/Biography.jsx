import './Biography.css'
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaVimeo } from "react-icons/fa";
import Tamara from '/Tamara2.jpg'

const Biography = () => {
    return (
        <>
            <header id='Biography' className='bio-header-container flex justify-center relative w-full'>
                <h2 className='bio-header justify-items-center relative w-fit p-2 lg:my-4 my-2 text-2xl lg:text-3xl '>Biography</h2>
            </header>
            {/* medium */}
            <main id='Biography' className='medium-main-bio lg:hidden relative z-10 pt-6 px-4 md:pr-8 md:pl-8 lg:mb-10'>
                <article className='medium-pic-container relative z-10 w-full'>
                    <section className='medium-profile-pic-container flex justify-center relative float-left w-[10rem] md:w-[15rem] h-[10rem] md:h-[15rem] md:mb-0 mb-2'>
                        <img className='medium-profile-pic relative' src={Tamara} />
                    </section>
                    <section className='medium-bio-container relative z-10'>
                        <h2 className='medium-bio relative z-10 text-lg md:text-2xl leading-snug'>Tamara Finlay was born in Dearborn, MI, in 1979 and brought up by grandparents who emigrated to the U.S. from Ukraine after World War II. Growing up, she was scolded for “drawing ponies” when there were “more important” things to do. Her school career was spent taking academic classes, while sneaking in as much art as she could. The result: a bachelor’s degree in Slavic languages, a few credits shy of a fine arts minor from Brooklyn College. Since then, she has been a teacher, lead vocalist in three bands, studied stop motion, had a baby, been a refugee caseworker, and, in 2022, was diagnosed with ADHD.  In 2024 Tamara was awarded the <span>
                            <button
                                className='medium-kresge-link h-fit  px-1 pb-1 rounded-md underline underline-offset-1'
                                onClick={() => setTimeout(() => {
                                    window.open('https://kresgeartsindetroit.org/artist/tamara-finlay/', '_blank')
                                }, 500)}
                            >Kresge Artist Fellowship</button>
                        </span> for animation.</h2>
                    </section>
                    <section className='medium-icon-container flex justify-center md:justify-start gap-2 rounded-2xl'>
                        <button className='medium-icon-btn' onClick={() => setTimeout(() => {
                            window.open('https://www.google.com/', '_blank')
                        }, 500)}><FaInstagramSquare className='medium-bio-icon' /></button>
                        <button className='medium-icon-btn' onClick={() => setTimeout(() => {
                            window.open('https://www.google.com/', '_blank')
                        }, 500)}><FaYoutube className='medium-bio-icon' /></button>
                        <button className='medium-icon-btn' onClick={() => setTimeout(() => {
                            window.open('https://www.google.com/', '_blank')
                        }, 500)}><FaVimeo className='medium-bio-icon' /></button>
                    </section>
                </article>
            </main >
            {/* large */}
            <main className='main-bio hidden relative lg:grid grid-cols-3 justify-center items-center justify-items-center gap-8 pt-10 pr-10 pl-10 pb-10'>
                <article className='image-container flex col-span-1'>
                    <img className='profile-pic p-5' src={Tamara} />
                </article>
                <article className='bio-container col-span-2 flex flex-col justify-center items-start w-full h-full gap-3 rounded-2xl'>
                    <section className='bio-inner-container p-5 w-full h-auto rounded-2xl'>
                        <p className='bio p-3 text-xl'>Tamara Finlay was born in Dearborn, MI, in 1979 and brought up by grandparents who emigrated to the U.S. from Ukraine after World War II. Growing up, she was scolded for “drawing ponies” when there were “more important” things to do. Her school career was spent taking academic classes, while sneaking in as much art as she could. The result: a bachelor’s degree in Slavic languages, a few credits shy of a fine arts minor from Brooklyn College. Since then, she has been a teacher, lead vocalist in three bands, studied stop motion, had a baby, been a refugee caseworker, and, in 2022, was diagnosed with ADHD.  In 2024 Tamara was awarded the <span>
                            <button
                                className='kresge-link h-fit px-1 pb-1 underline underline-offset-2  rounded-lg'
                                onClick={() => setTimeout(() => {
                                    window.open('https://kresgeartsindetroit.org/artist/tamara-finlay/', '_blank')
                                }, 500)}
                            >Kresge Artist Fellowship</button>
                        </span> for animation.</p>
                    </section>
                    <section className='icon-container flex justify-start gap-2 rounded-2xl'>
                        <button className='icon-btn' onClick={() => setTimeout(() => {
                            window.open('https://www.google.com/', '_blank')
                        }, 500)}><FaInstagramSquare className='bio-icon' /></button>
                        <button className='icon-btn' onClick={() => setTimeout(() => {
                            window.open('https://www.google.com/', '_blank')
                        }, 500)}><FaYoutube className='bio-icon' /></button>
                        <button className='icon-btn' onClick={() => setTimeout(() => {
                            window.open('https://www.google.com/', '_blank')
                        }, 500)}><FaVimeo className='bio-icon' /></button>
                    </section>

                </article>
            </main>
        </>
    )
}

export default Biography