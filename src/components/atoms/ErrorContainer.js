import styled from "styled-components";

export const ErrorContainer = styled.h3`
  color: ${({ theme }) => theme.colors.dirtyWhite};
  position: absolute;
  top: 24%;
  text-transform: capitalize;
  text-shadow: 2px 2px ${({ theme }) => theme.colors.error};
`;
