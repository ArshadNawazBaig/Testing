import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProductAction, updateProductAction } from '../../redux/actions/productActions';

function ProductCard(props) {
  const { image, title, id } = props.product;
  const dispatch = useDispatch();
  const handleDeleteProduct = (id) => {
    dispatch(deleteProductAction(id));
  };
  const handleUpdateProduct = (product) => {
    const updatedProduct = {
      id,
      title: 'Updated Product',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    };
    dispatch(updateProductAction(updatedProduct));
  };
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title} style={{ height: '350px' }} />
      <div className="card-body">
        <p
          className="card-text"
          style={{
            display: '-webkit-box',
            maxMidth: '200px',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'normal',
          }}
        >
          {title}
        </p>
        <button className="btn btn-primary" onClick={() => handleUpdateProduct(props)}>
          Update
        </button>
        <button className="btn btn-danger" onClick={() => handleDeleteProduct(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
