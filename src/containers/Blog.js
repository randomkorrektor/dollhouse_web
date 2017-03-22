import React from 'react';
import Header from './Header';
import {
    Link
} from 'react-router';

export class BlogData extends React.Component {
   
    render() {
        return (
        <div>
            <h1> {this.props.header} </h1>;
            <h2> {this.props.date} </h2>;
            <img src={this.props.imgSrc} className="img-responsive"/>;
            <h3> {this.props.text} </h3>;
            <h4> <Link to={this.props.fullPostLink}>Read full article...</Link> </h4>;
        </div>
        )
    }
}
export default class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            /*
                header, 
                date, 
                img, 
                text,
                fullPostLink
                */
            }
    }

    render() {
        return (
             <div>

                 <div>
                     Blog Page
                     <Header />
                 </div>  
                <BlogData 
                    header="Header title" 
                    date={new Date().toLocaleTimeString()} 
                    imgSrc = "http://static8.depositphotos.com/1000419/948/v/450/depositphotos_9489492-stock-illustration-valentine-tree-with-hearts-for.jpg"
                    text = "this is small part of artilcle with little sense for"
                    fullPostLink = "/profile"
                />

             </div>);
    }
}
