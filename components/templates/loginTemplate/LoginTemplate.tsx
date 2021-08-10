import React, { useEffect, useState } from 'react';
import router from 'next/router';
import Image from 'next/image';
import banner from '../../../public/assets/images/gather-banner.jpeg';
import LoginForm from '../../organisms/loginForm/LoginForm';
import styles from './LoginTemplate.module.scss';
import { idCheckRgx, passwordCheckRgx } from '../signupTemplate/SignupTemplate';

const LoginTemplate = () => {
  const [loginInput, setLoginInput] = useState({
    id: '',
    password: '',
  });

  const [inputCheck, setInputCheck] = useState({
    idCheck: true,
    passwordCheck: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'id')
      !idCheckRgx(value)
        ? setInputCheck({ ...inputCheck, idCheck: false })
        : setInputCheck({ ...inputCheck, idCheck: true });
    else if (name === 'password')
      !passwordCheckRgx(value)
        ? setInputCheck({ ...inputCheck, passwordCheck: false })
        : setInputCheck({ ...inputCheck, passwordCheck: true });
    setLoginInput({ ...loginInput, [name]: value });
  };

  const [disabled, setDisabled] = useState(true);
  const logInRequest = () => {
    if (!disabled) {
      logIn();
    }
  };
  const validAll =
    loginInput.id !== '' &&
    loginInput.password !== '' &&
    inputCheck.idCheck &&
    inputCheck.passwordCheck;
  useEffect(() => {
    if (validAll) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [validAll]);

  const logIn = async () => {
    const r = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/user/logIn`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: loginInput.id,
        pw: loginInput.password,
      }),
    });
    const json = await r.json();
    // console.log(json);
    const status = r.status;

    if (status === 200) {
      // login(json.user);
      // localStorage.setItem(
      //   'token',
      //   JSON.stringify(json.jwtToken).replace(/"/gi, '')
      // );
      // history.push('/login');
      router.push('/');
    } else {
      alert(`${r.status} ${json.message}`);
    }
  };

  return (
    <div className={styles.container}>
      <picture className={styles.imageBox}>
        <div>
          <Image src={banner} alt="" placeholder="blur" />
        </div>
      </picture>
      <LoginForm
        values={loginInput}
        handleChange={handleChange}
        handleSubmit={logInRequest}
        disabled={disabled}
      />
    </div>
  );
};

export default LoginTemplate;
