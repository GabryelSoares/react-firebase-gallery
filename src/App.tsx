import React from 'react';
import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Loading } from './components/Loading';
import { PhotoItem } from './components/PhotoItem';
import * as Photos from './services/photos';
import { Photo } from './types/Photo';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    }
    getPhotos();
  }, [])

  if(loading) {
    return <Loading />
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de fotos</C.Header>
        {(photos.length === 0) ? (
          <C.ScreenWarning>
            <div className='emoji'>&#9746;</div>
            <div>Não há fotos cadastradas.</div>

          </C.ScreenWarning>
        ) : (
          <C.PhotoList>
            {React.Children.toArray(
              photos?.map((photo) => (
                <PhotoItem name={photo.name} url={photo.url} />
              ))
            )}
          </C.PhotoList>
        )}
      </C.Area>
    </C.Container>
  )
}

export default App;
