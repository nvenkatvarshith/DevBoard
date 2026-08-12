function Landing(){
    return (
        <div className="container mt-3">
            <div className="d-flex justify-content-between">
                <div>
                    <h4 className="fw-bold"><i className="fa-solid fa-d"></i>DevBoard</h4>
                </div>
                <div>
                    <button className="btn btn-dark">Sign in</button>
                </div>
            </div>
            <div className="mt-5">
                <div>
                    <h2>Build Smarter.</h2>
                    <h2>Code Faster.</h2>
                    <h2>Your AI Agile Partner.</h2>
                </div>
                <div className="d-grid gap-2 d-md-block mt-3">
                    <button className="btn btn-dark" type="button">Get Started</button>
                    <button className="btn btn-outline-dark ms-2" type="button">Request a Demo</button>
                </div>
            </div>
        </div>
    )
}

export default Landing;