type LoginErrors = {
  email?: string;
  password?: string;
};

type RegisterErrors = {
  username?: string;
  email?: string;
  password?: string;
  confirmPasswd?: string;
};

export function loginValidate(values: any) {
  const errors: LoginErrors = {};

  // EMAIL VALIDATE
  if (!values.email) {
    errors.email = "Email address is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // PASSWORD VALIDATE
  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid password";
  }
  return errors;
}

export function registerValidate(values: any) {
  const errors: RegisterErrors = {};

  // USERNAME VALIDATE
  if (!values.username) {
    errors.username = "Username is required.";
  }

  // EMAIL VALIDATE
  if (!values.email) {
    errors.email = "Email address is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // PASSWORD VALIDATE
  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.length < 8) {
    errors.password = "Must be greater than 8 characters!";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid password";
  }

  // CONFRIM PASSWORD VALIDATE
  if (!values.confirmPasswd) {
    errors.confirmPasswd = "Confirm password is required.";
  } else if (values.confirmPasswd !== values.password) {
    errors.confirmPasswd = "Passwords not match!";
  } else if (values.confirmPasswd.includes(" ")) {
    errors.confirmPasswd = "Invalid confirm password";
  }

  return errors;
}
