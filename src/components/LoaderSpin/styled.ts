import styled from 'styled-components';

interface Props {
  size?: number;
  borderSize?: number;
  gap?: number;
}
export const StyledLoaderSpin = styled.div.attrs<Props>({
  className: "StyledLoaderSpin"
})`
  display: flex;
  gap: ${(props: Props) => props.gap ?? 8}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .spin {
    border: ${(props: Props) => props.borderSize ?? 4}px solid white;
    border-top: ${(props: Props) => props.borderSize ?? 4}px solid green;
    border-radius: 50%;
    width: ${(props: Props) => props.size ?? 22}px;
    height: ${(props: Props) => props.size ?? 22}px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

`;
