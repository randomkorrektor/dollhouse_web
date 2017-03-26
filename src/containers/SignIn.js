import React from 'react';
import Header from './Header';
import {
    Link
} from 'react-router';

export default class SignInPage extends React.Component {
    
     constructor(props) {
        super(props);
        this.state = {  
                        password: " ", 
                        email: " ", 
                        rememberMe: "true"
                    };
                        
     this.handleInputChange = this.handleInputChange.bind(this);
     }   

    handleInputChange(event) {
     
        const target = event.target;

        if (target.type == 'checkbox') 
        {
            this.setState( {rememberMe: target.checked} );
        }
        else
        {
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
                            <input
                            name="rememberMe"
                            type="checkbox"
                            checked = {this.state.rememberMe}
                            onChange= {this.handleInputChange}
                            />
                        </div>

                        <div>
                            <button onClick={this.handleToggleClick}>
                                Войти
                            </button>
                        </div>
                </div>);
    }
}
