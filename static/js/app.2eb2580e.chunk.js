(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{160:function(e,t,n){"use strict";var r=n(36),o=n(241),a=n(0),i=n.n(a),s=n(42),c=n(46),A=[{question:"What is the fifth planet from the sun?",answers:[{id:"1",text:"Mars"},{id:"2",text:"Jupiter",correct:!0},{id:"3",text:"Saturn"},{id:"4",text:"Venus"}]},{question:"How many planets are in the Solar System?",answers:[{id:"1",text:"6"},{id:"2",text:"7"},{id:"3",text:"8",correct:!0},{id:"4",text:"9"}]},{question:"Une question au hazard",answers:[{id:"1",text:"r2ponse 1"},{id:"2",text:"response correcte",correct:!0},{id:"3",text:"r\xe9ponse 3"},{id:"4",text:"La r\xe9ponse 4"}]},{question:"Une question a ne pas afficher",answers:[{id:"1",text:"r2ponse 1"},{id:"2",text:"response correcte",correct:!0},{id:"3",text:"r\xe9ponse 3"},{id:"4",text:"La r\xe9ponse 4"}]}],u=[{question:"In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?",answers:[{id:"1",text:"Buttermilk",correct:!0},{id:"2",text:"Daisy"},{id:"3",text:"Scout"},{id:"4",text:"Tulip"}]},{question:'What weapon has become known as "the gun that won the west"?',answers:[{id:"1",text:"Smith & Wesson Revolver"},{id:"2",text:"Colt Peacemaker",correct:!0},{id:"3",text:"Winchester Revolver"},{id:"4",text:"Sharps Derringer"}]},{question:"Une question au hazard",answers:[{id:"1",text:"r2ponse 1"},{id:"2",text:"response correcte",correct:!0},{id:"3",text:"r\xe9ponse 3"},{id:"4",text:"La r\xe9ponse 4"}]},{question:"Une question a ne pas afficher",answers:[{id:"1",text:"r2ponse 1"},{id:"2",text:"response correcte",correct:!0},{id:"3",text:"r\xe9ponse 3"},{id:"4",text:"La r\xe9ponse 4"}]}],l=[{question:"Quelle est l'IP local ?",answers:[{id:"1",text:"192.168.1.1"},{id:"2",text:"127.0.0.1",correct:!0},{id:"3",text:"209.85.231.104"},{id:"4",text:"66.220.149.25"}]},{question:"What kind of fruit was used to name a computer in 1984?",answers:[{id:"1",text:"Blackberry"},{id:"2",text:"Blueberry"},{id:"3",text:"Pear"},{id:"4",text:"Apple",correct:!0}]},{question:"Une question au hazard",answers:[{id:"1",text:"r2ponse 1"},{id:"2",text:"response correcte",correct:!0},{id:"3",text:"r\xe9ponse 3"},{id:"4",text:"La r\xe9ponse 4"}]},{question:"Une question a ne pas afficher",answers:[{id:"1",text:"r2ponse 1"},{id:"2",text:"response correcte",correct:!0},{id:"3",text:"r\xe9ponse 3"},{id:"4",text:"La r\xe9ponse 4"}]}],d=n(3),p=n(45),f=n(74),x=n(6),h=x.a.create({row:{paddingHorizontal:15,paddingVertical:20,backgroundColor:"#36B1F0",marginBottom:1},text:{fontSize:18,color:"#fff",fontWeight:"600"}}),g=function(e){var t=e.onPress,n=void 0===t?function(){}:t,r=e.name,o=e.color;return i.a.createElement(f.a,{onPress:n,activeOpacity:.8},i.a.createElement(d.a,{style:[h.row,{backgroundColor:o}]},i.a.createElement(p.a,{style:h.text},r)))},m=n(7),R=n.n(m),E=n(8),w=n.n(E),y=n(9),S=n.n(y),k=n(10),v=n.n(k),C=n(2),I=n.n(C),b=n(153),B=x.a.create({button:{backgroundColor:"rgba(255, 255, 255, 0.3)",borderRadius:10,paddingVertical:15,alignItems:"center",justifyContent:"center",width:"46%",marginTop:20},text:{color:"#fff",fontSize:20,textAlign:"center"},buttonContainer:{flexDirection:"row",flexWrap:"wrap",marginTop:20,justifyContent:"space-between"}}),Q=function(e){var t=e.text,n=e.onPress,r=void 0===n?function(){}:n;return i.a.createElement(f.a,{onPress:r,style:B.button},i.a.createElement(p.a,{style:B.text},t))},M=function(e){var t=e.children;return i.a.createElement(d.a,{style:B.buttonContainer},t)},K=n(32),P=n(54),U=K.a.get("window"),q=x.a.create({container:{position:"absolute",top:0,bottom:0,left:0,right:0,flex:1,alignItems:"center",justifyContent:"center"},circle:{backgroundColor:"#ff4136",width:U.width/2,height:U.width/2,borderRadius:U.width/2,alignItems:"center",justifyContent:"center"},circleCorrect:{backgroundColor:"#28A125"},icon:{width:U.width/3}}),j=function(e){var t=e.correct;if(!e.visible)return null;var r=n(t?182:183),o=[q.circle];return t&&o.push(q.circleCorrect),i.a.createElement(d.a,{style:q.container},i.a.createElement(d.a,{style:o},i.a.createElement(P.a,{source:r,style:q.icon,resizeMode:"contain"})))};function G(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=I()(e);if(t){var o=I()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v()(this,n)}}var J=x.a.create({container:{backgroundColor:"#36B1F0",flex:1,paddingHorizontal:20},text:{color:"#fff",fontSize:25,textAlign:"center",letterSpacing:-.02,fontWeight:"600"},safearea:{flex:1,marginTop:100,justifyContent:"space-between"}}),H=function(e){S()(n,e);var t=G(n);function n(){var e;R()(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={correctCount:0,totalCount:e.props.navigation.getParam("questions",[]).length,activeQuestionIndex:0,answered:!1,answerCorrect:!1},e.answer=function(t){e.setState((function(e){var n={answered:!0};return t?(n.correctCount=e.correctCount+1,n.answerCorrect=!0):n.answerCorrect=!1,n}),(function(){setTimeout((function(){return e.nextQuestion()}),750)}))},e.nextQuestion=function(){e.setState((function(t){var n=t.activeQuestionIndex+1;return console.log(n),n>=3&&e.props.navigation.popToTop(),{activeQuestionIndex:n,answered:!1}}))},e}return w()(n,[{key:"render",value:function(){var e=this,t=this.props.navigation.getParam("questions",[])[this.state.activeQuestionIndex];return i.a.createElement(d.a,{style:[J.container,{backgroundColor:this.props.navigation.getParam("color")}]},i.a.createElement(c.a,{barStyle:"light-content"}),i.a.createElement(b.a,{style:J.safearea},i.a.createElement(d.a,null,i.a.createElement(p.a,{style:J.text},t.question),i.a.createElement(M,null,t.answers.map((function(t){return i.a.createElement(Q,{key:t.id,text:t.text,onPress:function(){return e.answer(t.correct)}})})))),i.a.createElement(p.a,{style:J.text},this.state.correctCount+"/"+(this.state.totalCount-1))),i.a.createElement(j,{correct:this.state.answerCorrect,visible:this.state.answered}))}}]),n}(i.a.Component),O=Object(o.a)({QuizIndex:{screen:function(e){var t=e.navigation;return i.a.createElement(s.a,null,i.a.createElement(c.a,{barStyle:"dark-content"}),i.a.createElement(g,{name:"Space",color:"#36b1f0",onPress:function(){return t.navigate("Quiz",{title:"Space",questions:A,color:"#36b1f0"})}}),i.a.createElement(g,{name:"Westerns",color:"#799496",onPress:function(){return t.navigate("Quiz",{title:"Westerns",questions:u,color:"#799496"})}}),i.a.createElement(g,{name:"Computers",color:"#49475B",onPress:function(){return t.navigate("Quiz",{title:"Computers",questions:l,color:"#49475B"})}}))},navigationOptions:{headerTitle:"Quizzes"}},Quiz:{screen:H,navigationOptions:function(e){var t=e.navigation;return{headerTitle:t.getParam("title"),headerTintColor:"#fff",headerStyle:{backgroundColor:t.getParam("color"),borderBottomColor:t.getParam("color")}}}}});t.a=Object(r.createAppContainer)(O)},162:function(e,t,n){e.exports=n(224)},182:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABmCAYAAAA53+RiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG7SURBVHgB7dnLbcMwEEXRSSpIienE04lLSkkvMuIPYsexZPHzZN4DDLglcMHNMAIAAAAAAAAAAAAAAAAAVpO0n2YX8HGMckIcB1dRiOPgThTi9PQgCnF6mBmFOC0tjEKcFp6MQpyaVkYhTg2FohCnpMJRiFNCpSjnOO+BxQ5RpuMz6nkLLFP5pRxkYBmiGCKKIaIYIoohohgiiiGiGCKKIaIYIoohohgiiiGiGCKKIaIYIoohohgiiiGiGBoiynSJ3TRf03zEBowU5cQ+zohR7OOMHMU2DlEubOKIKDe6xxFR7uoWR0R5qHkcEWW2ZnFElMWqxxFRnlYtjoiyWvE4GmUhOV3kU3UVi6PRtsTaQByNurqXcRyN/p8iwzjik+uHjOKIKL/JII6I8jd1jCOi/E8d4ogo86hhHBFlGbWJs1ddGa9I9ePUlPHKtM04GSPQtuJkjETbiJMxInnHyRiZPONkwC5OBi7kEScDt9Q3Tgbu6xQnA481jpOB+RrFycByleNk4HmV4mRgvcJxMlBOoTgZKG9lnAzU82ScDNS3ME4G2pkZJwPtPYiTgX7uxMlAf1dxMuDjGCcDZ98FM7wAONWpZAAAAABJRU5ErkJggg=="},183:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACICAYAAAA8uqNSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALqSURBVHgB7d3RbRtBDEVRKo2kNaaSKJU4raSUNOLnFaABDMGydqXlDDl7D2D40yBxoR9jKDMAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5Un6ffmxSS2zvc08X6hrHM10S7zGMe18oW7imG6JN3EQyRZ34phmiXfiIJI1HsRRfokP4ig/X6iVcZRd4so4ys4XamMc5Za4MY5y84V6Mo4yS3wyjjLzhXoxjvRLfDGO9POF0j5xpF2i9okj7XyhtG8c6ZaofeNIN18oxcSRZomKiWPYfD+sv5PFOWtgJJc4ll9ucf7bESyLPCtW90gU+8lx4XYkmigSEUcMTRCJiCOWCkci4uhDBSMRcfSlQpGIOMZQgUhEHGMpcSQijhyUMBIRRy5KFImIIycliETEkZsGRiLiqEEDIhFx1KKOkYg4alKHSEQctSk+kkhuiKeakbihH9WKxA39qUYkbhhHuSNxw3jKGYkb8lCuSNyQj3JE4oa8NDYSN+Q3KBI31NE5EjfU0ykSt4mNeJvb00+L1+NvYG+K/6/sZ5yLqqRzHERSyaA4iKSCwXE0RJKRcsTREEkmyhVHQyQZKGccDZGMpNxxNEQygmrE0RBJT6oVR0MkPahmHA2RRFKHR02a8ETnIajjizcRSS0a8BxSRFKDBr6VFZHkpgQPqUUkOSnRK3sRSS5KeIJBRJKDEt/nEJGMpQLHW0QkY6jQZR8RSV8qePZJRNKHCt8EE5HE0gQH40QkMTTRNUHFRvKuA35v7ptiuXUmItmHJr5DqgkjGfE295/F+XU6nf7aIMvfPi+//licw3xvrmt/bklo/0+S90zzdaF9I3FLRvtFcrw4Gu0TiVtSej2S48bR6LVI3JJ7IRLiaJ6MxK2IJyIhjlsbI3ErZkMkxHHPykjciloRCXE88iASt+K+iYQ41roTidsEljm+ioQ4trqJxG0iN5EQx7OukbhN6FMkbgAAAAAAAAAAAAAAAAAAAAAAAAAAAADK+wAeFBR3xe79hQAAAABJRU5ErkJggg=="}},[[162,1,2]]]);
//# sourceMappingURL=app.2eb2580e.chunk.js.map