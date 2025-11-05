import React from "react";

const Card = ({ title, text, imageUrl, buttonUrl, buttonLabel }) => {
    return (
        <div className='card h-100 border-0'> 
            <div className='card h-100'>
                    <img className='card-img-top' src={imageUrl} alt='Card Image' />
                <div className='card-body d-flex flex-column p-3 t-3'>
                    <h5 className='fw-bold card-title text-center'>{title}</h5>
                    <p className='mb-3 card-text text-center'>{text}</p>
                </div>
                 <div className="card-footer text-center bg-light p-3"> 
                        <a className='btn btn-primary' href={buttonUrl}>
                            {buttonLabel}
                        </a>
                    </div>
            </div>
        </div>
    );
}

export default Card;





























// const Card = ({ title, text, imageUrl, buttonUrl, buttonLabel }) => {
//     return (
//                 <div className='card h-100'>
//                     <img className='card-img-top' src={imageUrl} alt='Card Image' />
//                     <div className='card-body text-center p-4 p-lg-5 pt-0 pt-lg-0'>
//                         <div className='feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4'>   
//                         </div>
//                         <h5 className='fs-4 fw-bold card-title'>{title}</h5>
//                         <p className='mb-0 card-text'>{text}</p>
//                         <a className='btn btn-primary' href={buttonUrl}>
//                             {buttonLabel}
//                         </a>
//                     </div>
//                 </div>
        
//     );

// }
