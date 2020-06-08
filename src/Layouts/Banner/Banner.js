import React, { Component } from 'react'
import bs1 from '../../Assets/img/bs1.jpg'
import bs2 from '../../Assets/img/bs2.jpg'
import bs3 from '../../Assets/img/bs3.jpg'
export default class Banner extends Component {
    render() {
        return (
            <section className="massiveBanner" id="banner">
                <div id="massiveBanner" className="carousel slide carousel-fade" data-ride="carousel" data-interval={5000}>
                    <ol className="carousel-indicators">
                        <li data-target="#massiveBanner" data-slide-to={0} className="dot active" />
                        <li data-target="#massiveBanner" data-slide-to={0} className="dot" />
                        <li data-target="#massiveBanner" data-slide-to={0} className="dot" />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={bs1} className="d-block w-100" alt="bs1" style={{ height: 657 }} />
                            <div className="carousel__content animated fadeInDown ">
                                <h1><span>HI THERE ! </span><br /> WE ARE MASSIVE</h1>
                                <p>Integer nec nulla bibendum, venenatis elit vel, vulputate nulla. Quisque lacinia nisi
                                erat,
            <br />ut scelerisque augue pharetra et. Aliquam efficitur lacus eget.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={bs2} className="d-block w-100" alt="bs2" style={{ height: 657 }} />
                            <div className="carousel__content animated fadeInDown ">
                                <h1><span> WE'VE LOTS OF !</span><br /> REUSABLE COMPONENTS</h1>
                                <p>Vulputate nulla. Quisque lacinia nisi erat,
            <br />ut scelerisque augue pharetra et. Aliquam efficitur lacus eget.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={bs3} className="d-block w-100" alt="bs3" style={{ height: 657 }} />
                            <div className="carousel__content animated fadeInDown ">
                                <h1 className="text-white"><span> WHY CHOOSE MASSIVE ? </span><br /> UNLIMITED POSSIBILITIES </h1>
                                <p className="text-white">Integer nec nulla bibendum, venenatis elit vel, vulputate nulla.
                                Quisque
                                lacinia nisi erat,
            <br />ut scelerisque augue pharetra et. Aliquam efficitur lacus eget.</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#massiveBanner" role="button" data-slide="prev">
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#massiveBanner" role="button" data-slide="next">
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </section>

        )
    }
}
