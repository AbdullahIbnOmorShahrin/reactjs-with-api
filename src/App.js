import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';


function App() {
  const products = [{ name: 'Laptop', quantity: 2 },
  { name: 'TV', quantity: 3 },
  { name: 'EarBuds', quantity: 15 },
  { name: 'Mobile', quantity: 1 }
  ];
  return (
    <div>

      <Header></Header>
      {
        products.map(product => <Product name={product.name} quantity={product.quantity}></Product>)
      }
      <ExternalUser></ExternalUser>
    </div>

  );
}

function Product(props) {

  return (
    <div className='product'>
      <h1></h1>
      <h2>Name:{props.name}</h2>
      <h3>Quantity:{props.quantity}</h3>
    </div>
  )

}


function User(props) {
  return (
    <div style={{ backgroundColor: 'skyblue', borderRadius: '25px', border: '2px solid gray', margin: '5px', paddingLeft: '15px' }}>
      <h1>User Name:{props.name}</h1>
      <h2>Email: {props.email}</h2>
    </div>
  )
}


function ExternalUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div >
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}


export default App;
