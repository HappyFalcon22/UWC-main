import styled from "styled-components";


export const Split = styled.div`
    border-left: 2px solid gray;
    border-radius: 10px;
    height: relative;
`;
export const LeftColumn = styled.div`
    left: 20px;
    flex-grow: 4;
    margin-left: 10px;
    margin-right: 10px;
    padding: 10px;
    width: 45%;
    height: 100%;
    overflow-x: auto;
`;

export const RightColumn = styled.div`
    right: 20px;
    flex-grow: 4;
    margin-left: 30px;
    padding: 10px;
    width: 45%;
    height: 100%;
`;

export const Container = styled.div`
  display: flex;
  margin: 90px 0px 10px;
  padding: 20px;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
`;