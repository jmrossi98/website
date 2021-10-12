import React from 'react';
import { Document, Page } from 'react-pdf'
import styled from 'styled-components';
import file from '../assets/resume.pdf';

const DocumentWrapper = styled("div")({
    maxHeight: "600px",
    overflowY: "auto"
  });

const Resume = () => {
    return (
        <iframe
            style={{ width: "1420px", height: "1000px" }}
            src={file}
            type='application/pdf'
            title='title'
          />
    );
};
  
export default Resume;