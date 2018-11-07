import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh;
`;

export const TitleWrapper = styled.div`
  position: fixed;
  font-size: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h1 {
    font-weight: 100;
    font-size: 52px;
    text-shadow: 1px 1px 1px #ccc;
  }

  h3 {
    font-weight: 100;
    font-size: 18px;
    font-style: italic;
    margin-top: 0;

  }
`;

export const ContentWrapper = styled.div`
  background-color: #f7f7ff;
  margin: 0 15% 60px 15%;
  padding: 30px 40px;
  z-index: 1;
  border-radius: 3px;

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Corben', Georgia, Times, serif;
    font-weight: 100;
    margin: 10px 0;
  }

  h5 {
    font-size: 24px;
  }

  p {
    color: grey;
    font-style: inherit;
  }

  blockquote {
    font-style: italic !important;
  }
`;