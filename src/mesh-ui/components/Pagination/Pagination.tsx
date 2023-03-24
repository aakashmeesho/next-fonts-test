import React from 'react';
import styled, { css } from 'styled-components';
import { getPinkBase } from '@mesh-helpers/themeHelper';
import { LinkButton } from '@mesh-molecules/Button';
import { Subtitle2 } from '@mesh-atoms/typography/Subtitle';

import { usePagination, DOTS } from './usePagination';

interface PaginationProps {
  onPageChange: (page: number | string, event: any) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}

interface PaginationItemProps {
  selected?: boolean;
  cursor?: boolean;
  id?: number | string;
}

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaginationItem = styled.div<PaginationItemProps>`
  padding: 0 12px;
  height: 28px;
  min-width: 28px;
  padding: 0px 6px;
  margin: auto 6px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  border-radius: 40px;
  user-select: none;
  align-items: ${(props) => (props.cursor ? 'center' : 'start')};
  cursor: ${(props) => (props.cursor ? 'pointer' : 'default')};
  ${(props) => props.selected && SelectedItem};
`;

const SelectedItem = css`
  background: ${getPinkBase};
`;

const NavigationButtons = styled(LinkButton)`
  margin: 0 18px;
`;

export const Pagination: React.FC<PaginationProps> = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 2,
    currentPage,
    pageSize,
  } = props;

  const paginationRange: (string | number)[] = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(currentPage + 1, event);
  };

  const onPrevious = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(currentPage - 1, event);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <PaginationContainer {...props}>
      {/*  Left Navigation */}
      {currentPage !== 1 && (
        <NavigationButtons id="previous" onClick={onPrevious}>
          PREVIOUS
        </NavigationButtons>
      )}

      {paginationRange.map((pageNumber: string | number, idx: number) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <PaginationItem>&#8230;</PaginationItem>;
        }

        // Render our Page Pills
        return (
          <PaginationItem
            id={String(pageNumber)}
            cursor
            selected={pageNumber === currentPage}
            onClick={(event) => onPageChange(pageNumber, event)}
            key={idx}
          >
            <Subtitle2
              color={pageNumber === currentPage ? 'white' : 'greyBase'}
            >
              {pageNumber}
            </Subtitle2>
          </PaginationItem>
        );
      })}

      {/*  Right Navigation */}
      {currentPage !== lastPage && (
        <NavigationButtons id="next" onClick={onNext}>
          NEXT
        </NavigationButtons>
      )}
    </PaginationContainer>
  );
};
