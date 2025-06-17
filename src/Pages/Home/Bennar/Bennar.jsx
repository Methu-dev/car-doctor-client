import { useEffect, useState } from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const Bannar = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative overflow-hidden w-full h-[600px] rounded-xl shadow-lg">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full flex-shrink-0 relative h-[600px]">
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay Text */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] text-white flex items-center pl-16">
              <div className="space-y-7 max-w-xl">
                <h1 className="text-6xl font-bold">
                  Affordable Price For Car Servicing
                </h1>
                <p className="text-lg">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form.
                </p>
                <div className="flex gap-4">
                  <button className="btn btn-secondary">Discover More</button>
                  <button className="btn btn-outline text-white">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-end px-6">
        <button
          onClick={handlePrev}
          className="btn btn-circle mr-4 bg-black bg-opacity-30 text-white hover:bg-opacity-60"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="btn btn-circle mr-4 bg-black bg-opacity-30 text-white hover:bg-opacity-60"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Bannar;
