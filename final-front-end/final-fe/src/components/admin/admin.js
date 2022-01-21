import React, { Component } from 'react';
import { AdminHeader } from '../common/header/header_component';

export default class Admin extends Component {
  render() {
    return (
          <>
          <AdminHeader></AdminHeader>
          <div>Welcome to admin panel</div>
          </>
    );
  }
}
