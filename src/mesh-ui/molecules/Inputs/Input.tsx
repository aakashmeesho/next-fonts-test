import React, { useEffect, useReducer } from 'react';
import styled, { css } from 'styled-components';

import { Caption2, Overline, Subtitle2 } from '@mesh-atoms/typography';
import { Card } from '@mesh-components/Card';
import { FlexSpaceBetween } from '@mesh-helpers/common';
import {
  getFontFamilyFromFontWeight,
  getGreyBase,
  getGreyT2,
  getPinkBase,
  getRedBase,
  getWhite,
  greyT3Divider,
} from '@mesh-helpers/themeHelper';
import { validate } from '@mesh-helpers/validators';
import { SpaceProps } from '@mesh-typings/Base';
import { LinkButton } from '@mesh-molecules/Button';

interface CardStyledBoxProps {
  active: boolean;
}
const CardStyledBox = styled(Card)<CardStyledBoxProps>`
  ${FlexSpaceBetween};
  border-bottom: 1px solid;
  border-color: ${(props) => (props.active ? getPinkBase : greyT3Divider)};
  border-radius: 0;
`;

const CardStyled = styled(Card)<{
  isValid: boolean;
  isTouched: boolean;
  length: number;
  variant: string;
}>`
  position: relative;

  label {
    position: absolute;
    left: 0;
    top: 21px;
    font-size: 13px;
    transition: top 0.2s ease;
    pointer-events: none;
    background: ${getWhite};
    width: 100%;
  }
  button {
    padding-bottom: 7px;
    padding-top: 22px;
  }
  input,
  textarea {
    width: 100%;
    caret-color: ${getPinkBase};
    outline: none;
    font-size: ${(props) => (props.theme.isMobile ? '13px' : '16px')};
  }

  input,
  textarea {
    border: none;
    border-bottom: ${({ variant }) =>
      variant === 'input' ? '1px solid' : 'none'};
    border-color: ${greyT3Divider};
    overflow-y: scroll;
    background: transparent;
    padding-bottom: 7px;
    padding-top: 22px;

    font-size: ${(props) => (props.theme.isMobile ? '13px' : '16px')};
    line-height: ${(props) => (props.theme.isMobile ? '16px' : '20px')};
    color: ${getGreyBase};
    ${getFontFamilyFromFontWeight({ fontWeight: 'demi' })}
  }

  textarea {
    overflow-y: scroll;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:focus,
  textarea:focus {
    border-color: ${getPinkBase};
    background: transparent;
  }

  input:focus ~ label,
  textarea:focus ~ label {
    top: -3px;
    span {
      color: ${getPinkBase};
      font-size: 11px;
    }
  }

  .error-text {
    display: block;
  }

  ${({ isValid, length }) =>
    isValid &&
    length &&
    css`
      label {
        top: -3px;
        span {
          color: ${getGreyT2};
          font-size: 11px;
        }
      }

      input {
        border-color: ${greyT3Divider};
      }
    `}

  ${({ isValid, isTouched }) =>
    isValid &&
    isTouched &&
    css`
      label {
        top: -3px;
        span {
          color: ${getGreyT2};
          font-size: 11px;
        }
      }

      input {
        border-color: ${greyT3Divider};
      }
    `};

  ${({ isValid, isTouched }) =>
    !isValid &&
    isTouched &&
    css`
      label {
        top: -3px;
        span {
          color: ${getRedBase} !important;
          font-size: 11px;
        }
      }

      input,
      textarea {
        caret-color: ${getRedBase};
      }

      input {
        border-color: ${getRedBase} !important;
      }
    `}
`;

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case 'INPUT_UPDATED':
      return {
        ...state,
        value: action.val,
        isValid: action.valid,
        isTouched: action.touched,
      };
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};

interface InputProps extends SpaceProps {
  initialValue?: string;
  initialValid?: boolean;
  onInput: any;
  id: string;
  validators?: Array<any>;
  element: string;
  type: string;
  placeholder?: string;
  rows?: number;
  label: string;
  errorText?: string;
  autoFocus?: boolean;
  isTouched?: boolean;
  inputClicked?: () => void;
  inputMode?: any;
  maxLength?: number;
  actionLabel?: string;
  onActionClick?: any;
  disabled?: boolean;
  variant?: string;
  minLength?: number;
  inputref?: any;
  onBlur?: () => void;
  autoComplete?: boolean;
  pattern?: string;
}

export const Input: React.FC<InputProps> = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouched: props.isTouched || false,
    isValid: props.initialValid || false,
  });

  const {
    id,
    onInput,
    actionLabel,
    onActionClick,
    autoComplete = true,
    variant,
  } = props;

  const { value, isValid, isTouched } = inputState;
  const [focusState, setFocusState] = React.useState(false);

  useEffect(() => {
    onInput(id, value, isValid, isTouched);
  }, [id, value, isValid, onInput, isTouched]);

  useEffect(() => {
    dispatch({
      type: 'INPUT_UPDATED',
      val: props.initialValue,
      valid: props.initialValid,
      touched: props.isTouched,
    });
  }, [props.initialValue, props.initialValid, props.isTouched]);

  const changeHandler = (event) => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = (e) => {
    setFocusState(false);
    if (inputState?.value?.length) {
      dispatch({
        type: 'TOUCH',
        payload: true,
      });
    }
    props.onBlur && props.onBlur();
  };

  const handleClick = () => {
    if (isValid && onActionClick) {
      onActionClick();
    }
  };
  const element =
    props.element === 'input' ? (
      <input
        ref={props?.inputref}
        id={props.id}
        type={props.type}
        pattern={props.pattern && props.pattern}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
        autoFocus={props.autoFocus}
        onClick={props.inputClicked}
        autoComplete="off"
        onFocus={(event) => {
          setFocusState(true);
          if (event.target.autocomplete && autoComplete) {
            // eslint-disable-next-line no-param-reassign
            event.target.autocomplete = 'omit';
          }
        }}
        inputMode={props.inputMode || 'text'}
        maxLength={props.maxLength}
        disabled={props.disabled || false}
        minLength={props.minLength}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
        disabled={props.disabled || false}
        onFocus={() => {
          setFocusState(true);
        }}
      />
    );

  return (
    <CardStyled
      {...props}
      isValid={isValid}
      isTouched={isTouched}
      length={inputState.value?.length}
      borderRadius="0px"
      variant={variant || 'input'}
    >
      {variant === 'inputBox' ? (
        <CardStyledBox active={focusState}>
          {' '}
          {element}{' '}
          <label htmlFor={props.id}>
            <Overline color="greyT2">{props.label}</Overline>
          </label>
          <LinkButton
            onClick={handleClick}
            color={inputState.value?.length ? 'pinkBase' : 'pinkT1'}
          >
            {actionLabel}
          </LinkButton>{' '}
        </CardStyledBox>
      ) : (
        <>
          {element}
          <label htmlFor={props.id}>
            <Subtitle2 color="greyT2">{props.label}</Subtitle2>
          </label>{' '}
        </>
      )}
      {!isValid && isTouched && (
        <Caption2 className="error-text" color="redBase">
          {props.errorText}
        </Caption2>
      )}
    </CardStyled>
  );
};
