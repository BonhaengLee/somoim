import React from 'react';
import Button from '../../global/button/Button';
import MainTitle from '../../global/mainTitle/MainTitle';
import Profile from '../../global/profile/Profile';
import UserInput from '../../global/userInput/UserInput';
import styles from './PersonDetails.module.scss';

const PersonalDetails = (props: {
  prevStep: () => void;
  nextStep: () => void;
  values: {
    email: string;
    password: string;
    passwordConfirm: string;
    nickname: string;
    birthDate: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  disabled: boolean;
}): JSX.Element => {
  const Continue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // nextStep
    // signup 요청 함수
    props.handleSubmit();
  };

  const Previous = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    props.prevStep();
  };

  return (
    <div className={styles.container}>
      <section>
        <MainTitle label="프로필 설정" />
      </section>
      <div className={styles.bodySection}>
        <Profile />
      </div>
      <div className={styles.bodySection}>
        <UserInput
          inputType="text"
          name="nickname"
          placeholder="닉네임 입력"
          value={props.values.nickname}
          onChange={props.handleChange}
        />
      </div>
      <div className={styles.bodySection}>
        <UserInput
          inputType="date"
          name="birthDate"
          placeholder="생년월일"
          value={props.values.birthDate}
          onChange={props.handleChange}
        />
      </div>
      <div className={styles.footerSection}>
        <Button handleClick={Previous}>이전</Button>
        <Button handleClick={Continue} disabled={props.disabled}>
          가입하기
        </Button>
      </div>
    </div>
  );
};

export default PersonalDetails;
