const React = require("react");

const Form = (props) => {

    let [data, setData] = React.useState({
        title: "",
        text: "",
        image: "no-image.png",
    });
    
    function handleFormSubmit(event){
        event.preventDefault();
        props.onPostAdd(data);
        setData({
            title: "",
            text: "",
            image: "no-image.png",
        });
    }

    function handleTitleChange(event){
        setData({ ...data, title: event.target.value });
    }

    function handleTextChange(event){
        setData({ ...data, text: event.target.value });
    }

    function handleImageChange(event){
        setData({ ...data, image: event.target.value });
    }
    
    return(<>
        <form className="blog_form" action="" onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label" >Название</label>
                <input type="text" className="form-control" id="title" onChange={handleTitleChange} value={data.title} />

            </div>
            <div className="mb-3">
                <label htmlFor="text" className="form-label">Текст</label>
                <textarea className="form-control" id="text" rows="3" onChange={handleTextChange} value={data.text} />
                
            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Картинка</label>
                <input type="text" className="form-control" id="image" onChange={handleImageChange} value={data.image} />
                
            </div>
            <div className="mb-3">
            
                <button type="submit" className="btn btn-primary">Добавить</button>
            </div>
        </form>
    </>)

};

module.exports = Form;