import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: "loading-data"
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  font-size: 30px;
  color: #fff;
  background: rgba(0,0,0 , 0.8);
`;
