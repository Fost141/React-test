import {Link} from "react-router-dom";

export default function About () {
    return (
        <div className="page">
            <Link to="/"><h1 className="site_name">Hello React</h1></Link>
            <h1>About</h1>
        </div>
    )
}