import './Main.css';

function Main() {
  return (
<>    
<div className="about-container">
        
  
      
        <div className="about-container-left">
          <img src="img/about/1.jpg" alt="Image" className="img-responsive" />
        </div>
        
        <div className="about-container-right">
          <h2 className="about-title">One Column</h2>
          <p className="about-description">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
          <p className="about-description">Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
          <a href="#" className="about-link">Duised sitDamet</a>
        </div>
        
      </div>

      <div className="about-container-2 margin-bottom-50">
        <div className="about-container-inner">
          <h3 className="about-title-2">Two Columns</h3>
          <img src="img/welcome-bg.jpg" alt="Image" className="img-responsive margin-bottom-15" />          
          <p className="about-description">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
          <a href="#" className="about-link about-link-2">Details</a>
        </div>
        <div className="about-container-inner">
          <h3 className="about-title-2">Two Columns</h3>
          <img src="img/welcome-bg.jpg" alt="Image" className="img-responsive margin-bottom-15" />          
          <p className="about-description">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
          <a href="#" className="about-link about-link-2">Details</a>
        </div>
      </div>
      
      <div className="about-container-2">
        <div className="services-container-inner">
          <h3 className="about-title-2">Three Columns</h3>
          <img src="img/welcome-bg.jpg" alt="Image" className="img-responsive margin-bottom-15" />           
          <p className="about-description">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
          <a href="#" className="about-link about-link-2">Details</a>
        </div>
        <div className="services-container-inner">
          <h3 className="about-title-2">Three Columns</h3>
          <img src="img/welcome-bg.jpg" alt="Image" className="img-responsive margin-bottom-15" />          
          <p className="about-description">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
          <a href="#" className="about-link about-link-2">Details</a>
        </div>
        <div className="services-container-inner">
          <h3 className="about-title-2">Three Columns</h3>
          <img src="img/welcome-bg.jpg" alt="Image" className="img-responsive margin-bottom-15" />          
          <p className="about-description">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
          <a href="#" className="about-link about-link-2">Details</a>
        </div>
      </div>


     
      <div className="tm-banner">
        <h2 className="tm-banner-title">Maecenas</h2>
        <p className="tm-banner-description">Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium</p>
        <a href="#" className="tm-banner-link"><i className="fa fa-play"></i></a>
      </div>
</>
  );
}

export default Main;
