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
        this.state = {
            comments: [
                         {
                            name: 'Jud',
                            date: new Date().toLocaleTimeString(),
                            message: 'Sush a cool masterpiece. Keep it up!',
                            avatar: 'https://secure.gravatar.com/avatar/38f5dd72cb01ce54df79031585378927?s=48&default=http%3A%2F%2F24.kz%2Fcomponents%2Fcom_k2%2Fimages%2Fplaceholder%2Fuser.png'
                         },
                         {
                            name: 'Steeve',
                            date: new Date().toLocaleTimeString(),
                            message: 'Wow dude. What i am dooing here?', 
                            avatar: 'https://secure.gravatar.com/avatar/38f5dd72cb01ce54df79031585378927?s=48&default=http%3A%2F%2F24.kz%2Fcomponents%2Fcom_k2%2Fimages%2Fplaceholder%2Fuser.png'
                         },
                         {
                            name: 'HolySh',
                            date: new Date().toLocaleTimeString(),
                            message: 'very cool stuff cool stuff right here yep real nice dolls man', 
                            avatar: 'https://secure.gravatar.com/avatar/38f5dd72cb01ce54df79031585378927?s=48&default=http%3A%2F%2F24.kz%2Fcomponents%2Fcom_k2%2Fimages%2Fplaceholder%2Fuser.png'
                         }    
                      ]
        }
    }
    commentPublish (event) {
        //публикация комментария
        //проверка log in or not 
    }

    render () {
        //запрос комментов 
         const comments = this.state.comments.map((comment, i) =>
                    <Comment
                        key={i}
                        name={comment.name}
                        avatar={comment.avatar}
                        date={comment.date}
                        message={comment.message}
                    />)

        return (
            <div>
                <h1>Комментарии</h1>
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