function Signup(){
    return (
        <div className="container mt-3">
            <div>
                <h4 className="fw-bold"><i className="fa-solid fa-d"></i>DevBoard</h4>
            </div>
            <div>
                <div className="card mx-auto mt-5" style={{width: '28rem'}}>
                    <div className="card-body">
                        <div className="text-center">
                            <h2 className="card-title">Start Architecting</h2>
                            <h5 className="card-subtitle mb-2 text-body-secondary">Create your free AI-powered account</h5>
                        </div>
                        <div className="mt-4">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="fullname" className="form-label text-uppercase">Full Name</label>
                                    <input type="text" className="form-control" id="fullname" name="fullname" placeholder="your.name@company.com"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label text-uppercase">Work Email</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="your.name@company.com"/>
                                </div>
                                <div className="mb-2 row">
                                    <div className="col-6">
                                        <label htmlFor="password" className="form-label text-uppercase">Choose Password</label>
                                        <input type="password" className="form-control" id="password" name="password"/>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="confirmpassword" className="form-label text-uppercase">Confirm Password</label>
                                        <input type="password" className="form-control" id="confirmpassword" name="confirmpassword"/>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="terms" />
                                        <label className="form-check-label" htmlFor="terms">
                                            I agree to <a href="#" className="text-decoration-none text-dark fw-bold">Terms of Service</a> and <a href="#" className="text-decoration-none text-dark fw-bold">Privacy Policy</a>
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <button type="button" className="btn btn-outline-dark w-100">Create Account</button>
                                </div>
                                <div className="mb-2">
                                    <p className="text-center mb-0">Or sign up with...</p>
                                </div>
                                <div className="text-center">
                                    <button className="border-0 bg-white fs-3"><i className="fa-brands fa-github"></i></button>
                                    <button className="border-0 bg-white fs-3"><i className="fa-brands fa-bitbucket"></i></button>
                                </div>
                                <p className="rounded-4 bg-secondary-subtle p-3">Get an AI architecture breakdown of your first feature.</p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-2">
                    <p>Already have an account? <a href="#" className="text-dark fw-bold text-decoration-none">Sign In</a></p>
                </div>
            </div>
        </div>
    )
}

export default Signup;