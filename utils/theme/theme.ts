import { TTheme } from 'styled-components';

const lightTheme = {
  colors: {
    primary: '#E63A2D',
    secondary: '#F6EEE3',
    text: '#334259',
    heading: '#233143',
    background: '#F1F1F1',
    highlight: '#FFFF00',
  }
}

const darkTheme = {
  colors: {
    primary: '#4CFF00',
    secondary: '#0B2027',
    text: '#F6F1D1',
    heading: '#F6F1D1',
    highlight: '#FFFF00',
  }
}

const theme: TTheme = {
  fonts: {
    heading: `'MaisonNeue-Bold', sans-serif`,
    text: `'Merriweather-Regular', serif`,
    secondary: `'FrieghtSans-Regular', sans-serif`,
  },
  colors: {
    primary: '#E63A2D',
    secondary: '#F6EEE3',
    text: '#334259',
    heading: '#233143',
    background: '#F1F1F1',
    highlight: '#FFFF00',
    link: '#0018ff'
  }
}

export default theme;