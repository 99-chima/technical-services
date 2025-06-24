import aboutbg from "./img-01.jpeg";
import work from "./img-03.jpeg";
import atmosphere from "./img-02.jpeg";
import socialmedia from "./social.jpeg";
function About (){
    return(
        <>
         {/* intro */}
       <div className="container">
        <div className="row">
            <div className="col-md-12">
                <img className="w-100 d-block chairs" src={aboutbg} alt="" />
            </div>
        </div>
       </div>
        {/* type */}
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-12 text-center">
                    <h1 className="type">Type something</h1>
                    <p className="list-text lh-lg">Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Porta non <br /> pulvinar neque laoreet. Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat lacus. Turpis egestas <br /> pretium aenean pharetra magna ac. Id cursus metus aliquam eleifend mi. Odio tempor orci dapibus ultrices in <br /> iaculis. Lacus luctus accumsan tortor posuere ac ut consequat semper. Tincidunt ornare massa eget egestas <br /> purus viverra accumsan. Odio euismod lacinia at quis. Sit amet nulla facilisi morbi. At varius vel pharetra vel <br /> turpis nunc eget lorem dolor. Feugiat vivamus at augue eget. Feugiat nisl pretium fusce id velit ut. Venenatis <br /> tellus in metus vulputate eu scelerisque felis imperdiet. Ut placerat orci nulla pellentesque. Laoreet <br /> suspendisse interdum consectetur libero id.</p>
                </div>
                    <div className="row d-flex flex-row justify-content-center mt-3">
                    <div className="col-md-6">
                        <img className="img-fluid" src={work} alt="" />
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={atmosphere} alt="" />
                    </div>
                    </div>
                <div className="col-md-12 text-center mt-3">
                    <p className="list-text lh-lg">Non blandit massa enim nec dui nunc mattis enim ut. Cursus in hac habitasse platea dictumst quisque sagittis <br /> purus Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit. Ipsum dolor sit amet <br /> consectetur adipiscing elit. Integer quis auctor elit sed. In pellentesque massa placerat duis ultricies. <br /> Interdum consectetur libero id faucibus nisl tincidunt. Condimentum mattis pellentesque id <br /> nibh tortor id aliquet</p>
                    <small className="team d-flex justify-content-end">Team</small>
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
export default About;
