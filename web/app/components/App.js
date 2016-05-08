/**
 * 主应用组件
 * 
 * @author : Sunkey
 */
import React, { Component } from 'react';
import '../../resources/scss/index.scss';

export default class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}