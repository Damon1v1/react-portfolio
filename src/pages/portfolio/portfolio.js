import React from "react";
import "./portfolio.css"
import Project1 from "../../components/projects/Project1"
import Project2 from "../../components/projects/Project2"
// import Project3 from "../../components/projects/project3"

function Portfolio() {
    return(
        <article className="block" >
            <div className="row col-md-8">
                
                    <h1 className="block-header">Portfolio</h1>
                    <hr />
            </div>        
                    <div className="row">
                      <h2 className="col-sm-12" id="project-title">Movie Recommender</h2>
                      <div className="col-lg-12"></div>
                      <img src="images/project1.png" alt="Movie Recommender" className="img-fluid port-image" id="project-img" />
                      <p id="project-description">Application that reccomends movies to the user to watch based on questionnaire responses;
                        you can view the respository and deployment of the live application 
                       <Project1></Project1>
                      </p>
                    </div>

                    <div Name="row">
                      <h2 className="col-sm-12" id="project-title">Release The Kringle!</h2>
                      <div className="col-lg-12"></div>
                      <img src="images/project2.png" alt="Release The Kringle home page" className="img-fluid port-image" id="project2-img" />
                      <p id="project-description"> Mock-up application for a bakery. Allows users to sign in for rewards to be used on
                        various kringle products. Check out our repo and deployment
                        <Project2></Project2>
                    </p>
                    </div>
        </article>
    )
};

export default Portfolio;