import React from 'react'
import $ from 'jquery'

export default class App extends React.Component {
    componentDidMount() {
        $('<h1/>')
            .text('Hellow world from jquery')
            .css({
                textAlign: 'center',
                color: 'blue'
            })
            .appendTo($('header'))
    }

    render() {
        return (
            <React.Fragment>
                <header></header>
                <hr />
                <div className="box">
                    <h2 className="box-title">box-title</h2>
                    <p className="box-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ex voluptate velit commodi
                    illum molestias ipsam praesentium eaque doloremque? Distinctio nulla vero iusto nostrum sequi molestiae
                    excepturi voluptates temporibus nemo.
                    Illum mollitia ex cum earum deleniti pariatur! Voluptas blanditiis ipsam sunt fuga tempora, explicabo
                    tempore laborum, culpa minima est eius? Consequuntur porro, nisi culpa iure dolores sapiente illo numquam
                        consectetur.</p>
                </div>
            </React.Fragment>
        );
    }
}