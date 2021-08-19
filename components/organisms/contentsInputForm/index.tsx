import React, { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import styles from './ContentInputForm.module.scss';
import Button from '../../atoms/button/Button';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
];

const ContentsInputForm = (): JSX.Element => (
  <div className={`${styles.bodyInner} ${styles.ContentInputWrapper}`}>
    <div className={styles.ContentInputFlexContainer}>
      <div className={styles.ContentInputContainer}>
        <article className={styles.ContentInputCard}>
          <section className={styles.ContentInputHeader}>
            <h1 className={styles.title}>모임을 소개하세요.</h1>
            <p className={styles.subTitle}>
              추가 사진과 글로 모임을 자세히 소개해보세요.
            </p>
          </section>

          <section className={styles.ContentInputBody}>
            <QuillNoSSRWrapper
              modules={modules}
              formats={formats}
              theme="snow"
              className={styles.qlEditor}
            />
          </section>

          <section className={styles.ContentInputFooter}>
            <Button handleClick={() => console.log('개설하기')}>
              개설하기
            </Button>
          </section>
        </article>
      </div>
    </div>
  </div>
);
export default ContentsInputForm;
