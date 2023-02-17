import {Link} from "react-router-dom";

export default function Blog () {
    return (
        <div className="page">
            <div className="container">
                <div className="header">
                    <Link to="/"><h1 className="site_name">Hello React</h1></Link>
                </div>
                <div className="content">
                    <h1>Blog</h1>
                </div>
            </div>        
        </div>
    )
}