import React, { useEffect } from 'react';
import { SingleChip } from '@mesh-molecules/Chips/SingleChip';
import { ChipsProps, ChipsWrapper } from '@mesh-molecules/Chips/ChipsProps';

export const SizeSelectorChips: React.FC<ChipsProps> = ({
  options = [],
  defaultSelectFirst,
  onSelection,
  ...props
}) => {
  const [active, setActive] = React.useState(defaultSelectFirst);

  const handleSelect = (index) => {
    setActive(index);
    onSelection(options[index], [options[index]]);
  };

  useEffect(() => {
    handleSelect(defaultSelectFirst);
  }, [defaultSelectFirst]);

  const getValues = (option) => ({
    label: option?.variation?.name,
    key: option?.variation?.id,
    isDisabled: !option?.in_stock,
  });

  return (
    <ChipsWrapper {...(props as any)}>
      {options.map((option, index) => {
        const isSelected = index === active;
        const { label, key, isDisabled } = getValues(option);
        return (
          <SingleChip
            isSelected={isSelected}
            key={key}
            handleClick={() => handleSelect(index)}
            isDisabled={isDisabled}
            label={label}
          />
        );
      })}
    </ChipsWrapper>
  );
};
