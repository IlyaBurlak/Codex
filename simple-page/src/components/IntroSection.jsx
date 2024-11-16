import React from 'react';

export default function IntroSection() {
    return React.createElement(
        'section',
        null,
        [
            React.createElement('h1' , {className: 'centered', key:1} ,'Scientific Article' ),
            React.createElement('h3' , {className: 'centered', style: {color: '#666'} , key: 2} ,' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, earum enim eveniet obcaecati placeat quae.' ),
        ])
}