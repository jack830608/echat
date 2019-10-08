import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
`;


export const SlidersContainer = styled.div`
  display: flex;
  will-change: transform;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
`;

export const Frame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${ ({ width }) => width }px;
`;

export const DotContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 5px auto;
`;
export const Dot = styled.div`
  width:40px;
  height:4px;
  border-radius:4px;
  margin:0 5px;
  transition:0.6s;
  background: ${ ({ isSelected }) => isSelected ? '#27C4BC' : '#EAEAEA' };
  will-change: opacity;
  cursor: pointer;
`;
