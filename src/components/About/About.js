import React from "react";
import './About.css';

function ContentPl(){
    return (
        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum ipsum turpis. Duis sit amet lacus eu lectus faucibus faucibus. Fusce non ligula a nibh vulputate ultricies. In est libero, ultricies eget lorem et, facilisis aliquet elit. Nulla tempus risus neque. Praesent nunc erat, rutrum vel fermentum euismod, aliquet non risus. Duis varius leo quis sodales pretium. Quisque sit amet quam aliquet, placerat elit in, porta mauris. Mauris commodo mauris ac posuere tincidunt. Praesent tempus, augue eu rhoncus semper, orci arcu porta neque, ac eleifend nunc elit a lectus. Quisque gravida tristique est, et scelerisque turpis pulvinar ac. Nulla eu lorem ipsum. Suspendisse viverra dignissim gravida. Proin mauris nisi, euismod at gravida ac, finibus nec libero.
            Quisque volutpat enim orci, at sollicitudin turpis rhoncus sed. Mauris tortor nunc, molestie id facilisis pellentesque, convallis ut felis. Vivamus nisl ante, aliquam vitae erat nec, semper dignissim tortor. Nulla eu lectus ut lacus pellentesque ornare eu a lacus. In fringilla magna nec erat ornare, pharetra efficitur elit faucibus. Integer et rhoncus ligula. Ut semper ex in convallis tempor. Pellentesque eu mi odio. Nulla condimentum dictum blandit. Donec eleifend, risus sit amet aliquet molestie, augue massa tempor justo, at pulvinar est dolor a lacus. Nam cursus posuere finibus. 
        </div>
    )
}

function ContentEn(){
    return (
        <div>
            Quisque volutpat enim orci, at sollicitudin turpis rhoncus sed. Mauris tortor nunc, molestie id facilisis pellentesque, convallis ut felis. Vivamus nisl ante, aliquam vitae erat nec, semper dignissim tortor. Nulla eu lectus ut lacus pellentesque ornare eu a lacus. In fringilla magna nec erat ornare, pharetra efficitur elit faucibus. Integer et rhoncus ligula. Ut semper ex in convallis tempor. Pellentesque eu mi odio. Nulla condimentum dictum blandit. Donec eleifend, risus sit amet aliquet molestie, augue massa tempor justo, at pulvinar est dolor a lacus. Nam cursus posuere finibus. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum ipsum turpis. Duis sit amet lacus eu lectus faucibus faucibus. Fusce non ligula a nibh vulputate ultricies. In est libero, ultricies eget lorem et, facilisis aliquet elit. Nulla tempus risus neque. Praesent nunc erat, rutrum vel fermentum euismod, aliquet non risus. Duis varius leo quis sodales pretium. Quisque sit amet quam aliquet, placerat elit in, porta mauris. Mauris commodo mauris ac posuere tincidunt. Praesent tempus, augue eu rhoncus semper, orci arcu porta neque, ac eleifend nunc elit a lectus. Quisque gravida tristique est, et scelerisque turpis pulvinar ac. Nulla eu lorem ipsum. Suspendisse viverra dignissim gravida. Proin mauris nisi, euismod at gravida ac, finibus nec libero.
        </div>
    )
}

class About extends React.Component
{
    constructor(props){
        super(props);
        this.skills = [[{'pl': "C# i platforma .NET", 'en': 'C# and .NET platform'}, 'csharp.webp'],
                      [{'pl': "Framework ASP.NET Core", 'en': 'ASP.NET Core Framework'}, 'dotnet.webp'],
                      [{'pl': "Python", 'en': 'Python'}, 'python.webp'],
                      [{'pl': "Node.js", 'en': 'Node.js'}, 'node.webp'],
                      [{'pl': "HTML 5", 'en': 'HTML 5'}, 'html.webp'],
                      [{'pl': "CSS 3", 'en': 'CSS 3'}, 'css.webp'],
                      [{'pl': "JavaScript", 'en': 'JavaScript'}, 'javascript.webp'],
                      [{'pl': "Podstawy Django", 'en': 'Basic Django'}, 'django.webp'],
                      [{'pl': "Akademicki poziom C++", 'en': 'Academic level C++'}, 'cpp.webp'],
                      [{'pl': "Podstawy Reacta", 'en': 'Basic React'}, 'react.webp'],
                      [{'pl': "Podstawy Javy i Kotlina", 'en': 'Basic Java and Kotlin'}, 'java.webp'],];
    }

    render(){
        const skills = this.skills.map((skill) => {
            return <li key={skill[1]} style={{margin: '5px 0'}} >{skill[0][this.props.language]}{skill[1] !== '' ? <img style={{height: '30px', float: 'right'}} className="img-fluid" src={skill[1]} alt={skill[0][this.props.language]}/> : ''}</li>;
        })
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <p style={{fontSize: '4em'}} className='raleway'>{this.props.language === 'pl' ? "O mnie" : 'About me'}</p>
                        {this.props.language === 'pl' ? <ContentPl/> : <ContentEn/>}
                    </div>
                    <div className="col-md-4">
                        <p style={{fontSize: '3em'}}  className='raleway'>{this.props.language === 'pl' ? "Umiejętności" : 'Skills'}</p>
                        <ul style={{fontSize: '1.3em'}}>
                            {skills}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;