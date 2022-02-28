import { LoaderSpin } from '../LoaderSpin';
import { Container } from './styled';

type Props = {
  text?: string;
}

export const Loading = ({ text = 'Carregando...' }: Props) => {
  return (
    <Container>
      <LoaderSpin size={120} borderSize={16} />
      {text}
    </Container>
  );

}


