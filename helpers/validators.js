// Validating email with regex
export const isEmailValid = (email) => {
  const emailRegex =
    /^[A-Za-z0-9_!#$%&'*+\\/=?`{|}~^.-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9.-]+$/;

  return emailRegex.test(email);
};

// Passing input values object and iterating through it, if any field is empty it'll return an error
export const emptyFieldsList = (inputValues) => {
  const emptyFields = {};
  Object.keys(inputValues).forEach((key) => {
    if (!inputValues[key].trim()) {
      emptyFields[key] = 'Fill Out';
    }
  });
  return emptyFields;
};

export const isPasswordStrong = (password) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&.])[A-Za-z\d@$!#%*?&]{8,}$/;

  return passwordRegex.test(password);
};
