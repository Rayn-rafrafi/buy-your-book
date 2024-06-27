const Section = () => {
    return (<>
    <section id="intro" className="my-5">
        <div className="container-lg">
            <div className="row justify-content-center">
                <div className="col-md-5 text-center text-md-start">
                    <h1>
                        <div className="display-2">Take A New Skills</div>
                        <div className="display-5 text-muted"> your coding skills</div>
                    </h1>
                    <p className="my-4 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="#pricing" className="btn btn-secondary btn-lg">buy now</a>
                    <p className="my-3"><a href="#" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Explore my other skills</a></p>
                </div>
                <div className="col-md-5 text-center d-none d-md-block">
                    <img className="img-fluid" src="../src/images/back.jpg" alt="image"/>
                </div>
            </div>
        </div>
        
    </section>
    </>);
}
 
export default Section;