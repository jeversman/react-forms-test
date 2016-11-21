import * as React from 'react';

import ContactForm from './ContactForm';

export class App extends React.Component {

    // handleSubmit = (values) => {
    //     // Do something with the form values
    //     console.log(values);
    // }

    render() {
        return (
            <div>
                <h1> Hello start screen </h1>
                <ContactForm onSubmit={this.handleSubmit} />
            </div>
        );
    }
}