
import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
`;

export const Img = styled.img`
  width: 60%;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const Button = styled.button`
  display: inline-block;
  border-radius: 4px;
  background-color: #282f33;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  & > span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
    &:after {
      content: '\00bb';
      position: absolute;
      opacity: 0;
      top: 0;
      right: -20px;
      transition: 0.5s;
    }
  }
  &:hover {
    & > span {
      padding-right: 25px;
      &:after {
        opacity: 1;
        right: 0;
      }
    }
  }
`;

