import './Preloader.css';

function Preloader() {
  return (
<>    
  {/* <!-- Preloader --> */}
        <div id="loader-wrapper">
          <div id="loader"></div>
          <div className="loader-section section-left"></div>
          <div className="loader-section section-right"></div>
        </div>
  {/* <!-- End Preloader --> */}
</>
  );
}

export default Preloader;
