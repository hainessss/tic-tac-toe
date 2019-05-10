import React from 'react';
import { spy } from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { init as gameInit } from 'redux/reducers/game';

// Note: We import the *unconnected* component here,
// to avoid mocking out the Redux store/provider.
import { Play } from 'routes/Play';

Enzyme.configure({ adapter: new Adapter() })

describe('Play', () => {
  describe('Move submission', () => {
    it('dispatches the appropriate action to the store', () => {
      const dispatch = spy();
      const component = shallow(<Play dispatch={ dispatch } game={ gameInit() } />);

      const selects = component.find('select');

      selects.first().simulate('change', { target: { value: '1' } });
      selects.last().simulate('change', { target: { value: '2' } });

      const input = component.find('input')
      input.simulate('click')
      expect(dispatch.lastCall.args[0]).toEqual({
        type: 'MOVE',
        row: 1,
        column: 2
      });
    });

    it('does not dispatch the move (but does dispatch an error modal) if no row or column has been chosen', () => {
      const dispatch = spy();
      const component = shallow(<Play dispatch={ dispatch } game={ gameInit() } />);

      const input = component.find('input')
      input.simulate('click')

      expect(dispatch.callCount).toEqual(1);
      expect(dispatch.lastCall.args[0].type).toEqual('SET_MODAL');
      expect(dispatch.lastCall.args[0].modal.content).toEqual('You need to pick a row and column before you can move!');
    });
  });
})
