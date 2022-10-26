import { Fade as Fade2 } from 'react-awesome-reveal';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: 'https://user-images.githubusercontent.com/81238878/153029428-2ee0132e-1eb5-48ed-a506-e624e060eb29.png',
    caption: 'This is our farm do you like it?'
  },
  {
    url: 'https://user-images.githubusercontent.com/81238878/153029428-2ee0132e-1eb5-48ed-a506-e624e060eb29.png',
    caption: 'Hey whats up this is the farm bro'
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
                <div className="image-container">
                  <img
                    className="w-full"
                    src={fadeImage.url} />
                </div>
                {/* <h2 className="absolute top-1/3 left-12 md:left-1/3 mx-auto text-xl md:text-3xl font-extrabold text-white">{fadeImage.caption}</h2> */}
              </div>
            ))}
          </Fade>
        </div>
      </Fade2>
    </>
  )
}

export default Slides