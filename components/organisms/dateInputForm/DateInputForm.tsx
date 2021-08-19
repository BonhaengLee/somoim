import React from 'react';
import Button from '../../atoms/button/Button';
import UserInput from '../../atoms/userInput/UserInput';
import styles from './DateInputForm.module.scss';

const DateInputForm = (props: {
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
    <div className={`${styles.bodyInner} ${styles.DateInputWrapper}`}>
      <div className={styles.DateInputFlexContainer}>
        <div className={styles.DateInputContainer}>
          <article className={styles.DateInputCard}>
            <section className={styles.DateInputBody}>
              <article>
                <h2>모임 시작일</h2>
                <UserInput
                  inputType="date"
                  name="startAt"
                  placeholder="yyyy/mm/dd"
                  value={props.values.startAt}
                  onChange={props.handleChange}
                />
              </article>
              <article>
                <h2>모임 종료일</h2>
                <UserInput
                  inputType="date"
                  name="finishAt"
                  placeholder="yyyy/mm/dd"
                  value={props.values.finishAt}
                  onChange={props.handleChange}
                />
              </article>
            </section>
            <section className={styles.DateInputFooter}>
              <Button handleClick={Previous}>이전</Button>
              <Button handleClick={Continue}>다음</Button>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default DateInputForm;
