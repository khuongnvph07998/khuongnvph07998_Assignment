import React, { useState, useEffect } from 'react';
// import dataFake from './dataFake';
import Routers from './routers';
import apiRequest from './api/productApi';
function App() {


  const [products, setProducts] = useState([]);
  // const [status, setStatus] = useState(false);
  const [color, setColor] = useState('green');
  // const [products, setProducts] = useState(dataFake);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getProducts();
  }, []);


  const onHandleClick = () => {
    // setStatus(true);
    setColor('red');
  }
  const onHandleRemove = (id) => {
    const newProducts = products.filter(product => product.id !== id);
    setProducts(newProducts);
  }
  const onHandleAdd = async (product) => {
    const { data } = await apiRequest.create(product);
    console.log(data)
      setProducts([
        ...products,
        data
      ])
  }
  const onHandleAddCate = async (product) => {
    const newCate = {
        id: products.length + 1,
        ...product
      }
      setProducts([
        ...products,
        newCate
      ])
  }
  return (
    <div className="App">
      <Routers products={products} onRemove={onHandleRemove} onAdd={onHandleAdd} onAddCate={onHandleAddCate} />
    </div>
  )

}
export default App;