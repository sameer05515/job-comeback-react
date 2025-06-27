import React from "react";

const Resume = () => {
  return (
    <div className="text-center p-4 bg-blue-100">
      {/* <div>My Resume</div> */}
      {/* <h1 className="text-3xl font-bold text-blue-800">Premendra Kumar</h1> */}

      <div className="flex">
        <div className="flex-1 rounded text-left">
          Premendra Kumar <br />
          Senior Staff Engineer
        </div>
        <div className="flex-1 rounded text-left">
          <b>Phone: </b> +91 80106 45624, +91 87500 84750 <br />
          <b>Email: </b> premendra.bce05515@gmail.com,
          premendra.bce05515@outlook.com <br />
          <b>Total Experience: </b> 14 years 2 months
        </div>
      </div>
      <div className="text-left">
        Seeking a position to utilize my skills and abilities with approx. <b>14
        years 3 months of experience</b> (approx. 14.3 years of backend development,
        8.5 years of fullstack development, team lead and devops) in the
        Information Technology Industry that offers professional growth while
        being resourceful, innovative and flexible. I want to work with a
        professional organization where I will be able to develop my skills
        along with some challenging projects to handle with latest technology.
      </div>
    </div>
  );
};

export default Resume;
