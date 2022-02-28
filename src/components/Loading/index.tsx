import { LoaderSpin } from '../LoaderSpin';
import { Container } from './styled';


export const Loading = () => {
  return (
    <Container>
      <LoaderSpin size={120} borderSize={16} />
      Carregando...
    </Container>
  );

}


