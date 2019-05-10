import styled from 'styled-components';
import get from 'lodash/get';

export default styled.input`
  width: 100%;
  appearance: none;
  box-sizing: border-box;
  margin-bottom: 16px;
  padding: 11px 16px;
  border: 1px solid ${ props => (get(props, 'theme.white')) };
  color: ${ props => (get(props, 'theme.white')) };
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background-color: ${ props => (get(props, 'theme.navy')) };
  ::placeholder {
    color: ${ props => (get(props, 'theme.gray')) };;
  }
`;