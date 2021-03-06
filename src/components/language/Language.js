import React, { Component } from 'react';
import Lightbox from 'lightbox-react';

import pronounciation from '../../img/alphabet-1.png';
import harmony from '../../img/harmony-1.jpg';
import pronouns from '../../img/pronouns-1.jpg';
import adjectives from '../../img/adjectives-1.jpg';
import accusative from '../../img/turkish-8.jpg';
import possessive from '../../img/possessive-1.jpg';
import questions from '../../img/questions-1.jpg';
import numbers from '../../img/numbers-1.jpg';
import $ from 'jquery';

import merhaba from '../../audio/merhaba.mp3';
import guleGule from '../../audio/gule-gule.mp3';
import evet from '../../audio/evet.mp3';
import hayir from '../../audio/hayir.mp3';
import nasilsiniz from '../../audio/nasilsiniz.mp3';
import iyiyim from '../../audio/iyiyim.mp3';
import tesekkurler from '../../audio/tesekkurler.mp3';
import birseyDegil from '../../audio/birsey-degil.mp3';
import lutfen from '../../audio/lutfen.mp3';
//import pardon from '../../audio/pardon.mp3';
import afedersiniz from '../../audio/afedersiniz.mp3';
import buOteleNerede from '../../audio/bu-otele-nerede.mp3';
import ingilizceBiliyorMusunuz from '../../audio/ingilizce-biliyor-musunuz.mp3';
import neKadar from '../../audio/ne-kadar.mp3';
import banaYardimEdebilirMisiniz from '../../audio/bana-yardim-edebilir-misiniz.mp3';

const images = [
    pronounciation,
    harmony,
    pronouns,
    adjectives,
    accusative,
    possessive,
    questions,
    numbers,
];

const titles = [
    (<h1 className="carousel-title"> Pronounciation </h1>),
    (<h1 className="carousel-title"> Vowel Harmony </h1>),
    (<h1 className="carousel-title"> Pronouns </h1>),
    (<h1 className="carousel-title"> Adjectives </h1>),
    (<h1 className="carousel-title"> Accusative </h1>),
    (<h1 className="carousel-title"> Possessive </h1>),
    (<h1 className="carousel-title"> Questions </h1>),
    (<h1 className="carousel-title"> Numbers </h1>),
];
     
const captions = [
    "The pronounciation in Turkish is fairly straightforward.  Most letters are pronounced like their English counterparts. The main differences are the 'ç' & 'ş', which are pronounced like 'ch' & 'sh', respectively. Also the letter 'c' is pronounced like the English  'j'. Also there's 'ı', which looks like an i without the dot.  It's pronounced like 'uh',  or the German 'ö'. The last new letter is ğ. It's completely silent & never shows up at the beginning  of a word.",
     
    "There are two groups of vowels in Turkish: the undotted A vowels (A I O U) and the dotted e vowels (E İ Ö Ü). Many Turkish suffixes that are added on to words  have vowels that fall in one of these groups. For example in Turkish to make something plural, you either have add the suffix 'lar' or 'ler' depending on the last vowel in the word. If the last vowel is an undotted A vowel, the plural suffix is 'lar'. For example the word 'at', which means horse, turns into 'atlar' when pluralized. If the last vowel is a dotted E vowel, you use the 'ler' suffix (i.e. 'ev', which means house, becomes 'evler' in plural form). Choosing between these two categories is called 2-way vowel harmony. There's also 4-way vowel harmony, but that will be  discussed later.",
     
    "There are six personal pronouns in Turkish: Ben - I, Sen - You, O - he/she/it, Biz - We, Siz - You(plural/formal), Onlar - they. These are their forms as the subject (or 'önze') of the sentence. Unlike romance languages there isn't any gender in Turkish, so only 'O' replaces the English 3rd person singular words he & she. Also, like Spanish, these personal pronounces (in subject form) can be dropped in many cases. View the chart above to view their forms as the obect (nesne), possessive form (sahiplik), reflexive form(yansima) and interest form (ilgi).",
     
    "Here are some useful adjectives (as well as adverbs) to know in Turkish. Keep in mind that in Turkish the adjective comes before the 'a' instead of after like in English. For example, in the English phrase 'a blue car', the adjective 'blue' comes after the word 'a'. In the Turkish equivalent 'mavi bir araba', the word for blue 'mavi' comes before the word for a 'bir. Literally, it's 'blue a car' instead of 'a blue car'. Obviously this takes some getting used to.",
     
    "The accusative case is used when a subject is applying an action to an object. The suffix for the accussative tense is (y)İ, the 'y' being only for words ending in a vowel & the İ representing the vowel harmony letter. This is where 4-way vowel harmony comes in. In the simplest possible terms, if the last vowel ends in an i or e, it becomes i. Likewise ı or a becomes ı,  u or o becomes u, and ü or ö becomes ü. For example in the sentence 'Sen çorbayı içiyorsun' (which means 'You're drinking the soup'), the words for soup 'çorba' gets a yı suffix because 'soup' is the direct object. In the sentence 'İstanbul'u seviyorlar' ('They love Istanbul' in English), İstanbul receives a u suffix because its last vowel is a u. This takes a lot of practice & it some cases the last constanent will change too." ,
     
    "Unfortunately, memorizing the possessive (sahiplik) column in the chart several slides ago isn't enough to express ownership in Turkish. The object being possessed also needs a suffix. In the example above, you can see the different forms of the word 'ev' (house) depending on whose house it is. 'My house' would be 'Benim evim' (or just 'evim' for short). For a more complex example, the word for orange (the fruit) is 'portakal'. If you wanted to say 'our oranges', you'd say 'bizim portakallarız' (or 'portakallarız'). Broken down, it's portakal + lar (plural 2-way vowel harmony) + ız (possessive 4-way vowel harmony). You can imagine how complicated this can get with 5 or more suffixes added on.",
     
    "Some useful question words for beginners.",
     
    "Although the vocabulary is different, the way single digit numbers combine grammatically to form multiple digit numbers is identical to English.",
];

export default class Language extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            photoIndex: 1,
            isOpen: false
        };
    }
    
    playMerhabaAudio(){
        var audio = document.getElementById("merhaba-audio");
        audio.play();
    }
    
    playGuleGuleAudio(){
        var audio = document.getElementById("gule-gule-audio");
        audio.play();
    }
    
    playEvetAudio(){
        var audio = document.getElementById("evet-audio");
        audio.play();
    }
    
    playHayirAudio(){
        var audio = document.getElementById("hayir-audio");
        audio.play();
    }
    
    playNasilsinizAudio(){
        var audio = document.getElementById("nasilsiniz-audio");
        audio.play();
    }
    
    playIyiyimAudio(){
        var audio = document.getElementById("iyiyim-audio");
        audio.play();
    }
    
    playTesekkurlerAudio(){
        var audio = document.getElementById("tesekkurler-audio");
        audio.play();
    }
    
    playBirseyDegilAudio(){
        var audio = document.getElementById("birsey-degil-audio");
        audio.play();
    } 
    
    playLutfenAudio(){
        var audio = document.getElementById("lutfen-audio");
        audio.play();
    }
    
    playAfedersinizAudio(){
        var audio = document.getElementById("afedersiniz-audio");
        audio.play();
    }    
    
    playBuOteleNeredeAudio(){
        var audio = document.getElementById("bu-otele-nerede-audio");
        audio.play();
    }
    
    playIngilizceBiliyorMusunuzAudio(){
        var audio = document.getElementById("ingilizce-biliyor-musunuz-audio");
        audio.play();
    }  
    
    playNeKadarAudio(){
        var audio = document.getElementById("ne-kadar-audio");
        audio.play();
    }
    
    playBanaYardımEdebilirMisinizAudio(){
        var audio = document.getElementById("bana-yardim-edebilir-misiniz-audio");
        audio.play();
    }
    
    
    render() {
        const {
            photoIndex,
            isOpen
        } = this.state;
        
        return(
        <div>
            <div className="language-1-div" id="language-1-div">
                <ul className="flex-container">
                    <li className="flex-item scrollmagic-info-squares">
                        <h1 id="dili" className="scrollmagic-header" role="heading" lang="tr">Türk Dili</h1>
                        <h2 id="language" className="scrollmagic-header" role="heading" tabIndex="0">The Turkish Language</h2>
                        <p>By now you've probably noticed some foreign words with odd looking characters. This is the Turkish language. Linguistically, Turkish is unrelated to English, Spanish, or any romance or germanic language. It has an SOV sentence structure (subjuct -> object -> verb), & is highly agglutinative, meaning that numerous suffixes are added on to words to expand their meaning. The longest word in Turkish has 70 letters with more than 10 suffixes! Don't worry though...words like this aren't used in daily speech & being fluent isn't required for tourists as English is fairly widely spoken in the tourist areas. Still, knowing a little Turkish goes a long way!</p>
                    </li>
                    <li alt="Book in turkish" className="flex-item scrollmagic-info-squares"></li>
                    <li alt="fishing sign in turkish" className="flex-item scrollmagic-info-squares">
                        <h2>"Fishing is forbidden in this area"</h2>
                    </li>
                    <li alt="Airport signs in turkish" className="flex-item scrollmagic-info-squares"></li>
                </ul>
            </div>
            <div className="language-2-div">            
                <div className="container">
                    <h1 id="alfabe" className="text-left scrollmagic-header" role="heading" lang="tr">Alfabe</h1>
                    <h2 id="alphabet" className="text-left scrollmagic-header" role="heading" tabIndex="0">Alphabet</h2> 
                    <h2 className="col-lg-8 col-lg-offset-4 text-right scrollmagic-desc">
                        A	B	C	Ç	D	E	F	G	Ğ	H	I	İ	J	K	L	M	N	O	Ö	P	R	S	Ş	T	U	Ü	V	Y	Z
                        <br/><br/>
                        The Turkish alphabet consists of 29 letters. There are 8 vowels (a, e, ı, i, o, ö, u, ü) & the rest are consonants. It was written using an Arabic script until Mustafa Kemal Atatürk (pictured) changed it to a Latin-based alphabet in 1929 as part of his reforms to modernize Turkey after the fall of the Ottoman Empire. Most of the letters will be familiar to English speakers, except for 6: ç, ş, ğ, ı , ö, & ü. Some letters are also pronouced differently. 
                        <br/><br/>
                        <a href="https://www.youtube.com/watch?v=TOZ0CwkRtxI" target="_blank" rel="noopener" role="link"
                        aria-label="watch a video with more info about the turkish alphabet">More info</a>
                    </h2>
                </div>
            </div>
            <div className="language-3-div scrollmagic-div-fadeout">            
                <div className="container">
                    <h1 id="cumleler" className="text-center scrollmagic-header" role="heading" lang="tr">Temel Cümleler</h1>
                    <h2 id="phrases" className="text-center scrollmagic-header" role="heading" tabIndex="0">Basic Phrases</h2> 
                    
                    <ul className="col-lg-12 col-lg-offset-0 text-left">
                        <li className="scrollmagic-vocab" lang="tr">Merhaba <img className="audio-symbol" src="https://png.icons8.com/ios/20/ffffff/room-sound-filled.png" alt="hear translation" onClick={this.playMerhabaAudio}></img> - <span className="translation">Hello</span></li>
                        
                        <li className="scrollmagic-vocab" lang="tr">Güle güle <img className="audio-symbol" src="https://png.icons8.com/ios/20/ffffff/room-sound-filled.png" alt="hear translation" onClick={this.playGuleGuleAudio}></img> - <span className="translation">Bye</span></li>
                        
                        <li className="scrollmagic-vocab" lang="tr">Evet <img className="audio-symbol"src="https://png.icons8.com/ios/20/ffffff/room-sound-filled.png" alt="hear translation" onClick={this.playEvetAudio}></img> - <span className="translation">Yes</span></li>
                        
                        <li className="scrollmagic-vocab" lang="tr">Hayır <img className="audio-symbol" src="https://png.icons8.com/ios/20/ffffff/room-sound-filled.png" alt="hear translation" onClick={this.playHayirAudio}></img> - <span className="translation">No</span></li> 
    
                        <li className="scrollmagic-vocab" lang="tr">Nasılsınız? <img className="audio-symbol"src="https://png.icons8.com/ios/20/ffffff/room-sound-filled.png" alt="hear translation" onClick={this.playNasilsinizAudio}></img> - <span className="translation">How are you? (formal)</span></li>
                        
                        <li className="scrollmagic-vocab" lang="tr">İyiyim  <img className="audio-symbol"src="https://png.icons8.com/ios/20/ffffff/room-sound-filled.png" alt="hear translation" onClick={this.playIyiyimAudio}></img> - <span className="translation">I'm fine</span></li>
                        
                        <li className="scrollmagic-vocab" lang="tr">Teşekkürler <img className="audio-symbol"src="https://png.icons8.com/ios/20/ffffff/room-sound-filled.png" alt="hear translation" onClick={this.playTesekkurlerAudio}></img> - <span className="translation">Thanks</span></li>
                        
                        <li className="scrollmagic-vocab" lang="tr">Birşey değil <img className="audio-symbol"src="https://png.icons8.com/ios/20/ffffff/room-sound-filled.png" alt="hear translation" onClick={this.playBirseyDegilAudio}></img> - <span className="translation">You're welcome</span></li>
                        
                        <li className="scrollmagic-vocab" lang="tr">Lütfen <img className="audio-symbol"src="https://png.icons8.com/ios/20/ffffff/room-sound-filled.png" alt="hear translation" onClick={this.playLutfenAudio}></img> - <span className="translation">Please</span></li>
                        
                        <li className="scrollmagic-vocab" lang="tr">Afedersiniz <img className="audio-symbol" src="https://png.icons8.com/ios/20/ffffff/room-sound-filled.png" alt="hear translation" onClick={this.playAfedersinizAudio}></img> - <span className="translation">Excuse me (formal)</span></li>
                        
                        <li className="scrollmagic-vocab" lang="tr">Bu otele nerede? <img className="audio-symbol" alt="hear translation" src="https://png.icons8.com/ios/20/ffffff/room-sound-filled.png" onClick={this.playBuOteleNeredeAudio}></img> - <span className="translation">Where is this hotel?</span></li>
                        
                        <li className="scrollmagic-vocab" lang="tr">İngilizce biliyor musunuz? (formal) <img src="https://png.icons8.com/ios/20/ffffff/room-sound-filled.png" className="audio-symbol" alt="hear translation" onClick={this.playIngilizceBiliyorMusunuzAudio}></img> - <span className="translation">Do you speak English?</span></li>
                        
                        <li className="scrollmagic-vocab" lang="tr">Ne kedar? <img className="audio-symbol"src="https://png.icons8.com/ios/20/ffffff/room-sound-filled.png" alt="hear translation" onClick={this.playNeKadarAudio}></img> - <span className="translation">How much does it cost?</span></li>
                        
                        <li className="scrollmagic-vocab" lang="tr">Bana yardım edebilir misiniz? <img className="audio-symbol" src="https://png.icons8.com/ios/20/ffffff/room-sound-filled.png" alt="hear translation" onClick={this.playBanaYardımEdebilirMisinizAudio}></img> - <span className="translation">Can you help me?</span></li>
                    </ul>
                </div>
            </div>
            <div className="language-4-div">
                 <ul className="flex-container">
                    <li className="flex-item" >
                        <h1 id="konular" className="scrollmagic-header" lang="tr">Diğer Konular</h1>
                        <h2 id="topics" className="scrollmagic-header" tabIndex="0">Other Topics</h2>
                    </li>
                    <li className="flex-item scrollmagic-chevron" onClick={() => this.setState({photoIndex:0, isOpen: true})}>
                        <button type="button" alt="opens gallery for Pronunciation">
                            <h2>Pronunciation</h2>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" onClick={() => this.setState({photoIndex:1, isOpen: true })}>   
                        <button type="button" alt="opens gallery for Vowel Harmony">
                            <h2>Vowel Harmony</h2>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" onClick={() => this.setState({photoIndex:2, isOpen: true })}>   
                        <button type="button" alt="opens gallery for Pronouns">
                            <h2>Pronouns</h2>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" onClick={() => this.setState({photoIndex:2, isOpen: true })}>   
                        <button type="button" alt="opens gallery for Adjectives">
                            <h2>Adjectives</h2>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" onClick={() => this.setState({photoIndex:4, isOpen: true })}>   
                        <button type="button" alt="opens gallery for Accusative">
                            <h2>Accusative</h2>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" onClick={() => this.setState({photoIndex:5, isOpen: true })}>   
                        <button type="button" alt="opens gallery for Possessive">
                            <h2>Possessive</h2>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" onClick={() => this.setState({photoIndex:6, isOpen: true })}>   
                        <button type="button" alt="opens gallery for Questions">
                            <h2>Questions</h2>
                        </button>
                    </li>
                    <li className="flex-item scrollmagic-chevron" onClick={() => this.setState({photoIndex:7, isOpen: true })}>   
                        <button type="button" alt="opens gallery for Numbers">
                            <h2>Numbers</h2>
                        </button>
                    </li>
                </ul>
            
 
                {isOpen &&
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
 
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() => this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })}
                        
                        imageTitle={titles[this.state.photoIndex]}
                        imageCaption={captions[this.state.photoIndex]}
                    />
                }
            </div>
            <audio id="merhaba-audio" src={merhaba}></audio>
            <audio id="gule-gule-audio" src={guleGule}></audio> 
            <audio id="evet-audio" src={evet}></audio>
            <audio id="hayir-audio" src={hayir}></audio>
            <audio id="nasilsiniz-audio" src={nasilsiniz}></audio>
            <audio id="iyiyim-audio" src={iyiyim}></audio>
            <audio id="tesekkurler-audio" src={tesekkurler}></audio>
            <audio id="birsey-degil-audio" src={birseyDegil}></audio>
            <audio id="lutfen-audio" src={lutfen}></audio>
            <audio id="afedersiniz-audio" src={afedersiniz}></audio>
            <audio id="bu-otele-nerede-audio" src={buOteleNerede}></audio>
            <audio id="ingilizce-biliyor-musunuz-audio" src={ingilizceBiliyorMusunuz}></audio>
            <audio id="ne-kadar-audio" src={neKadar}></audio>
            <audio id="bana-yardim-edebilir-misiniz-audio" src={banaYardimEdebilirMisiniz}></audio>
]
        </div>
        );
    }
}
