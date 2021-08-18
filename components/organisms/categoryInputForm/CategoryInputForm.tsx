import React from 'react';
import CardTitle from '../../atoms/cardTitle/CardTitle';
import CustomRadioButton from '../../atoms/customRadioButton/CustomRadioButton';
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
    fee: 0;
    finishAt: string; // finish_at
    frequency: string;
    maxAge: 0; //
    minAge: 0; //
    numOfPeople: 0;
    place: string;
    startAt: string; //
    thumbnail: string;
    title: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}): JSX.Element => (
  <div className={`${styles.bodyInner} ${styles.CategoryInputWrapper}`}>
    <div className={styles.CategoryInputFlexContainer}>
      <div className={styles.CategoryInputContainer}>
        <article className={styles.CategoryInputCard}>
          <section className={styles.CategoryInputHeader}>
            <CardTitle label="어떤 카테고리와 연관이 있나요?" />
          </section>
          <section className={styles.CategoryInputBody}>
            <CustomRadioButton labels={Categories} />
          </section>
        </article>
      </div>
    </div>
  </div>
);

export default CategoryInputForm;
