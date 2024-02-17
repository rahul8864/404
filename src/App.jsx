import './App.css'

function App() {

  return (
    <section className="page_404">
      <div className="container">
        <div className="row"> 
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center">404</h1>
              </div>
              <div className="contant_box_404">
                <h3 className="h2">{`Look like you're lost`}</h3>
                <p>{`Sorry, our website is currently undergoing maintenance.`}</p>
                  <ul className="wrapper">
                    <a href="https://www.facebook.com/devmobilechas">
                      <li className="icon facebook">
                        <span className="tooltip">Facebook</span>
                        <span><i className="fab fa-facebook-f"></i></span>
                      </li>
                    </a>
                    <a href="https://www.instagram.com/devmobilechas/">
                      <li className="icon instagram">
                        <span className="tooltip">Instagram</span>
                        <span><i className="fab fa-instagram"></i></span>
                      </li>
                    </a>
                    <a href="https://www.youtube.com/@devmobilechas?sub_confirmation=1">
                      <li className="icon youtube">
                        <span className="tooltip">Youtube</span>
                        <span><i className="fab fa-youtube"></i></span>
                      </li>
                    </a>
                  </ul>
                  <a href="/" className="link_404">Go to Home</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
