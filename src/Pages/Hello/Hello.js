import './Hello.css';
import { Typography } from '@mui/material';

function Hello() {
  return (
    <div className="Hello-App">
      <div className='hello-text-and-button-box'>
        <svg className="arrow-vector-to-button"  width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 1.625L10 26.375M10 26.375L19 16.0515M10 26.375L0.999999 16.0515" stroke="#B1B8CA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <Typography className='hello-title'>Hello 👋</Typography>
        <Typography className='hello-text'>
        I hope everyone is safe and sound.
        I designed different type of lending pages,application. it can help others to develop more ideas from this. I keep it simple and minimal. It can also help you find different options in exploring and improving your skills.

        I am available for new projects. I hope you show me your support 😄

        I wish you luck,
        Drax❤️
        </Typography>
        <div className='buy-me-coffee-frame'>
        <div className='vector'></div>

        </div>
      </div>
    </div>
  );
}

export default Hello;






