import React, { Component } from 'react';

/**
 * ProductItem Component:
 * - Nhận `item` (dữ liệu từng đôi giày) từ ProductList
 * - Nhận `setStateModal` (hàm cập nhật sản phẩm hiển thị trên modal từ ShoesStore)
 * - Khi click xem chi tiết hoặc "add to carts", gọi `setStateModal(item)` để đẩy dữ liệu lên ShoesStore
 */
export default class ProductItem extends Component {
  render() {
    const { item, setStateModal } = this.props;

    return (
      <div className="col-12 col-md-6 col-lg-4 mb-4">
        <div className="card h-100 border border-light-subtle shadow-sm p-3 product-card">
          {/* Ảnh sản phẩm (có thể click để xem chi tiết) */}
          <div
            className="text-center p-2"
            style={{ cursor: 'pointer' }}
            data-bs-toggle="modal"
            data-bs-target="#shoesDetailModal"
            onClick={() => setStateModal(item)}
            title="Click để xem chi tiết sản phẩm"
          >
            <img
              src={item.image}
              alt={item.name}
              className="img-fluid"
              style={{
                maxHeight: '190px',
                objectFit: 'contain',
                transition: 'transform 0.2s ease-in-out',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>

          {/* Thông tin sản phẩm */}
          <div className="card-body p-2 d-flex flex-column justify-content-between">
            <div>
              <h6
                className="card-title fw-bold text-truncate mb-2"
                title={item.name}
                style={{ cursor: 'pointer' }}
                data-bs-toggle="modal"
                data-bs-target="#shoesDetailModal"
                onClick={() => setStateModal(item)}
              >
                {item.name}
              </h6>
              <p className="card-text text-secondary fw-semibold mb-3">
                {item.price} $
              </p>
            </div>

            {/* Nút hành động */}
            <div>
              <button
                type="button"
                className="btn btn-dark w-100 py-2 d-flex align-items-center justify-content-center gap-2"
                data-bs-toggle="modal"
                data-bs-target="#shoesDetailModal"
                onClick={() => setStateModal(item)}
              >
                <span>add to carts</span>
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
