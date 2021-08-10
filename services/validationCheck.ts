export const idCheckRgx = (id: string) => {
  const idCheckRegex = /^[a-zA-Z0-9]{5,15}$/i;
  return idCheckRegex.test(id);
};

export const emailCheckRgx = (email: string) => {
  const emailCheckRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
  return emailCheckRegex.test(email);
};

export const passwordCheckRgx = (password: string) => {
  const passwordCheckRegex =
    /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*#?&])[A-Za-z0-9$@$!%*#?&]{8,15}$/;
  return passwordCheckRegex.test(password);
};

export const nicknameCheckRgx = (nickname: string) => {
  const nicknameCheckRegex = /^[a-zA-Z가-힇0-9]{1,15}$/;
  return nicknameCheckRegex.test(nickname);
};

// export const bornCheckRgx = (born: string) => {
//   const bornCheckRegex = /(19|20)\\d{2}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])/;
//   return bornCheckRegex.test(born);
// };
