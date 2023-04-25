import React, { useState } from 'react';
import Cards, { Focused } from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css'

const PaymentForm = () => {
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
    });
    const [focused, setFocused] = useState<Focused>('number');

    const handleInputChange = (evt: { target: { name: any; value: any; }; }) => {
        const { name, value } = evt.target;

        setState((prev) => ({ ...prev, [name]: value }));
    }

    const handleInputFocus = (evt: { target: { name: any; }; }) => {
        setFocused((prev) => (evt.target.name));
    }

    return (
        <div>
            <Cards
                number={state.number}
                expiry={state.expiry}
                cvc={state.cvc}
                name={state.name}
                focused={focused}
            />
            <form>
                <input
                    type="number"
                    name="number"
                    placeholder="Card Number"
                    value={state.number}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <input
                    type="number"
                    name="expiry"
                    placeholder="Expiry"
                    value={state.expiry}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <input
                    type="number"
                    name="cvc"
                    placeholder="CVC"
                    value={state.cvc}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={state.name}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
            </form>
        </div>
    );
}

export default PaymentForm;