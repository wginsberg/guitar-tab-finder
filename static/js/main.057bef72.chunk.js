(window["webpackJsonptab-spot"]=window["webpackJsonptab-spot"]||[]).push([[0],{17:function(e,t,a){e.exports={TabList:"App_TabList__26jSg"}},19:function(e,t,a){e.exports={Tab:"Tab_Tab__xDpMS"}},22:function(e,t,a){e.exports=a(45)},27:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(15),s=a.n(c),i=(a(27),a(5)),r=a(2),u=a(3),l=a(20),m=a(16),p=a(21),d=a(17),h=a.n(d),f=a(4),g=a.n(f),v="".concat(window.location.protocol,"//").concat(window.location.host),w=function(){function e(){Object(r.a)(this,e);var t=this.getCurrentAccessToken();t?g.a.defaults.headers.common.Authorization="Bearer ".concat(t):this.getNewAccessToken()}return Object(u.a)(e,[{key:"getCurrentAccessToken",value:function(){var e=document.location.hash.split("&").find((function(e){return e.match(/#?access_token=/)}));return e?e.split("=")[1]:""}},{key:"getNewAccessToken",value:function(){var e="https://accounts.spotify.com/authorize";e+="?response_type=token",e+="&scope=".concat(encodeURIComponent("user-top-read user-read-recently-played")),e+="&client_id=".concat(encodeURIComponent("3680b1abca094e458e2a9f190f5607d1")),e+="&redirect_uri=".concat(encodeURIComponent(v)),window.location=e}},{key:"topTracks",value:function(e){return g.a.get("".concat("https://api.spotify.com/v1/me/top/tracks","?limit=").concat(25,"&offset=").concat(25*e,"&time_range=short_term")).then((function(e){return e.data.items})).catch(this.getNewAccessToken)}},{key:"recentTracks",value:function(e){return 0===e?g.a.get("https://api.spotify.com/v1/me/player/recently-played").then((function(e){return e.data.items})).then((function(e){return e.map((function(e){return e.track}))})).catch(this.getNewAccessToken):new Promise((function(e){return e([])}))}}]),e}(),k=a(18),b=a.n(k),y=a(19),T=a.n(y),E=function(e){var t=e.track,a=t.name,n=t.artists[0].name,c=t.album.images[0].url,s="".concat(a," ").concat(n),i="https://www.ultimate-guitar.com/search.php?search_type=title&value=".concat(encodeURIComponent(s)),r=b()([T.a.Tab,"relative max-w-sm rounded overflow-hidden shadow-lg m-4"]);return o.a.createElement("a",{href:i,target:"_bank",className:r},o.a.createElement("img",{alt:"",src:c,className:"w-full"}),o.a.createElement("div",{className:"font-bold text-xl mb-2"},a),o.a.createElement("div",{className:"font-light text-xl mb-2"},n))},x="SPOTIFY_RECENT",N="SPOTIFY_TOP",_=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).loadNextPage=function(){a.props.state||(a.spotifyApiService||(a.spotifyApiService=new w),(a.state.mode===N?a.spotifyApiService.topTracks(a.state.page):a.spotifyApiService.recentTracks(a.state.page)).then((function(e){a.setState((function(t){return{page:t.page+1,items:[].concat(Object(i.a)(t.items),Object(i.a)(e)),dataExhausted:0===e.length}}))})))},a.changeMode=function(e){a.setState({mode:e,items:[],page:0})},a.state={mode:x,items:[],page:0,dataExhausted:!0},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.state?this.setState(this.props.state):this.loadNextPage()}},{key:"componentDidUpdate",value:function(e,t){this.state.mode!==t.mode&&this.loadNextPage()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("select",{value:this.state.mode,onChange:function(t){return e.changeMode(t.target.value)},className:"mt-8"},o.a.createElement("option",{value:x},"Your recently listened to Spotify songs"),o.a.createElement("option",{value:N},"Your most listened to Spotify songs")),o.a.createElement("div",{className:h.a.TabList},this.state.items.map((function(e,t){return o.a.createElement(E,{key:t,track:e})}))),o.a.createElement("button",{onClick:this.loadNextPage,className:this.state.dataExhausted?"hidden":"m-8"},"Load more"))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));window.renderApp=function(){return s.a.render(o.a.createElement(_,{state:window.data}),document.getElementById("root"))},"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.057bef72.chunk.js.map