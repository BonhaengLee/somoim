import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import styles from './ContentInputForm.module.scss';
import Button from '../../global/button/Button';
// import S3 from 'react-aws-s3';

export const modules = {
  toolbar: {
    container: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],

      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction

      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      ['link', 'image', 'formula'],
      ['clean'],
    ],
  },
};

function QuillEditor(props: {
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
}) {
  /* eslint-disable global-require */
  const Quill = typeof window === 'object' ? require('quill') : () => false;

  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  const onClickImageBtn = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.onchange = function () {
      const file = input.files[0];
      // const fileName = file.name;
      const formData = new FormData();
      formData.append('files', file);

      // const config = {
      //   bucketName: process.env.S3_BUCKET_NAME,
      //   region: process.env.S3_REGION,
      //   accessKeyId: process.env.S3_ACCESS_ID,
      //   secretAccessKey: process.env.S3_ACCESS_KEY,
      // };
      // const ReactS3Client = new S3(config);
      // ReactS3Client.uploadFile(file, fileName);
      const url = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/board/images`;
      axios
        .post(url, formData, {
          headers: {
            'Content-Type': false,
            authorization: localStorage
              .getItem('AccessToken')
              .replaceAll('"', ''),
          },
        })
        .then((data) => {
          // const d = data.json();
          console.log('d', data);
          if (data.status === 200) {
            //커서 위치 받아오기 위함.
            const range = quillInstance.current.getSelection(true);
            console.log('커서위치', range);

            // 1.현재 커서 위치에 2. 이미지를 3.src="" 로 나타냄.
            quillInstance.current.insertEmbed(
              range.index,
              'image',
              // @ts-ignore
              `${data.location}`
            );

            // 이미지 업로드 후 커서 이미지 한칸 옆으로 이동.
            quillInstance.current.setSelection(range.index + 1);
          } else {
            alert('error');
          }
        });
    };
  };

  useEffect(() => {
    if (quillElement.current) {
      quillInstance.current = new Quill(quillElement.current, {
        theme: 'snow',
        placeholder: 'Please enter the contents.',
        modules,
      });
    }

    const quill = quillInstance.current;

    quill.on('text-change', () => {
      props.handleChange('content', quill.root.innerHTML);
    });

    const toolbar = quill.getModule('toolbar');
    toolbar.addHandler('image', onClickImageBtn);
  }, []);

  return (
    <>
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
                {/* <QuillNoSSRWrapper
                  modules={modules}
                  formats={formats}
                  theme="snow"
                  className={styles.qlEditor}
                  value={props.values.content}
                  onChange={(e) => {
                    props.handleChange('content', e);
                  }}
                /> */}
                <div ref={quillElement}></div>
              </section>

              <section className={styles.ContentInputFooter}>
                <Button handleClick={props.createMeeting}>개설하기</Button>
              </section>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(QuillEditor);
