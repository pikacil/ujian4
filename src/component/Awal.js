import React, { Component } from 'react'


export default class Awal extends Component {
    
   

    render() {

        return (
            <div class="section-vcardbody  section-home" id="section-home">
             
        <div className="vcard-profile-pic">
            <img src="https://www.vhv.rs/dpng/d/615-6151429_kda-akali-render-png-download-league-of-legends.png"  alt=""/>
            <img src="https://www.vhv.rs/dpng/d/615-6151429_kda-akali-render-png-download-league-of-legends.png"  id="profile1" className="profileActive" alt=""/>
        </div>
    
        <div className="vcard-profile-description">
        
            <h1 className="profile-title">Hi, i'm <span className="color1">Husaini Al banna</span></h1>
            <h2 className="profile-subtitle">Web Designer & Developer</h2>
        
            <hr className="hr1" />
            <div className="vcard-profile-description-text">
                <p>Founder of DotRex. Professional UI/UX designer and web developer based on London. Sometimes works as a freelancer.</p>
            </div>	
        
            <div className="vcard-profile-description-feature">
                
                <div className="vcard-profile-description-ft-item">
                    <p>email:  husainialbanna1315@gmail.com / phone +123 456 789 111</p>
                </div>
                
            </div>	
        
        </div>
        
        <div className="vcard-footer">
        
            <div className="footer-social-icons">
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-youtube"></i></a>
            </div>
            
        </div>
      
    </div>
   
        
        )
    }
}
