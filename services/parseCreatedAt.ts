const parseCreatedAt = (d) => {
  const b = d.split(/\D+/);
  return `${b[0]}.${b[1]}.${b[2]} `;
  //String(new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6])));
};

export default parseCreatedAt;
