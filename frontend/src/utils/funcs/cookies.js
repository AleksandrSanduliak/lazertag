export const expriesOptions = {
  day: 24 * 60 * 60 * 1000,
  minutes: 60 * 1000,
};

export function setCookie(name, value, expiresValue, expiresType = 'days') {
  let expires = '';
  const date = new Date();

  if (expiresType === 'days') date.setTime(date.getTime() + expiresValue * expriesOptions.day);

  if (expiresType === 'minutes')
    date.setTime(date.getTime() + expiresValue * expriesOptions.minutes);

  expires = '; expires=' + date.toUTCString();
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
  console.log('doc cookie', document.cookie);
}

export function getCookie(name) {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export function eraseCookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
