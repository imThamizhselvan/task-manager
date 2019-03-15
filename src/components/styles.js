import styled from 'styled-components'

export const Wrapper = styled.div`
    margin: 0 auto;
    padding: 20px;
    margin: 10%;
    padding-left: 5%;
    background-color: #f2f2f2;
    -webkit-box-shadow: -1px 9px 15px 0px rgba(0,0,0,0.29);
    -moz-box-shadow: -1px 9px 15px 0px rgba(0,0,0,0.29);
    box-shadow: -1px 9px 15px 0px rgba(0,0,0,0.29);
    border-radius: 10px;
`;

export const BoardWrapper = styled.div`
    padding-top: 20px;
    padding-left: 5%;
    background-color: #f2f2f2;
    -webkit-box-shadow: -1px 9px 15px 0px rgba(0,0,0,0.29);
    -moz-box-shadow: -1px 9px 15px 0px rgba(0,0,0,0.29);
    box-shadow: -1px 9px 15px 0px rgba(0,0,0,0.29);
    border-radius: 10px;
`;

export const ListWrapper = styled.div`
    display: inline-block;
    margin: 0 auto;
    padding: 20px;
    max-width: 250px;
    margin: 20px;
    background-color: #f2f2f2;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.29);
    -moz-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.29);
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.29);
    border-radius: 10px;
`;

export const CardDescWrapper = styled.div`
    border: 1px solid;
    min-height: 150px;
    padding-left: 3px;
    border-radius: 10px;
    margin: 20px 1px 20px 1px;
`;

export const SingleLineInput = styled.input`
    width: 80%;
    padding: 12px 20px;
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
    width: 80%;
    padding: 12px 20px;
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
    margin-right: 20px;
    &:hover {
        font-size: 22px;
    }  
`;