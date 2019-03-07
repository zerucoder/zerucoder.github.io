(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{305:function(e,t,a){},371:function(e,t,a){},5816:function(e,t,a){e.exports=a(6423)},5821:function(e,t,a){},6091:function(e,t,a){},6093:function(e,t,a){},6102:function(e,t){},6104:function(e,t){},6139:function(e,t){},6140:function(e,t){},6233:function(e,t){},6342:function(e,t,a){},6423:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(44),c=a.n(o),s=(a(5821),a(18)),i=a(19),l=a(21),u=a(20),m=a(22),h=a(113),d=a.n(h),p=a(3),f=function(e){var t=e.notifications;return r.a.createElement("div",{className:"notification section"},r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement(p.q,{variant:"headline"},"Notifications"),r.a.createElement(p.k,null,t&&t.map(function(e){return r.a.createElement(p.l,{key:e.id},r.a.createElement(p.m,null,r.a.createElement(p.q,{color:"secondary"},e.user),r.a.createElement(p.q,null,e.content),r.a.createElement(p.q,{variant:"caption"},d()(e.time.toDate()).fromNow())))})))))},b=(a(371),function(e){var t=e.project;return r.a.createElement(p.n,{square:!0,className:"project-card"},r.a.createElement(p.q,{variant:"h4",gutterBottom:!0},t.title),r.a.createElement(p.q,{variant:"subheading",gutterBottom:!0},"posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement(p.q,{variant:"caption",gutterBottom:!0},d()(t.createdAt.toDate()).calendar()))}),E=a(6424),g=function(e){var t=e.projects;return r.a.createElement("div",null,t&&t.map(function(e){return r.a.createElement(E.a,{to:"/project/"+e.id,key:e.id,style:{textDecoration:"none"}},r.a.createElement(b,{project:e}))}))},j=a(34),v=a(51),y=a(65),O=a(6425),S=a(38),w=(a(6091),Object(S.createMuiTheme)({palette:{type:"light"}})),N=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?r.a.createElement(S.MuiThemeProvider,{theme:w},r.a.createElement(p.i,{container:!0,spacing:16},r.a.createElement(p.i,{item:!0,xs:8},r.a.createElement(g,{projects:t})),r.a.createElement(p.i,{item:!0,xs:4},r.a.createElement(p.n,{className:"dashboard",square:!0},r.a.createElement(f,{notifications:n}))))):r.a.createElement(O.a,{to:"/signin"})}}]),t}(n.Component),C=Object(v.d)(Object(j.b)(function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}}),Object(y.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:8,orderBy:["time","desc"]}]))(N),k=a(6426),R=a(6427),F=a(6428),x=function(){return r.a.createElement("div",null,r.a.createElement(p.b,{component:E.a,to:"/signin",color:"inherit",size:"large"},"Sign In"),r.a.createElement(p.b,{component:E.a,to:"/signup",color:"inherit",size:"large"},"Sign Up"))},q=a(114),A=Object(j.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"LOGOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("div",null,r.a.createElement(p.b,{component:E.a,to:"/quiznew",color:"inherit",size:"large"},"Test"),r.a.createElement(p.b,{component:E.a,to:"/createproject",color:"inherit",size:"large"},"New Project"),r.a.createElement(p.b,{onClick:e.signOut,color:"inherit",size:"large"},"Logout"),r.a.createElement(p.j,{color:"inherit"},r.a.createElement(q.a,null)),"Hello, ",e.profile.firstname,e.profile.lastname)}),I=(a(6093),Object(j.b)(function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(A,{profile:a}):r.a.createElement(x,null);return console.log(t),r.a.createElement("div",{className:"Root"},r.a.createElement(p.a,{position:"static"},r.a.createElement(p.p,null,r.a.createElement(p.j,{color:"inherit"},r.a.createElement(q.c,null)),r.a.createElement(p.q,{variant:"h5",component:E.a,to:"/",color:"inherit",className:"Grow"},"Project"),n)))})),T=Object(v.d)(Object(j.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}}),Object(y.firestoreConnect)([{collection:"projects"}]))(function(e){e.match.params.id;var t=e.project;return e.auth.uid?(console.log(e),t?r.a.createElement(p.n,{className:"project-details"},r.a.createElement(p.q,{variant:"display3",gutterBottom:!0},t.title," "),r.a.createElement(p.q,{variant:"headline",gutterBottom:!0},t.content),r.a.createElement(p.q,{variant:"body1"},"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement(p.q,{variant:"caption"},d()(t.createdAt.toDate()).calendar())):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"project Loading..."))):r.a.createElement(O.a,{to:"/signin"})}),M=a(74),P=function(e){return r.a.createElement(p.c,{open:e.open,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(p.g,{id:"alert-dialog-title"},"Error"),r.a.createElement(p.e,null,r.a.createElement(p.f,{id:"alert-dialog-description"},e.children)),r.a.createElement(p.d,null,r.a.createElement(p.b,{color:"primary",onClick:e.close},"CLOSE")))},U=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(M.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError,a=e.auth,n=e.errorModal;return a.uid?r.a.createElement(O.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text darken-3"},"Log In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login")),r.a.createElement(P,{open:n,close:this.props.close},t||null)))}}]),t}(n.Component),z=Object(j.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth,errorModal:e.auth.errorModal}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}));var a},close:function(){return e(function(e,t){e({type:"CLOSE"})})}}})(U),L="v1:us1:02e338e5-52be-4ad3-974b-077d4dee6702",B=a(6094),_=null,D=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){_=new B.default({instanceLocator:L,key:"e0cc16b3-f6c2-40ba-9982-a21d19f26acb:nFXv43RkFPk+zOljT3hFdSYylJf8OZ1HlaKPCWWGGB0="})},a.state={firstname:"",lastname:"",email:"",password:""},a.handleChange=function(e){a.setState(Object(M.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state),a.props.signUp(a.state),_.createUser({id:a.state.firstname,name:a.state.firstname}).then(function(){console.log("User created successfully")}).catch(function(e){console.log(e)})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError,n=e.errorModal;return t.uid?r.a.createElement(O.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstname"},"Firstname"),r.a.createElement("input",{type:"text",id:"firstname",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastname"},"Lastname"),r.a.createElement("input",{type:"text",id:"lastname",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up")),r.a.createElement(P,{open:n,close:this.props.close},a||null)))}}]),t}(n.Component),W=Object(j.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError,errorModal:e.auth.errorModal}},function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,o=n.getFirestore,c=r(),s=o();c.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return s.collection("users").doc(t.user.uid).set({firstname:e.firstname,lastname:e.lastname,initials:e.firstname[0]+e.lastname[0]})}).then(function(){t({type:"SIGNUP_SUCCESS"})}).catch(function(e){t({type:"SIGNUP_ERROR",err:e})})}}(t))},close:function(){return e(function(e,t){e({type:"CLOSE"})})}}})(D),G=a(76),H=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(M.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text darken-3"},"Create project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create")))):r.a.createElement(O.a,{to:"/signin"})}}]),t}(n.Component),J=Object(j.b)(function(e){return{auth:e.firebase.auth}},function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=n.getFirestore,o=a().firebase.profile,c=a().firebase.auth.uid;r().collection("projects").add(Object(G.a)({},e,{authorFirstName:o.firstname,authorLastName:o.lastname,authorId:c,createdAt:new Date})).then(function(){t({type:"CREATE_PROJECT",project:e})}).catch(function(e){t({type:"CREATE_PROJECT_ERROR",err:e})})}}(t))}}})(H),Q=a(115),Y=a(320),K=a.n(Y),V=a(152),X=(a(305),function(e){return r.a.createElement(p.n,{className:"chat-message"},r.a.createElement(p.q,{variant:"caption",color:"secondary",gutterBottom:!0,align:"right"},"~",e.username),r.a.createElement(p.q,{variant:"subtitle1"},e.text))}),Z=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).componentWillUpdate=function(){var e=c.a.findDOMNode(Object(V.a)(a));a.shouldScrollToBottom=e.scrollTop+e.clientHeight+100>=e.scrollHeight},a.componentDidUpdate=function(){if(a.shouldScrollToBottom){var e=c.a.findDOMNode(Object(V.a)(a));e.scrollTop=e.scrollHeight}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.roomId?r.a.createElement("div",null,this.props.messages.map(function(e,t){return r.a.createElement(X,{key:e.id,username:e.senderId,text:e.text})})):r.a.createElement("div",{className:"message-list"},r.a.createElement("div",{className:"join-room"},"Join a room! \u2192"))}}]),t}(n.Component),$=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={message:""},a.handleChange=function(e){a.setState({message:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.sendMessage(a.state.message),a.setState({message:""})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"input-field"},r.a.createElement("i",{className:"material-icons prefix indigo-text text-darken-3"},"chat"),r.a.createElement("input",{id:"send-message",disabled:this.props.disabled,onChange:this.handleChange,value:this.state.message,type:"text"}),r.a.createElement("label",{htmlFor:"send-message"},"Type your message and hit ENTER")))}}]),t}(n.Component),ee=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=Object(Q.a)(this.props.rooms).sort(function(e,t){return e.id>t.id});return r.a.createElement("div",{className:"rooms-list"},r.a.createElement("ul",null,r.a.createElement("h4",null,"Project Groups:"),t.map(function(t){var a=t.id===e.props.roomId?"active":"";return r.a.createElement("li",{key:t.id,className:"room "+a},r.a.createElement("a",{onClick:function(){return e.props.subscribeToRoom(t.id)},href:"#"},"# ",t.name))})))}}]),t}(n.Component),te=a(112),ae=Object(S.createMuiTheme)({palette:{primary:te.pink}}),ne=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={roomName:""},a.handleChange=function(e){a.setState({roomName:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.createRoom(a.state.roomName),a.setState({roomName:""})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(S.MuiThemeProvider,{theme:ae},r.a.createElement(p.o,{defaultValue:this.state.roomName,label:"Add Room",variant:"outlined",required:!0}),r.a.createElement(p.h,{size:"small",color:"secondary","aria-label":"Add",type:"submit"},r.a.createElement(q.b,null))))}}]),t}(n.Component),re=Object(S.createMuiTheme)({palette:{primary:te.blueGrey},typography:{useNextVariants:!0}}),oe=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){},a.state={roomId:null,messages:[],joinableRooms:[],joinedRooms:[]},a.getRooms=function(){a.currentUser.getJoinableRooms().then(function(e){a.setState({joinableRooms:e,joinedRooms:a.currentUser.rooms})}).catch(function(e){return console.log("error on joinableRooms: ",e)})},a.subscribeToRoom=function(e){a.setState({messages:[]}),a.currentUser.subscribeToRoom({roomId:e,hooks:{onNewMessage:function(e){a.setState({messages:[].concat(Object(Q.a)(a.state.messages),[e])})}}}).then(function(e){a.setState({roomId:e.id}),a.getRooms()}).catch(function(e){return console.log("error on subscribing to room: ",e)})},a.sendMessage=function(e){a.currentUser.sendMessage({text:e,roomId:a.state.roomId})},a.createRoom=function(e){a.currentUser.createRoom({name:e}).then(function(e){a.subscribeToRoom(e.id)}).catch(function(e){return console.log("error with createRoom: ",e)})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.profile;return new K.a.ChatManager({instanceLocator:L,userId:""+t.firstname,tokenProvider:new K.a.TokenProvider({url:"https://us1.pusherplatform.io/services/chatkit_token_provider/v1/02e338e5-52be-4ad3-974b-077d4dee6702/token"})}).connect().then(function(t){e.currentUser=t,e.getRooms(),console.log(e.currentUser)}).catch(function(e){return console.log("error on connecting",e)}),r.a.createElement(S.MuiThemeProvider,{theme:re},r.a.createElement("div",{className:"chatbox"},r.a.createElement(p.i,{container:!0,direction:"row"},r.a.createElement(p.i,{item:!0,xs:9},r.a.createElement(p.n,{square:!0,className:"box"},r.a.createElement(Z,{roomId:this.state.roomId,messages:this.state.messages}))),r.a.createElement(p.i,{item:!0,xs:3},r.a.createElement(p.n,{square:!0,className:"box"},r.a.createElement(ee,{subscribeToRoom:this.subscribeToRoom,rooms:[].concat(Object(Q.a)(this.state.joinableRooms),Object(Q.a)(this.state.joinedRooms)),roomId:this.state.roomId}))),r.a.createElement(p.i,{item:!0,xs:9},r.a.createElement(p.n,{square:!0,className:"bottom-box"},r.a.createElement($,{disabled:!this.state.roomId,sendMessage:this.sendMessage}))),r.a.createElement(p.i,{item:!0,xs:3},r.a.createElement(p.n,{square:!0,className:"bottom-box"},r.a.createElement(ne,{createRoom:this.createRoom}))))))}}]),t}(n.Component),ce=Object(j.b)(function(e){return{profile:e.firebase.profile}})(oe),se=[{question:"What does CSS stand for?",answers:["Computer Style Sheets","Creative Style Sheets","Cascading Style Sheets","Colorful Style Sheets"],correct:3},{question:"Where in an HTML document is the correct place to refer to an external style sheet?",answers:["In the <head> section","In the <body> section","At the end of the document","You can't refer to an external style sheet"],correct:1},{question:"Which HTML tag is used to define an internal style sheet?",answers:["<style>","<script>","<headStyle>","<css>"],correct:1},{question:"Which HTML attribute is used to define inline styles?",answers:["class","style","font","styles"],correct:2},{question:"Which is the correct CSS syntax?",answers:["{body:color=black;}","{body;color:black;}","body:color=black;","body {color: black;}"],correct:4},{question:"How do you insert a comment in a CSS file?",answers:["' this is a comment","/* this is a comment */","// this is a comment","// this is a comment //"],correct:2},{question:"Which property is used to change the background color?",answers:["color","bgcolor","background-color","bgColor"],correct:3},{question:"How do you add a background color for all <h1> elements?",answers:["all.h1 {background-color:#FFFFFF;}","h1.setAll {background-color:#FFFFFF;}","h1.all {background-color:#FFFFFF;}","h1 {background-color:#FFFFFF;}"],correct:4}],ie=(a(6342),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isAnswered:!1,classNames:["","","",""]},a.checkAnswer=function(e){if(!a.props.isAnswered){var t=e.currentTarget,n=a.props,r=n.correct,o=n.increaseScore,c=Number(t.dataset.id),s=a.state.classNames;c===r?(s[c-1]="right",o()):s[c-1]="wrong",a.setState({classNames:s}),a.props.showButton()}},a.shouldComponentUpdate=function(){return a.state.classNames=["","","",""],!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.answers,t=this.state.classNames;return console.log(this.state),r.a.createElement("div",{id:"answers"},r.a.createElement("ul",null,r.a.createElement("li",{onClick:this.checkAnswer,className:t[0],"data-id":"1"},r.a.createElement("span",null,"A")," ",r.a.createElement("p",null,e[0])),r.a.createElement("li",{onClick:this.checkAnswer,className:t[1],"data-id":"2"},r.a.createElement("span",null,"B")," ",r.a.createElement("p",null,e[1])),r.a.createElement("li",{onClick:this.checkAnswer,className:t[2],"data-id":"3"},r.a.createElement("span",null,"C")," ",r.a.createElement("p",null,e[2])),r.a.createElement("li",{onClick:this.checkAnswer,className:t[3],"data-id":"4"},r.a.createElement("span",null,"D")," ",r.a.createElement("p",null,e[3]))))}}]),t}(n.Component)),le=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={time:"start",title:"Welcome to Quizz",text:"This is a quiz application built using ReactJS. <br /><br /> Currently it's loaded with CSS questions from W3Scools, but you can easily load any type of questions into it. <br /><br /> It will dynamically load the question->answers pair and upload them into the components.",buttonText:"Start the quiz"},a.popupHandle=function(){"start"===a.state.time?(a.setState({time:"end",title:"Congratulations!",buttonText:"Restart"}),a.props.startQuiz()):window.location.reload()},a.componentWillReceiveProps=function(e){a.setState({text:"You have completed the quiz. <br /> You got: <strong>"+a.props.score+"</strong> out of <strong>"+a.props.total+"</strong> questions right."})},a.createMarkup=function(e){return{__html:e}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.text,n=e.buttonText,o=this.props.style;return r.a.createElement("div",{className:"popup-container",style:o},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-md-8 col-md-offset-2"},r.a.createElement("div",{className:"popup"},r.a.createElement("h1",null,t),r.a.createElement("p",{dangerouslySetInnerHTML:this.createMarkup(a)}),r.a.createElement("button",{className:"fancy-btn",onClick:this.popupHandle},n)))))}}]),t}(n.Component),ue=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={nr:0,total:se.length,showButton:!1,questionAnswered:!1,score:0,displayPopup:"flex"},a.pushData=function(e){a.setState({question:se[e].question,answers:[se[e].answers[0],se[e].answers[1],se[e].answers[2],se[e].answers[3]],correct:se[e].correct,nr:a.state.nr+1})},a.componentWillMount=function(){var e=a.state.nr;a.pushData(e)},a.nextQuestion=function(){var e=a.state,t=e.nr,n=e.total;e.score;t===n?a.setState({displayPopup:"flex"}):(a.pushData(t),a.setState({showButton:!1,questionAnswered:!1}))},a.handleShowButton=function(){a.setState({showButton:!0,questionAnswered:!0})},a.handleStartQuiz=function(){a.setState({displayPopup:"none",nr:1})},a.handleIncreaseScore=function(){a.setState({score:a.state.score+1})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.nr,a=e.total,n=e.question,o=e.answers,c=e.correct,s=e.showButton,i=e.questionAnswered,l=e.displayPopup,u=e.score;return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement(le,{style:{display:l},score:u,total:a,startQuiz:this.handleStartQuiz}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-10 col-lg-offset-1"},r.a.createElement("div",{id:"question"},r.a.createElement("h4",null,"Question ",t,"/",a),r.a.createElement("p",null,n)),r.a.createElement(ie,{answers:o,correct:c,showButton:this.handleShowButton,isAnswered:i,increaseScore:this.handleIncreaseScore}),r.a.createElement("div",{id:"submit"},s?r.a.createElement("button",{className:"fancy-btn",onClick:this.nextQuestion},t===a?"Finish quiz":"Next question"):null)))):r.a.createElement(O.a,{to:"/signin"})}}]),t}(n.Component),me=Object(j.b)(function(e){return{auth:e.firebase.auth}})(ue),he=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(k.a,null,r.a.createElement("div",null,r.a.createElement(I,null),r.a.createElement(R.a,null,r.a.createElement(F.a,{exact:!0,path:"/",component:C}),r.a.createElement(F.a,{path:"/project/:id",component:T}),r.a.createElement(F.a,{path:"/signin",component:z}),r.a.createElement(F.a,{path:"/signup",component:W}),r.a.createElement(F.a,{path:"/createproject",component:J}),r.a.createElement(F.a,{path:"/quiznew",component:me}),r.a.createElement(F.a,{path:"/chat",component:ce}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var de={authError:null,errorModal:!1},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("Login Failed"),Object(G.a)({},e,{authError:"Login Failed",errorModal:!0});case"LOGIN_SUCCESS":return console.log("Login Success"),Object(G.a)({},e,{authError:null});case"LOGOUT_SUCCESS":return console.log("signedOut Successfully "),e;case"SIGNUP_SUCCESS":return console.log("Signup success"),Object(G.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("Signup Failed"),Object(G.a)({},e,{authError:t.err.message,errorModal:!0});case"CLOSE":return Object(G.a)({},e,{errorModal:!1});default:return e}},fe={projects:[{id:"1",title:"help me find peach",content:"blah blah blah"},{id:"2",title:"collect all the stars",content:"blah blah blah"},{id:"3",title:"egg hunt with yoshi",content:"blah blah blah"}]},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log(t.project),e;case"CREATE_PROJECT_ERROR":return console.log(t.err),e;default:return e}},Ee=a(153),ge=Object(v.c)({auth:pe,project:be,firestore:Ee.firestoreReducer,firebase:y.firebaseReducer}),je=a(530),ve=a(204),ye=a.n(ve);a(6416),a(6421);ye.a.initializeApp({apiKey:"AIzaSyAjCXuc__dz8Gs18zleOcdycbCN54_r64o",authDomain:"material-f4f7f.firebaseapp.com",databaseURL:"https://material-f4f7f.firebaseio.com",projectId:"material-f4f7f",storageBucket:"material-f4f7f.appspot.com",messagingSenderId:"388107087036"}),ye.a.firestore().settings({timestampsInSnapshots:!0});var Oe=ye.a,Se=Object(v.e)(ge,Object(v.d)(Object(v.a)(je.a.withExtraArgument({getFirebase:y.getFirebase,getFirestore:Ee.getFirestore})),Object(y.reactReduxFirebase)(Oe,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0}),Object(Ee.reduxFirestore)(Oe)));Se.firebaseAuthIsReady.then(function(){c.a.render(r.a.createElement(j.a,{store:Se},r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})}},[[5816,1,2]]]);
//# sourceMappingURL=main.92c616d9.chunk.js.map