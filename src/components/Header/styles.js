import styled from 'styled-components';
import colors from '../../styles/colors';
import media from '../../styles/media';

export const Container = styled.div`
  height: 8rem;
  background: #fff;
  padding: 1.5rem 6rem;
  h2 {
    color: ${colors.blue};
    font-size: 4rem;
    font-family: 'Source Sans Pro';
    font-weight: bold;
  }
  @media ${media.medium} {
    display: flex;
    justify-content: center;
  }
`;
