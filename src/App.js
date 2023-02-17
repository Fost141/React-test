import {Link} from "react-router-dom";

function App() {
  return (
    <div className="page">
      <div className="container">
        <div className="header">
          <Link to="/"><h1 className="site_name">Hello React</h1></Link>
          <div className="nav">
            <Link to="/about">О нас</Link>    
            <Link to="/blog">Блог</Link>
          </div>    
        </div>
        <div className="content">
          <div className="galary">
            <div className="galary_content">
              <p>Использование картинки по ссылке</p>
              <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=400/uploads/users/1631/posts/29602/preview_image/react-crash-course.jpg" alt="logo" title="logo"/>
            </div>
            <div className="galary_content">
              <p>Использование картинки из внутренних файлов проекта</p>
              <img src="./img/content_img.jpg" alt="logo" title="logo"/>   
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default App;
