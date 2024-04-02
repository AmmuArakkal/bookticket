import React from "react";
import styles from "./LoginPage.module.css";
import { object, string, email } from "yup";
import axios from "axios";

function LoginPage(props) {
  const userSchema = object({
    
    email: string().email().required(),
    password: string().required().min(6, "must be 6 character long"),
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    
    const email = form["email"].value;
    const password = form["password"].value;
    

    let valid = false;

    try {
      const result = await userSchema.validate({
        
        email: email,
        password: password,
      });

      
      valid = true;
      
    } catch (error) {
      console.log(error);
    }

    if (valid) {
      axios
        .post("http://localhost:3000/users/login", {
          
          email,
          password,
        })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <main className={styles.LoginPageMain}>
      <form className={styles.AuthForm} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>

        <button type="submit">Login</button>
      </form>
    </main>
  );
}

export default LoginPage;
