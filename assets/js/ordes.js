// 从本地存储获取订单数据
const orders = JSON.parse(localStorage.getItem('orders')) || [];

function renderOrders() {
    const orderList = document.getElementById('order-list');
    const noOrders = document.getElementById('no-orders');

    orderList.innerHTML = '';

    if (orders.length === 0) {
        noOrders.style.display = 'block';
    } else {
        noOrders.style.display = 'none';
        orders.forEach(order => {
            const orderItem = document.createElement('div');
            orderItem.classList.add('order-item');
            orderItem.innerHTML = `
                <div class="order-item-info">
                    <img src="${order.productImage}" alt="${order.productName}">
                    <div class="order-item-details">
                        <p>商品名称: ${order.productName}</p>
                        <p>单价: $${order.price}</p>
                        <p>数量: ${order.quantity}</p>
                    </div>
                </div>
                <div class="order-item-actions">
                    <button onclick="cancelOrder(${order.id})">取消订单</button>
                </div>
            `;
            orderList.appendChild(orderItem);
        });
    }
}

function refreshOrders() {
    // 这里可以添加实际的刷新逻辑，例如从服务器获取最新订单数据
    renderOrders();
}

function cancelOrder(orderId) {
    // 这里可以添加实际的取消订单逻辑，例如发送请求到服务器取消订单
    const newOrders = orders.filter(order => order.id!== orderId);
    orders.length = 0;
    newOrders.forEach(order => orders.push(order));
    localStorage.setItem('orders', JSON.stringify(orders));
    renderOrders();
}

// 页面加载时渲染订单
window.addEventListener('load', renderOrders); a