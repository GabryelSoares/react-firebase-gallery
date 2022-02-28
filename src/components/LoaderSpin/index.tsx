import { FC } from 'react'
import { StyledLoaderSpin } from './styled';

interface Props {
  size?: number;
  borderSize?: number;
  gap?: number;
}

export const LoaderSpin: FC<Props> = ({ children, ...rest }) => {

  return (
    <StyledLoaderSpin {...rest}>
      <div className="spin" />
      {children}
    </ StyledLoaderSpin>
  );

}
