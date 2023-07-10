import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <iframe
            className='resume'
            title='Resume'
            src='https://jmrossi98-personal-content.s3.amazonaws.com/jakob_rossi_resume.pdf'
            type='application/pdf'
          />
    );
};
  
export default Resume;