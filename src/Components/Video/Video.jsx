import './Video.css'
import { useState } from 'react'
import { ArrowBigLeft, ArrowBigRight, CircleDot, Circle } from 'lucide-react'
import videoInfo from '../../Utils/VideoInfo'


const Video = () => {
    const [imageIndex, setImageIndex] = useState(0)

    function showNextImage() {
        setImageIndex(index => {
            if (index === videoInfo.length - 1) return 0
            return index + 1
        })
    }

    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0) return videoInfo.length - 1
            return index - 1
        })
    }

    return (
        <>
            <article className='video-header-container flex justify-center w-full'>
                <h2 className='video-header justify-items-center p-2 text-2xl lg:text-3xl my-2 lg:my-4'>Animations</h2>
            </article>
            <article className='animations-main flex flex-col justify-center items-center pt-5 pb-12'>
                <main className='video-main relative px-10 md:px-[4.5rem] rounded-2xl w-[90%] lg:w-[65%] max-w-7xl'>
                    <article className='outer-video-container w-full h-full relative rounded-2xl'>
                        <section
                            className='inner-video-container flex relative w-full h-full overflow-hidden rounded-2xl' >
                            {videoInfo.map((item) => (
                                <>
                                    <iframe
                                        className='img-slider-img rounded-2xl'
                                        style={{ translate: `${-100 * imageIndex}%` }}
                                        key={item.key}
                                        src={item.url}
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title={item.title}
                                    >
                                    </iframe>
                                    <script src="https://player.vimeo.com/api/player.js"></script>
                                </>
                            ))}
                        </section>
                        <button
                            className='img-slider-btn md:ml-1 left-[-2rem] md:left-[-4.25rem]'
                            onClick={showPrevImage}>
                            <ArrowBigLeft />
                        </button>
                        <button
                            className='img-slider-btn md:mr-1 right-[-2rem] md:right-[-4.25rem]'
                            onClick={showNextImage}>
                            <ArrowBigRight />
                        </button>
                        <article
                            className='img-slider-dot-btn-container flex gap-3 my-2 absolute left-[50%] translate-x-[-50%]'>
                            {videoInfo.map((_, index) => (
                                <button
                                    onClick={() => setImageIndex(index)}
                                    key={index}
                                    className='img-slider-dot-btn'
                                >{index === imageIndex ? <CircleDot /> : <Circle />}</button>
                            ))}
                        </article>
                    </article>
                </main >
            </article >
        </>
    )
}

export default Video

