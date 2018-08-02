import React, { Component } from 'react'
import './Membership.css'
import Plans from './Plans/Plans';

export default class Membership extends Component {
    render() {
        return (
            <div className='Membership'>
            <h2>Membership</h2>
            <p>Lorem ipsum dolor amet stumptown occupy kinfolk flexitarian, umami pug pok pok cornhole vexillologist kale chips. Poutine ethical viral cred, brunch af hot chicken. Bicycle rights health goth forage, food truck VHS plaid cray small batch tofu.</p>
            <Plans/>
            <Plans/>
            <Plans/>
            {/* {mappedPlans} */}
            </div>
        )
    }
}
