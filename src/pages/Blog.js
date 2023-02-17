import {Link} from "react-router-dom";

export default function Blog () {
    return (
        <div className="page">
            <Link to="/"><h1 className="site_name">Hello React</h1></Link>
            <h1>Blog</h1>
        </div>
    )
}