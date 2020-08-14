import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import AddProduct from '../pages/views/Admin/AddProduct'
import ProductsManager from '../pages/views/Admin/Products'
import EditProduct from '../pages/views/Admin/EditProduct'
import Categories from '../pages/views/Admin/Categories'
import AddCategories from '../pages/views/Admin/AddCategories'

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import Products from '../pages/views/Main/Products'


const Routers = ({ products, onAdd, onRemove, onUpdate, onAddCate }) => {
    const onHandleAdd = (product) => {
        onAdd(product)
    }
    const onHandleAddCate = (product) => {
        onAddCate(product)
    }
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const onHandleUpdate = (id, product) => {
        onUpdate(id, product)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/cate'>
                                <Categories products={products} onRemove={onHandleRemove} onAddCate={onHandleAddCate} />
                            </Route>
                            <Route path='/admin/addCate'
                                render={(props) =>
                                    <AddCategories {...props} onAddCate={onAddCate} />}>
                            </Route>
                            <Route path='/admin/products'>
                                <ProductsManager products={products} onRemove={onHandleRemove} onAdd={onHandleAdd} />
                            </Route>
                            <Route path='/admin/add'
                                render={(props) =>
                                    <AddProduct {...props} onAdd={onAdd} />}>
                            </Route>
                            <Route path="/admin/edit/:id"
                                render={(props) => 
                                    <EditProduct {...props} products={products} onUpdate={onHandleUpdate} />
                                }
                            >
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products}/>
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/about">
                                <Products />
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
