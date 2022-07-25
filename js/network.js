const GET_URL = 'https://26.javascript.pages.academy/kekstagram/data';
const POST_URL = 'https://26.javascript.pages.academy/kekstagra';
const contentData=[];

const getData = (onSuccess, onFail) => {
  fetch(GET_URL)
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
      data.forEach((item) => contentData.push(item));
    })
    .catch(() => onFail('Не удалось загрузить контент. Обновите страницу'));
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    POST_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData, contentData};
