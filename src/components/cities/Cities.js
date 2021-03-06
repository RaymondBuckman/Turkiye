import React, { Component } from 'react';

var CityRow = React.createClass({
  setTime: function(){

    var localTime = new Date(); //get your local time
    var utcTime = localTime.getUTCHours(); // find UTC hours
    var currentdate = new Date(); // create a new date object for the EST time
    
      
      
  	var hours = currentdate.getUTCHours() + parseInt(this.props.UTCOffset); 
    var hoursForAMPM = currentdate.getUTCHours() + parseInt(this.props.UTCOffset); 
      
    // correct for number over 24, and negatives
    if( hours > 12 ){ 
        if(hours > 24){ hours -=24; }
        else{ hours -=12; }
    }
    if( hours < 0   ){ hours += 12; }     

    // convert hours to string
    hours = hours + "";
    

    // minutes are the same on every time zone
    var minutes = currentdate.getUTCMinutes();

    // add leading zero, first convert hours to string
    minutes = minutes + "";
    if( minutes.length == 1 ){ minutes = "0" + minutes; }

    var seconds = currentdate.getUTCSeconds();
      
    seconds = seconds + "";
    if( seconds.length == 1 ){ seconds = "0" + seconds; }
      
    //switches between am & pm
    var ampm;
      
    if(hoursForAMPM >= 24){ hoursForAMPM -=24; }
      
    if(hoursForAMPM >= 0 && hoursForAMPM< 12){
        ampm = "am";
    }else{
        ampm  = "pm";
    } 
      
    this.setState({
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        ampm: ampm
    });
  },
    
  componentWillMount: function(){
  	this.setTime();
  },


  componentDidMount: function(){
     {/*Determines how frequently the current time is retrieved*/}
  	 window.setInterval(function () {
      this.setTime();
    }.bind(this), 1000);
  },
    
  render: function() {    
    return(
      <div className="city-row" ref="cityRow">
        <span className="city-time">{this.state.hours}:{this.state.minutes}:{this.state.seconds} {this.state.ampm}</span>
      </div>
    )
  }
});


export default class Cities extends Component {
    render() {
        return(
        <div>
            <div className="cities-1-div" id="cities-1-div"> 
                <h1 id="sehirler" className="text-center scrollmagic-header" role="heading">En Büyük Şehirler</h1>
                <h2 id="cities" className="text-center scrollmagic-header" role="heading" tabIndex="0">Largest Cities</h2> 
                <ul id="istanbul-description" className="col-lg-6 col-lg-offset-6 text-right scrollmagic-desc">
                    <li><span id="istanbul" lang="tr">İstanbul</span></li>
                    <li>Economic & Cultural Center</li>
                    <li id="istanbul-location"></li>
                    <li>Population: 14.8 million</li>
                    <li id="istanbul-weather"></li> 
                    <li id="istanbul-wind"></li>
                    <li><CityRow name="CityRow" UTCOffset="3"/></li>
                </ul>
            </div>
            <div className="cities-2-div"> 
                <ul id="ankara-description" className="col-lg-6 col-lg-offset-0 text-left scrollmagic-desc">
                    <li><span id="ankara" lang="tr">Ankara</span></li>
                    <li>The Capital of Turkey</li>
                    <li id="ankara-location"></li>
                    <li>Population: 5.3 million</li>
                    <li id="ankara-weather"></li> 
                    <li id="ankara-wind"></li>
                    <li><CityRow name="CityRow" UTCOffset="3"/></li>
                </ul>
            </div>
            
            <div className="cities-3-div"> 
                <ul id="izmir-description" className="col-lg-6 col-lg-offset-6 text-right scrollmagic-desc">
                    <li><span id="izmir" lang="tr">İzmir</span></li>
                    <li>Crusiseline hotspot</li>
                    <li id="izmir-location"></li>
                    <li>Population: 2.8 million</li>
                    <li id="izmir-weather"></li> 
                    <li id="izmir-wind"></li>
                    <li><CityRow name="CityRow" UTCOffset="3"/></li>
                </ul>
            </div>
            
            <div className="cities-4-div">
                <ul id="bursa-description" className="col-lg-6 col-lg-offset-0 text-left scrollmagic-desc">
                    <li><span id="bursa" lang="tr">Bursa</span></li>
                    <li>~300 Year Capital of the Ottoman Empire</li>
                    <li id="bursa-location"></li>
                    <li>Population: 2.3 million</li>
                    <li id="bursa-weather"></li> 
                    <li id="bursa-wind"></li>
                    <li><CityRow name="CityRow" UTCOffset="3"/></li>
                </ul>
            </div>
            
            <div className="cities-5-div scrollmagic-div-fadeout">
                <ul id="adana-description" className="col-lg-6 col-lg-offset-6 text-right scrollmagic-desc">
                    <li><span id="adana" lang="tr">Adana</span></li>
                    <li>Mediterranean Capital</li>
                    <li id="adana-location"></li>
                    <li>Population: 1.7 million</li>
                    <li id="adana-weather"></li> 
                    <li id="adana-wind"></li>
                    <li><CityRow name="CityRow" UTCOffset="3"/></li>
                </ul>
            </div>
        </div>
        );
    }
}

