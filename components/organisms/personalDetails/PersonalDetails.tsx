import React from 'react';
import Button from '../../atoms/button/Button';
import MainTitle from '../../atoms/mainTitle/MainTitle';
import Profile from '../../atoms/profile/Profile';
import UserInput from '../../atoms/userInput/UserInput';
import styles from './PersonDetails.module.scss';

// const Container = styled.div`
//   padding: 36px 36px;
//   border: 2px solid black;
//   width: 50%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   section {
//     width: 100%;
//     display: flex;
//     justify-content: flex-end;
//     margin-bottom: 63px;
//   }
// `;

// const div = styled.div`
//   width: 100%;
//   margin-bottom: 36px;
// `;

// const FooterSection = styled.div`
//   width: 100%;
//   display: flex;
//   flex: 1;
//   button {
//     margin-right: 5px;
//     &:last-child {
//       margin-right: 0;
//     }
//   }
// `;

const PersonalDetails = (props: {
  prevStep: () => void;
  nextStep: () => void;
  values: {
    email: string;
    password: string;
    passwordCheck: string;
    nickname: string;
    birthDate: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
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
        <Button handleClick={Continue}>가입하기</Button>
      </div>
    </div>
  );
};

export default PersonalDetails;
