define("outputTest/0.0.1/a",[],function(e,t){t.getA=function(e){}}),define("outputTest/0.0.1/b",[],function(e,t){t.getB=function(e){}}),define("outputTest/0.0.1/c",[],function(e,t){t.getC=function(e){}}),define("outputTest/0.0.1/localMerge",["./a","./b","./c","#jquery/1.7.2/jquery","#widget/1.0.0/widget","#base/1.0.0/base","#class/1.0.0/class","#events/1.0.0/events"],function(e,t){var n=e("#jquery/1.7.2/jquery"),r=e("#widget/1.0.0/widget"),i=e("./a"),s=e("./b"),o=e("./c");t.get=function(e){var t=n(e);r.render(t,module)}});