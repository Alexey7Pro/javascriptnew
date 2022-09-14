const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', },
];

const renderGoodsItem = ({ title = "", price = 0 }) => {
  return `
      <div class="goods-item">
        <h3>${title}</h3>
        <p>${price}</p>
      </div>
    `;
};

const renderGoodsList = (list = []) => {
  let goodsList = list.map(item => renderGoodsItem(item));
  document.querySelector('.goods-list').innerHTML = goodsList;
}

renderGoodsList(goods);