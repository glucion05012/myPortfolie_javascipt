import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                                alt="avatar"
                                style={{height:'200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop:'2em'}}>
                        Giddel H. Lucion
                        </h2>
                        <h4 style={{color:'gray'}}>
                            Programmer
                        </h4>
                        <hr style={{borderTop: '3px solid #8rrfb2', width:'50%'}}/>
                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        <hr style={{borderTop: '3px solid #8rrfb2', width:'50%'}}/>
                        <p>1 Hacker Way Menlo Park, 94025</p>
                        <h5>Phone</h5>
                        <p>(02) 294-20-24</p>
                        <h5>Email</h5>
                        <p>someone@ecample.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop: '3px solid #8rrfb2', width:'50%'}}/>
                        
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education 
                        startYear={2002}
                        endYear={2006}
                        schoolName={"University of the East"}
                        schoolDescription={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"}
                        />

                        <Education 
                        startYear={2007}
                        endYear={2009}
                        schoolName={"Informatics"}
                        schoolDescription={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"}
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>

                        <Experience 
                        startYear={2010}
                        endYear={2012}
                        jobName={"Software Engineer"}
                        jobDescription={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"}
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Skills</h2>

                        <Skills 
                        skill="javascript"
                        progress={44}
                        />

                        <Skills 
                        skill="PHP"
                        progress={75}
                        />

                        <Skills 
                        skill="VB.Net"
                        progress={80}
                        />

                        <Skills 
                        skill="Python"
                        progress={60}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;