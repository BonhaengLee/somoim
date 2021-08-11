import React, { useEffect, useState } from 'react';
import router from 'next/router';
import Image from 'next/image';
import banner from '../../public/assets/images/gather-banner.jpeg';
import LoginForm from '../../components/organisms/loginForm/LoginForm';
import styles from './login.module.scss';
import { idCheckRgx, passwordCheckRgx } from '../../services/validationCheck';
import { useAuth } from '../../lib/auth';

const Login = () => {
  const { login } = useAuth();

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
  const [error, setError] = useState(null);
  const logInRequest = () => {
    if (!disabled) {
      // logIn();
      try {
        // await logIn();    //await login(values);
        router.push('/');
      } catch (err) {
        setError(err);
      }
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

  // const logIn = async () => {
  //   const r = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/user/logIn`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       id: loginInput.id,
  //       pw: loginInput.password,
  //     }),
  //   });
  //   const json = await r.json();
  //   console.log(json);
  //   const status = r.status;

  //   if (status === 200) {
  //     // login(json.user);
  //     localStorage.setItem(
  //       'RefreshToken',
  //       JSON.stringify(json.RefreshToken).replace(/"/gi, '')
  //     );
  //     localStorage.setItem(
  //       'AccessToken',
  //       JSON.stringify(json.AccessToken).replace(/"/gi, '')
  //     );
  //     router.push('/');
  //   } else {
  //     alert(`${r.status} ${json.message}`);
  //   }
  // };

  return (
    <div className={styles.wrapper}>
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
    </div>
  );
};

export default Login;
