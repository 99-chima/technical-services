import comment from "./comment.jpeg";
import heart from "./heart.jpeg";
import bell from "./bell.jpeg";
import firstphoto from "./img-05.jpeg";
import secondphoto from "./img-07.jpeg";
import laptopfoto from "./img-06.png";
import brand1 from "./logo-01.png";
import brand2 from "./logo-02.png";
import brand3 from "./logo-03.png";
import socialmedia from "./social.jpeg";
import {Link} from "react-router-dom";
function Home (){
    return(
        <>
                <>
         {/* intro */}
        <div className="homebg mt-5 pt-5">
            <div className="container">
                <div className="row">
                <div className="col-md-6 pt-5 mt-5">
                    <h1 className="text-white fw-bold mt-5 title">Posuere lorem Ipsum</h1>
                    <p className="text-white lh-lg mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit. Ipsum dolor sit amet consectetur adipiscing elit.</p>
                    <Link className="btn navbar-btn text-uppercase mt-2" to="/download">download</Link>
                </div>
                </div>
            </div>
        </div>
         {/* vivamus services */}
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-12 text-center">
                    <h2 className="vivamus">Vivamus laoreet</h2>
                    <p className="auctor lh-lg">Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing. <br />Porta non pulvinar neque laoreet. Viverra ipsum nunc aliquet bibendum.</p>
                </div>
                <div className="col-md-4 mt-5">
                    <div className="d-flex justify-content-center">
                    <img src={comment} alt="" />
                    </div>
                    <h3 className="consec text-center mt-3">Consectetur</h3>
                    <p className="auctor lh-lg">Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Porta non pulvinar neque laoreet. Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat lacus. Turpis egestas pretium aenean pharetra magna ac.</p>
                </div>
                <div className="col-md-4 mt-5">
                    <div className="d-flex justify-content-center">
                    <img src={heart} alt="" />
                    </div>
                    <h3 className="consec text-center mt-3">Malesuada</h3>
                    <p className="auctor lh-lg">Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Porta non pulvinar neque laoreet. Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat lacus. Turpis egestas pretium aenean pharetra magna ac.</p>
                </div>
                <div className="col-md-4 mt-5">
                    <div className="d-flex justify-content-center">
                    <img src={bell} alt="" />
                    </div>
                    <h3 className="consec text-center mt-3">Phasellus</h3>
                    <p className="auctor lh-lg">Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Porta non pulvinar neque laoreet. Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat lacus. Turpis egestas pretium aenean pharetra magna ac.</p>
                </div>
            </div>
        </div>
         {/* carousel section */}
         <div className="container">
            <div className="row mt-5">
                <div className="col-md-12">
                <div className="carousel slide" id="slides-with-indicators" data-bs-ride= "carousel" data-bs-interval="2000">
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={firstphoto} alt="" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={secondphoto} alt="" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={firstphoto} alt="" />
                    </div>
                    </div>
                    <div className="carousel-indicators">
                         <button type="button" data-bs-target="#slides-with-indicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#slides-with-indicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                       <button type="button" data-bs-target="#slides-with-indicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
                </div>
                </div>
            </div>
         </div>
                   {/* features */}
          <div className="features mt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="fw-bold text-white feature-title pt-5 mt-5">Vivamus laoreet</h2>
                        <p className="fw-bold text-white pt-3 lh-lg">Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Porta non pulvinar neque laoreet. Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat lacus. Turpis egestas pretium aenean pharetra magna ac. Id cursus metus aliquam eleifend mi.</p>
                        <Link className="btn navbar-btn text-uppercase mt-2" to="/download">download</Link>
                    </div>
                </div>
            </div>
          </div>
           {/* features & properties */}
           <div className="container">
            <div className="row mt-5 pt-3">
                <div className="col-md-6">
                <img className="w-100 d-block" src={laptopfoto} alt="" />
                </div>
                <div className="col-md-6 pt-4">
                    <ul className="list-unstyled">
                    <li><h3 className="list-title">✅ <span className="ms-2">Dui augue</span></h3>
                    <p className="list-text lh-lg ms-5">Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing.</p>
                    </li>
                    <li><h3>✅ <span className="ms-2">Malesuada</span></h3>
                    <p className="list-text lh-lg ms-5">Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing.</p>
                    </li>
                    <li><h3>✅ <span className="ms-2">Bibendum</span></h3>
                    <p className="list-text lh-lg ms-5">Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing.</p>
                    </li>
                    </ul>
                </div>
            </div>
           </div>
           {/* Brands */}
           <div className="container">
            <div className="row mt-5 ms-5 pt-2">
                <div className="col-md-4">
                    <img src={brand1} alt="" />
                </div>
                <div className="col-md-4">
                    <img src={brand2} alt="" />
                </div>
                <div className="col-md-4">
                <img src={brand3} alt="" />
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
    );
}
export default Home;
