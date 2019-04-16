import React, { Component } from 'react'
import './Laptop_Details.css';
import sample from './img/sample.jpg';

export default class Laptop_Details extends Component {
    render() {
        return (
            <div className='container mt-5'>
                <div className="row">
                    <div className='col-md-6'>
                        <img src={sample} alt='img' className='w-100'/>
                    </div>
                    <div className='col-md-6'>
                        <div className="shadow p-3 mb-5 bg-white rounded">
                            <h1>Apple Mac Book Pro</h1>
                            <i className="fab fa-star "></i>
                            <hr />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam omnis hic cupiditate veritatis tempore repellendus minima necessitatibus aut. Amet alias rem quibusdam voluptate quaerat maiores nam reiciendis ut sint velit?</p>
                            <ul>
                                <li>MacOS</li>
                                <li>1TB</li>
                                <li>i7</li>
                                <li>6 hours battery life</li>
                            </ul>
                            <h2 className="price-tag">$2099.99</h2>
                            <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad et architecto sint cum impedit mollitia similique explicabo ratione possimus ut magni repellat quibusdam dignissimos nisi, dolores facilis! Perferendis, doloribus dolor.</p>
                            <button className='btn'>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active bg-dark" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Description</a>
                        <a className="nav-item nav-link text-dark" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Additional Information</a>
                        <a className="nav-item nav-link text-dark" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Reviews</a>
                    </div>
                </nav>
                <div className="tab-content p-5" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <p className="text-muted lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est aliquam, consectetur dolorum laudantium nihil at ratione, expedita accusantium iste laboriosam nostrum? Voluptate, et. Optio distinctio, mollitia quod atque est fugit.</p>
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <p className='lead text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, provident molestias? Expedita asperiores doloremque accusamus ut nemo, quibusdam tempore impedit repudiandae, fugit dolorem similique minima quod eum ea! Esse, debitis?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis minus ipsum saepe nobis suscipit aperiam, enim iste corporis, ab ut aliquam magni est. Sit veritatis, labore repellat at minima maiores!
                        </p>
                    </div>
                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <p className='lead text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, provident molestias? Expedita asperiores doloremque accusamus ut nemo, quibusdam tempore impedit repudiandae, fugit dolorem similique minima quod eum ea! Esse, debitis?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis minus ipsum saepe nobis suscipit aperiam, enim iste corporis, ab ut aliquam magni est. Sit veritatis, labore repellat at minima maiores!
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
