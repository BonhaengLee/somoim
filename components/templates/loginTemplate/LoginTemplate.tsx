import React, { useState } from 'react';
import router from 'next/router';
import LoginForm from '../../organisms/loginForm/LoginForm';
import styles from './LoginTemplate.module.scss';

const LoginTemplate = (): JSX.Element => {
  // const history = useHistory();
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(loginInput.email, loginInput.password);

    setLoginInput({ ...loginInput, [name]: value });
  };

  const logIn = async () => {
    const r = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/user/logIn`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: loginInput.email,
        pw: loginInput.password,
      }),
    });
    const json = await r.json();
    console.log(json);
    const status = r.status;

    if (status === 200) {
      // login(json.user);
      // localStorage.setItem(
      //   'token',
      //   JSON.stringify(json.jwtToken).replace(/"/gi, '')
      // );
      // history.push('/login');
      router.push('/login');
    } else {
      alert(json.message);
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.container}>
        <picture className={styles.image}>
          <img src="./assets/gather-banner.jpeg" alt="" />
        </picture>
        <LoginForm values={loginInput} handleChange={handleChange} handleSubmit={logIn} />
      </div>
    </div>
  );
};

export default LoginTemplate;
