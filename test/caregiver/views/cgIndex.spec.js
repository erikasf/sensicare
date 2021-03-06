import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import CgIndex from '../../../js/views/caregiver/cgindex.jsx'
import configureStore from 'redux-mock-store'

const mockStore = configureStore()
const dispatch = sinon.spy()

describe('<>',() => {
  it('render <cgIndex />', ()=>{
    const wrapper = shallow(<CgIndex />)
    console.log(wrapper)
    expect(wrapper).to.have.length(3)
  })
})


//******************
// View with enzyme
//*****************  
//  describe('<MyComponent />', () => {
//  
//    it('renders three <Foo /> components', () => {
//      const wrapper = shallow(<MyComponent />);
//      expect(wrapper.find(Foo)).to.have.length(3);
//    });
//  
//    it('renders an `.icon-star`', () => {
//      const wrapper = shallow(<MyComponent />);
//      expect(wrapper.find('.icon-star')).to.have.length(1);
//    });
//  
//    it('renders children when passed in', () => {
//      const wrapper = shallow(
//        <MyComponent>
//          <div className="unique" />
//        </MyComponent>
//      );
//      expect(wrapper.contains(<div className="unique" />)).to.equal(true);
//    });
//  
//    it('simulates click events', () => {
//      const onButtonClick = sinon.spy();
//      const wrapper = shallow(
//        <Foo onButtonClick={onButtonClick} />
//      );
//      wrapper.find('button').simulate('click');
//      expect(onButtonClick.calledOnce).to.equal(true);
//    });
//  
//  });
