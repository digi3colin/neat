/**
 * Created by colinleung on 22/2/2017.
 */

require.config({
    paths: {
        'jquery':      '//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min',
        'hammerjs':    '//ajax.googleapis.com/ajax/libs/hammerjs/2.0.8/hammer.min',
        'semantic-ui': '../../vendor/semantic/semantic.min'
    }
});
require(['Main'], function (app) {
    new app.Main();
});
