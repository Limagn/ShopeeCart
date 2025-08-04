// quais ações meu carrinho pode fazer


// casos de uso

// ✅-> adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// ✅-> calcular o total do carrinho
async function calculateTotal(userCart) {
  console.log("\n💵 Shopee cart total is: ");
  
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log("$" + result.toFixed(2));
}

// ✅-> deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
    // splice = cortar uma zona
  }
}

// ✅-> remover um item
async function removeItem(userCart, item) {
  // 1. Encontrar o indice do item
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  // 2. Caso não encontre o item
  if (indexFound == -1) {
    console.log("Item não encontrado.");
    return;
  }

  // 3. Item > 1 subtrair um item
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  // 4. Caso item = 1 deletar o item
  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1)
    return;
  }
}

// ✅-> exibir lista de itens
async function displayCart(userCart) {
  console.log("\n🛒 Shopee cart list:");

  userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - $${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);
  })
}

export {
  addItem,
  calculateTotal,
  deleteItem,
  removeItem,
  displayCart,
};