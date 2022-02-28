import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #3D3F43;
  border-radius: 8px;
  padding: 8px;
  gap: 8px;

  img {
    max-width: 100%;
    display: block;
    border-radius: 8px;
  }

  button {
    display: block;
    background-color: #756DF4;
    border: 0;
    color: #FFF;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 8px;
    margin: 8px auto 0 auto;
    cursor: pointer;

    &:hover {
      opacity: .8;
    }
  }
`;
