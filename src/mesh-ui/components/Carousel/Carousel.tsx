import React, { useEffect, useRef, useState } from 'react';

import {
  LeftArrow as DefaultLeftArrow,
  RightArrow as DefaultRightArrow,
} from './Arrow';
import { Container } from './Container';
import {
  Indicator as DefaultIndicator,
  IndicatorWrapper as DefaultIndicatorsWrapper,
} from './Indicator';
import { SliderList, SliderTrack, SliderWrapper } from './Slider';
import { Timer } from './Timer';

interface Responsive {
  breakPoint: number;
  cardsToShow: number;
}
export interface CarouselProps {
  autoSlide?: number | boolean;
  cardsToShow?: number;
  hideArrowsOnNoSlides?: boolean;
  children?: React.ReactNode[];
  responsive?: Responsive[];
  afterSlide?: (index: number) => void;
  beforeSlide?: (index: number) => void;
  infinite?: boolean;
  indicators?: boolean;
  controls?: boolean;
  pauseOnMouseOver?: boolean;
  padding?: string;
  margin?: string;
  vertical?: boolean;
  slidePadding?: string;
  slideMargin?: number;
  initialSlide?: number;

  // Component Props
  Indicator?: any;
  IndicatorWrapper?: any;
  LeftArrow?: any;
  RightArrow?: any;
  initialWidth?: number;
}

const def: CarouselProps = {
  indicators: true,
  controls: false,
  LeftArrow: DefaultLeftArrow,
  RightArrow: DefaultRightArrow,
  vertical: false,
  Indicator: DefaultIndicator,
  IndicatorWrapper: DefaultIndicatorsWrapper,
  cardsToShow: 1,
  afterSlide: undefined,
  beforeSlide: undefined,
  infinite: true,
  responsive: [],
  autoSlide: false,
  pauseOnMouseOver: true,
  padding: '0px',
  margin: '0px',
  hideArrowsOnNoSlides: true,
  initialSlide: 0,
  initialWidth: 0,
};

export const Carousel: React.FC<CarouselProps> = (_props: CarouselProps) => {
  const props: CarouselProps = { ...def, ..._props };

  // filtering the React Node from Children array.
  props.children = React.Children.toArray(props.children); // this will eliminate 'false' 'true' 'null' 'undefined' && empty array and object values

  let autoSlider: Timer | null = null;

  const childNode = useRef<any>();
  const [initialCard, setInitialCard] = useState(props.initialSlide ?? 0);
  const [childWidth, setChildWidth] = useState(props.initialWidth || 0);
  const [cardsToShow, setCardsToShow] = useState(0);
  const [hideArrows, setHideArrows] = useState(false);
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    const {
      children,
      cardsToShow: cardsToShowProp,
      autoSlide,
      hideArrowsOnNoSlides,
    } = props;
    const numberOfChildren = children ? children?.length || 1 : 0;
    const _cardsToShow = cardsToShowProp || numberOfChildren;
    const _childWidth = 100 / _cardsToShow;

    setCardsToShow(_cardsToShow);
    setChildWidth(_childWidth);
    setHideArrows(
      (hideArrowsOnNoSlides && numberOfChildren <= _cardsToShow) ?? false,
    );

    // eslint-disable-next-line no-unused-expressions
    typeof window !== 'undefined' &&
      window.addEventListener('resize', updateResponsiveView);

    if (autoSlide) {
      autoSlider = new Timer(
        () => {
          setInitialCard((_initialCard = 0) => {
            let updatedInitialCard = 0;
            if (numberOfChildren - _cardsToShow > _initialCard) {
              updatedInitialCard = _initialCard + 1;
            }
            return updatedInitialCard;
          });
        },
        autoSlide === true ? 4000 : autoSlide,
      );
      autoSlider.start();
    }

    return () => {
      typeof window !== 'undefined' && // eslint-disable-line no-unused-expressions
        window.removeEventListener('resize', updateResponsiveView);

      if (autoSlider) {
        autoSlider.pause();
        autoSlider = null;
      }
    };
  }, [props.autoSlide]);

  const updateResponsiveView = () => {
    const { children, hideArrowsOnNoSlides } = props;
    let { responsive } = props;
    const numberOfChildren = children ? children?.length || 1 : 0;
    if (responsive) {
      responsive = responsive
        .map((obj: any) => ({ ...obj }))
        .sort(
          (
            (key) => (a: any, b: any) =>
              a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0
          )('breakPoint'),
        ); // eslint-disable-line
      let updatedCardsToShow = cardsToShow;
      responsive.forEach(({ breakPoint, cardsToShow }: any) => {
        if (breakPoint <= window.innerWidth) {
          updatedCardsToShow = cardsToShow;
        }
      });
      const updatedInitialCard =
        numberOfChildren - updatedCardsToShow < initialCard
          ? numberOfChildren - updatedCardsToShow
          : initialCard;

      setCardsToShow(updatedCardsToShow);
      setChildWidth(100 / updatedCardsToShow);
      setHideArrows(
        (hideArrowsOnNoSlides && numberOfChildren <= updatedCardsToShow) ??
          false,
      );
      setInitialCard(updatedInitialCard);
    }
  };
  useEffect(updateResponsiveView, [cardsToShow]);

  useEffect(() => {
    const { afterSlide } = props;
    if (afterSlide) {
      afterSlide(initialCard);
    }
  }, [initialCard]);

  const changeInitialCard = (_initialCard: any) => {
    const { beforeSlide } = props;
    if (beforeSlide) {
      beforeSlide(initialCard);
    }
    setIsInitial(false);
    setInitialCard(_initialCard);
  };

  const handleLeftArrowClick = (evt: any) => {
    const { children, infinite } = props;
    const childrenCount = children ? children.length : 0;
    if (evt && evt.preventDefault) {
      evt.preventDefault();
    }
    let nextInitialCard;
    nextInitialCard =
      initialCard >= cardsToShow ? initialCard - cardsToShow : 0;

    if (nextInitialCard < 0) {
      nextInitialCard = childrenCount - cardsToShow;
    }

    if (infinite || initialCard > 0) {
      changeInitialCard(nextInitialCard);
    }
  };

  const handleRightArrowClick = (evt: any) => {
    const { children, infinite } = props;
    const childrenCount = children ? children.length : 0;
    if (evt && evt.preventDefault) {
      evt.preventDefault();
    }

    const hiddenCards = childrenCount - initialCard - cardsToShow;
    let nextInitialCard = initialCard;
    nextInitialCard += hiddenCards > cardsToShow ? cardsToShow : hiddenCards;

    if (childrenCount - cardsToShow < nextInitialCard) {
      nextInitialCard = 0;
    }
    if (infinite || nextInitialCard > 0) {
      changeInitialCard(nextInitialCard);
    }
  };

  const renderChildren = (children: any) => {
    let clientStartX;
    let clientEndX;
    const displayCards: any[] = [];
    React.Children.forEach(children, (child, index) => {
      displayCards.push(
        <Container
          isVertical={props.vertical}
          key={index}
          width={childWidth}
          slidePadding={props.slidePadding}
          slideMargin={props.slideMargin}
          onTouchStart={(event) => {
            clientStartX = event.nativeEvent.touches[0].clientX;
          }}
          onTouchMove={(event) => {
            clientEndX = event.nativeEvent.touches[0].clientX;
          }}
          onTouchEnd={(event) => {
            if (Number.isFinite(clientEndX)) {
              const isLeft = clientStartX - clientEndX > 0;
              if (isLeft) {
                handleRightArrowClick(event);
              } else {
                handleLeftArrowClick(event);
              }
            }
          }}
        >
          <div style={{ display: 'flex' }} ref={childNode}>
            {child}
          </div>
        </Container>,
      );
    });
    return displayCards;
  };

  const renderDots = () => {
    const dots: any[] = [];
    const { children, Indicator } = props;
    const numberOfChildren = children ? children.length || 1 : 0;

    // Remove indicator item count is 1 or less
    if (numberOfChildren < 2) {
      return null;
    }

    let i;
    for (i = 0; i <= numberOfChildren - cardsToShow; i += 1) {
      const index = i;
      const dotProps = {
        active: index === initialCard,
        key: index,
        onClick: () => {
          changeInitialCard(index); // TODO: Fix Selection issue
        },
        index,
      };
      dots.push(<Indicator {...dotProps} />);
    }
    return dots;
  };

  const renderLeftArrow = () => {
    const { LeftArrow, infinite, vertical, slideMargin } = props;
    return React.cloneElement(
      <LeftArrow
        isDefault={!_props.LeftArrow}
        slideMargin={slideMargin}
        isVertical={vertical}
      />,
      {
        onClick: handleLeftArrowClick,
        disabled: !infinite && !initialCard,
      },
    );
  };

  const renderRightArrow = () => {
    const { RightArrow, children, infinite, vertical, slideMargin } = props;

    const numberOfChildren = children ? children.length || 1 : 0;
    return React.cloneElement(
      <RightArrow
        isDefault={!_props.RightArrow}
        slideMargin={slideMargin}
        isVertical={vertical}
      />,
      {
        onClick: handleRightArrowClick,
        disabled: !infinite && initialCard + cardsToShow === numberOfChildren,
      },
    );
  };

  const getSliderTranslate = () => {
    const { children } = props;
    return children && initialCard * childWidth;
  };

  const {
    children,
    indicators,
    controls,
    pauseOnMouseOver,
    IndicatorWrapper,
    ...otherProps
  } = props;

  return (
    <div
      style={
        !props.vertical
          ? { width: '100%', padding: props.padding }
          : { display: 'inline-block', height: '100%' }
      }
      onMouseLeave={() => pauseOnMouseOver && autoSlider && autoSlider.resume()}
      onMouseEnter={() => pauseOnMouseOver && autoSlider && autoSlider.pause()}
    >
      <SliderWrapper {...otherProps} cardsToShow={cardsToShow}>
        {controls && initialCard > 0 && !hideArrows && renderLeftArrow()}
        <SliderTrack {...otherProps}>
          <SliderList
            isInitial={isInitial}
            isVertical={props.vertical}
            translate={getSliderTranslate()}
          >
            {renderChildren(children)}
          </SliderList>
        </SliderTrack>
        {controls &&
          children &&
          initialCard < children.length - cardsToShow &&
          !hideArrows &&
          renderRightArrow()}
      </SliderWrapper>
      {!props.vertical && (
        <IndicatorWrapper>{indicators && renderDots()}</IndicatorWrapper>
      )}
    </div>
  );
};
