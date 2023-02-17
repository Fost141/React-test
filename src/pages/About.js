import {Link} from "react-router-dom";

export default function About () {
    return (
        <div className="page">
            <div className="container">
                <div className="header">
                    <Link to="/"><h1 className="site_name">Hello React</h1></Link>
                </div>
                <div className="content">
                    <h1>About</h1>
                </div>
            </div>        
        </div>
    )
}