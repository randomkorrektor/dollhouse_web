import React from 'react';

export default class AddBlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                            title: "",
                            text: "",
                            imgs: []
        };
        this.filesUpdate = this.filesUpdate.bind(this);
        this.removeFile = this.removeFile.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

handleInputChange(name, event) {
        this.setState({ [name]: event.target.value });
        console.log({ [name]: event.target.value });
    }

removeFile (number) {
    const imgs = this.state.imgs
    for (var i=number; i<imgs.length-1; i++) {
        var take = imgs[i]
        imgs[i] = imgs[i+1]
        imgs[i+1]=take
    }
    imgs.pop();
    this.setState({imgs});
}

filesUpdate (event) {

        var lengthFile = event.target.files.length-1;
        var lengthImgs = this.state.imgs.length;
       
        //ограничение кол-ва imgs
       /*
       var maxCount = 6;
        if (lengthImgs>=maxCount) {
            return
        }
        */
       
        const imgsChanged = this.state.imgs;
        imgsChanged.push(event.target.files[lengthFile]);
        this.setState(imgsChanged); 
}

addToBlog (event) {

}
        render() {

            var panels = []
            for (var i=0; i<this.state.imgs.length; i++) {
                panels.push(<div>
                                {this.state.imgs[i].name}
                                <button onClick={this.removeFile.bind(this, i)}> x </button>
                            </div>)
            }

             return (
             <div>
                 <div>
                                        {/* Заполнение блога*/}
                     <h1>Публикация в блог</h1>
                     <div>
                        <label>
                            Название
                            <input type='text' onChange={this.handleInputChange.bind(this, 'title')}/>  
                        </label>
                     </div>
                     <div>
                        <label>
                            Текст
                            <input type='text' onChange={this.handleInputChange.bind(this, 'text')}/>
                        </label>
                     </div>
                     <div>
                        <label>
                            Прикрепить фото
                            <input 
                                type='file' 
                                text='Выберите файл' 
                                accept='image/*' 
                                required multiple
                                onChange={this.filesUpdate}
                            />  
                        </label> 
                     </div>  
                     <div>
                         {panels}
                    </div>   
                    <div>
                         <button onClick={this.addToStore.bind(this, i)}> Опубликовать </button>
                    </div>                
                 </div>
             </div>
                    );
    }
}