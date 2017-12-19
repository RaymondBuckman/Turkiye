const css = require('./app.scss');
require('./img/favicon.ico');
import {TweenMax, Power2, TimelineLite} from "gsap";
import scrollTo from '../node_modules/gsap/ScrollToPlugin';
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';
import crescentstar from './img/crescent-star.png';

import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/sidebar/Sidebar';
import Intro from './components/intro/Intro';
import Geography from './components/geography/Geography';
import Cities from './components/cities/Cities';
import Sights from './components/sights/Sights';
import Hotels from './components/hotels/Hotels';
import Cuisine from './components/cuisine/Cuisine';
import Language from './components/language/Language';
import Footer from './components/footer/Footer';

ReactDOM.render(
    <div className="App">
        <Sidebar />
        <Intro />
        <Geography />
        <Cities />
        <Sights /> 
        <Hotels />
        <Cuisine />
        <Language />
        <Footer />
    </div>,
    document.getElementById('root')
);

/*======================= Begin ScrollMagic Animations =======================*/

/*----- h1/h2 rotations -----*/
$(document).ready(function(){
    var hosGeldiniz = $('#hos-geldiniz');
    var welcome = $('#welcome');
    
    //Animation is laggy on page load
    {/*TweenLite.from(hosGeldiniz, 0.7, {delay: 0.5, y: -30, opacity: 0, rotation: -10});
    
    TweenLite.from(welcome, 0.7, {delay: 0.5, y: 30, opacity: 0, rotation: 10}); */}
    
    TweenMax.staggerFrom("#top-nav li", 0.7, { ease:  Power0.easeNone, delay: 1, opacity: 0, y:25, rotation: 10}, 0.15); 
    
    //Scrollmagic controller
    var controller = new ScrollMagic.Controller();   
    
    var pinTopNavTween = TweenMax.to("#top-nav", 0.3, {
        y: "-=50px",
        autoRound:false, 
        ease:Power0.ease0ut
    });
    
    var pinTopNavScene = new ScrollMagic.Scene({
        triggerElement: '#hos-geldiniz',
        triggerHook: 0.3
    })
    .setTween(pinTopNavTween)
    .addTo(controller);

    var pinSideNavTween = TweenMax.from("#sidebar", 0.5, {
        x: "+=100px",
        autoRound:false, 
        ease:Power0.ease0ut
    });

    var pinSideNavScene = new ScrollMagic.Scene({
        triggerElement: "#hos-geldiniz", 
        triggerHook: 0.3,
        reverse: true
    })
    .setTween(pinSideNavTween)
    .addTo(controller);
    
    var bottomNavTween = TweenMax.staggerFrom("#bottom-nav li", 0.7, { ease:  Power0.easeNone, delay: 0.3, opacity: 0, y:-25, rotation: 10}, 0.15);
    
    var bottomNavScene = new ScrollMagic.Scene({
        triggerElement: '#bottom-nav',
        triggerHook: .95,
        reverse: false
    })
    .setTween(bottomNavTween)
    .addTo(controller); 
    
    var heightOfIntro2 = $('.Geography-1').offset().top - $('.Intro-2').offset().top;
    var heightOfGeography3 = $('.Cities-1').offset().top - $('.Geography-3').offset().top;
    var heightOfCities3AndCities4 = $('.Cities-5').offset().top - $('.Cities-3').offset().top;
    var heightOfSights1 = $('.Hotels-1').offset().top - $('.Sights-1').offset().top;
    var heightOfHotels3 = $('.Cuisine-1').offset().top - $('.Hotels-3').offset().top;
    var heightOfCuisine2 = $('.Cuisine-3').offset().top - $('.Cuisine-2').offset().top;
    var heightOfLanguage1 = $('.Language-2').offset().top - $('.Language-1').offset().top;
    var heightOfLanguage4 = $('.Footer-1').offset().top - $('.Language-4').offset().top;
    
    /*----- header animations -----*/
    $('.scrollmagic-header').each(function(){
        var headerScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.8,
            reverse: false
        })
        .setClassToggle(this, 'fade-in')
        /*
        .addIndicators({
            name: 'fade scene',
            colorTrigger: 'black',
            colorStart: '#75C695'
        })*/
        .addTo(controller);
    })   
    
    $('#ataturk').each(function(){
        var headerScene = new ScrollMagic.Scene({
            triggerElement: '.Geography-2-inner',
            triggerHook: 0.70,
            offset: 700,
            reverse: true
        })
        .setClassToggle(this, 'fade-in')
        /*
        .addIndicators({
            name: 'fade scene',
            colorTrigger: 'black',
            colorStart: '#75C695'
        })*/
        .addTo(controller);
    })   
    
    $('#founder').each(function(){
        var headerScene = new ScrollMagic.Scene({
            triggerElement: '.Geography-2-inner',
            triggerHook: 0.70,
            offset: 700,
            reverse: true
        })
        .setClassToggle(this, 'fade-in')
        /*
        .addIndicators({
            name: 'fade scene',
            colorTrigger: 'black',
            colorStart: '#75C695'
        })*/
        .addTo(controller);
    })   
    
    /* ----- background fadeout scenes  -----*/
    
    if($(window).height() > 500){
        $('.scrollmagic-inner-fadeout').each(function(){
            var chevronScene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.55,
                offset: 700,
                reverse: true
            })
            .setClassToggle(this, 'fadeout')
            /*
            .addIndicators({
                name: 'horizontal fade',
                colorTrigger: 'yellow',
                colorStart: '#75C695'
            })*/
            .addTo(controller);
        })   
    }else{
        $('.scrollmagic-inner-fadeout').each(function(){
            var chevronScene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.35,
                offset: 300,
                reverse: true
            })
            .setClassToggle(this, 'fadeout')
            
            .addIndicators({
                name: 'horizontal fade',
                colorTrigger: 'yellow',
                colorStart: '#75C695'
            })
            .addTo(controller);
        })
    }
   
    /*----- div fadeout animations -----*/
    var intro1FadeoutScene = new ScrollMagic.Scene({
        triggerElement: '.Intro-2',
        triggerHook: 0.1,
        reverse: true
    })
    .setClassToggle('.Intro-1', 'fadeout')
    /*
    .addIndicators({
        name: 'div fadeout',
        colorTrigger: 'yellow',
        colorStart: '#75C695'
    })*/
    .addTo(controller);
    
    var geography2innerFadeoutScene = new ScrollMagic.Scene({
        triggerElement: '.Geography-3',
        triggerHook: 0.1,
        reverse: true
    })
    .setClassToggle('.Geography-2-inner', 'fadeout')
        
    /*
    .addIndicators({
        name: 'div fadeout',
        colorTrigger: 'yellow',
        colorStart: '#75C695'
    })*/
    .addTo(controller);
    
    var geography2FadeoutScene = new ScrollMagic.Scene({
        triggerElement: '.Geography-3',
        triggerHook: 0.1,
        reverse: true
    })
    .setClassToggle('.Geography-2', 'fadeout')
        
    /*
    .addIndicators({
        name: 'div fadeout',
        colorTrigger: 'yellow',
        colorStart: '#75C695'
    })*/
    .addTo(controller);
    
    
    var cities5FadeoutScene = new ScrollMagic.Scene({
        triggerElement: '.Sights-1',
        triggerHook: 0.1,
        reverse: true
    })
    .setClassToggle('.Cities-5', 'fadeout')
        
    /*
    .addIndicators({
        name: 'div fadeout',
        colorTrigger: 'yellow',
        colorStart: '#75C695'
    })*/
    .addTo(controller);
    
    var hotels2FadeoutScene = new ScrollMagic.Scene({
        triggerElement: '.Hotels-3',
        triggerHook: 0.1,
        reverse: true
    })
    .setClassToggle('.Hotels-2', 'fadeout')
        
    /*
    .addIndicators({
        name: 'div fadeout',
        colorTrigger: 'yellow',
        colorStart: '#75C695'
    })*/
    .addTo(controller);
    
    var cuisine1FadeoutScene = new ScrollMagic.Scene({
        triggerElement: '.Cuisine-2',
        triggerHook: 0.1,
        reverse: true
    })
    .setClassToggle('.Cuisine-1', 'fadeout')
        
    /*
    .addIndicators({
        name: 'div fadeout',
        colorTrigger: 'yellow',
        colorStart: '#75C695'
    })*/
    .addTo(controller);
    
    var cuisine4FadeoutScene = new ScrollMagic.Scene({
        triggerElement: '.Language-1',
        triggerHook: 0.1,
        reverse: true
    })
    .setClassToggle('.Cuisine-4', 'fadeout')
        
    /*
    .addIndicators({
        name: 'div fadeout',
        colorTrigger: 'yellow',
        colorStart: '#75C695'
    })*/
    .addTo(controller);
    
    
    /*----- chevron animations -----*/
    $('.scrollmagic-chevron').each(function(){
        var chevronScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.8,
            reverse: false
        })
        .setClassToggle(this, 'horizontal-fade')
        /*
        .addIndicators({
            name: 'horizontal fade',
            colorTrigger: 'yellow',
            colorStart: '#75C695'
        })*/
        .addTo(controller);
    })   
    
    /*----- information square animations -----*/
    $('.scrollmagic-info-squares').each(function(){
        var chevronScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.8,
            reverse: false
        })
        .setClassToggle(this, 'horizontal-fade')
        /*
        .addIndicators({
            name: 'horizontal fade',
            colorTrigger: 'yellow',
            colorStart: '#75C695'
        })*/
        .addTo(controller);
    })   
    
    /*----- description animations -----*/
    $('.scrollmagic-desc').each(function(){
        var descScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.86,
            reverse: false
        })
        .setClassToggle(this, 'horizontal-fade')
        /*
        .addIndicators({
            name: 'horizontal fade',
            colorTrigger: 'yellow',
            colorStart: '#75C695'
        })*/
        .addTo(controller);
    }) 
    
    /*----- vocabulary animations -----*/
    $('.Language-3 ul li').each(function(){
        var vocabScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.95,
            reverse: false
        })
        .setClassToggle(this, 'vocab-fadein')
        /*
        .addIndicators({
            name: 'horizontal fade',
            colorTrigger: 'yellow',
            colorStart: '#75C695'
        })*/
        .addTo(controller);
    }) 
    
    /* ----Background Scroll animations -----*/
    var largeDesktop = window.matchMedia( "(min-width: 1400px)" );
    
    if(largeDesktop.matches){
        var intro1InnerParallaxTween = TweenMax.to(".Intro-1-inner", 1, {
          backgroundPositionY: "-=5%",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var intro1InnerParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Intro-1-inner", 
            triggerHook: 0,
            duration: "100%"
        })
        .setTween(intro1InnerParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var geography1ParallaxTween = TweenMax.to(".Geography-1", 1, {
          backgroundPositionY: "-=5%",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var geography1ParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Geography-1", 
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(geography1ParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var cities1ParallaxTween = TweenMax.from(".Cities-1", 1, {
          backgroundSize: "+=100px +=56.2403px", 
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var cities1Parallaxscene = new ScrollMagic.Scene({
            triggerElement: ".Cities-1", 
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(cities1ParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var cities2ParallaxTween = TweenMax.to(".Cities-2", 1, {
          backgroundPositionY: "+=30%",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var cities2ParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Cities-2", 
            triggerHook: 1,
            duration: "250%"
        })
        .setTween(cities2ParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var cities3ParallaxTween = TweenMax.to(".Cities-3", 1, {
            backgroundPositionY: "-=10%",
            backgroundSize: "+=100px +=66.666667px",
            autoRound:false, 
            ease:Power1.ease0ut
        });

        var cities3ParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Cities-3", 
            triggerHook: 1,
            duration: "250%"
        })
        .setTween(cities3ParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var cities4ParallaxTween = TweenMax.from(".Cities-4", 1, {
            backgroundSize: "+=100px +=56.32124352331606px",
            autoRound:false, 
            ease:Power1.ease0ut
        });

        var cities4ParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Cities-4", 
            triggerHook: 1,
            duration: "250%"
        })
        .setTween(cities4ParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var cities5ParallaxTween = TweenMax.from(".Cities-5", 1, {
          backgroundPositionY: "+=30%",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var cities5ParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Cities-5", 
            triggerHook: 1,
            duration: "250%"
        })
        .setTween(cities5ParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var hotels1ParallaxTween = TweenMax.to(".Hotels-1", 1, {
          backgroundPositionY: "+=15%",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var hotels1ParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Hotels-1", 
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(hotels1ParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var hotels2ParallaxTween = TweenMax.from(".Hotels-2", 1, {
          backgroundSize: "+=200px +=149.9px",
          autoRound:false, 
          ease:Power0.ease0ut
        });

        var hotels2ParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Hotels-2", 
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(hotels2ParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var cuisine1InnerParallaxTween = TweenMax.to(".Cuisine-1-inner", 1, {
          backgroundPositionY: "-=15%",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var cuisine1InnerParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Cuisine-1-inner", 
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(cuisine1InnerParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var cuisine1ParallaxTween = TweenMax.from(".Cuisine-1", 1, {
          backgroundSize: "+=80px +=60px",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var cuisine1ParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Cuisine-1", 
            triggerHook: 0.2,
            offset: 500,
            duration: "200%"
        })
        .setTween(cuisine1ParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var cuisine3InnerParallaxTween = TweenMax.to(".Cuisine-3-inner", 1, {
          backgroundSize: "+=80px +=60px",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var cuisine3InnerParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Cuisine-3-inner", 
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(cuisine3InnerParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var cuisine3ParallaxTween = TweenMax.from(".Cuisine-3", 1, {
          backgroundPositionY: "+=10%",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var cuisine3ParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Cuisine-3", 
            triggerHook: 0.2,
            offset: 500,
            duration: "200%"
        })
        .setTween(cuisine3ParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var cuisine4InnerParallaxTween = TweenMax.to(".Cuisine-4-inner", 1, {
          backgroundPositionY: "+=15%",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var cuisine4InnerParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Cuisine-4-inner", 
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(cuisine4InnerParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var cuisine4ParallaxTween = TweenMax.to(".Cuisine-4", 1, {
          backgroundSize: "+=80px +=60px",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var cuisine4ParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Cuisine-4", 
            triggerHook: 0.2,
            offset: 500,
            duration: "200%"
        })
        .setTween(cuisine4ParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var language2ParallaxTween = TweenMax.from(".Language-2", 1, {
          backgroundSize: "+=200px +=125px",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var language2ParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Language-2", 
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(language2ParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var footer1ParallaxTween = TweenMax.from(".Footer-1", 1, {
          backgroundPositionY: "+=10%",
          autoRound:false, 
          ease:Power1.ease0ut
        });

        var footer1ParallaxScene = new ScrollMagic.Scene({
            triggerElement: ".Footer-1", 
            triggerHook: 1,
            duration: "250%"
        })
        .setTween(footer1ParallaxTween)
        //.addIndicators()
        .addTo(controller);

        var geldinizTween = TweenMax.to("#hos-geldiniz", 1, {
            x: "+=100px",
            //y: "+100px",
            ease:Power1.ease0ut
        });

        var geldinizScene = new ScrollMagic.Scene({
            triggerElement: "#hos-geldiniz", 
            triggerHook: .7,
            duration: "100%"
        })
        .setTween(geldinizTween)
        //.addIndicators()
        .addTo(controller);

        var welcomeTween = TweenMax.to("#welcome", 1, {
            x: "-=150px",
            //y: "+100px",
            ease:Power1.ease0ut
        });

        var welcomeScene = new ScrollMagic.Scene({
            triggerElement: "#welcome", 
            triggerHook: .7,
            duration: "100%"
        })
        .setTween(welcomeTween)
        //.addIndicators()
        .addTo(controller);
    }
    /*======================= End ScrollMagic Animations =======================*/  
    
    /*======================= Begin jQuery AJAX calls =======================*/ 
    //variable to replace awkward "clear sky" text in AJAX call
    var typofix = "clear skies";
    
    $.get("http://api.openweathermap.org/data/2.5/weather?id=745044&APPID=f8e382959de83c3f9ca6682d9773d878&units=imperial",function(result){
        var istanbulTemp = result.main.temp;
        var istanbulWeather = result.weather[0].description;
        var istanbulWind = result.wind.speed;
        
        //If get returns "clear sky", replace text with "clear skies"
        if (istanbulWeather == "clear sky"){
            istanbulWeather = typofix;
        }

        $('#istanbul-weather').html("Weather: " + istanbulTemp + "&#186; F & " + istanbulWeather); 
        $('#istanbul-wind').html("Wind: " + istanbulWind + " mph");
    });
    
    $.get("http://api.openweathermap.org/data/2.5/weather?id=323784&APPID=ff3af5a78da68a138c3521f6ff6da08c&units=imperial",function(result){
        var ankaraTemp = result.main.temp;
        var ankaraWeather = result.weather[0].description;
        var ankaraWind = result.wind.speed;
        
        //If get returns "clear sky", replace text with "clear skies"
        if (ankaraWeather == "clear sky"){
            ankaraWeather = typofix;
        }
        
        $('#ankara-weather').html("Weather: " + ankaraTemp + "&#186; F & " + ankaraWeather); 
        $('#ankara-wind').html("Wind: " + ankaraWind + " mph");
    });
    
    $.get("http://api.openweathermap.org/data/2.5/weather?id=311046&APPID=1f899c3069c68d58f7b6438d243c54ae&units=imperial",function(result){
        var izmirTemp = result.main.temp;
        var izmirWeather = result.weather[0].description;
        var izmirWind = result.wind.speed;
        
        //If get returns "clear sky", replace text with "clear skies"
        if (izmirWeather == "clear sky"){
            izmirWeather = typofix;
        }
        
        $('#izmir-weather').html("Weather: " + izmirTemp + "&#186; F & " + izmirWeather); 
        $('#izmir-wind').html("Wind: " + izmirWind + " mph");
    });
    
    $.get("http://api.openweathermap.org/data/2.5/weather?id=750268&APPID=f962e1c09b62c5371dcc6604a472ca1d&units=imperial",function(result){
        var bursaTemp = result.main.temp;
        var bursaWeather = result.weather[0].description;
        var bursaWind = result.wind.speed;
        
        //If get returns "clear sky", replace text with "clear skies"
        if (bursaWeather == "clear sky"){
            bursaWeather = typofix;
        }
        
        $('#bursa-weather').html("Weather: " + bursaTemp + "&#186; F & " + bursaWeather); 
        $('#bursa-wind').html("Wind: " + bursaWind + " mph");
    });
    
    $.get("http://api.openweathermap.org/data/2.5/weather?id=325361&APPID=121b8eace8bdd51d3cefef594fdbc9aa&units=imperial",function(result){
        var adanaTemp = result.main.temp;
        var adanaWeather = result.weather[0].description;
        var adanaWind = result.wind.speed;
        
        //If get returns "clear sky", replace text with "clear skies"
        if (adanaWeather == "clear sky"){
            adanaWeather = typofix;
        }
        
        $('#adana-weather').html("Weather: " + adanaTemp + "&#186; F & " + adanaWeather); 
        $('#adana-wind').html("Wind: " + adanaWind + " mph");
    });
    
    /*======================= End jQuery AJAX calls =======================*/ 
    
});

