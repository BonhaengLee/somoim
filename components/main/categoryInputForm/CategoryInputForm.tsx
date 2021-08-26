import React from 'react';
import Button from '../../global/button/Button';
import CardTitle from '../../global/cardTitle/CardTitle';
import CustomRadioButton from '../../global/customRadioButton/CustomRadioButton';
import styles from './CategoryInputForm.module.scss';

const Categories = [
  { name: '운동' },
  { name: '공부' },
  { name: '생활습관' },
  { name: '취미' },
  { name: '감정관리' },
  { name: '돈관리' },
  { name: '외국어' },
];

const CategoryInputForm = (props: {
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
  const Continue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <div className={`${styles.bodyInner} ${styles.CategoryInputWrapper}`}>
      <div className={styles.CategoryInputFlexContainer}>
        <div className={styles.CategoryInputContainer}>
          <article className={styles.CategoryInputCard}>
            <section className={styles.CategoryInputHeader}>
              <CardTitle label="어떤 카테고리와 연관이 있나요?" />
            </section>
            <section className={styles.CategoryInputBody}>
              <CustomRadioButton
                eName="category"
                labels={Categories}
                handleChange={props.handleChange}
              />
            </section>
            <section>
              <Button handleClick={Continue}>다음</Button>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default CategoryInputForm;
