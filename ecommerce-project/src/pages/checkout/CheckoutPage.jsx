import './CheckoutHeader.css';
import './Checkout.css'
import { Link } from 'react-router';
import Logo from '../../assets/images/logo.png';
import MobileLogo from '../../assets/images/mobile-logo.png';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';

export function CheckoutPage({ cart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);


    useEffect(() => {
        axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            .then((response) => {
                setDeliveryOptions(response.data);
            })

        axios.get('/api/payment-summary')
            .then((response) => {
                setPaymentSummary(response.data);
            })
    }, []);

    return (
        <>
            <title>Checkout</title>
            <link rel="icon" type="image/svg+xml" href="/images/cart-favicon.png" />

            <div className="checkout-header">
                <div className="header-content">
                    <div className="checkout-header-left-section">
                        <Link to="/">
                            <img className="logo" src={Logo} />
                            <img className="mobile-logo" src={MobileLogo} />
                        </Link>
                    </div>

                    <div className="checkout-header-middle-section">
                        Checkout (<Link className="return-to-home-link"
                            to="/">3 items</Link>)
                    </div>

                    <div className="checkout-header-right-section">
                        <img src="images/icons/checkout-lock-icon.png" />
                    </div>
                </div>
            </div>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary 
                        cart={cart}
                        deliveryOptions={deliveryOptions}
                    />

                    <PaymentSummary
                        paymentSummary={paymentSummary}
                    />
                </div>
            </div>
        </>
    );
}