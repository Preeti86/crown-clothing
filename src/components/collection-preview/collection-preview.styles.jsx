import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    align-item: center;
  } 
`;


export const TitleContainer = styled.h1`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  &:hover {
    color: grey;
  } 
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-grap: 15px;
`;

