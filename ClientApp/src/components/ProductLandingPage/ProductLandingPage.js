
import "./ProductLandingPage.css"
import "./responsive.css"



function ProductLandingPage() {
    return (
        <div className="App">
            <header className="section-header">
                <section className="header-main border-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-4">
                                <a href="#" className="brand-wrap">
                                    Sistema de ventas
                                </a>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <form action="#" className="search">
                                    <div className="input-group w-100">
                                        
                                        <div className="input-group-append">
                                            
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="widgets-wrap float-md-right">
                                    <div className="widget-header  mr-3">
                                        
                                       
                                    </div>
                                    <div className="widget-header icontext">
                                        
                                        <div className="text">
                                            <span className="text-muted">Bienvenido!</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>

            <section className="section-pagetop bg">
                <div className="container">
                    <h2 className="title-page">Productos</h2>
                    <nav>
                        <ol className="breadcrumb text-white">
                            <li className="breadcrumb-item"><a href="#">Inicio</a></li>
                            <li className="breadcrumb-item"><a href="#">Categorias</a></li>
                           
                        </ol>
                    </nav>
                </div>
            </section>

            <section className="section-content padding-y">
                <div className="container">
                    <div className="row">
                        <aside className="col-md-3">

                            <div className="card">
                                <article className="filter-group">
                                    <header className="card-header">
                                        <a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" className="">
                                            <i className="icon-control fa fa-chevron-down"></i>
                                            
                                        </a>
                                    </header>
                                   
                                </article>
                                <article className="filter-group">
                                    <header className="card-header">
                                        <a href="#" data-toggle="collapse" data-target="#collapse_2" aria-expanded="true" className="">
                                            <i className="icon-control fa fa-chevron-down"></i>
                                            <h6 className="title">Marcas </h6>
                                        </a>
                                    </header>
                                    <div className="filter-content collapse show" id="collapse_2">
                                        <div className="card-body">
                                            <label className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" />
                                                <div className="custom-control-label">Mercedes
                                                    <b className="badge badge-pill badge-light float-right">120</b>  </div>
                                            </label>
                                            <label className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" />
                                                <div className="custom-control-label">Toyota
                                                    <b className="badge badge-pill badge-light float-right">15</b>  </div>
                                            </label>
                                            <label className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" />
                                                <div className="custom-control-label">Mitsubishi
                                                    <b className="badge badge-pill badge-light float-right">35</b> </div>
                                            </label>
                                            <label className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" />
                                                <div className="custom-control-label">Nissan
                                                    <b className="badge badge-pill badge-light float-right">89</b> </div>
                                            </label>
                                            <label className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" />
                                                <div className="custom-control-label">Honda
                                                    <b className="badge badge-pill badge-light float-right">30</b>  </div>
                                            </label>
                                        </div>
                                    </div>
                                </article>
                                <article className="filter-group">
                                    <header className="card-header">
                                        <a href="#" data-toggle="collapse" data-target="#collapse_3" aria-expanded="true" className="">
                                            <i className="icon-control fa fa-chevron-down"></i>
                                            <h6 className="title">Rango de Precio </h6>
                                        </a>
                                    </header>
                                    <div className="filter-content collapse show" id="collapse_3">
                                        <div className="card-body">
                                            <input type="range" className="custom-range" min="0" max="100" name="" />
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label>Min</label>
                                                    <input className="form-control" placeholder="$0" type="number" />
                                                </div>
                                                <div className="form-group text-right col-md-6">
                                                    <label>Max</label>
                                                    <input className="form-control" placeholder="$1,0000" type="number" />
                                                </div>
                                            </div>
                                            <button className="btn btn-block btn-primary">Aplicar</button>
                                        </div>
                                    </div>
                                </article>
                                <article className="filter-group">
                                    <header className="card-header">
                                        
                                    </header>
                                    <div className="filter-content collapse show" id="collapse_4">
                                        
                                    </div>
                                </article>
                                <article className="filter-group">
                                    
                                    <div className="filter-content collapse in" id="collapse_5">
                                        <div className="card-body">
                                            <label className="custom-control custom-radio">
                                                <input type="radio" name="myfilter_radio" checked="" className="custom-control-input" />
                                                <div className="custom-control-label">Any condition</div>
                                            </label>
                                            <label className="custom-control custom-radio">
                                                <input type="radio" name="myfilter_radio" className="custom-control-input" />
                                                <div className="custom-control-label">Brand new </div>
                                            </label>
                                            <label className="custom-control custom-radio">
                                                <input type="radio" name="myfilter_radio" className="custom-control-input" />
                                                <div className="custom-control-label">Used items</div>
                                            </label>
                                            <label className="custom-control custom-radio">
                                                <input type="radio" name="myfilter_radio" className="custom-control-input" />
                                                <div className="custom-control-label">Very old</div>
                                            </label>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </aside>
                        <main className="col-md-9">
                            <header className="border-bottom mb-4 pb-3">
                                <div className="form-inline">
                                    <span className="mr-md-auto">6 productos encontrados  </span>
                                    
                                    
                                </div>
                            </header>
                            <div className="row">
                                <div className="col-md-4">
                                    <figure className="card card-product-grid">
                                        <div className="img-wrap">
                                            <span className="badge badge-danger"> NEW </span>
                                            <img src="./images/items/2.jpg"/>
                                            <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i>Vista rapida</a>
                                        </div>
                                        <figcaption className="info-wrap">
                                            <div className="fix-height">
                                                <a href="#" className="title">Producto va colocado aqui</a>
                                                <div className="price-wrap mt-2">
                                                    <span className="price">$1280</span>
                                                    
                                                </div>
                                            </div>
                                            <a href="#" className="btn btn-block btn-primary">Agregar Producto </a>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="col-md-4">
                                    <figure className="card card-product-grid">
                                        <div className="img-wrap">
                                            <img src="./ProductLandingPage/images/items/Benz.png" />
                                            <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i>Vista rapida</a>
                                        </div>
                                        <figcaption className="info-wrap">
                                            <div className="fix-height">
                                                <a href="#" className="title">Producto va colocado aqui</a>
                                                <div className="price-wrap mt-2">
                                                    <span className="price">$1280</span>
                                                </div>
                                            </div>
                                            <a href="#" className="btn btn-block btn-primary">Agregar Producto </a>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="col-md-4">
                                    <figure className="card card-product-grid">
                                        <div className="img-wrap">
                                            <img src="assets/images/items/3.jpg" />
                                            <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i>Vista rapida</a>
                                        </div>
                                        <figcaption className="info-wrap">
                                            <div className="fix-height">
                                                <a href="#" className="title">Producto va colocado aqui</a>
                                                <div className="price-wrap mt-2">
                                                    <span className="price">$1280</span>
                                                </div>
                                            </div>
                                            <a href="#" className="btn btn-block btn-primary">Agregar Producto </a>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="col-md-4">
                                    <figure className="card card-product-grid">
                                        <div className="img-wrap">
                                            <img src="assets/images/items/4.jpg" />
                                            <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i>Vista rapida</a>
                                        </div>
                                        <figcaption className="info-wrap">
                                            <div className="fix-height">
                                                <a href="#" className="title">Producto va colocado aqui</a>
                                                <div className="price-wrap mt-2">
                                                    <span className="price">$1280</span>
                                                </div>
                                            </div>
                                            <a href="#" className="btn btn-block btn-primary">Agregar Producto </a>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="col-md-4">
                                    <figure className="card card-product-grid">
                                        <div className="img-wrap">
                                            <img src="assets/images/items/5.jpg" />
                                            <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i>Vista rapida</a>
                                        </div>
                                        <figcaption className="info-wrap">
                                            <div className="fix-height">
                                                <a href="#" className="title">Producto va colocado aqui</a>
                                                <div className="price-wrap mt-2">
                                                    <span className="price">$1280</span>
                                                </div>
                                            </div>
                                            <a href="#" className="btn btn-block btn-primary">Agregar Producto </a>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="col-md-4">
                                    <figure className="card card-product-grid">
                                        <div className="img-wrap">
                                            <img src="assets/images/items/6.jpg" />
                                            <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i>Vista rapida</a>
                                        </div>
                                        <figcaption className="info-wrap">
                                            <div className="fix-height">
                                                <a href="#" className="title">Producto va colocado aqui</a>
                                                <div className="price-wrap mt-2">
                                                    <span className="price">$1280</span>
                                                </div>
                                            </div>
                                            <a href="#" className="btn btn-block btn-primary">Agregar Producto </a>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="col-md-4">
                                    <figure className="card card-product-grid">
                                        <div className="img-wrap">
                                            <img src="assets/images/items/7.jpg" />
                                            <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i>Vista rapida</a>
                                        </div>
                                        <figcaption className="info-wrap">
                                            <div className="fix-height">
                                                <a href="#" className="title">Producto va colocado aqui</a>
                                                <div className="price-wrap mt-2">
                                                    <span className="price">$1280</span>
                                                </div>
                                            </div>
                                            <a href="#" className="btn btn-block btn-primary">Agregar Producto </a>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="col-md-4">
                                    <figure className="card card-product-grid">
                                        <div className="img-wrap">
                                            <img src="assets/images/items/1.jpg" />
                                            <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i>Vista rapida</a>
                                        </div>
                                        <figcaption className="info-wrap">
                                            <div className="fix-height">
                                                <a href="#" className="title">Producto va colocado aqui</a>
                                                <div className="price-wrap mt-2">
                                                    <span className="price">$1280</span>
                                                </div>
                                            </div>
                                            <a href="#" className="btn btn-block btn-primary">Agregar Producto </a>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <nav className="mt-4" aria-label="Page navigation sample">
                                <ul className="pagination">
                                    <li className="page-item disabled"><a className="page-link" href="#">Anterior</a></li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Siguiente</a></li>
                                </ul>
                            </nav>
                        </main>
                    </div>
                </div>
            </section>

            <footer className="section-footer border-top padding-y">
                <div className="container">
                    <p className="float-md-right">
                        &copy; Copyright 2023 All rights reserved
                    </p>
                    <p>
                        <a href="#">Terms and conditions</a>
                    </p>
                </div>
            </footer>


        </div>
    );
}
export default ProductLandingPage;