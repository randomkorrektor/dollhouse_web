import React from 'react';
import Header from './Header';
import {
    Link
} from 'react-router';




export default class SignUpPage extends React.Component {

     constructor(props) {
        super(props);
        this.state = {  name: " ", 
                        password: " ", 
                        email: " ", 
                        subscribeCheck: "true",
                        message: " "
                    };
                        
     this.handleInputChange = this.handleInputChange.bind(this);
     }   

    handleInputChange(event) {
     
        const target = event.target;

        if (target.type == 'checkbox') 
        {
            this.setState( {subscribeCheck: target.checked} );
        }
        else
        {
            if (target.id != emailInput)
            {
                    if (passwordInput.value == password2Input.value)
                    {
                        this.setState( {message: ""});
                    }
                    else
                    {
                        this.setState( {message: "Пароли должны совпадать"});
                    }
            }
          
            const value = target.value;
            const name = target.name;
            this.setState( { [name]: value } );
        }
    }

    handleToggleClick(event)
    {

    }

    render() {
        return (<div>
                        <div>
                            <label>
                                <h2> E-mail </h2>
                                <input
                                id ="emailInput"
                                name="email"
                                type="text"
                                onChange={this.handleInputChange} 
                                />
                            </label>
                        </div>

                        <div>
                            <label>
                            <h2> Пароль </h2>
                            <input
                                id ="passwordInput"
                                name="password"
                                type="password"
                                onChange={this.handleInputChange} 
                                />
                            </label>
                        </div>

                        <div>
                            <label>
                                <h2> Повторите пароль </h2>
                            <input
                                id = "password2Input"
                                name="password2"
                                type="password"
                                onChange={this.handleInputChange} 
                                />
                            </label>
                        </div>

                        <div>
                            <label id = "passCheckLabel" >
                                <h4> {this.state.message} </h4>
                            </label>
                        </div>

                        <div>
                            <input
                            name="subscribeCheck"
                            type="checkbox"
                            checked = {this.state.subcribeCheck}
                            onChange= {this.handleInputChange}
                            />
                        </div>

                        <div>
                            <button onClick={this.handleToggleClick}>
                                РЕГИСТРАЦИЯ
                            </button>
                        </div>
                </div>);
    }
}
