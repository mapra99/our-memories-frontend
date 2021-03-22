import { MyUnsplashIcon } from '../../icons/MyUnsplashIcon';
import { SearchBar } from '../SearchBar';
import { NewPhoto } from '../NewPhoto';
import { MainHeaderContainer, MainHeaderNewPhotoContainer } from './MainHeader.styled';

export const MainHeader = () => (
  <MainHeaderContainer>
    <MyUnsplashIcon />
    <SearchBar />
    <MainHeaderNewPhotoContainer>
      <NewPhoto />
    </MainHeaderNewPhotoContainer>
  </MainHeaderContainer>
)
