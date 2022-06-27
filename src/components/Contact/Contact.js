import React from "react";
import './Contact.css';
class Experience extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <p style={{fontSize: '3em'}} className='raleway'>{this.props.language === 'pl' ? "Kontakt" : 'Contact'}</p>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;