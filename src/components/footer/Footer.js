import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return(
        <div>
            <div className="footer-1-div">
                <div className="container">
                    <h1 id="yolculuk" className="text-left scrollmagic-header" lang="tr">İyi Yolculuk!</h1>
                    <h2 id="voyage" className="text-left scrollmagic-header" tabIndex="0" lang="fr">Bon voyage!</h2>
                </div>
                <nav id="bottom-nav" className="navbar navbar-default visible-lg" data-spy="affix">
                    <div className="container">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="http://www.historyworld.net/wrldhis/PlainTextHistories.asp?historyid=ac94" target="_blank" rel="noopener" role="link">History</a></li>
                            <li><a href="http://www.turkishlanguage.co.uk/" target="_blank" rel="noopener" role="link">Detailed Language Info</a></li>
                            <li><a href="http://www.turkishculture.org/" target="_blank" rel="noopener" role="link">Culture</a></li>
                            <li><a href="https://www.themuse.com/advice/6-tips-for-traveling-to-turkey" target="_blank" rel="noopener" role="link">Travel Tips</a></li>
                            <li><a href="https://icons8.com" target="_blank" rel="noopener" role="link">Icon pack by Icons8</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        );
    }
}
