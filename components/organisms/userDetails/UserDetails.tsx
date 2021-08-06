import React from 'react';
import Button from '../../atoms/button/Button';
import MainTitle from '../../atoms/mainTitle/MainTitle';
import UserInput from '../../atoms/userInput/UserInput';
import styles from './UserDetails.module.scss'

const UserDetails = (props: {
  nextStep: () => void;
  values: {
    email: string;
    password: string;
    passwordCheck: string;
    nickname: string;
    birthDate: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}): JSX.Element => {
  const Continue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <div className={styles.container}>
      <section>
        <MainTitle label="회원가입" />
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
          placeholder="비밀번호 입력(영문, 숫자 포함 8자리)"
          value={props.values.password}
          onChange={props.handleChange}
        />
      </div>
      <div className={styles.bodySection}>
        <UserInput
          inputType="password"
          name="passwordCheck"
          placeholder="비밀번호 확인"
          value={props.values.passwordCheck}
          onChange={props.handleChange}
        />
      </div>
      <Button handleClick={Continue}>다음</Button>
    </div>
  );
};

export default UserDetails;
