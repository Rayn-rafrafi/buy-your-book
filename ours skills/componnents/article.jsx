const Article = () => {
    return (<>
    <article id="pricing" className="bg-warning-subtle mt-5">
        <div className="container-lg pb-2 pt-2">
            <div className="text-center">
                <h2>Pricing Plans</h2>
                <p className="lead text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem non hic optio?</p>
            </div>
            <div className="row my-5 align-items-center justify-content-center">
                <div className="col-8 col_lg-4 col-xl-3">
                    <div className="card border-0">
                        <div className="card-header text-center py-4">
                            <h4 className="card-title">Starter Edition</h4>
                            <p className="lead card-subtitle"> ebook downlaed only</p>
                            <p className="display-5 my-5 text-primary fw-bold">$12.99</p>
                            <p className="card-text mx-5 text-muted d-done d-lg-block">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <a href="#" className="btn btn-outline-primary btn-lg mt-3">Buy Now </a>
                        </div>

                    </div>
                </div>
                <div className="col-9 col_lg-4 col-xl-3">
                    <div className="card border-primary border-2">
                        <div className="card-header text-center text-primary ">Most Popular</div>
                        <div className="card-body text-center py-4">
                            <h4 className="card-title">Compelte Edition</h4>
                            <p className="lead card-subtitle"> ebook downlaed only</p>
                            <p className="display-5 my-5 text-primary fw-bold">$18.99</p>
                            <p className="card-text mx-5 text-muted d-done d-lg-block">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <a href="#" className="btn btn-outline-primary btn-lg mt-3">Buy Now </a>
                        </div>

                    </div>
                </div>
                <div className="col-8 col_lg-4 col-xl-3">
                    <div className="card border-0">
                        <div className="card-header text-center py-4">
                            <h4 className="card-title">Ultimate Edition</h4>
                            <p className="lead card-subtitle"> ebook downlaed only</p>
                            <p className="display-5 my-5 text-primary fw-bold">$24.99</p>
                            <p className="card-text mx-5 text-muted d-done d-lg-block">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <a href="#" className="btn btn-outline-primary btn-lg mt-3">Buy Now </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </article>
    
    </>);
}
 
export default Article;