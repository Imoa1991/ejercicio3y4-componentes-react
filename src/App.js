import React from 'react';
import './App.css';
import List from './components/List';

class ItemList extends React.Component {
  render() {
    const list = [
        {
            name:"Cereales con chocolate",
            description: "Cereales rellenos de chocolate",
            quantity: 2,
            category: "Cereales",
            price: 'shddefbeundd'
        },
       {    name:"Hamburguesa con queso",
            description:"Hamburguesa rica y saludable",
            quantity:1,
            category:"Fast-food",
            price:15
         },
          {
            name:"Agua mineral",
            description:"Agua de un charco del Himalaya",
            quantity:2,
            category:"Bebida",
            price:5
          },
       {    name:"Coca-cola",
            quantity:5,
            category:"Bebida",
            price:7
         }
    ];
 return (
      <div className="ItemList">
        <ul className="item-list">
          {list.map(
            function(item){
              return (
              <List  name= {item.name} description= {item.description} quantity= {item.quantity} category= {item.category} price= {item.price}
               />
              );
            }
          )}
        </ul>
      </div>
  );
  }
}

export default ItemList;
