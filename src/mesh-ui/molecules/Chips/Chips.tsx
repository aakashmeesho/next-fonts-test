import React from 'react';
import { SingleChip } from '@mesh-molecules/Chips/SingleChip';
import { ChipsProps, ChipsWrapper } from '@mesh-molecules/Chips/ChipsProps';

export const Chips: React.FC<ChipsProps> = ({
  multiSelectable = false,
  options = [],
  defaultSelectFirst = undefined,
  onSelection,
  ...rest
}) => {
  const [active, setActive] = React.useState(defaultSelectFirst ? 0 : null);
  const [multi, setMulti] = React.useState<number[]>([]);

  const handleSelect = (index) => {
    setActive(index);
    onSelection(options[index], [options[index]]);
  };

  const handleMultiSelect = (index) => {
    const newArray = Object.assign([], multi);
    const position = newArray.indexOf(index);
    if (position > -1) {
      newArray.splice(position, 1);
    } else {
      newArray.push(index);
    }
    setMulti([...newArray]);
    const getSelectOptions = newArray.map((m) => options[m]);
    onSelection(options[index], getSelectOptions);
  };

  const getValues = (option) => ({
    label: option?.label,
    key: option?.label,
  });

  return (
    <ChipsWrapper {...(rest as any)}>
      {options.map((option, index) => {
        const isSelected = multiSelectable
          ? multi.indexOf(index) > -1
          : index === active;
        const { label, key } = getValues(option);
        return (
          <SingleChip
            key={key}
            label={label}
            isSelected={isSelected}
            handleClick={() =>
              multiSelectable ? handleMultiSelect(index) : handleSelect(index)
            }
            {...(rest as any)}
          />
        );
      })}
    </ChipsWrapper>
  );
};
