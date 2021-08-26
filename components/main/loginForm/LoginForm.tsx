import React from 'react';
import Button from '../../global/button/Button';
import MainTitle from '../../global/mainTitle/MainTitle';
import UserInput from '../../global/userInput/UserInput';
import styles from './LoginForm.module.scss';

const LoginForm = (props: {
  values: {
    id: string;
    password: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  disabled: boolean;
}): JSX.Element => (
  <div className={styles.container}>
    <section>
      <MainTitle label="로그인" />
    </section>
    <div className={styles.bodySection}>
      <UserInput
        inputType="text"
        name="id"
        placeholder="아이디 입력"
        value={props.values.id}
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

export default LoginForm;
