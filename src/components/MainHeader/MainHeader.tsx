import { MyUnsplashIcon } from '../../icons/MyUnsplashIcon';
import { SearchBar } from '../SearchBar';
import { MainHeaderContainer } from './MainHeader.styled';

export const MainHeader = () => (
  <MainHeaderContainer>
    <MyUnsplashIcon />
    <SearchBar />
  </MainHeaderContainer>
)
