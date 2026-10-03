import React, { Component } from 'react';
import ProductItem from './ProductItem';

/**
 * ProductList Component:
 * - Nhận `productsData` (danh sách toàn bộ sản phẩm) từ ShoesStore
 * - Nhận `setStateModal` từ ShoesStore và truyền tiếp xuống cho từng ProductItem
 * - Sử dụng hàm `.map()` để lặp qua từng phần tử và render ra ProductItem
 */
export default class ProductList extends Component {
  render() {
    const { productsData, setStateModal } = this.props;

    return (
      <div className="row">
        {productsData && productsData.length > 0 ? (
          productsData.map((product) => (
            <ProductItem
              key={product.id}
              item={product}
              setStateModal={setStateModal}
            />
          ))
        ) : (
          <div className="col-12 text-center text-muted py-5">
            Không tìm thấy sản phẩm nào!
          </div>
        )}
      </div>
    );
  }
}
