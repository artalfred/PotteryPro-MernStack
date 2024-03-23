import React from "react";

function Home() {
  return (
    <div className="Hero flex justify-center items-center w-full px-[2rem]">
      <div className="grid justify-center items-center">
        <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-center text-white">
          Discover The Calming <br></br> Magic Of Pottery
        </h1>

        <div className="flex justify-center mt-6">
          <p className="w-75 text-white sm:w-full md:w-3/4 lg:w-2/4  text-center">
            Welcome to Artful PotteryPro, where artistry meets functionality.
            Explore our collection of meticulously crafted ceramics, blending
            tradition with modernity. From elegant dinnerware to bespoke art
            pieces, discover the beauty of ceramics that redefine your space.
            Welcome to a world of endless possibilities in ceramics.
          </p>
        </div>

        <div className="flex justify-center mt-6">
          <button className="main-button bg-white font-medium">EXPLORE</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
