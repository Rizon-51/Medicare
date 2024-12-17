// function Banner() {
//   return (
//     <div className="relative bg-blue-600 h-[500px]">
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
//         <div className="text-white">
//           <h1 className="text-5xl font-bold mb-4">Your Health is Our Priority</h1>
//           <p className="text-xl mb-8">Professional care with a personal touch</p>
//           <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
//             Book Appointment
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Banner



import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";


const slides = [
  {
    img: "https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text1: "Your Health, Our Priority",
    text2: "Your Health, Our Priority",
  },
  {
    img: "https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text1: "Empowering Healthier Lives",
    text2: "Expert Solutions Tailored for You",
  },
  {
    img: "https://images.pexels.com/photos/6129681/pexels-photo-6129681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text1: "Where Healing Begins",
    text2: "Advanced Care, Delivered with Love",
  },

  {
    img: "public/6239996803281962798.jpg",
    text1: "Caring Beyond Medicine",
    text2: "Building Trust, One Patient at a Time",
  },

  {
    img: "public/6239996803281962799.jpg",
    text1: "Innovative Healthcare, Close to You",
    text2: "Modern Solutions for a Healthier Tomorrow",
  },

  {
    img: "public/6239996803281962800.jpg",
    text1: "Partnering in Your Recovery",
    text2: "Personalized Attention, Trusted Expertise",
  },
];

function ShoppingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const slides = [img1, img2, img3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides]);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            } absolute top-0 left-0 w-full h-full transition-opacity duration-1000`}
          >

            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>


            <div className="absolute inset-0 flex flex-col items-center mt-36 space-y-2 text-center font-MyFont">
              <div className="flex items-center mb-6 gap-3">
                <p className="text-7xl font-bold text-white">{slide.text1}</p>
                <hr class=" w-56 bg-white border-2 " />
              </div>
              <div className="flex items-center gap-3">
                <hr class=" w-56 bg-white border-2 " />
                <p className="text-3xl text-white">{slide.text2}</p>
              </div>
            </div>
          </div>
        ))}


        <Button
          onClick={() =>
            setCurrentSlide(
              (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
            )
          }
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 z-20"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>


        <Button
          onClick={() =>
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
          }
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 z-20"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div>

    </div>
  );
}

export default ShoppingHome;
