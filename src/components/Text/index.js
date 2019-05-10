import styled from 'styled-components';

export default styled.div`
  font-size: ${props => props.size}px;
  text-align: ${props => props.align};
  color: ${props => props.theme[props.color]};
  font-family: 'Montserrat', sans-serif;
  /* display: ${props => props.inline ? 'inline-block' : 'block' }; */
  font-weight: ${props => props.weight};
`;