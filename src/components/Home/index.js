import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['i', 'r', 'k', 'a', 'n', '.']
    const jobArray = [
        'W',
        'e',
        'b',
        '',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
 ]
    
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
        }, [])
    

    return (
        <>
    <div className="container home-page">
     <div className="text-zone">
        <h1> 
        <span className={letterClass}>H</span>
        <span className={letterClass}>i,</span>  
        <br /> 
        <span className={letterClass}>I</span>  
        <span className={letterClass}>'m</span>  
        <img src={LogoTitle} alt="developer" />
        <AnimatedLetters letterClass={letterClass}
        strArray={nameArray}
        idx={15} />

        <br />
        <AnimatedLetters letterClass={letterClass}
        strArray={jobArray}
        idx={22} />
        </h1>
        <h2>Front-End Developer / React.js Fan </h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        
     </div>
     <Logo />
    
    </div>
   
    <loader type="pacman" />
    </>
    );
}

export default Home