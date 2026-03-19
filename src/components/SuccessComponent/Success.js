// import { useNavigate} from 'react-router-dom';
// import './Success.css';

// function Success() {

 

 
//   return (
//   <>  
//   <div id="tooplate_content">

// <div class="content_box content_box_last">
//       <h2> Payment completed</h2>
//       <h3>Charity Done Successfully....</h3>
// </div>

// <div class="cleaner"></div>
// </div>
//   </>
//   );
// }

// export default Success;







import { useNavigate } from 'react-router-dom';
import './Success.css';

function Success() {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-card">
        
        <div className="checkmark">✓</div>

        <h2>Payment Successful</h2>
        <p>Your charity donation has been completed successfully 🎉</p>

        <div className="success-buttons">
          {/* <button onClick={() => navigate('/')}>Go to Home</button> */}
          <button onClick={() => navigate('/Charity')}>Donate Again</button>
        </div>

      </div>
    </div>
  );
}

export default Success;







