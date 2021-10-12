import React from 'react';
import file from '../assets/resume.pdf';

const Resume = () => {
    return (
        <iframe
            style={{ position:"fixed", top:"100", left:"0", bottom:"100", right:"0", width:"100%", height:"100%", border:"none", margin:"0", padding:"0"}}
            src={file}
            type='application/pdf'
            title='title'
          />
    );
};
  
export default Resume;