import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  padding: 0 30px;
  margin: 32px auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 20px;
    margin-left: 24px;
  }

  img {
    height: 64px;
  }
`;

export const LinkButton = styled.div`
  a {
    width: 220px;
    margin-left: 20px;
    margin-top: 0;
  }
`;

export const Incidents = styled.div`
  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;

export const IncidentsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  list-style: none;

  li {
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    position: relative;

    strong {
      display: block;
      margin-bottom: 16px;
      color: #41414d;
    }

    p + strong {
      margin-top: 32px;
    }

    p {
      color: #737380;
      line-height: 21px;
      font-size: 16px;
    }
  }
`;

export const PageActions = styled.div`
  margin-top: 10px;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  button {
    background: #e02141;
    color: #fff;
    transition: opacity 0.25s ease-out;
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;
    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }
`;
