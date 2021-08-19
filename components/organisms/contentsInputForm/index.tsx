import React, { useState } from 'react';
import Head from 'next/head';
import styles from './create.module.scss';
import QuillEditor from '../../atoms/quillEditor/QuillEditor';
import Button from '../../atoms/button/Button';

const ContentsInputForm = (): JSX.Element => {
  const [body, setBody] = useState(''); // Quill 에디터의 innerHTML을 담는 state
  const [mountBody, setMountBody] = useState(false); // 리렌더링 용도 state

  /* 외부에서 body의 수정이 일어난 경우 body에 자동으로 적용되지 않습니다!
     이 함수를 호출했을 때 컴포넌트 내의 useEffect가 실행되어 body의 수정 사항이 적용됩니다. */
  function rerenderBody() {
    setMountBody((mb) => !mb);
  }

  return (
    // <div className={styles.container}>
    <div className={`${styles.bodyInner} ${styles.CategoryInputWrapper}`}>
      <Head>
        <title>Quill in createPage</title>
        <link rel="icon" href="/favicon.ico" />

        {/* 관련된 리소스 로드 (CSS는 _app.js에서 global CSS로 로드하는 편이 좋을 거 같다.) */}
        <link
          href="//cdn.jsdelivr.net/npm/katex@0.13.3/dist/katex.min.css"
          rel="stylesheet"
        />
        <script src="//cdn.jsdelivr.net/npm/katex@0.13.3/dist/katex.min.js" />
        <script src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.7.2/build/highlight.min.js" />
        <script src="//cdn.quilljs.com/1.3.6/quill.min.js" />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.7.2/build/styles/default.min.css"
        />
        <link rel="stylesheet" href="//cdn.quilljs.com/1.3.6/quill.snow.css" />
      </Head>
      <div className={styles.CategoryInputFlexContainer}>
        <div className={styles.CategoryInputContainer}>
          <article className={styles.CategoryInputCard}>
            <section className={styles.CategoryInputHeader}>
              <h1 className={styles.title}>모임을 소개하세요.</h1>
              <p className={styles.subTitle}>
                추가 사진과 글로 모임을 자세히 소개해보세요.
              </p>
            </section>

            <section className={styles.CategoryInputBody}>
              <QuillEditor
                body={body}
                handleQuillChange={setBody}
                mountBody={mountBody}
              />
            </section>

            <section className={styles.CategoryInputBody}>
              <p>body state 미리보기</p>
              <div className={styles.body}>{body}</div>
            </section>

            <section className={styles.CategoryInputBody}>
              <button
                type="button"
                onClick={() => setBody((b) => `${b}<p>수정</p>`)}
              >
                body 수정 발생
              </button>
              <button type="button" onClick={rerenderBody}>
                body 수정 사항 적용
              </button>
              <Button handleClick={() => console.log('개설하기')}>
                개설하기
              </Button>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ContentsInputForm;
