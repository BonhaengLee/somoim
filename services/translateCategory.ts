const translateCategory = (c) => {
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
export default translateCategory;
