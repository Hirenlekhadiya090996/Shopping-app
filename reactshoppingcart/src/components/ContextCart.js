import React,{ useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from "./Items"
import { products } from "./Products"

const ContextCart = () => {
    const [item, setItems] = useState(products)

    // const item =  useContext(contextValue)
    return (
        <>
            <header>
                <div className="continue-shopping">
                    <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
                    <h3>continue shopping</h3>
                </div>
                <div className="cart-icon">
                    <img src="./images/cart.png" alt="cart" />
                </div>

            </header>
            <section className="main-cart-section">
                <h1> shopping Cart </h1>
                <p className="total-items">you have <span className="total-items-count"> 7 </span> items in shopping cart</p>

                <div className="cart-items">
                    <div className="cart-items-container">
                        <Scrollbars>
                            {
                                item.map((curItem) => {
                                    return <Items key={curItem.id} {...curItem} />
                                })
                            }

                        </Scrollbars>
                    </div>
                </div>
                <div className="card-total">
                    <h3>Cart Total: <span>2200rs </span></h3>
                    <button>checkout</button>
                </div>
            </section>

        </>
    )
}

export default ContextCart
