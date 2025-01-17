const Nav = () => {
    return (<>
    <nav className="navbar navbar-expand-md navbar-light bg-body-secondary ">
        <div className="container-xxl ">
            <a className="navbar-brand " href="#">Ryan</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> 
            <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
            <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#topics">About The Book</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#reviews">Reviews</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Get in Touch</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#pricing">Features</a>
                </li>
                <li className="nav-item  d-md-inline">
                    <a href="#pricing" className="btn btn-secondary"> Buy Now !</a>
                </li>
              </ul>
        </div>
    </div>
    </nav>
    



    </>);
}
 
export default Nav;