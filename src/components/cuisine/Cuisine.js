import React, { Component } from 'react';
import Lightbox from 'lightbox-react';


export default class Cuisine extends Component {
    render() {
        return(
        <div>
            <div className="Fifteen">
                <div className="One-inner">
                    <h1 id="title" className="text-center">T&#252;rkiye'ye hoş geldiniz!</h1>
                    <h2 className="text-center">Welcome to Turkey!</h2>
                </div>
            </div>
            <div className="Sixteen">
                <ul className="flex-container">
                    <li className="flex-item">
                        <h1>Türk bayrağı</h1>
                        <h2>The Turkish flag</h2>
                        <p>No one is 100% sure about the origins of the Turkish flag. Some say the crescent moon refers to the Byzantine goddess Artemis while others say that it's an Islamic symbol. The star is assumed to have been adopted from the Byzantine empire, where Emporer Constantine decided Istanbul (then Constantinople) to the Virgin Mary. The flag was used during the Ottoman Empire & the proportions were slightly altered when it became a republic on October 29, 1923.</p>
                    </li>
                    <li className="flex-item"></li>
                    <li className="flex-item">
                        <h2>House of the Virgin Mary</h2>
                    </li>
                    <li className="flex-item"> 
                        {/*<h1>Öksökö</h1>
                        <h2>Symbol from Tuskish Mythology</h2>*/}
                    </li>
                </ul>
            </div>
        </div>
        );
    }
}