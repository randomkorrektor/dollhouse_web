import React from 'react';

export default class AddProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                            title: "",
                            cost: "",
                            description: "",
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
       //проверки на повторение, установка ограничений по кол-ву
       //if (this.state.imgs[i].name)

       const imgsChanged = this.state.imgs;
       var length = event.target.files.length-1;
       imgsChanged.push(event.target.files[length]);

       this.setState(imgsChanged);
}

addToStore (event) {

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
                                        {/* Заполнение описания товара*/}
                     <h1>Добавление нового товара</h1>
                     <div>
                        <label>
                            Название
                            <input type='text' onChange={this.handleInputChange.bind(this, 'title')}/>  
                        </label>
                     </div>
                     <div>
                        <label>
                            Цена
                            <input type='number' onChange={this.handleInputChange.bind(this, 'cost')}/>
                        </label>
                     </div>
                     <div>
                        <label>
                            Описание
                            <input type='text' onChange={this.handleInputChange.bind(this, 'description')}/>
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
                         <button onClick={this.addToStore.bind(this, i)}> Добавить в магазин </button>
                    </div>                
                 </div>
             </div>
                    );
    }
}