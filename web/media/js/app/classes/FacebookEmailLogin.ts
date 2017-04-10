/**
 * Created by colinleung on 7/4/2017.
 */

/// <reference path="../../../ts/typings/globals/jquery/index.d.ts"/>
/// <reference path="../../../ts/typings/globals/fb/index.d.ts"/>
/// <reference path="../../../ts/typings/globals/hammerjs/index.d.ts"/>

///<amd-dependency path="jquery" />
///<amd-dependency path="hammerjs" />
export class FacebookEmailLogin{

  constructor(){
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '529409987446867',
        xfbml      : true,
        version    : 'v2.8'
      });
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


    $('.selection div.facebook').on('click', function(e){
      e.preventDefault();
      e.stopPropagation();
      FB.login(function(){

      });
    });

    $('.carousel .page-control').on('click', function(e){
      e.preventDefault();
      e.stopPropagation();
      $(this).parents('.carousel').attr('data-active', $(this).attr('data-item'));
    });

    this.setupSwipe();
  }

  setupSwipe()
  {
    $('.facebook-email-login').each((key, value)=>{
      let hammertime = new Hammer(value as HTMLElement);
      hammertime.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
      hammertime.on('swiperight',function(e){
        $(e.target).parents('.carousel').attr('data-active', '1');
      });
    });
  }
}