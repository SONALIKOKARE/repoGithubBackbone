require.config({
    waitSeconds: 20,
    baseUrl:'../libs',
    map: {
      '*': {
        'less': 'less' // path to less
      }
    },
    paths : {
        'jquery' :'jquery',
        'routie' :'routie',
        'mediator':'mediator',
        'text':'text',
        'css':'css.min',
        'scrollto':'jquery-scrollto',
        'handlebars':'handlebars-v1.3.0',
        'bxslider':'jquery.bxslider',
        'audio': '../utils/audio',
        'utility':'../utils/utility',
        'scroll' : '../js/DefineScroller',
        'fancybox':'jquery.fancybox',
        'less':'less',
        'backbone':'backbone-min',
        'backboneLocalStorage':'backbone.localStorage'
    },
    shim:{
        'bxslider': {
            deps: ['jquery']
        },
        'less':{
            deps:['normalize','lessc']
        },
        'backbone':{
            deps:['jquery','underscore']
        }
    }
});

require(['../js/routes']);



