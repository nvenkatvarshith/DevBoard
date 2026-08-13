import { Link } from "react-router-dom";

function Signin(){
    return (
        <div className="container mt-3">
            <div>
                <h4 className="fw-bold"><Link to="/" className="text-dark text-decoration-none"><i className="fa-solid fa-d"></i>DevBoard</Link></h4>
            </div>
            <div>
                <div className="card mx-auto mt-5" style={{width: '25rem'}}>
                    <div className="card-body">
                        <div className="text-center">
                            <h1 className="card-title">Welcome Back</h1>
                            <h5 className="card-subtitle mb-2 text-body-secondary">Log in to your Agile workspace.</h5>
                        </div>
                        <div className="mt-4">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label text-uppercase">Email address</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="your.name@company.com"/>
                                </div>
                                <div className="mb-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <label htmlFor="password" className="form-label text-uppercase">Password</label>
                                        <p className="mb-2 fw-light">show password</p>
                                    </div>
                                    <input type="password" className="form-control" id="password" name="password"/>
                                </div>
                                <div className="text-end mb-2">
                                    <Link to="/forgot-password" className="text-dark">Forgot Password?</Link>
                                </div>
                                <div className="mb-2">
                                    <button type="button" className="btn btn-outline-dark w-100">Sign in</button>
                                </div>
                                <div className="mb-2">
                                    <p className="text-center mb-0">Or sign in with...</p>
                                </div>
                                <div className="text-center">
                                    <button className="border-0 bg-white fs-3"><i className="fa-brands fa-github"></i></button>
                                    <button className="border-0 bg-white fs-3"><i className="fa-brands fa-bitbucket"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-2">
                    <p>New to DevBoard? <Link to="/signup" className="text-dark fw-bold text-decoration-none">Create an account</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signin;