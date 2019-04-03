import styled from 'styled-components'

export const Wrapper = styled.div`
`;

export const BoardWrapper = styled.div`
  background-color: #f2f3f7;
  height: 100%;
  width: 100%;
  padding: 30px;
`;

export const BoardTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const ListWrapper = styled.div`
  display: inline-block;
  margin: 0 auto;
  margin: 20px;
  background-color: #f2f2f2;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.29);
  -moz-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.29);
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.29);
  border-radius: 10px;
  height: 500px;
  width: 250px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const CardDescWrapper = styled.div`  
  min-height: 150px;
  background-color: #fff;
  border-radius: 10px;
  margin: 20px 1px 20px 1px;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
  border-top: 13px solid ${props => 
    {
      const cat = props.cat;
      if (cat === 'Project') {
        return '#ffbe2b';
      } else if (cat === 'Development') {
        return '#6245ff';
      } else {
        return 'black';
      }
    }};
  &:hover {
    cursor: pointer;
  }
`;

export const Chip = styled.span`
  position: relative;
  padding: 5px;
  border-bottom-radius: 5px;
  background-color: ${props => 
    {
      const cat = props.cat;
      if (cat === 'Project') {
        return '#ffbe2b';
      } else if (cat === 'Development') {
        return '#6245ff';
      } else {
        return 'black';
      }
    }};
  color: #fff;
  font-size: 12px;
  margin-left: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  vertical-align: super;
`;

export const CardTitle = styled.span`
  text-transform: capitalize;
  font-weight: bold;
  padding: 5px;
  display: block;
`;

export const CardDesc = styled.span`
  padding-left: 5px;
  font-size: 12px;
`;

export const SingleLineInput = styled.input`
    padding: 12px 20px;
    width: 70%;
    margin: 8px 0;
    box-sizing: border-box;
    border: 3px solid #ccc;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
    &:focus {
        border: 3px solid #555;
    }
`;

export const MultiLineInput = styled.textarea`
    padding: 12px 20px;
    width: 70%;
    margin: 8px 0;
    box-sizing: border-box;
    border: 3px solid #ccc;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    min-height: 100px;
    outline: none;
    &:focus {
        border: 3px solid #555;
    }
`;

export const AddComment = styled.button`
    background-color: white; 
    color: black; 
    border: 2px solid #ccc;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 16px;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
    &:hover {
        border: 2px solid #555;
        background-color: #555;
        color: white;
    }
`;

export const CloseIcon = styled.span`
    float: right;
    font-size: 20px;
    cursor: pointer;
    color: #fff;
    margin-right: 20px;
    margin-top: 10px; 
`;

export const ListTitle = styled.div`
  padding: 10px;
  background-color: rebeccapurple;
  color: white;
  font-weight: bold;
`;

export const CardLayer = styled.div`
  padding: 10px;

`;