import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import Image from 'next/image';
import banner from '../../public/assets/images/gather-banner-flower.png';
import UserDetails from '../../components/main/userDetails/UserDetails';
import PersonalDetails from '../../components/main/personalDetails/PersonalDetails';
import styles from './signup.module.scss';
import {
  emailCheckRgx,
  idCheckRgx,
  nicknameCheckRgx,
  passwordCheckRgx,
} from '../../services/validationCheck';

const index = (): JSX.Element => {
  const [step, setStep] = useState(1);
  const [signupInput, setSignupInput] = useState({
    id: '',
    email: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
    birthDate: '',
  });

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const [inputCheck, setInputCheck] = useState({
    idCheck: true,
    emailCheck: true,
    nicknameCheck: true,
    passwordCheck: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'id') {
      !idCheckRgx(value)
        ? setInputCheck({ ...inputCheck, idCheck: false })
        : setInputCheck({ ...inputCheck, idCheck: true });
    } else if (name === 'email') {
      !emailCheckRgx(value)
        ? setInputCheck({ ...inputCheck, emailCheck: false })
        : setInputCheck({ ...inputCheck, emailCheck: true });
    } else if (name === 'password') {
      !passwordCheckRgx(value)
        ? setInputCheck({ ...inputCheck, passwordCheck: false })
        : setInputCheck({ ...inputCheck, passwordCheck: true });
    } else if (name === 'nickname') {
      !nicknameCheckRgx(value)
        ? setInputCheck({ ...inputCheck, nicknameCheck: false })
        : setInputCheck({ ...inputCheck, nicknameCheck: true });
    }
    setSignupInput({ ...signupInput, [name]: value });
  };

  // Id : 영문(소문자,대문자), 숫자만 가능, 특수문자 사용불가 (최소 5글자, 최대 15글자)
  // pw : 영문(소문자, 대문자), 숫자, 특수기호(최소1개 포함해야함) 가능 (최소 8글자, 최대 15글자)
  // nickname : 영문(소문자, 대문자), 한글 가능 (최소 1글자, 최대 15글자)
  // born : 생년월일( ) 숫자만(8글자)
  // email : 이메일 형식만 가능
  const signUp = (): void => {
    try {
      // fetch(`http://3.34.235.190:8080/user/signUp`, {
      fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/user/signUp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: 12345,
          pw: signupInput.password,
          nickname: signupInput.nickname,
          born: Number(signupInput.birthDate.replaceAll('-', '')),
          email: signupInput.email,
        }),
      }).then(async (response) => {
        if (response.status === 200) {
          console.log('회원가입 성공');
          console.log(response.statusText);
          // history.push('/login');
          Router.push('/login');
        } else if (response.status === 400) {
          console.log(response.statusText);
          alert((await response.json()).message);
        } else {
          console.log(response);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const [disabledUserDt, setDisabledUserDt] = useState(true);
  const [disabledPersonalDt, setDisabledPersonalDt] = useState(true);
  const signUpRequest = () => {
    if (!disabledUserDt && !disabledPersonalDt) {
      signUp();
    }
  };

  const validUserDt =
    signupInput.id !== '' &&
    signupInput.email !== '' &&
    signupInput.password !== '' &&
    signupInput.passwordConfirm !== '' &&
    inputCheck.idCheck &&
    inputCheck.emailCheck &&
    inputCheck.passwordCheck &&
    signupInput.password === signupInput.passwordConfirm;

  useEffect(() => {
    if (validUserDt) {
      setDisabledUserDt(false);
    } else {
      setDisabledUserDt(true);
    }
  }, [
    validUserDt,
    signupInput.id,
    signupInput.email,
    signupInput.password,
    signupInput.passwordConfirm,
    inputCheck.idCheck,
    inputCheck.emailCheck,
    inputCheck.passwordCheck,
  ]);

  useEffect(() => {
    if (
      signupInput.nickname !== '' &&
      signupInput.birthDate !== '' &&
      inputCheck.nicknameCheck
    ) {
      setDisabledPersonalDt(false);
    } else {
      setDisabledPersonalDt(true);
    }
  }, [signupInput.nickname, signupInput.birthDate, inputCheck.nicknameCheck]);

  // console.log(idCheck, emailCheck, passwordCheck, passwordConfirmCheck, disabledUserDt);
  // console.log(inputCheck, disabledPersonalDt);

  const changeForm = () => {
    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={nextStep}
            values={signupInput}
            handleChange={handleChange}
            disabled={disabledUserDt}
          />
        );
      case 2:
        return (
          <PersonalDetails
            prevStep={prevStep}
            nextStep={nextStep}
            values={signupInput}
            handleChange={handleChange}
            handleSubmit={signUpRequest}
            disabled={disabledPersonalDt}
          />
        );
      default:
        return <></>; // do nothing
    }
  };

  // console.log(signupInput, Number(signupInput.birthDate.replaceAll('-', '')));

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <picture className={styles.imageBox}>
          <div className={styles.imgWrapper}>
            <Image
              className={styles.banner}
              src={banner}
              alt=""
              placeholder="blur"
            />
          </div>
        </picture>
        {changeForm()}
      </div>
    </div>
  );
};

export default index;
