import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { useCallback, useEffect, useState } from 'react';
import { api } from './services/api';

import './styles/global.scss';
import './styles/content.scss';
import './styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family' ;
  title: string;
}

export function App() {


  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);


  const handleClickButton = useCallback((id: number) => {
    setSelectedGenreId(id);
    console.log(selectedGenreId)
  },[setSelectedGenreId,selectedGenreId ])
 
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenreId={selectedGenreId} handleClickButton={handleClickButton}/>
      <Content selectedGenre={selectedGenre} selectedGenreId={selectedGenreId}/>
    </div>
  )
}