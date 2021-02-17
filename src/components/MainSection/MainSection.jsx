import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import StudioBag from '../../assets/bag.jpg';
import './MainSection.styles.scss'

const MainSection = ({ history }) => {
    const handleClick = useCallback(
        () => {
            history.push('/product/1')
        },
        [history],
    )
    return (
        <div className="main-section-container">
            <div className="main-section-middle">
                <div className="ms-m-image">
                    <img src={StudioBag} alt="studio bag"/>
                </div>

                <div className="ms-m-description">
                    <h2>Designed for fashion. Crafted for sport.</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Quasi, debitis libero labore quaerat aut repellendus eveniet
                        natus quis reprehenderit deleniti.
                    </p>
                    <button className="button is-black" id="shop-now" onClick={handleClick}>
                        Studio Bag
                    </button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(MainSection);
