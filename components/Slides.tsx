import { Fade as Fade2 } from 'react-awesome-reveal';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import field from '../public/assets/field.png'

const slideImages = [
  {
    url: 'https://user-images.githubusercontent.com/81238878/202779765-35882aa6-cdaf-4208-88e5-c4cf4a74f307.jpeg',
    caption: 'This is our farm from the top of our hill!'
  },
  {
    url: 'https://user-images.githubusercontent.com/81238878/202780591-edd87b7c-f767-4c7e-a898-6534ca42e182.jpeg',
    caption: 'Our spring flower bloom'
  },
  {
    url: 'https://user-images.githubusercontent.com/81238878/153029428-2ee0132e-1eb5-48ed-a506-e624e060eb29.png',
    caption: 'Dog name jeff is coming to the home later'
  },
]

interface slideImages {
  url: string,
  caption: string
}


const properties = {
  prevArrow: <div className="hover:cursor-pointer" style={{ width: "30px", marginRight: "-30px" }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
  </svg></div>,
  nextArrow: <div className="hover:cursor-pointer" style={{ width: "30px", marginLeft: "-30px" }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
  </svg></div>
}


function Slides() {
  return (
    <>
      <Fade2 damping={1300} triggerOnce>
        <div className="slide-container">
          <Fade {...properties}>
            {slideImages.map((fadeImage, index) => (
              <div className="each-fade" key={index}>
                <div className="image-container flex justify-center">
                  <img className="w-full" src={fadeImage.url} alt="" />
                  <div className="hidden md:flex absolute w-2/5 h-1/7 top-1/3 bg-[#292A2C] bg-opacity-80 flex-col justify-center items-center p-2">
                    <div className='sm: flex items-center text-white flex-col gap-10 text-center border-2 w-full text-xl'>
                      <span className='nanum-brush text-3xl'>Soveringty Barn</span>
                      <span className='cinzel flex justify-center italic font-extrabold text-xl'>
                        Where Couples become Families
                      </span>
                      <span className='nanum-brush cursive text-3xl'>Located In beautiful Mount Jackson Virginia</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </Fade2>
    </>
  )
}

export default Slides