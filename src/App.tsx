import React, { FormEvent, useState, useEffect } from 'react';
import * as C from './App.styles';
import { Loading } from './components/Loading';
import { PhotoItem } from './components/PhotoItem';
import * as Photos from './services/photos';
import { Photo } from './types/Photo';

const App = () => {
  const [uploading, setUploading] = useState(false);
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

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const file = formData.get('image') as File;

    if(file && file.size > 0) {
      setUploading(true);
      let result = await Photos.insert(file);
      setUploading(false);

      if(result instanceof Error) {
        alert(`${result.name} - ${result.message}`);
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
    }
  }

  if(loading) {
    return <Loading />
  }
  if(uploading) {
    return <Loading text='Enviando...' />
  }
  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de fotos</C.Header>

        <C.UploadForm method='POST' onSubmit={handleFormSubmit}>
          <input type="file" name="image" />
          <input type="submit" value="Enviar" />
        </C.UploadForm>

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
