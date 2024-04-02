import React from "react";
import styles from './RootLayout.module.css'
import { Link, Outlet } from "react-router-dom";

function RootLayout(props) {
  return (
    <>
      <header className = {styles.Header}>
        <span>Cinema</span>
        <nav>
          <ul className={styles.NavList}>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
            <Link to={'/movies'}>Movies</Link>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="/signup">Sign up</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet/>
      <footer className={styles.Footer}> 
        <span>Copyright Cinema</span>
        <span>DEveloped by Ammu</span>

      </footer>
    </>
  );
}

export default RootLayout;
