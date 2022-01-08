import React from 'react';
import './Resume.css';

import file from './resume.pdf';

const Resume = () => {
    return (
        <iframe
            className='resume'
            title='Resume'
            src={file}
            type='application/pdf'
          />
    );
};
  
export default Resume;