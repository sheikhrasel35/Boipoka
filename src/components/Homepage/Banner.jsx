import React from 'react';

const Banner = () => {
  return (
    <div className="max-w-[1170px] mx-auto flex flex-col items-center justify-center">
      {/* Banner Section with responsive height */}
      <div className="hero bg-base-200 h-auto sm:h-[500px] lg:h-[554px] mt-[48px] w-full rounded-lg">
        <div className="hero-content flex flex-col sm:flex-row lg:flex-row-reverse gap-[20px] lg:gap-[86px]">
          {/* Image */}
          <img
            src="/banner-book.png"
            className="w-full max-w-[90%] sm:max-w-sm rounded-lg shadow-2xl mx-auto lg:mr-[120px] object-cover"
          />
          {/* Text Content */}
          <div className="lg:ml-[120px] px-6 sm:px-4 mt-6 sm:mt-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Box Office News!</h1>
            <p className="py-4 sm:py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary mb-5">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
