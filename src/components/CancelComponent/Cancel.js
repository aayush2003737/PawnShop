import { useNavigate } from 'react-router-dom';
import './Cancel.css';

function Cancel() {
  const navigate = useNavigate();

  return (
    <div className="cancel-container">
      <div className="cancel-card">

        <div className="crossmark">✕</div>

        <h2>Payment Failed</h2>
        <p>Something went wrong. Please try again.</p>

        <div className="cancel-buttons">
          <button onClick={() => navigate('/Charity')}>Try Again</button>
          <button onClick={() => navigate('/')}>Go Home</button>
        </div>

      </div>
    </div>
  );
}

export default Cancel;