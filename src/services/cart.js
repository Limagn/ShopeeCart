// quais ações meu carrinho pode fazer


// casos de uso

// ✅-> adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// -> calcular o total do carrinho
async function calculateTotal(userCart) {
  console.log("\n🛒 Shopee cart total is: ");
  
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log("$" + result);
}

// -> deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1)
    // splice = cortar uma zona
  }
}

// -> remover um item
async function removeItem(userCart, index) {
  
}

// -> exibir lista de itens
async function displayCart(userCart) {
  console.log("\nShopee cart list:");

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
}