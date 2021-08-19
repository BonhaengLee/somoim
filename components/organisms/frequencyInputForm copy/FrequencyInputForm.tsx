import React from 'react';
import Button from '../../atoms/button/Button';
import CardTitle from '../../atoms/cardTitle/CardTitle';
import CustomRadioButton from '../../atoms/customRadioButton/CustomRadioButton';
import UserInput from '../../atoms/userInput/UserInput';
import styles from './FrequencyInputForm.module.scss';

const Frequencies = [
  { name: '월~일' },
  { name: '월~금' },
  { name: '토~일' },
  { name: '주 6일' },
  { name: '주 5일' },
  { name: '주 4일' },
  { name: '주 3일' },
  { name: '주 2일' },
  { name: '주 1일' },
];

const FrequencyInputForm = (props: {
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
    <div className={`${styles.bodyInner} ${styles.FrequencyInputWrapper}`}>
      <div className={styles.FrequencyInputFlexContainer}>
        <div className={styles.FrequencyInputContainer}>
          <article className={styles.FrequencyInputCard}>
            <section className={styles.FrequencyInputHeader}>
              <CardTitle label="모임빈도" />
            </section>
            <section className={styles.FrequencyInputBody}>
              <CustomRadioButton eName="frequency" labels={Frequencies} />
            </section>
            <section className={styles.FrequencyInputFooter}>
              <Button handleClick={Previous}>이전</Button>
              <Button handleClick={Continue}>다음</Button>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default FrequencyInputForm;
