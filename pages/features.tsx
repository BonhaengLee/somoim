import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

const pageNum = 1;

const category = 'CG_01';

const translateC = (c) => {
  const val =
    (c === 'CG_01' && '운동') ||
    (c === 'CG_02' && '공부') ||
    (c === 'CG_03' && '생활습관') ||
    (c === 'CG_04' && '취미') ||
    (c === 'CG_05' && '감정관리') ||
    (c === 'CG_06' && '돈관리') ||
    (c === 'CG_07' && '외국어');
  return val;
};

const fetchBoardListFromAPI = async () => {
  // const res = await fetch('https://swapi.dev/api/people/');
  // const res = await fetch(`/board/${category}/${pageNum}`);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/board/${category}/${pageNum}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('AccessToken').replaceAll('"', ''),
      },
    }
  );
  return res.json();
};

export default function Features() {
  const { data, status } = useQuery('board', fetchBoardListFromAPI);
  console.log('data', data);
  console.log('status', status);
  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '100%',
          marginTop: '50px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {status === 'success' &&
          data.map((item) => (
            <div
              key={item.id}
              style={{
                boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.05)',
                padding: '10px',
                borderRadius: '8px',
                width: '60%',
                background: '#e6d7ae',
                marginBottom: '20px',
              }}
            >
              {/* author: "대람"
category: "CG_01"
content: "[object HTMLDivElement]"
created_at: "2021-08-23T15:04:00.000+00:00"
id: 6
thumbnail: "https://s3.ap-northeast-2.amazonaws.com/gathering-s3/thumbnail/d801a157-a154-4bef-9807-21429290d314cow.jpeg"
title */}
              <strong>{translateC(item.category)}</strong>
              <p>{item.author}</p>
              <p>{item.title}</p>
              <p>{item.created_at}</p>
              <img src={item.thumbnail} alt="" height="100px" width="100px" />
              <p>
                Hair Color:
                {item.content}
              </p>
            </div>
          ))}
      </div>
    </>
  );
}
