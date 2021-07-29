import styled from "styled-components";

export const NavigationStyled = styled.nav`
  .navigationList {
    display: flex;
    list-style: none;
  }
  .navigationItem:not(:last-child) {
    margin-right: 20px;
  }
  .navigationLink {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 24px;
    color: #d9d9d9;
    text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
      1px 1px 1px rgba(0, 0, 0, 0.5);
  }
  .navigationLink--active {
    color: red;
  }
`;
