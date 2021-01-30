import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext, TTheme } from 'styled-components';
import styled from 'styled-components';

interface IProps {
  toggleDarkMode: (isDarkMode: boolean) => void;
}

const menuItems = [
  { id: 1, url: '/notes', name: 'Notes' },
  { id: 2, url: '/guides', name: 'Guides' },
  { id: 3, url: '/about', name: 'About' },
];

const Nav = ({ toggleDarkMode } : IProps): JSX.Element => {
  const theme = useContext<TTheme>(ThemeContext);
  const { heading, primary, text } = theme.colors;

  const logoColor = theme.isDarkMode ? primary : heading;

  return (
    <StyledNav>
      <InnerWrapper>
        <div>
          <Link href='/'>
            <a>
              <svg width="40px" height="40px" viewBox="0 0 182.33 182.33"><path fill="none" stroke={logoColor} strokeMiterlimit="10" strokeWidth="12" d="M3.5 3.5h175.33v175.33H3.5z"></path><path d="M95.7 170.86l35.56-79.7 35.68 79.7h-16.05l-19.63-43.83-19.5 43.83z" fill={logoColor}></path></svg>
            </a>
          </Link>
        </div>
        <div>
          <Menu>
            { menuItems.map(item => (
              <Link key={item.id} href={item.url}>
                <a><li>{item.name}</li></a>
              </Link>
            ))}
            <ThemeButton aria-label="switch theme" onClick={() => toggleDarkMode(!theme.isDarkMode)}>
              { theme.isDarkMode ? 
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 1280 1280"><path fill={primary} d="M467.1 1.3c-1.3.6-3.4 2.5-4.5 4l-2.1 2.8-.8 145.7c-.9 161.1-1.3 150.3 5.4 153.8 1.9.9 4.5 1.4 6.3 1.1 1.7-.3 18.1-8.8 36.4-19l33.2-18.4 38.2-.7c27.5-.5 39.1-1.1 41.3-2 3.9-1.7 6.5-5.6 6.5-9.9 0-2.6-15.8-30.4-72.6-127.8-44.6-76.4-73.9-125.7-76-127.7-3.6-3.4-7.2-4.1-11.3-1.9zM960.3 66.7c-3.2 1.9-204.4 200.8-207.5 205.3-2.7 3.9-2.3 9.4 1 13 2.4 2.8 6.2 4 39.7 13.6l37 10.6 28 26.9c28.3 27.2 31.3 29.5 36.7 28.2 3-.8 6.4-3.9 7.7-7.1 1-2.7 3.8-12.9 36.1-136.2 8.9-33.8 20.6-78.5 26.1-99.4 12-45.5 12.2-46.2 10.3-49.7-3.3-6.4-9.2-8.4-15.1-5.2zM71.3 305c-6.2 3.8-7.8 8.8-4.5 14.7 1.8 3.2 200.7 204.4 205.2 207.5 3.9 2.7 9.4 2.3 13-1 2.7-2.4 4.1-6.3 13.7-39.8l10.6-37.2 26.9-27.8c27.1-28.2 29.4-31.2 28.1-36.6-.8-3-3.9-6.4-7.1-7.7-1.5-.6-18.9-5.3-38.7-10.5C125.1 315.8 81 304.3 77.4 303.7c-2-.4-4.1 0-6.1 1.3zM607.4 321.1C504.7 331 409.8 394 359.1 485.6c-18.3 33-31.1 72.3-36.6 112.4-2.2 16-3.1 53.2-1.6 69.9 6.3 71.5 36 137.8 85.3 190.7 53.4 57.4 122 91.5 200.8 99.9 15.7 1.7 48.8 1.9 64.3.5 103.9-9.9 198.6-72.3 249.6-164.6 18.3-33 31.1-72.3 36.6-112.4 2.2-16 3.1-53.2 1.6-69.9-6.4-72.1-36.4-138.6-86.5-192.1-52.8-56.2-121.5-90.1-199.6-98.5-14.4-1.6-51.5-1.8-65.6-.4zM976.4 460.8c-3.7 2.3-5.9 7.1-5.1 11.1.3 1.5 8.9 17.7 19 35.9l18.4 33.2.7 38.2c.5 27.5 1.1 39.1 2 41.3 1.7 3.9 5.6 6.5 9.9 6.5 2.6 0 30.4-15.8 127.8-72.6 79.6-46.4 125.6-73.8 127.8-76.1 2.9-3.1 3.3-4 2.8-7.5-.6-4.7-3.7-8.4-8.1-9.7-1.8-.5-61.8-1.2-147.6-1.5-141.2-.7-144.6-.6-147.6 1.2zM130.9 725.6C51.3 772 5.3 799.4 3.1 801.7c-2.9 3.1-3.3 4-2.8 7.5.6 4.7 3.7 8.4 8.1 9.7 1.8.5 61.8 1.2 147.3 1.6 130.3.6 144.4.5 147.2-1 3.9-2 6.5-6.8 5.8-10.9-.3-1.7-8.8-18.1-19-36.4L271.3 739l-.7-38.2c-.5-27.5-1.1-39.1-2-41.3-1.7-3.9-5.6-6.5-9.9-6.5-2.6 0-30.4 15.8-127.8 72.6zM995 753.7c-2.7 2.5-4 6.3-13.6 39.9l-10.6 37-26.9 28c-27.2 28.2-29.5 31.2-28.2 36.6.8 3 3.9 6.4 7.1 7.7 2.7 1 12.9 3.8 136.2 36.1 33.8 8.9 78.5 20.6 99.4 26.1 45.5 12 46.2 12.2 49.7 10.3 6.4-3.3 8.4-9.2 5.2-15.1-1.9-3.2-200.8-204.4-205.3-207.5-3.9-2.7-9.4-2.3-13 .9zM384.5 915.7c-2.7.7-6.1 3.9-7.4 7.1-1 2.7-3.8 12.9-36.1 136.2-8.9 33.8-20.6 78.5-26.1 99.4-12 45.5-12.2 46.2-10.3 49.7 3.3 6.4 9.2 8.4 15.1 5.1 3.2-1.8 204.4-200.7 207.5-205.2 2.7-3.9 2.3-9.4-.9-13-2.5-2.7-6.3-4-39.9-13.6l-37.1-10.6-26.9-26c-14.8-14.3-27.8-26.6-28.9-27.3-2.5-1.6-6.4-2.4-9-1.8zM804 972.8c-1.9 1-17.4 9.5-34.5 18.9l-31 17.1-38 .7c-27.3.5-38.8 1-41 1.9-3.9 1.7-6.5 5.6-6.5 9.9 0 2.6 15.8 30.4 72.6 127.8 46.5 79.7 73.8 125.6 76.1 127.8 3.1 2.9 4 3.3 7.5 2.8 4.7-.6 8.4-3.7 9.7-8.1.5-1.8 1.2-61.8 1.6-147.3.7-159.1 1.1-148.4-5.5-151.8-3.8-2-6.8-1.9-11 .3z"/></svg> :
                <svg id="moon-icon" version="1.0" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 820 1280"><path fill={text} d="M743 .6c-1.4.1-13.5.8-27 1.4-13.5.6-31.3 1.5-39.6 2.1-8.4.5-30.9 1.4-50 1.9-41.5 1.2-64.6 3.1-94.4 8-155.3 25.2-295.2 107.3-394.5 231.5C93.2 301 57.1 367 34 434.7 17.6 482.6 7.6 529.9 2.3 584.1c-2.5 26-2.5 85.8 0 111.8 8.1 83.2 28.6 155.6 64.3 227.1 25.4 50.8 55.6 95.4 94.1 139 13.1 14.8 43.5 44.8 58.3 57.6 55.6 47.9 115.6 84.2 183 110.9 18.2 7.2 46.4 16.7 60.7 20.5 18.5 5 22.7 6 35.8 8.9 41.4 8.9 73.3 12.6 122 14.1 31.2.9 56.8 2.1 90.5 4.1 27.5 1.6 77.5 2.2 87.5 1.1 15.9-2 21.5-4.8 21.5-11.1 0-7.1-8.5-12.5-34.5-22.1-16.8-6.2-29-12.5-44.5-23-88.6-60.3-183.9-193.5-236.2-330.5-35.9-93.9-53.1-191.2-48.9-276.8 3.4-69 14.6-128.2 36.8-194.6 46.7-139.9 138.8-280 231.8-352.4 21.5-16.7 39.4-26.9 62-35.2 23.7-8.7 33.5-14.9 33.5-21.1 0-9.7-11.6-12.5-51-12.3-12.9.1-24.6.3-26 .5z"/></svg>
              }
            </ThemeButton>
          </Menu>
        </div>
      </InnerWrapper>
    </StyledNav>
  )
}


const ThemeButton = styled.button`
  margin-left: 5px;
  background: none;
  box-shadow: none;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  svg#moon-icon {
    transform: rotate(200deg);
  }
`;


const StyledNav = styled.nav`
  padding: 10px 10px;
  display: flex;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }: { theme: TTheme }) => theme.colors.text};
  position: sticky;
  top: 0;
  background: ${({ theme }: { theme: TTheme }) => theme.colors.background};
  z-index: 10;
`;


const InnerWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;

  a {
    padding: 0 10px;
  }
`;

export default Nav;