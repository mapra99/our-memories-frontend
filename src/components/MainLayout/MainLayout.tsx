import { MainHeader } from '../MainHeader';
import { MainLayoutProps } from './types';

import {
  MainLayoutContainer
} from './MainLayout.styled';

export const MainLayout = ({ children }: MainLayoutProps) => (
  <MainLayoutContainer>
    <MainHeader />
    {children}
  </MainLayoutContainer>
)
