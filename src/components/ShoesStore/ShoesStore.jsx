import React, { Component } from 'react';
import productsData from '../../api/data.json';
import ProductList from './ProductList';
import Modal from './Modal';

/**
 * ShoesStore Component (Parent Component):
 * - Quản lý state chính: `productDetail` (mặc định lấy phần tử đầu tiên của mảng productsData)
 * - Định nghĩa hàm `setStateModal` để cập nhật state khi người dùng chọn sản phẩm
 * - Render Sidebar menu (Home, Shop) và khu vực hiển thị danh sách sản phẩm Shoes shop
 * - Truyền dữ liệu và callback qua Props xuống ProductList và Modal
 */
export default class ShoesStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Khởi tạo state productDetail là sản phẩm đầu tiên trong file data.json
      productDetail: productsData[0] || null,
      activeTab: 'home', // 'home' | 'shop'
    };
  }

  /**
   * Hàm setStateModal:
   * - Được truyền qua props xuống ProductList -> ProductItem (Kỹ thuật Lifting State Up)
   * - Khi người dùng click vào một item, item đó sẽ được gửi ngược lên để cập nhật state tại ShoesStore
   */
  setStateModal = (newProduct) => {
    this.setState({
      productDetail: newProduct,
    });
  };

  render() {
    const { productDetail, activeTab } = this.state;

    return (
      <div className="container-fluid py-4 px-lg-5">
        <div className="row g-4">
          {/* CỘT TRÁI: Sidebar Điều Hướng (Home / Shop) */}
          <div className="col-12 col-md-3 col-lg-2">
            <div className="list-group rounded-0">
              <button
                type="button"
                className={`list-group-item list-group-item-action text-secondary py-2 px-3 ${
                  activeTab === 'home'
                    ? 'border border-primary text-primary fw-medium'
                    : 'border-0'
                }`}
                style={{ backgroundColor: 'transparent' }}
                onClick={() => this.setState({ activeTab: 'home' })}
              >
                Home
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action text-secondary py-2 px-3 ${
                  activeTab === 'shop'
                    ? 'border border-primary text-primary fw-medium'
                    : 'border-0'
                }`}
                style={{ backgroundColor: 'transparent' }}
                onClick={() => this.setState({ activeTab: 'shop' })}
              >
                Shop
              </button>
            </div>
          </div>

          {/* CỘT PHẢI: Khung hiển thị Shoes Shop */}
          <div className="col-12 col-md-9 col-lg-10">
            <div className="border border-info border-opacity-50 p-4 min-vh-100 bg-white">
              {/* Tiêu đề Shoes shop */}
              <h2 className="text-center text-secondary fw-light mb-4">
                Shoes shop
              </h2>

              {/* Danh sách sản phẩm: truyền data và hàm setStateModal qua Props */}
              <ProductList
                productsData={productsData}
                setStateModal={this.setStateModal}
              />
            </div>
          </div>
        </div>

        {/* Modal hiển thị chi tiết sản phẩm: nhận thông tin qua prop content */}
        <Modal content={productDetail} />
      </div>
    );
  }
}
