import React, { useEffect } from 'react';
import { Radio } from '@mesh-molecules/Controls/Radio/Radio';
import { RadioWrapper } from '@mesh-molecules/Controls/Radio/Radio.styled';
import { RadioProps } from '@mesh-molecules/Controls/Radio/RadioProps';
import styled from 'styled-components';

const RadioStyled = styled(Radio)`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const RadioSelection: React.FC<RadioProps> = ({
  options = [],
  defaultSelectFirst = undefined,
  onSelection,
  ...props
}) => {
  const [active, setActive] = React.useState(
    defaultSelectFirst ? defaultSelectFirst : 0,
  );

  useEffect(() => {
    if (defaultSelectFirst) {
      setActive(defaultSelectFirst);
    }
  }, [defaultSelectFirst]);

  const handleSelect = (index) => {
    setActive(index);
    onSelection(options[index]);
  };

  const getValues = (option) => ({
    label: option?.label,
    key: option?.label,
  });

  return (
    <RadioWrapper {...props}>
      {options.map((option, index) => {
        const isSelected = index === active;
        const { label, key } = getValues(option);
        return (
          <RadioStyled
            checked={isSelected}
            key={key}
            onChange={() => handleSelect(index)}
            label={label}
          />
        );
      })}
    </RadioWrapper>
  );
};
