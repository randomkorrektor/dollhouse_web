import React from 'react';

export class Comment extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2> {this.props.name} </h2>
                <img src={this.props.avatar} className="img-responsive" />;
            <h2> {this.props.date} </h2>
                <h3> {this.props.message} </h3>
            </div>);
    }
}

export default class CommentsComponent extends React.Component {

    constructor(props) {
        super(props);
    }
    commentPublish(event) {
        //публикация комментария
        //проверка log in or not 
    }

    render() {
        //запрос комментов 
        const comments = this.props.comments.map((comment, i) =>
            <Comment
                key={i}
                name={comment.name}
                avatar={comment.avatar}
                date={comment.date}
                message={comment.message}
            />)

        return (
            <div>
                <h1>Комментарии({this.props.comments.length})</h1>
                {comments}

                <h2>Оставить комментарий</h2>

                <input />
                <button onClick={this.commentPublish}>
                    Отправить
                </button>

            </div>
        );
    }

}