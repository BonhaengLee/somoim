import React from 'react';
import Button from '../../global/button/Button';
import CardTitle from '../../global/cardTitle/CardTitle';
import UserInput from '../../global/userInput/UserInput';
import styles from './FeeInputForm.module.scss';

const FeeInputForm = (props: {
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
    <div className={`${styles.bodyInner} ${styles.FeeInputWrapper}`}>
      <div className={styles.FeeInputFlexContainer}>
        <div className={styles.FeeInputContainer}>
          <article className={styles.FeeInputCard}>
            <section className={styles.FeeInputHeader}>
              <CardTitle label="참가비를 설정하세요" />
            </section>
            <section className={styles.FeeInputBody}>
              <UserInput
                inputType="text"
                name="fee"
                placeholder="예) 3000000000"
                value={props.values.fee}
                onChange={props.handleChange}
              />
              <p>원</p>
            </section>
            <section className={styles.FeeInputFooter}>
              <Button handleClick={Previous}>이전</Button>
              <Button handleClick={Continue}>다음</Button>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default FeeInputForm;
