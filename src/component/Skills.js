import React, { Component } from 'react'


export default class Skills extends Component {
    
   

    render() {

        return (
            <div className="section-vcardbody" style={{ marginLeft : '34em' }} id="page-skills">
            <div class="section-skills">
		
			<h2 className="section-title">SKILLS</h2>
	        


	      
			<h3 className="section-item-title-2"><i className="fa fa-users"></i>&nbsp;&nbsp; Professional Skills</h3>
   
			<ul className="skills-list">
                   
                    <li>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" data-percent="70%" style={{width: "70%"}}>
                            <span className="sr-only">70% Complete</span>
                        </div>
                        <span className="progress-type">Comunication</span>
                        <span className="progress-completed">70%</span>
                      </div>
                    </li>
                    
                    <li>
                      <div className="progress">
                        <div className="progress-bar progress-bar-2" role="progressbar" data-percent="85%" style={{width: "85%"}}>
                            <span className="sr-only">85% Complete</span>
                        </div>
                        <span className="progress-type">Leadership</span>
                        <span className="progress-completed">85%</span>
                      </div>
                    </li>
                    
                    <li>
                      <div className="progress" title="Doing my best!">
                        <div className="progress-bar progress-bar-3" role="progressbar" data-percent="85%" style={{width: "85%"}}>
                            <span className="sr-only">85% Complete</span>
                        </div>
                        <span className="progress-type">Confidence</span>
                        <span className="progress-completed">85%</span>
                      </div>
                    </li>
                   
                </ul>
                <h3 className="section-item-title-2"><i className="fa fa-laptop"></i>&nbsp;&nbsp; Software Skills</h3>
	          	
                  <ul className="skills-list">
                     
                      <li>
                        <div className="progress">
                          <div className="progress-bar" data-percent="85%" role="progressbar" style={{width: "85%"}}>
                              <span className="sr-only">85% Complete</span>
                          </div>
                          <span className="progress-type">Adobe Photoshop</span>
                          <span className="progress-completed">85%</span>
                        </div>
                      </li>
                      
                      <li>
                        <div className="progress">
                          <div className="progress-bar progress-bar-2" data-percent="85%" role="progressbar" style={{width: "85%"}}>
                              <span className="sr-only">85% Complete</span>
                          </div>
                          <span className="progress-type">Adobe Illustrator</span>
                          <span className="progress-completed">85%</span>
                        </div>
                      </li>
                      
                      <li>
                        <div className="progress">
                          <div className="progress-bar progress-bar-3" data-percent="40%" role="progressbar" style={{width: "40%"}}>
                              <span className="sr-only">40% Complete</span>
                          </div>
                          <span className="progress-type">Adobe Fireworks</span>
                          <span className="progress-completed">40%</span>
                        </div>
                      </li>
                    
                    </ul>
          
  
                   
			</div>		
        </div>
        
        )
    }
}
