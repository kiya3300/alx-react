import React from 'react';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';


describe('NotificationItem component', () => {
  it('renders without crashing',() => {
    shallow(<NotificationItem/>);
  })

  it('renders the correct html (with given dummy  type and value props)', () => {
    const wrapper = shallow(<NotificationItem type="urgent" value="test"/>);
    const html = wrapper.html()
    // console.log(wrapper.html());
    expect(html).toBe('<li data-notification-type="urgent">test</li>')
  })

  it('renders the correct html (with given dummy html props)', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    const html = wrapper.html()
    expect(html).toBe('<li data-notification-type="default"><u>test</u></li>')
  })

  it('spys markAsRead', () => {
    const markAsReadMock = jest.fn((id) => `Notification ${id} has been marked as read`)
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} id={1} markAsRead={markAsReadMock} />);
    wrapper.simulate('click')
    expect(markAsReadMock).toHaveBeenCalledWith(1);
  })
})
