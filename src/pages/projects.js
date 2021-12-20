import React from 'react';
import uds_pic from '../assets/uds.png'
import fuzzer_pic from '../assets/fuzzer.png'
import stm32_pic from '../assets/stm32.jpg'

const Projects = () => {
    return (
        <div style={{justifyContent: 'Center', alignItems: 'Center', padding: "60px 230px"}}>
            <div style={{display: 'flex', justifyContent: 'Center', alignItems: 'Center'}}>
                <div>
                    <img src={uds_pic}></img>
                </div>
                <div style={{width:'800px', padding:'0px 50px'}}>
                    <h2 style={{fontSize: '200%', fontWeight: 'bold', fontFamily: "ＭＳ Ｐゴシック"}}><a href="https://gitlab.com/urban-data-science" target="_blank">Urban Data Science</a></h2>
                    <p style={{fontSize: '200%', fontWeight: 'bold', fontFamily: "ＭＳ Ｐゴシック"}}>
                        The Community Advisory Board for the Marketview Heights neighborhood of Rochester, NY partnered with RIT to
                        develop a platform that aids in democratizing data amongst members of its community. For a senior project,
                        I was part of a team of five that developed a mobile app aiming to help address issues in the
                        neighborhod and assist the advisory board in gauging public interest on community projects. Users can place
                        pins on a map of the area to give their thoughts on certain issues, which can direct the city to promote
                        public initiatives that the citizens want. The app can also point citizens to data pertaining to the community.
                        A fully functional prototype has been developed and deployed. Created using Node and React, uses PostgreSQL for DB, hosted on AWS.
                    </p>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'Center', alignItems: 'Center'}}>
                <div>
                    <img src={fuzzer_pic}></img>
                </div>
                <div style={{width:'800px', padding:'50px 50px'}}>
                    <h2 style={{fontSize: '200%', fontWeight: 'bold', fontFamily: "ＭＳ Ｐゴシック"}}><a href="https://github.com/jmrossi98/fuzzer" target="_blank">Fuzzer</a></h2>
                    <p style={{fontSize: '200%', fontWeight: 'bold', fontFamily: "ＭＳ Ｐゴシック"}}>
                        I created an automated script that is able to explore potential security weaknesses for any given URL. The program
                        'spoofs', or simulates user actions to find commonly exploited web vulnerabilities. A user can give authentication
                        data to attempt a login, or 'crawl' the website to continuously find new URLs. I worked on the project individually for a
                        software engineering course. The resulting script gives an assessment on what vulnerabilities are
                        present and where they are. Its intended purpose is to test the security of a website, and NOT to discover vulnerabilities
                        of websites made by others. Written in Python.
                    </p>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'Center', alignItems: 'Center'}}>
                <div>
                    <img src={stm32_pic}></img>
                </div>
                <div style={{width:'800px', padding:'50px 50px'}}>
                    <h2 style={{fontSize: '200%', fontWeight: 'bold', fontFamily: "ＭＳ Ｐゴシック"}}><a href="https://github.com/jmrossi98/swen563" target="_blank">STM32 Real-Time & Embedded Programming</a></h2>
                    <p style={{fontSize: '200%', fontWeight: 'bold', fontFamily: "ＭＳ Ｐゴシック"}}> 
                        I developed a series of scripts that utilize the microcontroller of a STM32L476VGTX discovery board. The series of projects gave me a much
                        better understanding of programming embedded systems. One script prompts the user to enter commands that change the state of attached servo
                        motors by generating PWM signals from the discovery board. Another script starts a "game" that allows a user to move a cursor on a UART
                        terminal by moving the discovery board. A gyroscope is used to track the position and angle of the board to determine cursor position.
                        Written in C, used the FreeRTOS API to assist in certain functions.
                    </p>
                </div>
            </div>
        </div>
    );
  };
  
export default Projects