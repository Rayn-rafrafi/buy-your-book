const Main = () => {
    return (<>
    <main>
        <div className="container-lg">
            <div className="row justify-content-center  me-5">
                <div className="col-md-5 text-center text-md-start me-5">
                    <div className="me-5 mt-5">
                        <div className="col-md-9 text-center d-none d-md-block">
                            <img className="img-fluid me-5 " src="../src/images/back2.png" alt="image"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 text-center d-none d-md-block mt-5">
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Chapter #1
                            </button>
                          </h2>
                          <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatem quod obcaecati, omnis consequatur beatae libero facilis porro expedita debitis laudantium quasi tempore doloremque alias sunt aliquam officia error magnam!</div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Chapter #2
                            </button>
                          </h2>
                          <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatem quod obcaecati, omnis consequatur beatae libero facilis porro expedita debitis laudantium quasi tempore doloremque alias sunt aliquam officia error magnam!</div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Chapter #3
                            </button>
                          </h2>
                          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatem quod obcaecati, omnis consequatur beatae libero facilis porro expedita debitis laudantium quasi tempore doloremque alias sunt aliquam officia error magnam!</div>
                          </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Chapter #4
                              </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatem quod obcaecati, omnis consequatur beatae libero facilis porro expedita debitis laudantium quasi tempore doloremque alias sunt aliquam officia error magnam!</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Chapter #5
                              </button>
                            </h2>
                            <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatem quod obcaecati, omnis consequatur beatae libero facilis porro expedita debitis laudantium quasi tempore doloremque alias sunt aliquam officia error magnam!</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Chapter #6
                              </button>
                            </h2>
                            <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatem quod obcaecati, omnis consequatur beatae libero facilis porro expedita debitis laudantium quasi tempore doloremque alias sunt aliquam officia error magnam!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
      </main>
    
    </>);
}
 
export default Main;