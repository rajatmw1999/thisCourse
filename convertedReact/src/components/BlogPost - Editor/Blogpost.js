import React , {Component} from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';
import renderHtml from 'react-render-html';
import './Blogpost.css';
class Blogpost extends Component{

    state={
      authour: "",
      title: "",
      content:"",
      tags: "",
      editorHtml:"",
      tag:[]

    };
  
  handleChange = event =>{
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleQuillChange = value => {
    this.setState({
        editorHtml : value
    });
}
handleTags = event =>{
  
  
  this.setState({
    [event.target.name]: event.target.value
  }, () => {
    
    var x=this.state.tags.split(",");
    this.state.tag=x;
  });
  
  

}
  
  


  handleSubmit = (event) =>{
    event.preventDefault();
    console.log(this.state.title)
    console.log(this.state.editorHtml)
    console.log(this.state.author)
    console.log(this.state.tag)
  }

    render() {
      return(
        <div className="container">


      <div class='row'>
        <div class="hello col-12 col-md-6">

          <div class="jumbotron" style={{width:'100%'}}>
            <h1>Blog Post Builder</h1>
    <form>
      <div class="form-group">
        <label for="blogtitle">Title</label>
        <input name="title" type="text" value={this.state.title} onChange={this.handleChange} class="form-control" id="blogtitle"  placeholder="Enter title" />
        
      </div>
      <div class="form-group">
        <label for="author">Name of the Author</label>
        <input name="author" onChange={this.handleChange} value={this.state.author} type="text" class="form-control" id="author"  placeholder="Enter author name" />
        
      </div>
      <ReactQuill modules={Blogpost.modules} formats={Blogpost.modules} style={{backgroundColor:"white"}}  value={this.state.editorHtml}
                  onChange={this.handleQuillChange} 
                  />
      <div class="form-group">
          <label for="tags">Tags</label>
          <input type="text" name="tags" value={this.state.tags} onChange={this.handleTags} class="form-control" id="tags" placeholder="Enter tags" />
          <small>Separate the tags using a comma-separator(,)</small>

          
        </div>
        
        <button onClick={this.handleSubmit} type="submit" class="btn btn-primary">Submit</button>
      </form>

      </div>
    </div>
    <div class="col-6" style={{textAlign:'center'}}>
        <h1>{this.state.title}</h1>
        {this.state.author ? <small>By </small>:<small></small>}
      <small><b>{this.state.author}</b></small>
      <br></br>
      
      <p style={{textAlign:'left'}}>{renderHtml(this.state.editorHtml)}</p>

    </div>

    </div> 
    </div>
          
          
        );
    }
  }
  Blogpost.modules={
    toolbar:[
      [{'header':'1'} ,{font:[]}],
      [{size:[]}],
      ['bold' , 'italic' , 'underline','strike','blockquote'],
      [{'list':'ordered'} , {'list':'bullet'}] ,
      ['link','image','video']
    ]

      
  };
  Blogpost.formats=[
    'header','font','size',
    'bold','italic','underline','strike','blockquote',
    'list','bullet',
    'link','image','video','code-block'

  ]  

export default Blogpost;
