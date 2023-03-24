const VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
const VALIDATOR_TYPE_ASCII_RESTRICT = 'ASCII_RESTRICT';
const VALIDATOR_TYPE_MIN_CHAR_NOT_SYMBOL = 'MIN_CHAR_NOT_SYMBOL';
const VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH';
const VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH';
const VALIDATOR_TYPE_MIN = 'MIN';
const VALIDATOR_TYPE_MAX = 'MAX';
const VALIDATOR_TYPE_EMAIL = 'EMAIL';
const VALIDATOR_TYPE_FILE = 'FILE';
const VALIDATOR_TYPE_ALPHA_NUMERIC = 'ENGLISHCHARACTERS_NUMBERS';
const VALIDATOR_TYPE_ALPHABETIC = 'ENGLISHCHARACTERS';
const VALIDATOR_PHONE_NUMBER = 'PHONENUMBER';
const VALIDATOR_PIN_CODE = 'PINCODE';
const VALIDATOR_TYPE_NUMERIC = 'NUMBER';
const VALIDATOR_TYPE_MATCH = 'VALUEMATCH';

export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_FILE = () => ({ type: VALIDATOR_TYPE_FILE });
export const VALIDATOR_MINLENGTH = (val) => ({
  type: VALIDATOR_TYPE_MINLENGTH,
  val,
});
export const VALIDATOR_MAXLENGTH = (val) => ({
  type: VALIDATOR_TYPE_MAXLENGTH,
  val,
});
export const VALIDATOR_MIN = (val) => ({ type: VALIDATOR_TYPE_MIN, val });
export const VALIDATOR_MAX = (val) => ({ type: VALIDATOR_TYPE_MAX, val });
export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });
export const VALIDATOR_MATCH = (val) => ({ type: VALIDATOR_TYPE_MATCH, val });
export const VALIDATOR_ALPHA_NUMERIC = () => ({
  type: VALIDATOR_TYPE_ALPHA_NUMERIC,
});
export const VALIDATOR_ALPHABETIC = () => ({
  type: VALIDATOR_TYPE_ALPHABETIC,
});
export const VALIDATOR_ASCII_RESTRICT = () => ({
  type: VALIDATOR_TYPE_ASCII_RESTRICT,
});
export const VALIDATOR_PHONE = () => ({
  type: VALIDATOR_PHONE_NUMBER,
});
export const VALIDATOR_PIN = () => ({
  type: VALIDATOR_PIN_CODE,
});
export const VALIDATOR_NUMERIC = () => ({
  type: VALIDATOR_TYPE_NUMERIC,
});
export const VALIDATOR_MIN_CHAR_NOT_SYMBOL = (val) => ({
  type: VALIDATOR_TYPE_MIN_CHAR_NOT_SYMBOL,
  val,
});

export const validate = (value, validators) => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_REQUIRE) {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
      isValid = isValid && value.trim().length >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
      isValid = isValid && value.trim().length <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MIN) {
      isValid = isValid && +value >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAX) {
      isValid = isValid && +value <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_ALPHA_NUMERIC) {
      isValid =
        isValid &&
        /^[a-zA-Z0-9 ]+$/.test(value) &&
        !/[^\x00-\x7F]+/.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_ALPHABETIC) {
      isValid =
        isValid && /^[a-zA-Z ]+$/.test(value) && !/[^\x00-\x7F]+/.test(value);
    }
    if (validator.type === VALIDATOR_PHONE_NUMBER) {
      isValid =
        isValid && /^[6-9]\d{9}$/.test(value) && !/(\d)\1{9}/.test(value);
    }
    if (validator.type === VALIDATOR_PIN_CODE) {
      isValid = isValid && /^\d{6}$/.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_ASCII_RESTRICT) {
      isValid = isValid && !/[<>]/.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_MIN_CHAR_NOT_SYMBOL) {
      isValid =
        isValid &&
        (/^[a-zA-Z0-9]+/.test(value) || value.trim().length > validator.val);
    }
    if (validator.type === VALIDATOR_TYPE_NUMERIC) {
      isValid = isValid && /^[0-9]*$/.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_MATCH) {
      isValid = isValid && value === validator.val;
    }
  }
  return isValid;
};
