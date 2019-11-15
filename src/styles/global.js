import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import media from './media';
import colors from './colors';

export default createGlobalStyle`

html {
      font-size: 62.5%; /*10px*/ 
      box-sizing: border-box;
      line-height: 1.15;

      @media ${media.largest} {
          font-size: 60%;
      }

      @media ${media.large} {
          font-size: 57.5%;
      }

      @media ${media.small} {
          font-size: 55%;
      }
    }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    color: ${colors.black};
    background-color: ${colors.gray};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    outline: none;
  }

  body, input, textarea {
    font-family: 'Source Sans Pro', sans-serif !important;
    font-size: 1.6rem;
    box-sizing: inherit;
    outline: none;

  }
  a, button {
    outline: none;
  }

   /* Font Sizes */
  h1 {
    font-size: 2.3rem;
    
  }
  p {
    font-size: 1.8rem;
    font-weight: 400;
  }

  small {
    font-size: 1.4rem;
    font-weight: bold;
    color: ${colors.blackTransparent};
  }
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600&display=swap');

  
  `;
