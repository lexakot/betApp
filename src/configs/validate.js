export const regExps = {
  firstName: /^[A-zА-яЁё]+$/,
  lastName: /^[A-zА-яЁё]+$/,
  email: /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/,
  password: /^[a-z0-9_-]{8,18}$/,
  phoneNumber: /^\+?[1-9]\d{8}$/,
  confirmPassword: /^\+?[1-9]\d{8}$/,
};

export const errors = {
  firstName: 'Имя может содержать только буквы',
  lastName: 'Фамилия может содержать только буквы',
  email: 'Введите правильную почту',
  phoneNumber: 'Введите правильный номер телефона',
  password: 'Пароль должен быть не менее 8 символов',
  confirmPassword: '123',
};

