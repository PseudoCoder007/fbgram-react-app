import styles from '../styles/navbar.module.css';
import {Link} from 'react-router-dom';
const Navbar = () =>{
    return(
      <div className={styles.nav}>
        <div className={styles.leftDiv}>
            <Link to='/'>
                <img src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png" alt='' />
            </Link>
        </div>

        <div className={styles.rightNav}>
            <div className={styles.user}>
                <Link to='/'> 
                <span  className={styles.userDp}>
                <img src="kakashi.avif" alt='user-pic'
              className={styles.userDp}
            />   
                </span>   
                </Link>
                <span> Saif </span>
            </div>
            <div className={styles.navLinks}>
                <ul>
                    <li>
                        <Link to='/login' >
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to='/' >
                            Logout
                        </Link>
                    </li>
                    <li>
                        <Link to='/' >
                            Register
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
        </div>

    );
};
export default Navbar;