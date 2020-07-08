import React, { Component } from 'react'
import '../../sass/main.scss';


export default class Design extends Component {
    
    render() {
        return (
            <section className="design linea " id="about">
                <div className="container">
                    <div className="row">
                        <div className="design__content">
                            <h3 className="text-uppercase mb-0">WE Love to Design</h3>
                            <p className="half-txt p-top-30">Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum
                            facilis
          dolores nemis omnis fugats vitaes nemo minima rerums unsers sadips amets.</p>
                        </div>
                        <div className="col-md-4 wow fadeInLeft ">
                            <div className="design__item">
                                <div className="icon">
                                    <i className="icon-tools2" />
                                </div>
                                <div className="title text-uppercase">
                                    <h4>Modern design</h4>
                                </div>
                                <div className="desc">
                                    Fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent
                                    sed
                                    nisi eleifend.
          </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp">
                            <div className="design__item">
                                <div className="icon">
                                    <i className="icon-mobile" />
                                </div>
                                <div className="title text-uppercase">
                                    <h4>Bootstrap</h4>
                                </div>
                                <div className="desc">
                                    Fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent
                                    sed
                                    nisi eleifend.
          </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInRight">
                            <div className="design__item">
                                <div className="icon">
                                    <i className="icon-wine" />
                                </div>
                                <div className="title text-uppercase">
                                    <h4>clean code</h4>
                                </div>
                                <div className="desc">
                                    Fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent
                                    sed
                                    nisi eleifend.
          </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
