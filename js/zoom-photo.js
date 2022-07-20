const picturePreview = document.querySelector('.img-upload__preview img');
const zoomContainer = document.querySelector('.img-upload__scale');
const zoomIn = zoomContainer.querySelector('.scale__control--bigger');
const zoomOut = zoomContainer.querySelector('.scale__control--smaller');
const zommValue = zoomContainer.querySelector('.scale__control--value');
const zoomStep = 25;
// transform: scale(0.75)









/* Напишите код, который позволит пользователю редактировать масштаб изображения.Кроме визуального применения эффекта необходимо записывать значение в поле формы с масштабом, доступное только для чтения, для дальнейшей отправки на сервер.

При нажатии на кнопки .scale__control--smaller и .scale__control--bigger должно изменяться значение поля .scale__control--value;

Значение должно изменяться с шагом в 25. Например, если значение поля установлено в 50%, после нажатия на «+», значение должно стать равным 75%. Максимальное значение — 100%, минимальное — 25%. Значение по умолчанию — 100%;

При изменении значения поля .scale__control--value изображению внутри .img-upload__preview должен добавляться соответствующий стиль CSS, который с помощью трансформации scale задаёт масштаб. Например, если в поле стоит значение 75%, то в стиле изображения должно быть написано transform: scale(0.75). */
