import React, { useState } from 'react';
import Router from 'next/router';
import UserDetails from '../../organisms/userDetails/UserDetails';
import PersonalDetails from '../../organisms/personalDetails/PersonalDetails';
import styles from './SignupTemplate.module.scss';

const SignupTemplate = (): JSX.Element => {
  // const history = useHistory();
  const [step, setStep] = useState(1);
  const [signupInput, setSignupInput] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    nickname: '',
    birthDate: '',
  });

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupInput({ ...signupInput, [name]: value });
  };

  // Id : 영문(소문자,대문자), 숫자만 가능, 특수문자 사용불가 (최소 5글자, 최대 15글자)
  // pw : 영문(소문자, 대문자), 숫자, 특수기호(최소1개 포함해야함) 가능 (최소 8글자, 최대 15글자)
  // nickname : 영문(소문자, 대문자), 한글 가능 (최소 1글자, 최대 15글자)
  // born : 생년월일( ) 숫자만(8글자)
  // email : 이메일 형식만 가능
  const signUp = (): void => {
    try {
      fetch(`/user/signUp`, {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          accept: 'text/html; charset=utf-8',
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

  const changeForm = () => {
    switch (step) {
      case 1:
        return <UserDetails nextStep={nextStep} values={signupInput} handleChange={handleChange} />;
      case 2:
        return (
          <PersonalDetails
            prevStep={prevStep}
            nextStep={nextStep}
            values={signupInput}
            handleChange={handleChange}
            handleSubmit={signUp}
          />
        );
      default: // do nothing
    }
  };

  console.log(signupInput, Number(signupInput.birthDate.replaceAll('-', '')));

  return (
    <div className={styles.signupWrapper}>
      <div className={styles.container}>
        <picture className={styles.image}>
          <img src="./assets/gather-banner-flower.png" alt="" />
        </picture>
        {changeForm()}
      </div>
    </div>
  );
};

export default SignupTemplate;
