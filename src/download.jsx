function Download (){
    return(
        import appstore from "./apple.jpeg";
import playstore from "./play.jpeg";
import socialmedia from "./social.jpeg";
function Download (){
    return(
        <>
       <div className="container">
        <div className="row mt-5">
            <div className="col-md-12 pt-5 mt-5 text-center">
                <h1 className="Text">Download</h1>
                <p className="list-text lh-lg">Adipiscing vitae proin sagittis nisl rhoncus mattis. Bibendum enim facilisis gravida neque convallis a cras <br /> semper auctor. Sit amet risus nullam eget felis eget. Metus dictum at tempor commodo ullamcorper a lacus <br /> vestibulum. Sit amet facilisis magna etiam tempor orci eu. Eleifend mi in nulla posuere. Et magnis dis <br /> parturient montes nascetur ridiculus mus mauris vitae. Arcu risus quis varius quam quisque id diam. Sagittis <br /> vitae et leo duis ut diam quam. Risus nullam eget felis eget nunc lobortis mattis aliquam.</p>
            </div>
        </div>
        <div className="row mt-5">
       <div className="col-md-5 download-card pb-5 ms-5">
       <p className="text-center pt-5 list-text lh-lg">Bibendum enim facilisis gravida <br /> neque convallis a cras semper</p>
       <div className="d-flex justify-content-center">
        <a href="https://itunes.apple.com/fr/genre/mac/"><img className="mt-3" src={appstore} alt="" /></a>
       </div>
       </div>
       <div className="col-md-5 download-card pb-5 ms-5">
       <p className="text-center pt-5 list-text lh-lg">Bibendum enim facilisis gravida <br /> neque convallis a cras semper</p>
       <div className="d-flex justify-content-center">
        <a href="https://play.google.com/store/apps"><img className=" mt-3" src={playstore} alt="" /></a>
       </div>
       </div>
   </div>
       </div>
       <div className="container">
        <div className="row mt-5">
            <div className="col-md-12 text-center mt-5">
                <p className="quote">“Eu augue ut lectus arcu bibendum at varius”</p>
                <p className="author">Francois Mathieu</p>
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
export default Download;
    )
}
export default Download;
