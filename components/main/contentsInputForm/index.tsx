import React, { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import styles from './ContentInputForm.module.scss';
import Button from '../../global/button/Button';

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
    // [{ handlers: { image: imageHandler } }],
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

// interface HTMLInputEvent extends Event {
//   target: HTMLInputElement & EventTarget;
// }

const ContentsInputForm = (props: {
  createMeeting: () => void;
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
  handleChange: (name: string, value: string) => void;
  // disabled: boolean;
}): JSX.Element => {
  const onChange = (name, value) => {
    props.handleChange('content', value);
  };
  // 이미지 제어
  // function imageHandler() {
  //   // input file tag 생성
  //   const input = document.createElement('input');
  //   input.setAttribute('type', 'file');
  //   input.setAttribute('accept', '.png,.jpg,.jpeg');
  //   input.click();

  //   // input change
  //   input.onchange = (e: HTMLInputEvent) => {
  //     const formData = new FormData();
  //     formData.append('files', e.target.files[0]);

  //     // file 등록
  //     const tempFile = api.file.postTempFileUpload(formData);
  //     tempFile.then((response) => {
  //       console.log(response);

  //       // 커서 위치 및 fileSrno 얻기 ()
  //       const { fileSrno } = response;
  //       const range = this.quill.getSelection();

  //       this.quill.insertEmbed(
  //         range.index,
  //         'image',
  //         `http://localhost:8002/master/api/v1/upload/img/${fileSrno}`
  //       );
  //     });
  //   };
  // }
  return (
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
                value={props.values.content}
                onChange={(e) => {
                  props.handleChange('content', e);
                }}
              />
            </section>

            <section className={styles.ContentInputFooter}>
              <Button handleClick={props.createMeeting}>개설하기</Button>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ContentsInputForm;
