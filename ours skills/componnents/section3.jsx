const Section3 = () => {
    return ( <>
    <section id="contact" className="align-items-center justify-content-center mt-4" >
      <div className="justify-content-between">
        <div className="text-center">
          <h2 className="text-black">Get In Touch</h2>
          <p className="lead text-muted d-none d-md-block" >Questions to ask? Fill out form to contact me directly </p>
      </div >
      <div className="list-group list-group-flush col-8 align-items-center justify-content-center">
        <div className="col-8 mt-2">
          <div className="input-group mb-3 ">
            
            <span className="input-group-text" id="basic-addon1"><span className="tt" data-bs-placement="bottom" title="Pretty Self explanatroy really ... ">@</span></span>
            <input type="text" className="form-control border-2" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" id="name"/>
          </div>
        </div>
        <div className="mb-3 col-8">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control border-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com"/>
          <div id="emailHelp" className="form-text  d-none d-md-block" >We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3 col-8 ">
          <label className="form-label">Password</label>
          <input type="password" id="inputPassword5" className="form-control border-2" aria-describedby="passwordHelpBlock" placeholder="********"/>
          <div id="passwordHelpBlock" className="form-text d-none d-md-block">
            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
          </div>
        </div>
        <div className="mb-3 col-8 form-check">
          <input type="checkbox" className="form-check-input border-4" id="exampleCheck1"/>
          <label className="form-check-label">Check me out</label>
        </div>
        <div className="mb-3 col-8 form-check me-5">
          <select className="form-select mb-5 me-5 border-5 " aria-label="Default select example">
            <option selected>All you need </option>
            <option value="1">skills</option>
            <option value="2">creativity</option>
            <option value="3">hobies</option>
          </select>
        </div>
        <div className="mb-3 col-8 mt-4">
          <label className="form-label">Example textarea</label>
          <textarea className="form-control border-5" id="exampleFormControlTextarea1" rows="3" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."></textarea>
        </div>
        <button type="submit" className="btn btn-primary mb-4 mt-2">Submit</button>
      </div>
      </div>

    </section>
    </>);
}
 
export default Section3;