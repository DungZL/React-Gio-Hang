import React, { Component } from 'react';

/**
 * Modal Component:
 * - Nhận thông tin chi tiết sản phẩm qua prop `content` (từ state productDetail của component cha ShoesStore)
 * - Hiển thị popup Bootstrap Modal gồm: Hình ảnh, tên, giá, số lượng, mô tả,...
 */
export default class Modal extends Component {
  render() {
    const { content } = this.props;

    // Phòng ngừa trường hợp ban đầu content chưa có dữ liệu
    if (!content) return null;

    return (
      <div
        className="modal fade"
        id="shoesDetailModal"
        tabIndex="-1"
        aria-labelledby="shoesDetailModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content shadow">
            {/* Header Modal */}
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="shoesDetailModalLabel">
                Chi tiết sản phẩm: {content.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/* Body Modal */}
            <div className="modal-body p-4">
              <div className="row align-items-center">
                {/* Cột trái: Hình ảnh sản phẩm */}
                <div className="col-md-5 text-center mb-3 mb-md-0">
                  <div className="bg-light p-3 rounded">
                    <img
                      src={content.image}
                      alt={content.name}
                      className="img-fluid"
                      style={{ maxHeight: '250px', objectFit: 'contain' }}
                    />
                  </div>
                </div>

                {/* Cột phải: Thông số chi tiết */}
                <div className="col-md-7">
                  <h4 className="fw-bold mb-2">{content.name}</h4>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <span className="badge bg-danger fs-6 py-2 px-3">
                      {content.price} $
                    </span>
                    <span className="badge bg-success py-2 px-3">
                      Kho: {content.quantity} đôi
                    </span>
                  </div>

                  <p className="text-muted mb-2">
                    <strong>Mã sản phẩm:</strong> #{content.id}
                  </p>
                  <p className="text-secondary mb-2">
                    <strong>Mô tả ngắn:</strong> {content.shortDescription}
                  </p>
                  <div className="border-top pt-2">
                    <strong>Mô tả chi tiết:</strong>
                    <p className="text-muted mt-1 small">
                      {content.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Modal */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
              <button
                type="button"
                className="btn btn-dark"
                data-bs-dismiss="modal"
              >
                Thêm vào giỏ <i className="fa-solid fa-cart-shopping ms-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
