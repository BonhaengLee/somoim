import React from 'react';
import Button from '../../atoms/button/Button';
import CardTitle from '../../atoms/cardTitle/CardTitle';
import UserInput from '../../atoms/userInput/UserInput';
import styles from './TitleInputForm.module.scss';

const TitleInputForm = (props: {
  prevStep: () => void;
  nextStep: () => void;
  values: {
    category: string;
    content: string;
    fee: number;
    finishAt: string; // finish_at
    frequency: string;
    maxAge: number; //
    minAge: number; //
    numOfPeople: number;
    place: string;
    startAt: string; //
    thumbnail: string;
    title: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // disabled: boolean;
}): JSX.Element => {
  const Previous = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    props.prevStep();
  };
  const Continue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <div className={`${styles.bodyInner} ${styles.TitleInputWrapper}`}>
      <div className={styles.TitleInputFlexContainer}>
        <div className={styles.TitleInputContainer}>
          <article className={styles.TitleInputCard}>
            <section className={styles.TitleInputHeader}>
              <CardTitle label="모임 제목을 입력해주세요" />
              <p className={styles.subTitle}>
                타인에게 불쾌감을 주는 단어를 사용할 경우 계정이 영구정지 될 수
                있습니다.
              </p>
            </section>
            <section className={styles.TitleInputBody}>
              <UserInput
                inputType="text"
                name="title"
                placeholder="예) 아침 8시에 일어나기"
                value={props.values.title}
                onChange={props.handleChange}
              />
            </section>
            <section className={styles.TitleInputFooter}>
              <Button handleClick={Previous}>이전</Button>
              <Button handleClick={Continue}>다음</Button>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default TitleInputForm;
