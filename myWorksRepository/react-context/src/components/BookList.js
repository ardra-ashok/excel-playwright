import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


export class BookList extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
           
                <div className="book-list" style={{color:theme.syntax, background: theme.bg}}>
                    <ul>
                    <li style={{background:theme.ui}}>One Indian Girl</li>
                    <li style={{background:theme.ui}}>Abc</li>
                    <li style={{background:theme.ui}}>the final empire</li>
                    </ul>
                </div>
            
        )
    }
}

export default BookList;


//comments 
/* Using Two approaches for context */