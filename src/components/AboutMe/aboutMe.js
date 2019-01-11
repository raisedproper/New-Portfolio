import React, { Component } from 'react';


class AboutMe extends Component {
    render() {
        return (
            <div className="body">  
                {/* this is the top of the page / intro  */}
                <div id="aboutMe">
                    <div className="bodyFont"> 
                            <p className="mainFont">Danny</p>
                            <p className="mainFont2">Morris</p>
                                <div>
                                    <p className="subFont" href="www.google.com">Artist.</p>
                                    <p className="subFont" id="wordSpacing" href="www.google.com">Developer.</p>
                                    <p className="subFont" href="www.google.com">UX Designer.</p>
                                    <p className="subFont" href="www.google.com">Marketing.</p>
                                </div>        
                    </div>
                </div> 
            </div>   
        );
    }
}

export default AboutMe;