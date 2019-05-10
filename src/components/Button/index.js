import styled from 'styled-components';

export default styled.div`
  font-size: 16px;
  text-align: center;
  color: ${props => props.theme[props.color]};
  font-family: 'Montserrat', 'Open Sans';
  text-transform: uppercase;
  background: ${props => props.theme[props.background]};
  display: inline-flex;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 800;
`;