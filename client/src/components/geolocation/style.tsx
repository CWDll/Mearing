import styled from "styled-components";

export const GeoLocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20vh;
  justify-content: space-around;
  border: 1px solid black;
  border-radius: 10px;
  margin-top: -50px;
  margin-bottom: -50px;
  padding: 1em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const GeoButton = styled.button`
  background-color: #f8f8f8;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 1em 1.6em;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const UserLocation = styled.p`
  font-size: 1.2rem;
  margin-top: 1em;
  font-weight: bold;
`;
