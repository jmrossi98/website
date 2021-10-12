import React from 'react';
import file from '../assets/resume.pdf';

const Resume = () => {
    return (
        <iframe
            style={{ width: "1436px", height: "642px" }}
            src={file}
            type='application/pdf'
            title='title'
          />
    );
};
  
export default Resume;