import React, { Component } from 'react';
import { Button } from '../../../../ui/button/Button';

export class ListItem extends Component {
  state = {};
  componentWillUnmount() {
    console.log('componentWillUnmount - just to see that is work');
  }

  render() {
    const { name, number, onDeleteContact } = this.props;
    return (
      <>
        <p>{name}</p>
        <span>{number}</span>
        <Button name="delete" type="button" onClick={onDeleteContact} />
      </>
    );
  }
}

// export function ListItem({ name, number, onDeleteContact }) {
//   return (
// <>
//   <p>{name}</p>
//   <span>{number}</span>
//   <Button name="delete" type="button" onClick={onDeleteContact} />
// </>
//   );
// }
