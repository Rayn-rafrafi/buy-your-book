import { IoIosStarHalf } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
const Section2 = () => {
    return (<>
        <section id="reviews" className="bg-secondary bg-gradient">
      <div className="container-lg ">
        <div className="text-center">
            <h2 className="text-white"><i className="fa-solid fa-star me-2"></i>All My Reviews</h2>
            <p className="lead text-muted">All my reviews have said about the book</p>
        </div >
        <ul className="list-group list-group-flush col-12 align-items-center justify-content-center rounded-3">
          <li className="list-group-item text-start col-8">
          <IoIosStar  /><IoIosStar  /><IoIosStar  />
          <IoIosStar  /><IoIosStarHalf /><h3 className="fs-4 text-muted">A must-buy for every aspiring web dev</h3>
          <p className=" fs-6 lead text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quasi deserunt laboriosam eius incidunt non eveniet veritatis esse vero sit dignissimos facilis atque, consequuntur nihil corrupti ea molestias provident dolore.
          </p></li>
          <li className="list-group-item text-start col-8"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
          <IoIosStar  /><IoIosStar  /><IoIosStar  />
          <IoIosStar  /><IoIosStarHalf /><h3 className="fs-4 text-muted">A must-buy for every aspiring web dev</h3>
          <p className=" fs-6 lead text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quasi deserunt laboriosam eius incidunt non eveniet veritatis esse vero sit dignissimos facilis atque, consequuntur nihil corrupti ea molestias provident dolore.
          </p>
          </li>
          <li className="list-group-item text-start col-8"><IoIosStar  /><IoIosStar  /><IoIosStar  />
          <IoIosStar  /><IoIosStarHalf /><h3 className="fs-4 text-muted">A must-buy for every aspiring web dev</h3>
          <p className=" fs-6 lead text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quasi deserunt laboriosam eius incidunt non eveniet veritatis esse vero sit dignissimos facilis atque, consequuntur nihil corrupti ea molestias provident dolore.
          </p></li>
          <li className="list-group-item text-start col-8"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
          <IoIosStar  /><IoIosStar  /><IoIosStar  />
          <IoIosStar  /><IoIosStarHalf /><h3 className="fs-4 text-muted">A must-buy for every aspiring web dev</h3>
          <p className=" fs-6 lead text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quasi deserunt laboriosam eius incidunt non eveniet veritatis esse vero sit dignissimos facilis atque, consequuntur nihil corrupti ea molestias provident dolore.
          </p></li>
          <li className="list-group-item text-start col-8"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
          <IoIosStar  /><IoIosStar  /><IoIosStar  />
          <IoIosStar  /><IoIosStarHalf /><h3 className="fs-4 text-muted">A must-buy for every aspiring web dev</h3>
          <p className=" fs-6 lead text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quasi deserunt laboriosam eius incidunt non eveniet veritatis esse vero sit dignissimos facilis atque, consequuntur nihil corrupti ea molestias provident dolore.
          </p></li>
        </ul>
      </div>
      <div className="mb-1 text-end me-5"><p className="text-white mt-2">© ALL RIGHTS RESERVED</p></div>
    </section>
    </>);
}
 
export default Section2;