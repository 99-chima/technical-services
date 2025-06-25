import {Link} from "react-router-dom";
import socialmedia from "./social.jpeg";
function Pricing (){
    return(
        <>
        {/* pricing intro */}
        <div className="container">
            <div className="row mt-5 pt-5">
                <div className="col-md-12 text-center">
                    <h1 className="type mt-5">Pricing</h1>
                    <p className="list-text">Adipiscing vitae proin sagittis nisl rhoncus mattis. Bibendum enim facilisis gravida neque convallis a cras <br /> semper auctor. Sit amet risus nullam eget felis eget. Metus dictum at tempor commodo ullamcorper a lacus <br /> vestibulum. Sit amet facilisis magna etiam tempor orci eu. Eleifend mi in nulla posuere. Et magnis dis <br /> parturient montes nascetur ridiculus mus mauris vitae.</p>
                </div>
            </div>
        </div>
        {/* offers & discounts */}
        <div className="container">
            <div className="row mt-5 gy-5">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header header">
                            <h3 className="personal text-center pt-5 text-white mt-4">Personal</h3>
                            <h6 className="price text-center text-white pt-3">18 <span id="dolar">$/MO</span></h6>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled lh-lg">
                            <li className="list-text">✅ <span className="ms-2">Gravida arcu ac tortor dignissim convallis aenean</span></li>
                            <li className="list-text pt-3">✅ <span className="ms-2">Gravida arcu ac tortor dignissim convallis aenean</span></li>
                            <li className="list-text pt-3">✅ <span className="ms-2">Gravida arcu ac tortor dignissim</span></li>
                            </ul>
                            <Link className="btn navbar-btn text-uppercase mt-5 subscribe" to="/contact">subscribe</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header header2">
                            <h3 className="personal text-center pt-5 text-white mt-4">Profesional</h3>
                            <h6 className="price text-center text-white pt-3">28 <span id="dolar">$/MO</span></h6>
                        </div>
                        <div className="card-body profesional">
                            <ul className="list-unstyled lh-lg">
                            <li className="list-text">✅ <span className="ms-2">Gravida arcu ac tortor dignissim convallis aenean</span></li>
                            <li className="list-text pt-3">✅ <span className="ms-2">Gravida arcu ac tortor dignissim convallis aenean</span></li>
                            <li className="list-text pt-3">✅ <span className="ms-2">Gravida arcu ac tortor dignissim</span></li>
                            <li className="list-text">✅ <span className="ms-2">Gravida arcu ac tortor dignissim convallis aenean</span></li>
                            </ul>
                            <Link className="btn navbar-btn text-uppercase mt-5" to="/contact">subscribe</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header header3">
                            <h3 className="personal text-center pt-5 text-white mt-4">Business</h3>
                            <h6 className="price text-center text-white pt-3">48 <span id="dolar">$/MO</span></h6>
                        </div>
                        <div className="card-body business">
                            <ul className="list-unstyled lh-lg">
                            <li className="list-text">✅ <span className="ms-2">Gravida arcu ac tortor dignissim convallis aenean</span></li>
                            <li className="list-text pt-3">✅ <span className="ms-2">Gravida arcu ac tortor dignissim convallis aenean</span></li>
                            <li className="list-text pt-3">✅ <span className="ms-2">Gravida arcu ac tortor dignissim</span></li>
                            <li className="list-text">✅ <span className="ms-2">Gravida arcu ac tortor dignissim convallis aenean</span></li>
                            <li className="list-text pt-3">✅ <span className="ms-2">Gravida arcu ac tortor dignissim</span></li>
                            </ul>
                            <Link className="btn navbar-btn text-uppercase mt-5" to="/contact">subscribe</Link>
                        </div>
                    </div>
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
export default Pricing;
