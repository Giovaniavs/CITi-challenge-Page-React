const keystone = require('keystone');
const Types = keystone.Field.Types;

const Produto = new keystone.List('Produto');

Produto.add({
  name: { type: Types.Text, required: true, index: true },
  desc: { type: Types.Text },
  price: { type: Types.Text },
  img: { type: Types.CloudinaryImage },
});

Produto.register();