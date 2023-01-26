import styled from 'styled-components';

export const LabelContainer = styled.label`
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.img ? 'column' : 'row')};
  gap: 15px;
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 250px;
  background-color: #f5f5f5;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  border: 1px solid black;
  padding: 5px;
  border-radius: 5px;
`;

export const Input = styled.input`
  display: none;
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 200px;
  height: 100%;
  max-height: 200px;
  position: relative;
`;

export const LoaderContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const DeleteButtonContainer = styled.button`
  position: absolute;
  left: 93%;
  top: 1%;
  background: none;
  border: none;
  display: flex;
  font-size: 25px;
  cursor: pointer;
  color: #d6ccc2;

  :hover {
    color: #d5bdaf;
  }
`;
