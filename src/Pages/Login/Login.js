import './Login.css';
import VespaAvatar from '../../images/avatar_vespa.png'

function Login() {
  return (
    <div className="Login-Page">
      <img src={VespaAvatar} alt="login-page-avatar-vespa" className='image-avatar-vespa'/>
      <div className='white-full-container'>
        <div className='white-container-left-part'></div>
      </div>
    </div>
  );
}

export default Login;
