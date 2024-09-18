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
            <article id="Animations" className='video-header-container flex justify-center w-full'>
                <h2 className='video-header justify-items-center p-2 my-2 lg:my-4 text-2xl lg:text-3xl '>Animations</h2>
            </article>
            <div className='animations-main-container relative'>
                <article className='animations-main flex flex-col items-center py-5 h-[19rem] md:h-[24.5rem]'>
                    <main className='video-main relative md:px-[4.5rem] w-[90%] h-[14rem] md:w-[80%] md:h-[20rem] lg:w-[45%] max-w-7xl rounded-2xl'>
                        <article className='outer-video-container w-full h-full relative rounded-2xl'>
                            <section
                                className='inner-video-container flex relative w-full h-full overflow-hidden rounded-2xl' >
                                {videoInfo.map((item) => (
                                    <>
                                        <iframe
                                            className='img-slider-img rounded-2xl'
                                            // this is the problem
                                            // style={{ translate: `${-100 * imageIndex}%` }}
                                            style={imageIndex === item.key ? { display: 'block' } : { display: 'none' }}
                                            key={item.key}
                                            src={item.url}
                                            allow="autoplay; mozallowfullscreen; webkitallowfullscreen; fullscreen; picture-in-picture; clipboard-write"
                                            title={item.title}
                                        >
                                        </iframe>
                                        <script src="https://player.vimeo.com/api/player.js"></script>
                                    </>
                                ))}
                            </section>
                            <button
                                className='img-slider-btn absolute top-24 md:top-32 left-[-2rem] md:left-[-4.25rem] md:ml-1 rounded-full'
                                onClick={showPrevImage}>
                                <ArrowBigLeft />
                            </button>
                            <button
                                className='img-slider-btn absolute top-24 md:top-32 right-[-2rem] md:right-[-4.25rem] md:mr-1 rounded-full'
                                onClick={showNextImage}>
                                <ArrowBigRight />
                            </button>
                            <article
                                className='img-slider-dot-btn-container flex justify-center gap-3 pt-2'>
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
            </div>
        </>
    )
}

export default Video

