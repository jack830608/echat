import React from 'react';
import { findDOMNode } from 'react-dom';
import {
  Container,
  SliderWrapper,
  SlidersContainer,
  Frame,
  DotContainer,
  Dot,
} from './styles';



const transitionTiming = 600;

export default class Carousel extends React.Component {



  static defaultProps = {
    reflashTime: 7000,
  };

  constructor(props) {
    super(props);
    this.state = {
      translateX: 0,
      currentTranslateX: 0,
      currIndex: 1,
      frameWidth: 0,
      touchDisplacementX: 0,
      touchDisplacementY: 0,
      isDragging: false,
      noTransition: true,
      childrenCount: this.filterChildren(props.children).length,
    };
    this.resetframeWidth = this.resetframeWidth.bind(this);
    this.preventScroll = this.preventScroll.bind(this);
  }

  componentDidMount() {
    const slider = findDOMNode(this.sliderElm);
    const frameWidth = slider.getBoundingClientRect().width;

    this.setState({
      translateX: -(frameWidth * 1),
      noTransition: true,
      frameWidth,
    });

    window.addEventListener('resize', this.resetframeWidth);

    let passiveSupported = false;
    try {
      const options = Object.defineProperty({}, 'passive', {
        get() { passiveSupported = true; },
      });
      window.addEventListener('test', null, options);
      window.removeEventListener('test', null, options);
    } catch (err) {
      passiveSupported = false;
    }

    const options = passiveSupported ? { passive: false } : false;

    (document.addEventListener)('touchmove', this.preventScroll, options);

    if (this.props.autoPlay) {
      this.setReflashTime();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      currIndex,
      childrenCount,
      frameWidth,
      isDragging,
    } = this.state;

    if (currIndex >= childrenCount + 1) { 
      this.swappingTimer = setTimeout(
        () => {
          this.swappingTimer = null;
          this.setState({
            currIndex: 1,
            translateX: -(frameWidth * 1),
            noTransition: true,
          });
        }, transitionTiming);
    }

    if (currIndex < 1) { 
      this.swappingTimer = setTimeout(
        () => {
          this.swappingTimer = null;
          this.setState({
            currIndex: childrenCount,
            translateX: -(frameWidth * childrenCount),
            noTransition: true,
          });
        }, transitionTiming);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resetframeWidth);
    window.removeEventListener('scroll', this.preventScroll);
    clearTimeout(this.autoPlayTimer);
    clearTimeout(this.swappingTimer);
  }

  resetframeWidth() {
    const slider = findDOMNode(this.sliderElm);
    const frameWidth = slider.getBoundingClientRect().width;

    this.setState({
      translateX: - (frameWidth * this.state.currIndex),
      noTransition: true,
      frameWidth,
    });
  }

  filterChildren = (children) => {
    return React.Children.toArray(children).filter((child) => !!child);
  }

  onSliderTouchStart = (e) => {
    this.touchStartPosX = this.getTouchPosX(e);
    this.touchStartPosY = this.getTouchPosY(e);
    this.setState({
      isDragging: true,
      currentTranslateX: this.state.translateX,
    });
  }

  onSliderTouchMove = (e) => {
    if (this.state.isDragging) {
      const currCursorPosX = this.getTouchPosX(e);
      const currCursorPosY = this.getTouchPosY(e);
      const touchDisplacementX = currCursorPosX - this.touchStartPosX;
      const touchDisplacementY = currCursorPosY - this.touchStartPosY;

      this.setState({
        translateX: this.state.currentTranslateX + touchDisplacementX,
        touchDisplacementX,
        touchDisplacementY,
      });
    }
  }

  onSliderTouchEnd = (e) => {
    const {
      currIndex,
      frameWidth,
      touchDisplacementX,
    } = this.state;

    if (Math.abs(touchDisplacementX) > frameWidth / 6) {
      touchDisplacementX > 0 ?
        this.slideToLeft()
        : this.slideToRight();
    } else {
      this.setState({ translateX: -(frameWidth * currIndex) });
    }

    this.setState({
      isDragging: false,
      touchDisplacementX: 0,
      touchDisplacementY: 0,
    });
  }

  preventScroll(e) {
    if (this.sliderElm && findDOMNode(this.sliderElm).contains(e.target)) {
      const { touchDisplacementX, touchDisplacementY } = this.state;
      if (Math.abs(touchDisplacementY / touchDisplacementX) < 6) {
        e.preventDefault();
      }
    }
  }

  setReflashTime = () => {
    if (this.autoPlayTimer) {
      clearTimeout(this.autoPlayTimer);
    }
    this.autoPlayTimer = setTimeout(
      () => this.slideToRight(),
      this.props.reflashTime,
    );
  }

  slideToRight = () => {
    if (this.swappingTimer) { return; }

    const {
      currIndex,
      childrenCount,
      frameWidth,
    } = this.state;

    const nextIndex = currIndex + 1;
    const nextTranslateX = -(frameWidth * nextIndex);

    this.setState({
      currIndex: nextIndex,
      translateX: nextTranslateX,
      noTransition: false,
    });

    if (this.props.autoPlay) {
      this.setReflashTime();
    }
  }

  slideToLeft = () => {
    if (this.swappingTimer) { return; }

    const {
      currIndex,
      childrenCount,
      frameWidth,
    } = this.state;

    const nextIndex = currIndex - 1;
    const nextTranslateX = -(frameWidth * nextIndex);

    this.setState({
      currIndex: nextIndex,
      translateX: nextTranslateX,
      noTransition: false,
    });

    if (this.props.autoPlay) {
      this.setReflashTime();
    }
  }

  slideToIndex = (index) => {
    this.setState({
      currIndex: index,
      translateX: -(this.state.frameWidth * index),
      noTransition: false,
    });
  }

  onLeftButtonClick = (e) => {
    e.stopPropagation();
    this.slideToLeft();
  }

  onRightButtonClick = (e) => {
    e.stopPropagation();
    this.slideToRight();
  }

  getTouchPosX = (e) => {
    return e.touches ? e.touches[0].clientX : e.clientX;
  }

  getTouchPosY = (e) => {
    return e.touches ? e.touches[0].clientY : e.clientY;
  }

  renderDot = () => {
    const {
      childrenCount,
      currIndex,
    } = this.state;
    const dots = [];
    for (let i = 0; i < childrenCount; i++) {
      dots.push(
        <Dot
          key={i}
          isSelected={(currIndex - 1 + childrenCount) % childrenCount === i}
          onClick={() => this.slideToIndex(i + 1)}
        />);
    }
    return dots;
  }

  render() {
    const { frameWidth } = this.state;
    const noTransition = this.state.isDragging || this.state.noTransition;
    const childrenArray = this.filterChildren(this.props.children);
    return (
      <Container>
        <SliderWrapper ref={(ref) => this.sliderElm = ref}>
          <SlidersContainer
            onMouseDown={this.onSliderTouchStart}
            onMouseMove={this.onSliderTouchMove}
            onMouseUp={this.onSliderTouchEnd}
            onMouseLeave={this.state.isDragging ? this.onSliderTouchEnd : null}
            onTouchStart={this.onSliderTouchStart}
            onTouchMove={this.onSliderTouchMove}
            onTouchEnd={this.onSliderTouchEnd}
            onTouchCancel={this.state.isDragging ? this.onSliderTouchEnd : null}
            style={{
              transform: `translate(${this.state.translateX}px)`,
              transition: !noTransition ? `transform ${transitionTiming}ms` : null,
              width: `${(this.state.childrenCount + 2) * 100}%`,
              visibility: this.state.frameWidth > 0 ? 'visible' : 'hidden',
            }}
          >
            <Frame width={frameWidth}>
              {React.cloneElement(this.props.children[this.state.childrenCount - 1])}
            </Frame>
            {childrenArray.map((child, index) =>
              <Frame key={index} width={frameWidth}>{child}</Frame>,
            )}
            <Frame width={frameWidth}>
              {React.cloneElement(this.props.children[0])}
            </Frame>
          </SlidersContainer>
          {/* <DotContainer>
            {this.renderDot()}
          </DotContainer> */}
        </SliderWrapper>
      </Container>
    );
  }
}
