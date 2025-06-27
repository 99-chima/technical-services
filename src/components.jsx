import home from "./img-02.jpeg";
import {Link} from "react-router-dom";
import socialmedia from "./social.jpeg";
function Contact (){
    return(
        <>
        {/* location */}
        <div className="container">
            <div className="row mt-5 gy-2">
                <div className="col-md-12 text-center">
              <img src={home} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
        {/* forms & contacts */}
        <div className="container">
            <div className="row mt-5 pt-2">
                <div className="col-md-6 ">
                    <form>
                        <input type="text" className="form-control" placeholder="Full name" />
                        <input type="email" className="form-control mt-4" placeholder="Email" />
                        <input type="text" className="form-control mt-4" placeholder="Subject" />
                        <textarea name="" className="mt-5" id="" cols="65" rows="5" placeholder="Enter your Message"></textarea>
                    </form>
                    <Link className="btn navbar-btn text-uppercase mt-5" to="/contact">Send</Link>
                </div>
                <div className="col-md-5 ms-5">
                    <h3 className="type">Head Office</h3>
                    <p className="list-text pt-2 lh-lg">42 rue Rouelle <br /> 75015 Paris FRANCE</p>
                    <p className="list-text pt-3 lh-lg">contact@mybusiness.com <br /> +331 45 31 64 32</p>
                    <h3 className="type">Employment</h3>
                    <p className="list-text pt-2 lh-lg">To apply for a job with our team, please feel free to send us your <br /> Linkedin profile link ou CV to : employment@mybusiness.com</p>
                </div>
            </div>
        </div>
         {/* Footer */}
         <footer className="mt-5 pb-5">
            <div className="container">
                <div className="row mt-5">
                <div className="col-md-4">
                    <h4 className="about-us">About us</h4>
                    <p className="list-text pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet consectetur dolor</p>
                </div>
                <div className="col-md-4">
                    <h4 className="about-us">Do you like ? Share this !</h4>
                    <img className="d-block w-50 mt-3 pe-2" src={socialmedia} alt="" />
                    <p className="list-text lh-lg mt-3"><small>© Untitled | Website created with Mashup <br /> Template/Unsplash</small></p>
                </div>
                <div className="col-md-4">
                    <h4 className="about-us">Subscribe to newsletter</h4>
                    <form action="">
                        <div className="d-flex flex-row">
                        <input type="text" className="form-control mt-4"  />
                        <button className="btn form-btn" type="submit">OK</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
          </footer>
        </>
    )
}
export default Contact;
