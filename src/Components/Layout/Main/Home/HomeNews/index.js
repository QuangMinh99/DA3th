import React, { Component } from 'react';
import './style.scss';

const HomeNews = (props) => {
        return (
            <div className="home-news">
  <div className="container">
    <div className="row row10">
      <div className="col-lg-8 col-md-8 col10">
        <h3 className="introduce-title">
          <a href="#" className="smooth" title>
            <span>Tin tức</span>
          </a>
        </h3>
        <div className="row row10">
          <div className="col-lg-7 col-md-7 col-sm-7 col10">
            <div className="hot-news-box">
              <div className="hot-news-image">
                <a href="#" className="smooth" title>
                  <img src="images/news/1.jpg" alt="" />
                </a>
              </div>
            </div>
            <div className="hot-news-detail">
              <h4 className="hot-news-title">
                <a href="#" className="smooth" title>Nguyên nhân và triệu chứng bệnh loãng xương</a>
              </h4>
              <p className="hot-news-desc text3line">Nguyên nhân của hiện tượng loãng xương Các nguyên nhân chính dẫn đến bệnh loãng xương bao gồm lão hóa dẫn đến sự sụt giảm estrogen ở phụ nữ mãn …</p>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-5 col10">
            <ul className="small-news">
              <li className="small-news-item">
                <div className="small-new-image hot-news-image">
                  <a href="#" className="smooth" title>
                    <img src="images/news/2.jpg" alt="" />
                  </a>
                </div>
                <div className="small-news-info">
                  <h5 className="small-news-title">
                    <a href="#" className="smooth text4line" title>
                      Chữa ung thư vòm họng ở đâu ?
                    </a>
                  </h5>
                  <p className="small-news-desc text4line">Nguyên nhân của hiện tượng loãng xương Các nguyên nhân chính dẫn đến bệnh loãng xương bao gồm lão hóa dẫn đến sự sụt giảm estrogen ở phụ nữ mãn …</p>
                </div>
              </li>
              <li className="small-news-item">
                <div className="small-new-image hot-news-image">
                  <a href="#" className="smooth" title>
                    <img src="images/news/2.jpg" alt="" />
                  </a>
                </div>
                <div className="small-news-info">
                  <h5 className="small-news-title">
                    <a href="#" className="smooth text4line" title>
                      Chữa ung thư vòm họng ở đâu ?
                    </a>
                  </h5>
                  <p className="small-news-desc text4line">Nguyên nhân của hiện tượng loãng xương Các nguyên nhân chính dẫn đến bệnh loãng xương bao gồm lão hóa dẫn đến sự sụt giảm estrogen ở phụ nữ mãn …</p>
                </div>
              </li>
              <li className="small-news-item">
                <div className="small-new-image hot-news-image">
                  <a href="#" className="smooth" title>
                    <img src="images/news/2.jpg" alt="" />
                  </a>
                </div>
                <div className="small-news-info">
                  <h5 className="small-news-title">
                    <a href="#" className="smooth text4line" title>
                      Chữa ung thư vòm họng ở đâu ?
                    </a>
                  </h5>
                  <p className="small-news-desc text4line">Nguyên nhân của hiện tượng loãng xương Các nguyên nhân chính dẫn đến bệnh loãng xương bao gồm lão hóa dẫn đến sự sụt giảm estrogen ở phụ nữ mãn …</p>
                </div>
              </li>
              <li className="small-news-item">
                <div className="small-new-image hot-news-image">
                  <a href="#" className="smooth" title>
                    <img src="images/news/2.jpg" alt="" />
                  </a>
                </div>
                <div className="small-news-info">
                  <h5 className="small-news-title">
                    <a href="#" className="smooth text4line" title>
                      Chữa ung thư vòm họng ở đâu ?
                    </a>
                  </h5>
                  <p className="small-news-desc text4line">Nguyên nhân của hiện tượng loãng xương Các nguyên nhân chính dẫn đến bệnh loãng xương bao gồm lão hóa dẫn đến sự sụt giảm estrogen ở phụ nữ mãn …</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col10">
        <h3 className="introduce-title">
          <a href="#" className="smooth" title>
            <span>Video</span>
          </a>
        </h3>
        <div className="news-video">
          <iframe width height src="https://www.youtube.com/embed/ZAzWT8mRoR0" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
      </div>
    </div>
  </div>
</div>

        );
    }

export default HomeNews;