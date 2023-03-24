import React from 'react';
import styled from 'styled-components';

import { Icon } from '@mesh-atoms/Icon';
import { Subtitle1 } from '@mesh-atoms/typography';
import { Card } from '@mesh-components/Card';
import { ChevronRight } from '@mesh-icons/index';

export const List = styled(Card)`
  display: flex;
  justify-content: space-between;
`;

type ListMeshUIProps = {
  text?: string;
  listClicked?: () => void;
};

export const SingleLineInformative: React.FC<ListMeshUIProps> = ({
  text,
  listClicked,
}: ListMeshUIProps) => {
  return (
    <List p="12px 16px" onClick={listClicked}>
      <Subtitle1 color="greyBase">{text}</Subtitle1>
      <Icon as={ChevronRight} width={24} height={24} fill="greyBase" />
    </List>
  );
};
