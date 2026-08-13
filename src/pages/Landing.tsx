import { Link } from "react-router-dom";
function Landing(){
    return (
        <div className="container mt-3">
            <div className="d-flex justify-content-between">
                <div>
                    <h4 className="fw-bold"><Link to="/" className="text-dark text-decoration-none"><i className="fa-solid fa-d"></i>DevBoard</Link></h4>
                </div>
                <div>
                    <Link to="/signin" className="btn btn-dark">Sign in</Link>
                </div>
            </div>
            <div className="mt-5">
                <div>
                    <h2>Build Smarter.</h2>
                    <h2>Code Faster.</h2>
                    <h2>Your AI Agile Partner.</h2>
                </div>
                <div className="d-grid gap-2 d-md-block mt-3">
                    <Link to='/signup' className="btn btn-dark" type="button">Get Started</Link>
                    <Link to = '/' className="btn btn-outline-dark ms-2" type="button">Request a Demo</Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;