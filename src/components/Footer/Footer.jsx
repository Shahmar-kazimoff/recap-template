import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='text-center container mx-auto max-w-[1440px]'>
      <div>
        <div className="container container-v1 text-center">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <div className="info_footer end">
                <div className="logo-top flex flex-col justify-end lg:items-start items-center">

                  <a className='' href="https://fone-store-demo.myshopify.com">
                    <img src="//fone-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1660639000" width="165" alt="Fone - Fast Food &amp; Restaurant Responsive Shopify Theme" className=""></img>
                  </a>
                  <p className="my-3 content_footer lg:text-left">Sophisticated simplicity for the<br />
                    independent mind.</p>
                  <div className="list-icon">
                    <ul className="list-inline list-unstyled flex gap-2 mb-3">
                      <li className="list-inline-item">
                        <a href="" title="" className="social-item"><FaTwitter /></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="" title="" className="social-item"><FaDribbble /></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="" title="" className="social-item"><FaBehance /></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="" title="" className="social-item"><FaInstagram /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="info_footer">
                <div className="title_footer">
                  <h4 className="mb-2 title_border text-lg font-bold">Help &amp; Information</h4>
                </div>
                <ul className="list-unstyled mb-2 text-sm font-semibold flex flex-col gap-2">

                  <li><a href="/" title="About Us ">About Us </a></li>

                  <li><a href="/" title="Privacy Policy ">Privacy Policy </a></li>

                  <li><a href="/" title="Terms &amp; Conditions ">Terms &amp; Conditions </a></li>

                  <li><a href="/" title="Products Return ">Products Return </a></li>

                  <li><a href="/" title="Wholesale Policy">Wholesale Policy</a></li>

                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="info_footer">
                <div className="title_footer">
                  <h4 className="mb-2 title_border text-lg font-bold">About us</h4>
                </div>
                <ul className="list-unstyled mb-2 font-semibold text-sm flex flex-col gap-2">

                  <li><a href="/" title="Pagination ">Pagination </a></li>

                  <li><a href="/" title="Terms &amp; Conditions ">Terms &amp; Conditions </a></li>

                  <li><a href="/" title="Contact ">Contact </a></li>

                  <li><a href="/" title="Accessories">Accessories</a></li>

                  <li><a href="/" title=" Home Page"> Home Page</a></li>

                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="info_footer">
                <div className="title_footer">
                  <h4 className="mb-2 title_border text-lg font-bold">Categories</h4>
                </div>
                <ul className="list-unstyled mb-0 font-semibold text-sm flex flex-col gap-2">

                  <li><a href="/" title="Menu items ">Menu items </a></li>

                  <li><a href="/" title="Help Center ">Help Center </a></li>

                  <li><a href="/" title="Address Store ">Address Store </a></li>

                  <li><a href="/" title="Privacy Policy ">Privacy Policy </a></li>

                  <li><a href="/" title="HomePage">HomePage</a></li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="flex flex-col lg:flex-row items-center justify-between mb-3 mt-[50px] gap-4">
            <div>
              <div> © Copyright 2022 | <a href="#" rel="nofollow" className="underline_hover bold">  Fone</a> By <a href="#" rel="nofollow" className="underline_hover link"> EngoTheme.</a><a href="https://www.shopify.com/?ref=shopifycenter" rel="nofollow" className=""> Powered by Shopify.</a>           </div><p></p>
            </div>
            <div>
              <img src="//fone-store-demo.myshopify.com/cdn/shop/files/logoo-removebg-preview.png?v=1660638975" alt=""></img>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer