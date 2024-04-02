import React from "react";
import styles from "./SignUpPage.module.css";
import { object, string, email } from "yup";
import axios from "axios";

function SignUpPage(props) {
  const userSchema = object({
    name: string().required(),
    email: string().email().required(),
    password: string().required().min(6, "must be 6 character long"),
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form["name"].value;
    const email = form["email"].value;
    const password = form["password"].value;
    const confirmPassword = form["confirmPassword"].value;

    let valid = false;

    try {
      const result = await userSchema.validate({
        name: name,
        email: email,
        password: password,
      });

      if (password === confirmPassword) {
        valid = true;
      }
    }
      catch (error) {
      console.log(error);
    }

    if (valid) {
      axios
        .post("http://localhost:3000/users/signup", {
          name,
          email,
          password,
        })
        .then((res) => {
          // console.log(res)
          
          
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <main className={styles.SignUpPageMain}>
      <form className={styles.AuthForm} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </main>
  );
}

export default SignUpPage;
