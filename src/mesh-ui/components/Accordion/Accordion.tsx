import React, { useState, useEffect, useRef } from 'react';
import {
  getGreyBase,
  getBorderRadiusCard,
  getWhite,
  greyT3Divider,
  getPinkBase,
} from '@mesh-helpers/themeHelper';
import styled, { css } from 'styled-components';
import { Icon } from '@mesh-atoms/Icon';
import { Subtitle1 } from '@mesh-atoms/typography';
import { Divider } from '@mesh-atoms/Divider';
import { UpIcon, DownIcon } from '@mesh-icons/index';
import { isElementPartiallyInViewport } from '@mesh-helpers/isElementPartiallyInViewport';

interface StyleProps {
  onClick?: any;
  checked?: any;
  screen?: 'PLP' | undefined;
}

const mobileStyles = css`
  border-bottom: 0;
  border-radius: 0;
  margin-bottom: 0;
  margin-top: 0;
`;

const AccordionStyled = styled.div<StyleProps>`
  background: ${getWhite};
  color: ${getGreyBase};
  border: ${(props) =>
    props.theme.isMobile || props.screen === 'PLP'
      ? 'none'
      : '1px solid ' + props.theme.colors['greyT3Divider']};
  padding: ${(props) => (props.theme.isMobile ? '12px 16px' : '18px 24px')};
  border-radius: ${getBorderRadiusCard};

  ${(props) => props.theme.isMobile && mobileStyles}
`;

const AccordionHeader = styled.div<{
  onClick: any;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const AccordionContent = styled.div<{ screen?: string }>`
  display: flex;
  flex-direction: column;
  font-size: ${(props) => (props.theme.isMobile ? '13px' : '16px')};
  margin-top: ${(props) => (props.screen === 'PLP' ? '16px' : '0px')};
`;

const AccordionContentWrapper = styled.div<{ open: any }>`
  max-height: ${(props) => (props.open ? '100%' : '0')};
  overflow: hidden;
  transition: all 0.3s ease-out;
`;

const DividerStyled = styled(Divider)`
  margin: ${(props) => (props.theme.isMobile ? '12px 0' : '15px 0 24px 0')};
`;

interface AccordionProps {
  onClick?: () => void;
  label?: string;
  screen?: 'PLP' | undefined;
  children: React.ReactNode;
  iconSize?: string | number;
  show?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ onClick, ...props }) => {
  const [showAccordion, setShowAccordion] = useState(
    props.screen === 'PLP' ? props.show : true,
  );
  const accordianContentRef =
    useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (showAccordion && accordianContentRef && accordianContentRef.current) {
      if (!isElementPartiallyInViewport(accordianContentRef.current)) {
        // window.scrollBy({ top: 100 });
      }
    }
  }, [showAccordion]);

  const onClickHandler = () => {
    setShowAccordion((showAccordion) => !showAccordion);
    if (typeof onClick === 'function') {
      onClick();
    }
  };
  return (
    <AccordionStyled {...props}>
      <AccordionHeader onClick={onClickHandler}>
        <Subtitle1 color="greyBase" textAlign="initial">
          {props.label}
        </Subtitle1>
        {showAccordion ? (
          <Icon as={UpIcon} iconSize={props.iconSize} />
        ) : (
          <Icon as={DownIcon} iconSize={props.iconSize} />
        )}
      </AccordionHeader>
      {showAccordion && (
        <AccordionContentWrapper open={showAccordion}>
          {!props.screen && <DividerStyled />}
          <AccordionContent ref={accordianContentRef} screen={props.screen}>
            {props.children}
          </AccordionContent>
        </AccordionContentWrapper>
      )}
    </AccordionStyled>
  );
};
