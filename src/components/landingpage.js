import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <div className="padding-top-five-em">
                        <img 
                            src="data:image/jpeg;base64,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"
                            alt="avatar"
                            className="avatar-img"
                        />
                    </div>
                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        
                        <hr/>

                        <p>HTML/CSS | Bootstrap | Javascript | React | React Native | Node JS | Express | Mongo DB</p>
                    
                        <div className="social-links">

                            {/* LinkedIn */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>
                            {/* Github */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>
                            {/* Freecodecamp */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-free-code-camp" aria-hidden="true"/>
                            </a>
                            {/* Youtube */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square" aria-hidden="true"/>
                            </a>
                        </div>
                    </div>
                </Cell>
            </Grid>
            </div>
        )
    }
}

export default Landing;