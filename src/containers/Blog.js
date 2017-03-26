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
                <img src={this.props.imgSrc} className="img-responsive" />;
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
            posts: [
                {
                    header: "Header title",
                    date: new Date().toLocaleTimeString(),
                    imgSrc: "http://static8.depositphotos.com/1000419/948/v/450/depositphotos_9489492-stock-illustration-valentine-tree-with-hearts-for.jpg",
                    text: "this is small part of artilcle with little sense for",
                    fullPostLink: "/product"
                },

                {
                    header: "Header title 2",
                    date: new Date().toLocaleTimeString(),
                    imgSrc: "http://static8.depositphotos.com/1000419/948/v/450/depositphotos_9489492-stock-illustration-valentine-tree-with-hearts-for.jpg",
                    text: "this is small part of artilcle with little sense for",
                    fullPostLink: "/product"
                },

                {
                    header: "Header title 3",
                    date: new Date().toLocaleTimeString(),
                    imgSrc: "http://static8.depositphotos.com/1000419/948/v/450/depositphotos_9489492-stock-illustration-valentine-tree-with-hearts-for.jpg",
                    text: "this is small part of artilcle with little sense for",
                    fullPostLink: "/product"
                },

                 {
                    header: "Header title 4",
                    date: new Date().toLocaleTimeString(),
                    imgSrc: "http://static8.depositphotos.com/1000419/948/v/450/depositphotos_9489492-stock-illustration-valentine-tree-with-hearts-for.jpg",
                    text: "this is small part of artilcle with little sense for",
                    fullPostLink: "/product"
                },

                 {
                    header: "Header title 5",
                    date: new Date().toLocaleTimeString(),
                    imgSrc: "http://static8.depositphotos.com/1000419/948/v/450/depositphotos_9489492-stock-illustration-valentine-tree-with-hearts-for.jpg",
                    text: "this is small part of artilcle with little sense for",
                    fullPostLink: "/product"
                 }
            ]
        }
    }

    render() {
        //const posts = this.state.posts.map((post, i) => <span key={i}>{post.text}</span>)
        const posts = this.state.posts.map((post, i) =>
            <BlogData
                key={i}
                header={post.header}
                date={post.date}
                imgSrc={post.imgSrc}
                text={post.text}
                fullPostLink={post.fullPostLink}
            />
        )

        return (
            <div>

                <div>
                    Blog Page
                     <Header />
                </div>
                <div>
                    {posts}
                </div>

            </div>);
    }
}
