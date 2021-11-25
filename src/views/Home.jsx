import React from 'react';



function Home() {
    return (
    <>
    <div class="container-fluid bg-dark text-light p-5">
        <a href="#" class="btn btn-primary">Iniciar Sesión</a>
        <div class="container bg-dark p-5">
        <h1 class="display-4">Jumbotron de la myco app</h1>
        <hr/>
        <p>Myco App grupo Bastián Moral y Matías Quezada</p>
        </div>
    </div>
    <div className= "container-fluid">
        <div className="card" style="width: 18rem;">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        <div className="card" style="width: 18rem;">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        </div>
        </div>
    </div>
</>
    )
}


export default Home
