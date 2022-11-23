import { ISignUp, IValues, IProfileSettingsData } from './types';

export function SignUpValidate(values: ISignUp) {
  const errors = {} as ISignUp;
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // validation for password
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = 'Must be greater then 8 and less then 20 characters long';
  } else if (values.password.includes(' ')) {
    errors.password = 'Invalid Password';
  }

  // validation for name
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.includes(' ')) {
    errors.username = 'Invalid Username...!';
  }

  // validation for lastname
  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.includes(' ')) {
    errors.lastName = 'Invalid LastName...!';
  }

  // validation for phone
  if (!values.phone) {
    errors.phone = 'Required';
  } else if (!/^\+996(\d{9})$/.test(values.phone)) {
    errors.phone = 'Invalid Phone! Make sure you write +996 and then 9 digits';
  }
  // validation for confirm password
  if (!values.password_confirm) {
    errors.password_confirm = 'Required';
  } else if (values.password !== values.password_confirm) {
    errors.password_confirm = 'Password Not Match...!';
  } else if (values.password_confirm.includes(' ')) {
    errors.password_confirm = 'Invalid Confirm Password';
  }
  // validation for checkbox
  if (!values.checked) {
    errors.checked = 'Please Check the Input';
  }

  return errors;
}

export function LogInValidate(values: IValues) {
  const errors = {} as IValues;
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // validation for password
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = 'Must be greater then 8 and less then 20 characters long';
  } else if (values.password.includes(' ')) {
    errors.password = 'Invalid Password';
  }
  return errors;
}

export function ProfileDataValidate(values: IProfileSettingsData) {
  const errors = {} as ISignUp;
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // validation for password
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = 'Must be greater then 8 and less then 20 characters long';
  } else if (values.password.includes(' ')) {
    errors.password = 'Invalid Password';
  }

  // validation for name
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.includes(' ')) {
    errors.username = 'Invalid Username...!';
  }

  // validation for lastname
  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.includes(' ')) {
    errors.lastName = 'Invalid LastName...!';
  }

  // validation for phone
  if (!values.phone) {
    errors.phone = 'Required';
  } else if (!/^\+996(\d{9})$/.test(values.phone)) {
    errors.phone = 'Invalid Phone! Make sure you write +996 and then 9 digits';
  }
  // validation for confirm password
  if (!values.password_confirm) {
    errors.password_confirm = 'Required';
  } else if (values.password !== values.password_confirm) {
    errors.password_confirm = 'Password Not Match...!';
  } else if (values.password_confirm.includes(' ')) {
    errors.password_confirm = 'Invalid Confirm Password';
  }

  return errors;
}
