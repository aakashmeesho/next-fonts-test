import React, {
  ChangeEventHandler,
  useContext,
  useEffect,
  useState,
} from 'react';
import styled, { ThemeContext } from 'styled-components';

import { Icon } from '@mesh-atoms/Icon';
import { ParagraphBody3 } from '@mesh-atoms/typography';
import {
  getBorderRadiusButton,
  getGreyT2,
  getPinkBase,
} from '@mesh-helpers/themeHelper';
import { CameraIcon, CloseIcon, SearchLineIcon } from '@mesh-icons/index';

interface StyleProps {
  disabled?: boolean | undefined;
  onClick?: any;
  width?: string;
}

const StyledSearchInput = styled.div<StyleProps>`
  display: flex;
  align-items: center;
  width: ${(props) => (props.theme.isMobile ? '100%' : props.width || '400px')};
  border: 1px solid ${getGreyT2};
  border-radius: ${getBorderRadiusButton};
`;

const IconWrapper = styled.div`
  height: 100%;
  display: flex;
  padding: ${(props) => (props.theme.isMobile ? '12px' : '12px 16px')};
  padding-right: 8px;
  align-items: center;
  justify-content: center;
`;

const CameraIconWrapper = styled(IconWrapper)`
  border-left: 1px solid ${getGreyT2};
  padding: ${(props) => (props.theme.isMobile ? '12px' : '12px 16px')};
  cursor: pointer;
`;
const ClearIconWrapper = styled(IconWrapper)`
  padding: ${(props) => (props.theme.isMobile ? '12px' : '12px 16px')};
  padding-left: 5px;
  cursor: pointer;
`;

const InputUsingParagraphBody3 = (props) => (
  <ParagraphBody3 {...props} elm="input" color="greyBase" />
);

const Input = styled(InputUsingParagraphBody3)<{
  onChange: any;
  onKeyPress: any;
  onClick: any;
}>`
  letter-spacing: 0.0025em;
  box-sizing: border-box;
  flex: 1;
  padding: 12px 0;
  border: none;
  height: 100%;
  caret-color: ${getPinkBase};
  &::placeholder {
    color: ${getGreyT2};
  }

  &:active,
  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  input {
    display: none;
  }
`;

interface TextSearchProps {
  placeholder?: string;
  searchValue?: string;
  searchChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  keyPressed?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  clearInputHandler: any;
  onClick?: any;
  readonly?: boolean;
  imageInput?: any;
  withImage?: boolean;
  onImageClick?: any;
  width?: string;
}

export const TextSearch: React.FC<TextSearchProps> = (props) => {
  const { isMobile } = useContext(ThemeContext);
  const { searchValue = '' } = props;

  const [text, setText] = useState(searchValue);

  useEffect(() => {
    setText(searchValue);
  }, [searchValue]);

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
    props.searchChangeHandler(e);
  };

  const handleClear = (): void => {
    setText('');
    props.clearInputHandler();
  };

  const handleImageClick = (e): void => {
    if (props.readonly && props.onImageClick) {
      e.stopPropagation();
      props.onImageClick();
    }
  };

  return (
    <StyledSearchInput {...props} onClick={props.onClick}>
      <IconWrapper>
        <Icon as={SearchLineIcon} iconSize={isMobile ? 16 : 20} fill="greyT2" />
      </IconWrapper>
      <Input
        type="text"
        placeholder={props.placeholder}
        value={text}
        onChange={onChangeHandler}
        onKeyPress={props.keyPressed}
        onClick={props.onClick}
        readOnly={props.readonly}
        className="search-input-elm"
      />
      {text && text.length >= 1 && (
        <ClearIconWrapper onClick={handleClear}>
          <Icon as={CloseIcon} iconSize={isMobile ? 16 : 20} />
        </ClearIconWrapper>
      )}
      {props.withImage && (
        <Label onClick={handleImageClick}>
          <CameraIconWrapper>
            <Icon as={CameraIcon} iconSize={20} />
          </CameraIconWrapper>
          {props.imageInput}
        </Label>
      )}
    </StyledSearchInput>
  );
};

TextSearch.defaultProps = {
  placeholder: 'Search',
  searchValue: '',
};
