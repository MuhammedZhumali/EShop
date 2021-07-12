import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class PaypalButton extends React.Component {
    render() {
        const onSuccess = (payment) => {
            console.log("The payment was succeeded!", payment);
            this.props.tranSuccess(payment)
        }

        let currency = 'USD';
        let total = this.props.total;
        let style = {
            size: 'small',
            color: 'blue',
            shape: 'rect',
            label: 'checkout',
            tagline: false
        }

        return (
            <PaypalExpressBtn
                currency={currency}
                total={total}
                onSuccess={onSuccess}
                style={style} />
        );
    }
}