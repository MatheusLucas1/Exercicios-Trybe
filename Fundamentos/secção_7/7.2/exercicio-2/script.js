const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },  
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

// const customerInfo = (order) => {
//   // Adicione abaixo as informações necessárias.
//   console.log( `Olá ${order.order.delivery.deliveryPerson}, entrega para ${order.name}, Telefone: ${order.phoneNumber},${order.address.street} ${order.address.number} ${order.address.apartment}`)

// };

// customerInfo(order);

const orderModifier = (order) => {
  let name = order.name;
  let valorTotal = order.payment.total;
  const sabores  = Object.keys(order.order.pizza);
  const cocaZero = order.order.drinks.coke.type
  name = 'Luiz Silva';
  valorTotal = '50';
  
  console.log(`Olá ${name}, o total do seu pedido de ${sabores[0]}, ${sabores[1]}, ${cocaZero} é R$ ${valorTotal}`)

};

orderModifier(order);