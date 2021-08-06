import React from 'react';
import Button from '../../atoms/button/Button';
import MainTitle from '../../atoms/mainTitle/MainTitle';
import UserInput from '../../atoms/userInput/UserInput';
import styles from './LoginForm.module.scss';

const LoginForm = (props: {
  values: {
    email: string;
    password: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}): JSX.Element => {
  return (
    <div className={styles.container}>
      <section>
        <MainTitle label="로그인" />
      </section>
      <div className={styles.bodySection}>
        <UserInput
          inputType="email"
          name="email"
          placeholder="이메일 입력"
          value={props.values.email}
          onChange={props.handleChange}
        />
      </div>
      <div className={styles.bodySection}>
        <UserInput
          inputType="password"
          name="password"
          placeholder="비밀번호"
          value={props.values.password}
          onChange={props.handleChange}
        />
      </div>
      <div className={styles.footerSection}>
        <Button handleClick={props.handleSubmit}>로그인</Button>
      </div>
    </div>
  );
};

export default LoginForm;
