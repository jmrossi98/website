import React from 'react';

import Cards from '../components/Cards';
import CardItem from '../components/CardItem';

var PROJECTS = [
    {
        "src":"https://jmrossi98-personal-content.s3.amazonaws.com/images/model_eval.png",
        "text":"I developed a music classification tool that uses deep learning to predict the genre of a given audio file.  \
            The model it uses is a Long Short-Term Memory Recurrent Neural Network trained on the GTZAN music dataset.  \
            Created using Python, Tensorflow, Keras, Scikit-Learn, NumPy, Matplotlib and Librosa",
        "label":"Genre Detect",
        "path":"https://github.com/jmrossi98/genre_detect"
    },
    {
        "src":"https://jmrossi98-personal-content.s3.amazonaws.com/images/uds.png",
        "text":"The Community Advisory Board for the Marketview Heights neighborhood of Rochester, NY partnered with RIT to \
            develop a platform that aids in democratizing data amongst members of its community. For a senior project, \
            I was part of a team of five that developed a mobile app aiming to help address issues in then\
            neighborhod and assist the advisory board in gauging public interest on community projects. Users can place\
            pins on a map of the area to give their thoughts on certain issues, which can direct the city to promote\
            public initiatives that the citizens want. The app can also point citizens to data pertaining to the community.\
            A fully functional prototype has been developed and deployed. Created using Node and React, uses PostgreSQL for DB, hosted on AWS.",
        "label":"Urban Data Science",
        "path":"https://gitlab.com/urban-data-science"
    },
    {
        "src":"https://jmrossi98-personal-content.s3.amazonaws.com/images/fuzzer.png",
        "text": "I created an automated script that is able to explore potential security weaknesses for any given URL. The program\
                'spoofs', or simulates user actions to find commonly exploited web vulnerabilities. A user can give authentication\
                data to attempt a login, or 'crawl' the website to continuously find new URLs. I worked on the project individually for a\
                software engineering course. The resulting script gives an assessment on what vulnerabilities are\
                present and where they are. Its intended purpose is to test the security of a website, and NOT to discover vulnerabilities\
                of websites made by others. Written in Python.",
        "label":"Fuzzer",
        "path":"https://github.com/jmrossi98/fuzzer"
    }
]

const Projects = () => {
    return (
        <>
            <Cards children={ProjectCards()}/>
        </>
    );
  };


function ProjectCards() {
    let projects = [];
    for (var i = 0; i < PROJECTS.length; i++){
        projects.push(<CardItem 
            src = {PROJECTS[i]["src"]}
            text = {PROJECTS[i]["text"]}
            label = {PROJECTS[i]["label"]}
            path = {PROJECTS[i]["path"]}
        />);
    }

    return (
        <div className="cards__items">
            {projects}
        </div>
    )
}

export default Projects