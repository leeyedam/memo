import styled from '@emotion/styled';

const CardContainer = styled.div`
  width: 90vw;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
`;

interface CardProps{
  title: string;
  onClick: ()=> void
}

const Card = ({title, onClick}:CardProps)=>{
  return<CardContainer onClick={onClick}>
    {title}
  </CardContainer>
}

export default Card