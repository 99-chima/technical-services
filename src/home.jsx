import comment from "./comment.jpeg";
import heart from "./heart.jpeg";
import bell from "./bell.jpeg";
import {Link} from "react-router-dom";
function Home (){
    return(
        <>
        <div className="homebg">
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
        </>
    );
}
export default Home;