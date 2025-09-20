import React, { Fragment } from "react";
import Education from "./Education";
import Experience from "./Experience";
import Internships from "./Internships";

const Qualifications = () => {
  return (
    <Fragment>
      <Experience />
      <Internships />
      <Education />
    </Fragment>
  );
};

export default Qualifications;
