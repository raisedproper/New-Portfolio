import React, { Component } from 'react';


class ContactMe extends Component {
    render() {
        return (
            <div className="body1">  
                <div id="aboutMe">
                    <div className="bodyFont2"> 
                        <p className="mainFont2">Contact Me</p>
                            <div>
                                <a className="subFont" href={"mailto:" + this.props.email}>DannyMorris188@gmail.com</a>
                                  <br><br/>
                                <a className="subFont" href="https://www.linkedin.com/in/danny-morris-29a936167/">Linkedin</a>

                            </div>      
                    </div>
                </div> 
            </div>   
        );
    }
}

export default ContactMe;
