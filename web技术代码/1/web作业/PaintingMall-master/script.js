const addToCartButtons = document.querySelectorAll('.product-want');
const cartQuantityElement = document.getElementById('cart - quantity');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.style.backgroundColor = 'green';
        button.disabled = true;
        button.textContent = '正在添加...';

        const productId = button.dataset.id;
        const productName = button.dataset.name;
        const productPrice = parseFloat(button.dataset.price);

        const cartItem = {
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1,
            image: 'default.jpg',
            merchant: '未知商家'
        };

        // 获取本地存储中的购物车数据
        let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

        // 检查商品是否已存在于购物车中
        const existingItem = shoppingCart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            shoppingCart.push(cartItem);
        }

        // 将更新后的购物车数据保存到本地存储
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));

        button.style.backgroundColor = '';
        button.disabled = false;
        button.textContent = '加入购物车';

        alert('商品已成功添加到购物车！');

        let totalQuantity = 0;
        shoppingCart.forEach(item => {
            totalQuantity += item.quantity;
        });
        if (cartQuantityElement) {
            cartQuantityElement.textContent = totalQuantity;
        }
    });
});