!function(){if("undefined"!=typeof Prism){var n,s,a="";Prism.plugins.customClass={add:function(s){n=s},map:function(n){s="function"==typeof n?n:function(s){return n[s]||s}},prefix:function(n){a=n||""},apply:t},Prism.hooks.add("wrap",(function(e){if(n){var u=n({content:e.content,type:e.type,language:e.language});Array.isArray(u)?e.classes.push.apply(e.classes,u):u&&e.classes.push(u)}(s||a)&&(e.classes=e.classes.map((function(n){return t(n,e.language)})))}))}function t(n,t){return a+(s?s(n,t):n)}}();