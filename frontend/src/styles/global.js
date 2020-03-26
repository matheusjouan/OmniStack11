import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    font: 400 14px Roboto, sans-serif;
    background: #F0F0f5;
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
  }


  input, button, textarea {
    font: 400 18px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  form input {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
  }

  form textarea {
    width: 100%;
    min-height: 140px;
    resize: vertical;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 18px;
  }

  .button {
    width: 100%;
    height: 60px;
    background: #E02141;
    border: 0;
    border-radius: 8px;
    color: #FFF;
    font-weight: bold;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2s;
  }


  .button:hover {
      filter: brightness(90%);
    }

`;
