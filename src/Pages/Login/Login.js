import './Login.css';
import TransparentVespaAvatar from '../../images/transparent_avatar_vespa.png'
import VespaAvatar from '../../images/avatar_vespa.png'

function Login() {
  return (
    <div className="Login-Page">
      <img src={TransparentVespaAvatar} alt="login-page-transparent-avatar-vespa" className='image-transparent-avatar-vespa'/>
      <div className='white-full-container'>
        <div className='full-login-box'>
            <a className='your-logo'>Your Logo</a>
            <a className='login-text'>Login</a>
        </div>
        <div className='white-container-right-part'> </div>
        <img src={VespaAvatar} alt="login--avatar-vespa" className='image-avatar-vespa'/>
      </div>
    </div>
  );
}

export default Login;
