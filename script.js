document.addEventListener("DOMContentLoaded", () => {
    
    const updateTotalPrice = () => {
      const cartItems = document.querySelectorAll('.cart-item');
      let total = 0;
  
      cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('.price').dataset.price);
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        total += price * quantity;
      });
  
      document.querySelector('.total-price').textContent = `Total: $${total.toFixed(2)}`;
    };
  
    
    const cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach(item => {
      const plusBtn = item.querySelector('.plus');
      const minusBn = item.querySelector('.minus');
      const deleteBn = item.querySelector('.delete');
      const heartBtn = item.querySelector('.heart');
      const quantityElement = item.querySelector('.quantity');
  
      
      plusBtn.addEventListener('click', () => {
        quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
        updateTotalPrice();
      });
  
      
      minusBn.addEventListener('click', () => {
        const currentQuantity = parseInt(quantityElement.textContent);
        if (currentQuantity > 1) {
          quantityElement.textContent = currentQuantity - 1;
          updateTotalPrice();
        }
      });
  
      
      deleteBn.addEventListener('click', () => {
        item.remove();
        updateTotalPrice();
      });
  
      
      heartBtn.addEventListener('click', () => {
        const icon = heartBtn.querySelector('i');
        if (icon.classList.contains('fa-regular')) {
          icon.classList.remove('fa-regular', 'fa-heart');
          icon.classList.add('fa-solid', 'fa-heart'); // Liked
        } else {
          icon.classList.remove('fa-solid', 'fa-heart');
          icon.classList.add('fa-regular', 'fa-heart'); // Unliked
        }
      });
    });
  
    
    updateTotalPrice();
  });
  


 