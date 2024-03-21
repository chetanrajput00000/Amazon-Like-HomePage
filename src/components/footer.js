import React from 'react'
import '../components/footer.css'

function footer() {
  return (
    <div>
       <footer>
        <div class="footer-container">
            <div class="footer-section">
                <h3>Get to Know Us</h3>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Press Releases</a></li>
                    <li><a href="#">Amazon Cares</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>Make Money with Us</h3>
                <ul>
                    <li><a href="#">Sell on Amazon</a></li>
                    <li><a href="#">Sell Under Amazon Accelerator</a></li>
                    <li><a href="#">Become an Affiliate</a></li>
                    <li><a href="#">Advertise Your Products</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>Let Us Help You</h3>
                <ul>
                    <li><a href="#">Amazon and COVID-19</a></li>
                    <li><a href="#">Your Account</a></li>
                    <li><a href="#">Your Orders</a></li>
                    <li><a href="#">Shipping Rates & Policies</a></li>
                </ul>
            </div>
        </div>

    
    </footer>

    <div class="container1">

    </div>

    <footer>
        <div class="footer-container">
            <div class="footer-section">
                <h3>Shop by Category</h3>
                <ul>
                    <li><a href="#">Electronics</a></li>
                    <li><a href="#">Clothing</a></li>
                    <li><a href="#">Books</a></li>
                    <li><a href="#">Home & Kitchen</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>Customer Service</h3>
                <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Returns & Exchanges</a></li>
                    <li><a href="#">FAQs</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>About Us</h3>
                <ul>
                    <li><a href="#">Our Story</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">Sustainability</a></li>
                </ul>
            </div>

            {/* <div class="footer-section">
                <h3>Connect with Us</h3>
                <ul class="social-icons">
                    <a href="#" target="_blank"></a>

                    <a href="#" target="_blank">&#x1F426;</a>
                    <a href="#" target="_blank">&#x1F4E3;</a>
                </ul>
            </div> */}
        </div>

        <div class="copyright">
            <p>&copy; 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
    </footer>
    </div>
  )
}

export default footer
