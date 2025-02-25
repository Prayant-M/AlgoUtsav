import React from "react";
// import about from '../assets/Images/Aboutus.png';
// import astronomer from '../assets/Images/astronomer.png';
// import green_planet from '../assets/Images/greenplanet1.png';

//import backgroundImage from '../assets/Images/HomePage2.png'
export default function About() {
  /*const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
   style={containerStyle} 
  };*/
  return (
    <div id="about">
      <div className="z-10">
        <img
          alt="_green_planet"
          src="https://res.cloudinary.com/ddtzbznea/image/upload/v1709361367/AlgoUtsav/Images/greenplanet1_zjp6pe.png"
          className="w-1/2 lg:w-[320px]"
          draggable={false}
        />
      </div>
      <div
        className="my-4 sm:my-8 sm:mt-[-8em] z-30"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
        }}
      >
        <img
          src="https://res.cloudinary.com/ddtzbznea/image/upload/v1709361341/AlgoUtsav/Images/Aboutus_cic9ox.png"
          alt="_about_us"
          style={{ maxWidth: "70%", maxHeight: "58px" }}
          draggable={false}
        />
      </div>
      <div className="flex justify-between about_cont">
        <div
          className="flex justify-center astro"
          style={{ maxHeight: "auto" }}
        >
          <img
            alt="_the_astromnomer"
            src="https://res.cloudinary.com/ddtzbznea/image/upload/v1709361384/AlgoUtsav/Images/astronomer_td42te.png"
            draggable={false}
          />
        </div>
        <div className="p-14 pl-10 pr-48 astro_content">
          <h1 className="border-[rgba(167,31,252,0.5)] border-2 m-4 p-4 text-[14px] rounded-lg sm:border-none sm:m-0 sm:p-0 sm:text-2xl text-yellow-400 font-retropix">
            AlgoUtsav is organized by Algorithms and Programming Society, NIT
            Rourkela (NITR) registered under the Technical Society of Student
            Activity Centre (SAC), NIT Rourkela.
            <br />
            <br />
            It is a competition designed to test your abilities to solve a range
            of time- and memory-limited competitive programming issues.
            <br />
            <br />
            You will also compete against students from other colleges, get to
            know them, and learn from their replies.By taking part in this
            event, you may advance your professional and personal development
            while showcasing your programming prowess and excitement.
          </h1>
        </div>
      </div>
    </div>
  );
}
