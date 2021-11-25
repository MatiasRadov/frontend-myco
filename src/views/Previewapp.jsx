import React from 'react';


function Preview() {

    return (
        <>
        <div className='container-fluid firstView'>
            <div className='row navBar'>
                <input type='text' className='searchBar col-sm-4' />
                <button type="button" className="register col-sm-4 btn btn-primary">Registrate</button>
                <button type="button" className="login col-sm-4 btn btn-primary">Iniciar sesión</button>
            </div>
            <div className='convincing'>
                
            </div>
            <div className='col-5 mushImage'>
                <img src="..." class="img-fluid" alt="mush" />
            </div>
        </div>
        </>
    )
   
}

export default Preview


