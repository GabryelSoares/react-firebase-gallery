import styled from 'styled-components';

export const Container = styled.div`
  background-color: #27282f;
  color: #fff;
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 30px 0;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  margin-bottom: 30px;
`;

export const ScreenWarning = styled.div`
  text-align: center;
  .emoji {
    font-size: 50px;
    margin-bottom: 20px;
  }
`;

export const PhotoList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  gap: 10px;
`;

export const UploadForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3D3F43;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 30px;

  input[type=submit] {
    background-color: #756Df4;
    border: 0;
    color: #FFF;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 8px;
    margin: 0 20px;
    cursor: pointer;

    &:hover{
      opacity: .8;
    }
  }
`;
