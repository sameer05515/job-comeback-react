import React from "react";

const Resume = () => {
  return (
    <div className="text-center p-4 bg-blue-100">
      {/* <div>My Resume</div> */}
      {/* <h1 className="text-3xl font-bold text-blue-800">Premendra Kumar</h1> */}
      <div className="p-4 border rounded-lg bg-gray-100">
        <div className="flex gap-4">
          <div className="flex-1 bg-blue-200 p-4 rounded text-left">
            Premendra Kumar <br />
            Senior Staff Engineer
            </div>
          <div className="flex-1 bg-green-200 p-4 rounded text-left">
            <b>Phone: </b> +91 80106 45624, +91 87500 84750 <br />
            <b>Email: </b> premendra.bce05515@gmail.com, premendra.bce05515@outlook.com <br />
            <b>Total Experience: </b> 14 years 2 months
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
