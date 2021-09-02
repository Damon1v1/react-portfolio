import React from "react";
import "./about.css";

function About() {
    return (
        <main className="container">
        <div className="card">
            <div className="row g-0">
              <div className="">
                <img className="portrait" src="images/artwork6.png" alt="Self-portrait" />
              </div>
              <div className="">
                <div className="card-body">
                  <h5 className="card-title">About Me</h5>
                  <p className="card-text">Web developer from a food service background consolidating leadership, teamwork skills, 
                    and quick problem solving ability from a fast-paced work environment to build a sleek and 
                    intuitive user experience on the web. Helped my restaurant achieve the fastest service times company wide 
                    in the third fiscal quarter of 2020 and number one overall restaurant in quarter four. I enjoy working in an 
                    environment where I can count on my co-workers and they can count on me to solve real-world problems. 
                    Education and certifications in full-stack development and computer information systems from 
                    University of California Irvine and Lewis & Clark Technical School. Skills in HTML, CSS, JavaScript, and Python.</p>
                </div>
               
              </div>
            
            </div>
          
          </div>   
      </main>
    );
}

export default About;