import styled, { css, keyframes } from 'styled-components';
import { Input, Form } from '@rocketseat/unform';
import colors from '../../styles/colors';
import media from '../../styles/media';
import { fadeDown } from '../../styles/animations';

export const Container = styled.div`
  width: 100%;
  margin-top: 5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  max-width: 90rem;
`;

export const MessageContainer = styled.div`
  max-width: 63.7rem;
  width: 100%;
  margin-bottom: 4rem;
  h1 {
    margin-bottom: 0.8rem;
  }
  div:last-child {
    animation: ${fadeDown} 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
  }
`;

export const Message = styled.div`
  max-width: 63.7rem;
  width: 100%;
  border-radius: 18px 18px 18px 0;
  background: #fff;
  padding: 1.4rem 2.3rem;
  min-height: 11rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  button {
    position: absolute;
    top: 8px;
    right: 4px;
    padding: 1rem;
    border: none;
    background: none;
    cursor: pointer;
    svg {
      fill: ${colors.blue};
    }
  }
`;
export const StyledForm = styled(Form)`
  max-width: 63.7rem;
  width: 100%;
  position: fixed;
  bottom: 4rem;
  > span {
    font-weight: bold;
    color: red;
    position: absolute;
    top: 2.2rem;
    left: 18rem;
  }
`;

export const InputWrapper = styled.div`
  height: 6.2rem;
  font-weight: bold;
  font-size: 1.5rem;
  border: none;
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  padding-right: 2rem;
  position: relative;
  > span {
    color: red;
    position: absolute;
    top: 2.2rem;
    left: 18rem;
  }
`;

export const StyledInput = styled(Input)`
  height: 6.2rem;
  font-weight: bold;
  font-size: 1.5rem;
  border: none;
  font-family: 'Source Sans Pro';
  width: 100%;
  padding: 2rem 3rem;
  background: #fff;
  ::placeholder {
    color: #bcbcbc;
  }
`;

export const Overflow = styled.div`
  overflow-y: scroll;
  height: 60vh;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media ${media.medium} {
    padding: 0 1.5rem;
  }
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);

  }`;
export const Button = styled.button`
  background: ${colors.blue};
  color: #fff;
  border: 0;
  padding: 5px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const DeleteButton = styled.button`
  background: #fff;
  color: ${colors.blue};
  border: 0;
  padding: 5px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  ${props =>
    props.deleteLoading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
