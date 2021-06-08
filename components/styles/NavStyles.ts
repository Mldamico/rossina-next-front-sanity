import styled from "styled-components";

export const NavigationStyles = styled.nav`
  font-size: 1.8rem;
  /* width: 100%; */
  display: flex;
  justify-content: center;

  a,
  button {
    text-decoration: none;
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    transition: color 0.5s;
    &:not(:first-child):before {
      content: "";
      width: 2px;
      background: #fff;
      height: 50%;
      left: 0;
      position: absolute;
      transform: skew(-20deg) translateY(50%);
      top: 0;
      bottom: 0;
      /* transform: translateX(50%); */
    }
    &:after {
      height: 2px;
      background: var(--black);
      content: "";
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }

    &:hover,
    &:focus {
      outline: none;
      text-decoration: none;
      color: var(--black);
      &:after {
        width: calc(100% - 60px);
      }
      &[aria-current="page"] {
        color: var(--black);
      }
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    a,
    button {
      padding: 0.5rem 3rem;
      /* padding: 1rem 3rem; */
      font-size: 1.2rem;
      &:not(:first-child):before {
        width: 0px;
        /* transform: translateX(50%); */
      }
    }
  }
`;
