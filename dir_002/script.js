class App{constructor(e){this.$={},this.$.divParent=$(e),this.router=new AppRouter(this,this.$.divParent),this.inSafariMode=!1;let t=this.getBrowser();"safari"===t.name.toLocaleLowerCase()&&parseInt(t.version,10)<=14&&0==this.checkIsIOS()&&(this.inSafariMode=!0),1==this.inSafariMode&&this.$.divParent.addClass("safariMode"),this.buildDom(),this.cacheRefs(),this.subscribeEvents(),this.router.route(),this.clearInitialErrors()}clearInitialErrors(){this.intialErrorClearCount=100,this.intialErrorClearTime=20,this.initialErrorClearInterval=setInterval(()=>{this.intialErrorClearCount--,this.intialErrorClearCount<=0&&clearInterval(this.initialErrorClearInterval),console.clear()},this.intialErrorClearTime)}buildDom(){this.header=new Header(this,this.$.divParent),this.pages=[new PageHome(this,this.$.divParent),new PageAgenda(this,this.$.divParent),new PageSessions(this,this.$.divParent),new PageSession(this,this.$.divParent),new PageSpeakers(this,this.$.divParent),new PageFAQ(this,this.$.divParent),new Page404(this,this.$.divParent)],this.footer=new Footer(this.$.divParent),this.modalSystem=new ModalSystem(this,this.$.divParent),this.recaptchaHelper=new RecaptchaHelper(this,this.$.divParent)}cacheRefs(){}subscribeEvents(){}getBrowser(){var e,t=navigator.userAgent,i=t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(i[1])?{name:"IE",version:(e=/\brv[ :]+(\d+)/g.exec(t)||[])[1]||""}:"Chrome"===i[1]&&null!=(e=t.match(/\bOPR|Edge\/(\d+)/))?{name:"Opera",version:e[1]}:(i=i[2]?[i[1],i[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(e=t.match(/version\/(\d+)/i))&&i.splice(1,1,e[1]),{name:i[0],version:i[1]})}checkIsIOS(){return!window.MSStream&&/iPad|iPhone|iPod/.test(navigator.userAgent)}}App.strings={ATT:"AT&T",STE:"Securing the Everything!",Logo:"2022 AT&T Security Conference",Reg:"Register Free"};class AppRouter{constructor(e,t){this.app=e,this.$={},this.$.divParent=$(t),this.events=new Events(["onRoute"]),this.subscribeEvents()}subscribeEvents(){window.addEventListener("hashchange",this.handleHashChange.bind(this))}handleHashChange(e){this.route()}route(){let t=window.location.hash.substr(1);var e=(t=t.split("/"))[1];if("register"==(t=t[0]))return this.switchPage("home"),void this.app.modalSystem.showRegisterModal();0==t.length?this.switchPage("home"):1!=this.app.pages.filter(e=>e.constructor.pageSlug==t).length?this.switchPage("404"):this.switchPage(t,e)}switchPage(t,e){window.scrollTo(0,0),this.$.divParent.find(".page").hide(),this.$.divParent.find(".page_"+t).show();let i=this.app.pages.filter(e=>e.constructor.pageSlug==t)[0];i.show(e),this.events.onRoute.fire([t])}}class PageSessions{constructor(e,t){this.app=e,this.$={},this.$.divParent=$(t),this.tags=this.parseUniqueTags(App.presentations),this.buildDom(),this.cacheRefs(),this.subscribeEvents(),this.agendaItems=[],this.buildAgendaItems(App.presentations),this.selectedTag=null,this.updateSelectedTag(),this.filterAgendaItems(),this.sponsors=new SponsorsArea(this.app,this.$.sponsors)}buildDom(){var e=this.constructor.pageSlug;let i='<div class="tag" tag="all">ALL</div>';for(let t=0;t<this.tags.length;t++){let e=this.tags[t];var a=e.toUpperCase();i+=`
                <div class="tag noselect" tag="${e}">${a}</div>
            `}this.$.dom=$(`
			<div class="page_${e} page">

                <!-- page title -->
                <div align="center">
                    <div class="attHeader2022"><h1 class="noStyle">20<span>22</span> <div class="subtitle" style="display:inline-block">SESSIONS</div></h1></div>
                </div>

                <div align="center">

                    <div class="outerWraper" align="left">

                        <a class="pdfAgendaLink" href="/assets/Agenda_2022.pdf" target="_blank">Download Full Schedule PDF</a>
                        
                        <div class="filterGrid">

                            <div class="filterByKeyword">Filter By Keyword</div>
                            <div class="filterByTopics">Filter By Topics</div>

                            <!-- search box to filter by -->
                            <div class="searchBoxxy">
                                <input class="txtSearch" type="text" name="txtSearch" />
                            </div>

                            <!-- list of tags to filter by -->
                            <div class="tagListBox">
                                ${i}
                            </div>

                        </div>

                        <div class="agendaItemsContainer" align="center"></div>

                    <!-- /outerWraper -->
                    </div>
                
                </div>
                
                <!-- sponsers area container -->
				<div class="sponsors"></div>

			</div>
		`),this.$.divParent.append(this.$.dom)}buildAgendaItems(t){for(let e=0;e<t.length;e++){var i=t[e];i.presenters.length<=0||(i=new AgendaItem(this,this.$.agendaItemsContainer,i),this.agendaItems.push(i))}}cacheRefs(){this.$.tags=this.$.dom.find(".tag"),this.$.txtSearch=this.$.dom.find(".txtSearch"),this.$.agendaItemsContainer=this.$.dom.find(".agendaItemsContainer"),this.$.sponsors=this.$.dom.find(".sponsors")}subscribeEvents(){this.$.tags.on("click",this.filterByTag.bind(this)),this.$.txtSearch.on("keyup",this.filterBySearch.bind(this))}filterByTag(e){this.$.txtSearch.val("");let t=$(e.target);e=t.attr("tag");this.selectedTag==e||"all"==e?this.selectedTag=null:this.selectedTag=e,this.updateSelectedTag(),this.filterAgendaItems()}updateSelectedTag(){this.$.tags.removeClass("sel");var e=null==this.selectedTag?"all":this.selectedTag;this.$.dom.find(`.tag[tag="${e}"]`).addClass("sel")}filterBySearch(e){this.selectedTag=null,this.updateSelectedTag(),this.filterAgendaItems()}filterAgendaItems(){var i=this.$.txtSearch.val();for(let t=0;t<this.agendaItems.length;t++){let e=this.agendaItems[t];null!=this.selectedTag?e.setVisibility(e.checkMatchesTag(this.selectedTag)):""!=i?e.setVisibility(e.checkMatchesSearch(i)):e.show()}}show(){}parseUniqueTags(e){let t=[];for(var i=0;i<e.length;i++)for(var a=e[i],s=0;s<a.tags.length;s++){var o=a.tags[s].toUpperCase();0==t.includes(o)&&t.push(o)}return t=t.sort()}}PageSessions.pageSlug="sessions",PageSessions.pageRoutes=["sessions","/sessions"];var rulesGameLinkUS="https://tcmedia.akamaized.net/conference/2022/docs/2022_Cybersecurity_Conference_Game_Rules.pdf",rulesEslewhere="https://tcmedia.akamaized.net/conference/2022/docs/GDPR_guest_event_policy.pdf";window.eulas=[`<p>
		I agree and consent that AT&T, and their affiliated companies, as well as third parties acting on AT&T’s behalf, may process personal data from or about me as outlined in the AT&T Event Guest GDPR Privacy Notice, dated April 2018 to be necessary to register me and facilitate my participation at the event. I agree and consent that AT&T may process my data effective from today and for up to six months after the last day of the event, although I understand I may withdraw my consent at any time. I am aware of my rights regarding the processing of personal data as summarized in the <a href="https://www.corp.att.com/worldwide/wp-content/uploads/sites/121/2019/01/ATT_Event_Guests_Privacy_NoticeApril-2018.pdf" target="_blank">AT&T Event Guest GDPR Privacy Notice</a>
	</p>
	<p>
		The Security Conference will include a Sweepstakes with prizes. The Sweepstakes is open to legal residents of the 50 United States and District of Columbia who are participants in the Security Conference. The Official Rules for the Sweepstakes located <a href="${rulesEslewhere}" target="_blank">here</a>.
	</p>`,`<p>
		I agree and consent that AT&T, and their affiliated companies, as well as third parties acting on AT&T’s behalf, may process personal data from or about me as outlined in the <a href="https://about.att.com/privacy.html" target="_blank">AT&T Privacy Policy</a> to be necessary to register me and facilitate my participation at the event. I agree and consent that AT&T may process my data effective from today and for up to six months after the last day of the event, although I understand I may withdraw my consent at any time. I am aware of my rights regarding the processing of personal data as summarized in <a href="https://about.att.com/privacy.html" target="_blank">AT&T Privacy Policy</a>.
	</p>
	<p>
		The Security Conference event will include a Sweepstakes with prizes. The Sweepstakes is open to legal residents of the 50 United States and District of Columbia who are participants in the Security Conference. The Official Rules for the Sweepstakes located <a href="${rulesGameLinkUS}" target="_blank">here</a>. 
	</p>
	<p>
		<strong>Personal information consent for additional Sponsors:</strong><br>
		We will distribute attendee information to  additional Sponsors hosting speaking sessions to help foster networking and continued discussions. This information will include your name, title, company and email address. If you do not wish to be included on this list, check this box.
		<br>
		<span style="display:inline-block; width: 50px;"></spam><label class="lblDontShareMyInfo"><input type="checkbox" class="chkDontShareMyInfo"></input>&nbsp;&nbsp;I do not want my information shared</label> 
	</p>`];class Events{constructor(e){e=void 0===e?[]:e;for(var t=0;t<e.length;t++)this[e[t]]=new EventsEvent}addEvent(e){this[e]=new EventsEvent}addEvents(t){if(0!=Array.isArray(t))for(let e=0;e<t.length;e++){var i=t[e];this.addEvent(i)}}hasEvent(e){return!(null==this[e]||void 0===this[e])}}class EventsEvent{constructor(){this.listenerCounter=0,this.listeners=[]}addListener(e){this.listenerCounter++;e={id:this.listenerCounter,func:e};return this.listeners.push(e),e.id}fire(e){for(var t=0;t<this.listeners.length;t++)this.listeners[t].func.apply(null,e)}removeListener(e){for(var t=0;t<this.listeners.length;t++){var i=this.listeners[t];if(i.id==e||i.func==e)return this.listeners.splice(t,1),i.func}return null}}class RecaptchaHelper{constructor(e,t){this.app=e,this.$={},this.$.divParent=$(t),this.RECAPTCHA_CLIENT_SITE_KEY="",this.RECAPTCHA_API="",this.getRecaptchaScript()}buildDom(e){var{apiUrl:e,clientKey:t}=e.data,e=(this.RECAPTCHA_CLIENT_SITE_KEY=t,(this.RECAPTCHA_API=e)+"?render="+t);this.$.recaptchaScript=$(`
			<script type="text/javascript" src="${e}" id="recaptcha-key"></script>
		`),this.$.divParent.append(this.$.recaptchaScript),this.waitForRecaptchaInterval=setInterval(()=>{void 0!==window.grecaptcha&&(window.grecaptcha.ready(this.onRecaptchaReady.bind(this)),clearInterval(this.waitForRecaptchaInterval))},1)}onRecaptchaReady(){}async getRecaptchaScript(){let e=axios.create({baseURL:"/api",headers:{accept:"application/json","cache-control":"no-cache"},timeout:5e3});try{await e.get("/captcha").then(this.buildDom.bind(this)).catch(e=>{})}catch(e){e.response={}}}}class Util{constructor(){}static getUrlHashParam(e){let t=window.location.hash.substr(1),i=t.split("&"),a={};for(let e=0;e<i.length;e++){var s=i[e].split("="),o=s[0],s=s[1];a[o]=s}return void 0===a[e]?null:a[e]}static checkParentsForClass(e,t){for(;;){if(e.hasClass(t))return e;if(e.parent().length<=0)return!1;e=e.parent()}}static parseParams(e,t){if(void 0===e)return t;if(null==e)return t;for(var i=Object.entries(t),a=0;a<i.length;a++){var s=i[a][0];e[s]=(void 0!==e[s]?e:t)[s]}return e}static createLongPressEvent(e,t){new function(){this.cb=t,e.on("mousedown",e=>{this.mouseStillDown=!0,this.event=e,setTimeout(()=>{1==this.mouseStillDown&&this.cb(this.event)},1e3)}),$("body").on("mouseup",()=>{this.mouseStillDown=!1})}}}Util.ipsum=`Milk the cow friends are not food scream at teh bath catch eat throw up catch eat throw up bad birds but run up and down stairs. Stare out cat door then go back inside find empty spot in cupboard and sleep all day. Eat the rubberband jump around on couch, meow constantly until given food, . Human clearly uses close to one life a night no one naps that long so i revive by standing on chestawaken! car rides are evil. Cat snacks your pillow is now my pet bed or your pillow is now my pet bed or lie in the sink all day and meow meow we are 3 small kittens sleeping most of our time, we are around 15 weeks old i think, i don’t know i can’t count. Skid on floor, crash into wall meowing chowing and wowing and miaow then turn around and show you my bum. Poop on grasses i shredded your linens for you so mewl for food at 4am. Intently stare at the same spot roll over and sun my belly so i vomit in the bed in the middle of the night, whenever a door is opened, rush in before the human so oooo! dangly balls! jump swat swing flies so sweetly to the floor crash move on wash belly nap catch small lizards, bring them into house, then unable to find them on carpet. Scratch at the door then walk away flee in terror at cucumber discovered on floor reaches under door into adjacent room poop on floor and watch human clean up. Kitty loves pigs. Rub butt on table my left donut is missing, as is my right adventure always jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life am in trouble, roll over, too cute for human to get mad. Intently sniff hand i’m so hungry i’m so hungry but ew not for that paw at your fat belly. Scratch my tummy actually i hate you now fight me tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad for use lap as chair tuxedo cats always looking dapper yet mew mew. Cat is love, cat is life asdflkjaertvlkjasntvkjn (sits on keyboard) and meow in empty rooms. Eat owner's food. Run around the house at 4 in the morning commence midnight zoomies. Flee in terror at cucumber discovered on floor lick sellotape for behind the couch chase mice, yet please stop looking at your phone and pet me and meow all night.

Lick left leg for ninety minutes, still dirty throwup on your pillow ooh, are those your $250 dollar sandals? lemme use that as my litter box. Stick butt in face knock dish off table head butt cant eat out of my own dish for good morning sunshine i vomit in the bed in the middle of the night. Let me in let me out let me in let me out let me in let me out who broke this door anyway cats are the world, for take a deep sniff of sock then walk around with mouth half open and instantly break out into full speed gallop across the house for no reason or one of these days i'm going to get that red dot, just you wait and see stare at ceiling light. Kitty scratches couch bad kitty time to go zooooom so push your water glass on the floor. Rub against owner because nose is wet destroy couch, and fight own tail stretch touch water with paw then recoil in horror bite nose of your human or chase red laser dot. Lick human with sandpaper tongue get video posted to internet for chasing red dot i bet my nine lives on you-oooo-ooo-hooo and rub my belly hiss so lick the plastic bag and make muffins pelt around the house and up and down stairs chasing phantoms. Rub butt on table sniff other cat's butt and hang jaw half open thereafter bite off human's toes so eat all the power cords tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad for jump on counter removed by human jump on counter again removed by human meow before jumping on counter this time to let the human know am coming back.

Sleeping in the box purr. Eat half my food and ask for more asdflkjaertvlkjasntvkjn (sits on keyboard) or i shredded your linens for you. Hate dogs chew iPad power cord growl at dogs in my sleep i like fish. Purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table playing with balls of wool, time to go zooooom for head nudges so claws in your leg. Chase laser kitty poochy and need to chase tail, and need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me yet human is behind a closed door, emergency! abandoned! meeooowwww!!!. Drink water out of the faucet eat the rubberband and give me attention or face the wrath of my claws making bread on the bathrobe jump on counter removed by human jump on counter again removed by human meow before jumping on counter this time to let the human know am coming back or sleep on my human's head. Bite nose of your human fat baby cat best buddy little guy but snuggles up to shoulders or knees and purrs you to sleep. So you're just gonna scroll by without saying meowdy? check cat door for ambush 10 times before coming in i’m so hungry i’m so hungry but ew not for that to pet a cat, rub its belly, endure blood and agony, quietly weep, keep rubbing belly or then cats take over the world scratch the postman wake up lick paw wake up owner meow meow. I see a bird i stare at it i meow at it i do a wiggle come here birdy chase red laser dot scamper stare out cat door then go back inside and cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip stare at ceiling, so intently stare at the same spot. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am where is it? i saw that bird i need to bring it home to mommy squirrel! or pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now pose purrfectly to show my beauty or eat plants, meow, and throw up because i ate plants kitty time. Poop in the plant pot cough hairball on conveniently placed pants so hunt anything that moves, or chirp at birds, kitten is playing with dead mouse stares at human while pushing stuff off a table. I hate cucumber pls dont throw it at me if human is on laptop sit on the keyboard, behind the couch fight an alligator and win. Check cat door for ambush 10 times before coming in scratch at the door then walk away yet be superior so cats are fats i like to pets them they like to meow back for sit on the laptop yet lick the other cats the fat cat sat on the mat bat away with paws. Catto munch salmono get scared by doggo also cucumerro yet meow meow you are my owner so here is a dead bird so purr purr purr until owner pets why owner not pet me hiss scratch meow make meme, make cute face why use post when this sofa is here groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked. Paw at your fat belly drink from the toilet my left donut is missing, as is my right jump on counter removed by human jump on counter again removed by human meow before jumping on counter this time to let the human know am coming back.`;class AgendaItem{constructor(e,t,i,a){this.page=e,this.presentation=i,this.extraOptions=Util.parseParams(a,{useOn24Link:!1,openLinkInNewTab:!1}),this.$={},this.$.divParent=$(t),this.buildDom(),this.cacheRefs(),this.subscribeEvents()}buildDom(){var t=this.presentation,e=t.on24data.title,i=encodeURIComponent(e.replace(/ /gi,"_")),i=this.extraOptions.useOn24Link?t.on24data.url:`#session/${t.on24id}/`+i,a=1==this.extraOptions.openLinkInNewTab?"_blank":"";let s=!1;var o=(s=void 0!==t.isKeynote&&1==t.isKeynote?!0:s)?"Keynote":"Talk",n=s?"keyNoteBox":"talkBox",r=t.on24data.thumbnail;let l="";if(""!=t.presentersData[0]&&0!=t.presentersData[0])for(let e=0;e<t.presentersData.length;e++){var{id:d,fullName:h}=t.presentersData[e];l+=`<div class="speaker" speakerID="${d}">${h}</div>`}var p=t.isSponsor?"sponsorMode":"";this.$.dom=$(`

			<div class="agendaItemBox ${p} ${n}">

				<div class="talkTypeBox">${o}</div>

				<div class="talkIsLiveBox">LIVE</div>

				<a target="${a}" href="${i}"">
					<div class="thumbnail">
						<img src="${r}"></img>
						<div class="hoverMask">
							<div class="hoverGradient"></div>
						</div>
					</div>
					<h1>${e}</h1>
				</a>

				<!-- list of speakers for this talk -->
				<div class="agendaItemSpeakers">
					${l}</br>&nbsp;
				</div>

				<!-- normally hidden box with talk details -->
				<div class="talkDesc">${t.desc}</div>

				<!-- sponsor session box -->
				<div class="networkingSession">
					Networking Session to follow: <span>${t.networkSessionRange}</span>
				</div>

			</div>
		`),this.$.divParent.append(this.$.dom)}cacheRefs(){this.$.speakers=this.$.dom.find(".speaker")}subscribeEvents(){this.$.speakers.on("click",this.showSpeakerModal.bind(this))}showSpeakerModal(e){e=$(e.target);let t=Util.checkParentsForClass(e,"speaker"),i=(console.log(e,t),parseInt(t.attr("speakerid"),10));e=this.presentation.presentersData.filter(e=>e.id==i)[0];this.page.app.modalSystem.showSpeakerModal(e)}checkMatchesSearch(e){for(var t=this.presentation.title.toUpperCase(),i=e.toUpperCase().split(" "),a=0;a<i.length;a++){var s=i[a];if(-1!=t.indexOf(s))return!0}return!1}checkMatchesTag(e){let t=this.presentation.tags.map(e=>e.toUpperCase());return t.includes(e.toUpperCase())}setVisibility(e){e?this.show():this.hide()}show(){this.$.dom.show()}hide(){this.$.dom.hide()}showFullMode(e){1==e?this.$.dom.addClass("fullMode"):this.$.dom.removeClass("fullMode")}}class AnimatedBG{constructor(e,t){this.app=e,this.$={},this.$.divParent=$(t),this.currentPage="home",this.pageRingsMap=new Map,this.buildDom(),this.cacheRefs(),this.subscribeEvents(),this.resizeCanvas(),this.renderAnimationFrame()}buildDom(){var e=$('<canvas class="bgCanvas"></canvas>');this.$.divParent.append(e),this.canvas=e[0],this.ctx=this.canvas.getContext("2d")}cacheRefs(){}subscribeEvents(){window.addEventListener("resize",this.resizeCanvas.bind(this))}resizeCanvas(e){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}addRingsFromPage(e){var t=e.constructor.pageSlug;let i=e.$.dom,a=i.find(".ring"),s=[];var o=this;a.each(function(){var e=$(this),e=new BGRing(o.app,o,i,e);s.push(e)}),this.pageRingsMap.set(t,s)}addRingsFromPages(t){for(let e=0;e<t.length;e++)this.addRingsFromPage(t[e])}renderAnimationFrame(){this.ctx.clearRect(0,0,innerWidth,innerHeight);let t=this.pageRingsMap.get(this.currentPage);if(void 0!==t)for(let e=0;e<t.length;e++)t[e].render();window.requestAnimationFrame(this.renderAnimationFrame.bind(this))}}class BGRing{constructor(e,t,i,a){this.id=BGRing.ringIDCounter++,this.app=e,this.animatedBG=t,this.ctx=this.animatedBG.ctx,this.$={},this.$.ring=a,this.$.pageDom=i,this.assignedID=a.attr("ringid"),this.radius=parseInt(a.attr("radius"),10),this.strokeColor=a.attr("color"),this.isDotted="true"===a.attr("dotted").toLowerCase(),this.startCW="true"===a.attr("startCW").toLowerCase(),this.anchorClassName=a.attr("anchor"),this.$.anchor=this.$.pageDom.find("."+this.anchorClassName),this.$.dots=a.find(".orbitDot");var r=this;this.dots=[],this.$.dots.each(function(){let e=$(this);var t=parseInt(e.attr("radius"),10),i=90-parseInt(e.attr("angle"),10),a=i*(Math.PI/180),s=e.attr("color");let o=e.attr("extend");o=void 0===o?"0%":o,o=parseInt(o.replace(/\%/gi,""),10);var n=parseInt(r.radius*((100+o)/100),10),i={angle:i,angleRad:a,radius:t,diameter:2*t,color:s,extendAmount:o,pivotArmLength:n};r.dots.push(i)}),this.subscribeEvents()}subscribeEvents(){}render(){let t=this.ctx;var e=this.$.anchor.offset(),i=e.left-window.scrollX,a=e.top-window.scrollY;t.fillStyle="black",t.fillRect(i,a,5,5),t.beginPath(),t.arc(i,a,this.radius,0,2*Math.PI,!1),t.strokeStyle=this.strokeColor,t.stroke();for(let e=0;e<this.dots.length;e++){var s=this.dots[e],o=i+Math.sin(s.angleRad)*s.pivotArmLength,n=a+Math.cos(s.angleRad)*s.pivotArmLength;t.beginPath(),t.arc(o,n,s.radius,0,2*Math.PI,!1),t.fillStyle=s.color,t.fill(),t.beginPath(),t.moveTo(i,a),t.lineTo(o,n),t.strokeStyle="red",t.stroke()}}}BGRing.ringIDCounter=0;class BGRingSystem{constructor(e,t){this.ringNumber=BGRingSystem.ringNumberCounter++;var i=e.attr("ringid");this.$={},this.$.ring=e,this.$.anchor=t.find(".ringAnchor_"+i),this.buildDom(),this.cacheRefs(),this.subscribeEvents(),this.repose()}buildDom(){var s=parseInt(this.$.ring.attr("radius"),10),e=this.$.ring.attr("color"),t="true"==this.$.ring.attr("dotted").toLowerCase(),i="true"==this.$.ring.attr("startCW").toLowerCase(),t=(1==t&&this.$.ring.addClass("dotted"),2*s);this.$.ring.css({width:t+"em",height:t+"em",borderRadius:t+"em"}),this.$.ring.css("border-color",e);let o=$('<div class="pivot"></div>');this.$.ring.append(o),o.css("animationDelay",`-${2e3*this.ringNumber}ms`),0==i&&o.css("animationName","slightMovementCCW");var n=this.$.ring.find(".orbitDot");for(let a=0;a<n.length;a++){let e=$(n[a]);e.detach(),o.append(e);var r=parseInt(e.attr("radius"),10),l=parseInt(e.attr("angle"),10),d=e.attr("color");let t=e.attr("extend");t=void 0===t?"0%":t,t=parseInt(t.replace(/\%/gi,""),10);var r=2*r,h=parseInt(s*((100+t)/100),10);e.css({width:h+"em",transform:`rotateZ(${l}deg)`});let i=$('<div class="dot"></div>');i.css({width:r+"em",height:r+"em",borderRadius:r+"em",background:d}),e.append(i)}}cacheRefs(){}subscribeEvents(){window.addEventListener("resize",this.repose.bind(this)),window.addEventListener("scroll",this.repose.bind(this)),$(document).ready(this.repose.bind(this))}repose(e){var t=this.$.anchor.offset();let i=this.$.ring.attr("offset");if(void 0!==i){i=i.replace(/\ /gi,"").split(",");for(let e=0;e<i.length;e++)i[e]=parseInt(i[e],10);i.x=i[0],i.y=i[1]}else i={x:0,y:0};this.$.ring.css({left:t.left+i.x+"px",top:t.top+i.y+"px"})}}class RingResizer{constructor(e,t,i){this.ring=e,this.targ=t[0],this.compareWidth=i,this.resizeObserver=new ResizeObserver(this.onResize.bind(this)),this.resizeObserver.observe(this.targ)}onResize(e){let t=$(e[0].target);e=t.width()/this.compareWidth;this.ring.$.ring.css("fontSize",e+"px")}}BGRingSystem.ringNumberCounter=0;class Footer{constructor(e){this.$={},this.$.divParent=$(e),this.buildDom(),this.cacheRefs(),this.subscribeEvents(),this.ste=new STEGraphicsItem(this.$.SECContainerWrapper[0],2)}buildDom(){var e=App.strings.STE;App.strings.Logo,App.strings.Reg;this.$.dom=$(`
			<!-- the footer area -->
			<div class="footer" align="center">
			
				<!-- centered column wrapper that scales responsively -->
				<div class="columnWrapper" align="center">

					<!-- Securing the Everything Graphic-->
					<div class="SECContainerWrapper" align="center" alt="${e}" title="${e}">
						<div class="SECContainerInner">
			
							<!-- particle system thing -->
							<div class="particlesBox">
								<div class="particleGates">
								</div>
								<div class="ovalGate">
								</div>
							</div>
			
							<!-- the fixed "Securing the" text -->
							<div class="txtSecuringThe">
								Securing the
							</div>
			
							<!-- The text that changes -->
							<div class="txtAnimationBox">
								
							</div>
							
						</div>
					</div>

					<div class="rowConcactHeader">CONTACT US: <a class="contactMailTo" href="mailto:security-conf@att.com">security-conf@att.com</a></div>
					<a href="https://www.att.com/legal/terms.attWebsiteTermsOfUse.html" target="_blank"><div class="link">Terms Of Use</div></a><span class="pipe">|</span>
					<a href="http://about.att.com/csr/home/privacy.html" target="_blank"><div class="link">Your Privacy Center</div></a><span class="pipe">|</span>
					<a href="https://about.att.com/sites/accessibility" target="_blank"><div class="link">Accessibility</div></a><span class="pipe">|</span>
					<a href="https://about.att.com/csr/home/privacy/rights_choices.html" target="_blank"><div class="link">Do Not Sell My Personal Information</div></a>
					<div class="clear"></div><br>
					<div class="info">&copy; AT&amp;T Intellectual Property. All rights reserved. AT&amp;T, the AT&amp;T logo and all other AT&amp;T marks contained herein are trademarks of AT&amp;T intellectual property and/or AT&amp;T affiliated companies. FirstNet and the FirstNet logo are registered trademarks and service marks of the First Responder Network Authority. All otehr marks are the property of their respive owners.</div>

				<!-- /columnWrapper -->
				</div>

			<!-- /footer -->
			</div>
		`),this.$.divParent.append(this.$.dom)}cacheRefs(){this.$.SECContainerWrapper=this.$.dom.find(".SECContainerWrapper")}subscribeEvents(){}}class Header{constructor(e,t){this.app=e,this.$={},this.$.divParent=$(t),this.scrollThreshold=650,this.buildDom(),this.cacheRefs(),this.subscribeEvents(),this.handlePageScroll(),this.ste=new STEGraphicsItem(this.$.secWrapper[0],2)}buildDom(){var e=App.strings.STE,t=App.strings.Logo,i=App.strings.Reg,a=App.isDayOf?"dayOf":"",s=App.isDayOf?"":'<a href="/#sessions"><div class="navButton nav_sessions">Sessions</div></a>',o=App.isDayOf?'<a href="/#agenda"><div class="navButton nav_sessions highlight"><span>Watch Live</span></div></a>':"";this.$.dom=$(`
			<!-- header that appears after scrolling -->
			<div class="pageHeader ${a}" align="center">

				<!-- Securing the Everything Graphic-->
				<div class="SECContainerWrapperHeader" align="center">
					<div class="SECContainerInner" alt="${e}" title="${e}">
		
						<!-- particle system thing -->
						<div class="particlesBox">
							<div class="particleGates">
							</div>
							<div class="ovalGate">
							</div>
						</div>
		
						<!-- the fixed "Securing the" text -->
						<div class="txtSecuringThe">
							Securing the
						</div>
		
						<!-- The text that changes -->
						<div class="txtAnimationBox">
							
						</div>
						
					</div>
				</div>

				<!-- conference logo (left) and ATT logo (right) -->
				<div class="logoConference" alt="${t}" title="${t}"></div>
				
				<!-- register button -->
				<div class="cmdRegister blueButton hide" alt="${i}" title="${i}">
					<div class="buttonInner">Register Free<span class="material-icons arrow">arrow_right_alt</span></div>
				</div>

				<!-- nav bar -->
				<div class="navBar" align="center">
					<a href="/#"><div class="navButton nav_home">Home</div></a>
					<a href="/#speakers"><div class="navButton nav_speakers">Speakers</div></a>
					${s}
					<div class="navButton nav_register cmdShowRegister">Register</div>
					<a href="/#faq"><div class="navButton nav_faq">FAQ</div></a>
					<!--${o}-->
					
				</div>

			</div>
		`),this.$.attLogo=$(`
			<a href="https://att.com" target="_blank" alt="${App.strings.ATT}" title="${App.strings.ATT}">
				<span class="logoATTpill">
					<div class="logoATT"></div>
				</span>
			</a>
		`),this.$.divParent.append(this.$.dom),this.$.divParent.append(this.$.attLogo)}cacheRefs(){this.$.cmdRegister=this.$.dom.find(".cmdRegister"),this.$.cmdRegister=this.$.dom.find(".cmdShowRegister"),this.$.secWrapper=this.$.dom.find(".SECContainerWrapperHeader")}subscribeEvents(){window.addEventListener("scroll",this.handlePageScroll.bind(this)),this.$.cmdRegister.on("click",()=>{this.app.modalSystem.showRegisterModal()}),this.app.router.events.onRoute.addListener(this.handleRouteChange.bind(this)),this.$.cmdRegister.on("click",()=>{this.app.modalSystem.showRegisterModal()})}handleRouteChange(e){this.$.dom.find(".navButton").removeClass("selected"),this.$.dom.find(".nav_"+e).addClass("selected")}handlePageScroll(e){$(document).scrollTop()>this.scrollThreshold?this.$.dom.addClass("open"):this.$.dom.removeClass("open")}}class ModalSystem{constructor(e,t){this.app=e,this.$={},this.$.divParent=$(t),this.buildDom(),this.cacheRefs(),this.subscribeEvents(),this.buildPopups()}buildDom(){this.$.dom=$(`
			<!-- modal wrapper - where we'll spawn the popup register form, and maybe other popups -->
			<div class="modalPopupWrapper" align="center">
                <div class="registerPopup popupBox">
                    <div class="closeButton" alt="Close Button" title="Close">
                        <span class="material-icons">close</span>
                    </div>
                </div>
                <div class="speakerPopup popupBox">
                    <div class="closeButton" alt="Close Button" title="Close">
                        <span class="material-icons">close</span>
                    </div>
                </div>
            </div>
		`),this.$.divParent.append(this.$.dom)}cacheRefs(){this.$.registerPopup=this.$.dom.find(".registerPopup"),this.$.speakerPopup=this.$.dom.find(".speakerPopup"),this.$.popupBoxes=this.$.dom.find(".popupBox"),this.$.cmdCloseButtons=this.$.dom.find(".popupBox .closeButton")}subscribeEvents(){this.$.cmdCloseButtons.on("click",()=>this.close())}closeViaBackgroundClick(e){var t=!1;this.$.dom.each(function(){$(this)[0]==e.target&&(t=!0)}),t&&this.close()}buildPopups(){this.registerForm=new RegisterForm(this.app,this.$.registerPopup),this.speakerPanel=new SpeakerPanel(this.app,this.$.speakerPopup)}showRegisterModal(){this.$.popupBoxes.hide(),this.$.registerPopup.show(),this.registerForm.clearAndShow(),setTimeout(()=>this.open(),1)}showSpeakerModal(e){this.$.popupBoxes.hide(),this.$.speakerPopup.show(),this.speakerPanel.setSpeakerDetails(e),setTimeout(()=>this.open(),1)}open(){this.$.dom.addClass("open"),$("body").css({overflow:"hidden"})}close(){this.$.dom.removeClass("open"),$("body").css({overflow:"scroll"})}toggle(){this.$.dom.toggleClass("open"),this.$.dom.hasClass("open")?$("body").css("position","fixed"):$("body").css("position","initial")}}class RegisterForm{constructor(e,t){this.app=e,this.$={},this.$.divParent=$(t),this.buildDom(),this.cacheRefs(),this.subscribeEvents(),this.setUpClientSideValidation()}buildDom(){this.$.dom=$(`
			<div class="registerFormBox" align="left">				
				<div class="attHeader" align="center"><h1 class="noStyle">REGISTER</h1></div>

				<!-- wrapper for the form itself -->
				<div class="form panel">

					<!-- First Name Row -->
					<div class="formRow row_firstName">
						<div class="lblRow" title="First Name">First name <span>*</span><div class="errMsg"></div></div>
						<div class="inputRow">
							<input class="txtFirstName theInput" name="firstname" type="text" title="First Name" />
						</div>
					</div>

					<!-- Last Name Row -->
					<div class="formRow row_lastName">
						<div class="lblRow" title="Last Name">Last name <span>*</span><div class="errMsg"></div></div>
						<div class="inputRow">
							<input class="txtLastName theInput" name="lastname" type="text" title="Last Name"/>
						</div>
					</div>

					<!-- Email Row -->
					<div class="formRow row_email">
						<div class="lblRow" title="Email Address">Email address <span>*</span><div class="errMsg"></div></div>
						<div class="inputRow">
							<input class="txtEmail theInput" name="email" type="text" title="Email Address"/>
						</div>
					</div>

					<!-- Country Row -->
					<div class="formRow row_country">
						<div class="lblRow" title="Country">Country <span>*</span><div class="errMsg"></div></div>
						<div class="inputRow">
							<select class="cmbCountry theInput" name="country" placeholder="Please Select..." width="100%" title="Country">
								<option eula="-1" value="default">Please select</option>
								<option eula="1" value="United States">United States</option>
								<option eula="0" value="Afghanistan">Afghanistan</option>
								<option eula="0" value="Aland Islands">Aland Islands</option>
								<option eula="0" value="Albania">Albania</option>
								<option eula="0" value="Algeria">Algeria</option>
								<option eula="0" value="American Samoa">American Samoa</option>
								<option eula="0" value="Andorra">Andorra</option>
								<option eula="0" value="Angola">Angola</option>
								<option eula="0" value="Anguilla">Anguilla</option>
								<option eula="0" value="Antarctica">Antarctica</option>
								<option eula="0" value="Antigua and Barbuda">Antigua and Barbuda</option>
								<option eula="0" value="Argentina">Argentina</option>
								<option eula="0" value="Armenia">Armenia</option>
								<option eula="0" value="Aruba">Aruba</option>
								<option eula="0" value="Australia">Australia</option>
								<option eula="0" value="Austria">Austria</option>
								<option eula="0" value="Azerbaijan">Azerbaijan</option>
								<option eula="0" value="Bahamas">Bahamas</option>
								<option eula="0" value="Bahrain">Bahrain</option>
								<option eula="0" value="Bangladesh">Bangladesh</option>
								<option eula="0" value="Barbados">Barbados</option>
								<option eula="0" value="Belarus">Belarus</option>
								<option eula="0" value="Belgium">Belgium</option>
								<option eula="0" value="Belize">Belize</option>
								<option eula="0" value="Benin">Benin</option>
								<option eula="0" value="Bermuda">Bermuda</option>
								<option eula="0" value="Bhutan">Bhutan</option>
								<option eula="0" value="Bolivia">Bolivia</option>
								<option eula="0" value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option>
								<option eula="0" value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
								<option eula="0" value="Botswana">Botswana</option>
								<option eula="0" value="Bouvet Island">Bouvet Island</option>
								<option eula="0" value="Brazil">Brazil</option>
								<option eula="0" value="British Indian Ocean Territory">British Indian Ocean Territory</option>
								<option eula="0" value="Brunei Darussalam">Brunei Darussalam</option>
								<option eula="0" value="Bulgaria">Bulgaria</option>
								<option eula="0" value="Burkina Faso">Burkina Faso</option>
								<option eula="0" value="Burundi">Burundi</option>
								<option eula="0" value="Cambodia">Cambodia</option>
								<option eula="0" value="Cameroon">Cameroon</option>
								<option eula="0" value="Canada">Canada</option>
								<option eula="0" value="Cape Verde">Cape Verde</option>
								<option eula="0" value="Cayman Islands">Cayman Islands</option>
								<option eula="0" value="Central African Republic">Central African Republic</option>
								<option eula="0" value="Chad">Chad</option>
								<option eula="0" value="Chile">Chile</option>
								<option eula="0" value="China">China</option>
								<option eula="0" value="Christmas Island">Christmas Island</option>
								<option eula="0" value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
								<option eula="0" value="Colombia">Colombia</option>
								<option eula="0" value="Comoros">Comoros</option>
								<option eula="0" value="Congo">Congo</option>
								<option eula="0" value="Congo, Democratic Republic of the Congo">Congo, Democratic Republic of the Congo</option>
								<option eula="0" value="Cook Islands">Cook Islands</option>
								<option eula="0" value="Costa Rica">Costa Rica</option>
								<option eula="0" value="Cote D'Ivoire">Cote D'Ivoire</option>
								<option eula="0" value="Croatia">Croatia</option>
								<option eula="0" value="Cuba">Cuba</option>
								<option eula="0" value="Curacao">Curacao</option>
								<option eula="0" value="Cyprus">Cyprus</option>
								<option eula="0" value="Czech Republic">Czech Republic</option>
								<option eula="0" value="Denmark">Denmark</option>
								<option eula="0" value="Djibouti">Djibouti</option>
								<option eula="0" value="Dominica">Dominica</option>
								<option eula="0" value="Dominican Republic">Dominican Republic</option>
								<option eula="0" value="Ecuador">Ecuador</option>
								<option eula="0" value="Egypt">Egypt</option>
								<option eula="0" value="El Salvador">El Salvador</option>
								<option eula="0" value="Equatorial Guinea">Equatorial Guinea</option>
								<option eula="0" value="Eritrea">Eritrea</option>
								<option eula="0" value="Estonia">Estonia</option>
								<option eula="0" value="Ethiopia">Ethiopia</option>
								<option eula="0" value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
								<option eula="0" value="Faroe Islands">Faroe Islands</option>
								<option eula="0" value="Fiji">Fiji</option>
								<option eula="0" value="Finland">Finland</option>
								<option eula="0" value="France">France</option>
								<option eula="0" value="French Guiana">French Guiana</option>
								<option eula="0" value="French Polynesia">French Polynesia</option>
								<option eula="0" value="French Southern Territories">French Southern Territories</option>
								<option eula="0" value="Gabon">Gabon</option>
								<option eula="0" value="Gambia">Gambia</option>
								<option eula="0" value="Georgia">Georgia</option>
								<option eula="0" value="Germany">Germany</option>
								<option eula="0" value="Ghana">Ghana</option>
								<option eula="0" value="Gibraltar">Gibraltar</option>
								<option eula="0" value="Greece">Greece</option>
								<option eula="0" value="Greenland">Greenland</option>
								<option eula="0" value="Grenada">Grenada</option>
								<option eula="0" value="Guadeloupe">Guadeloupe</option>
								<option eula="0" value="Guam">Guam</option>
								<option eula="0" value="Guatemala">Guatemala</option>
								<option eula="0" value="Guernsey">Guernsey</option>
								<option eula="0" value="Guinea">Guinea</option>
								<option eula="0" value="Guinea-Bissau">Guinea-Bissau</option>
								<option eula="0" value="Guyana">Guyana</option>
								<option eula="0" value="Haiti">Haiti</option>
								<option eula="0" value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
								<option eula="0" value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
								<option eula="0" value="Honduras">Honduras</option>
								<option eula="0" value="Hong Kong">Hong Kong</option>
								<option eula="0" value="Hungary">Hungary</option>
								<option eula="0" value="Iceland">Iceland</option>
								<option eula="0" value="India">India</option>
								<option eula="0" value="Indonesia">Indonesia</option>
								<option eula="0" value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
								<option eula="0" value="Iraq">Iraq</option>
								<option eula="0" value="Ireland">Ireland</option>
								<option eula="0" value="Isle of Man">Isle of Man</option>
								<option eula="0" value="Israel">Israel</option>
								<option eula="0" value="Italy">Italy</option>
								<option eula="0" value="Jamaica">Jamaica</option>
								<option eula="0" value="Japan">Japan</option>
								<option eula="0" value="Jersey">Jersey</option>
								<option eula="0" value="Jordan">Jordan</option>
								<option eula="0" value="Kazakhstan">Kazakhstan</option>
								<option eula="0" value="Kenya">Kenya</option>
								<option eula="0" value="Kiribati">Kiribati</option>
								<option eula="0" value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
								<option eula="0" value="Korea, Republic of">Korea, Republic of</option>
								<option eula="0" value="Kosovo">Kosovo</option>
								<option eula="0" value="Kuwait">Kuwait</option>
								<option eula="0" value="Kyrgyzstan">Kyrgyzstan</option>
								<option eula="0" value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
								<option eula="0" value="Latvia">Latvia</option>
								<option eula="0" value="Lebanon">Lebanon</option>
								<option eula="0" value="Lesotho">Lesotho</option>
								<option eula="0" value="Liberia">Liberia</option>
								<option eula="0" value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
								<option eula="0" value="Liechtenstein">Liechtenstein</option>
								<option eula="0" value="Lithuania">Lithuania</option>
								<option eula="0" value="Luxembourg">Luxembourg</option>
								<option eula="0" value="Macao">Macao</option>
								<option eula="0" value="Macedonia, the Former Yugoslav Republic of">Macedonia, the Former Yugoslav Republic of</option>
								<option eula="0" value="Madagascar">Madagascar</option>
								<option eula="0" value="Malawi">Malawi</option>
								<option eula="0" value="Malaysia">Malaysia</option>
								<option eula="0" value="Maldives">Maldives</option>
								<option eula="0" value="Mali">Mali</option>
								<option eula="0" value="Malta">Malta</option>
								<option eula="0" value="Marshall Islands">Marshall Islands</option>
								<option eula="0" value="Martinique">Martinique</option>
								<option eula="0" value="Mauritania">Mauritania</option>
								<option eula="0" value="Mauritius">Mauritius</option>
								<option eula="0" value="Mayotte">Mayotte</option>
								<option eula="0" value="Mexico">Mexico</option>
								<option eula="0" value="Micronesia, Federated States of">Micronesia, Federated States of</option>
								<option eula="0" value="Moldova, Republic of">Moldova, Republic of</option>
								<option eula="0" value="Monaco">Monaco</option>
								<option eula="0" value="Mongolia">Mongolia</option>
								<option eula="0" value="Montenegro">Montenegro</option>
								<option eula="0" value="Montserrat">Montserrat</option>
								<option eula="0" value="Morocco">Morocco</option>
								<option eula="0" value="Mozambique">Mozambique</option>
								<option eula="0" value="Myanmar">Myanmar</option>
								<option eula="0" value="Namibia">Namibia</option>
								<option eula="0" value="Nauru">Nauru</option>
								<option eula="0" value="Nepal">Nepal</option>
								<option eula="0" value="Netherlands">Netherlands</option>
								<option eula="0" value="Netherlands Antilles">Netherlands Antilles</option>
								<option eula="0" value="New Caledonia">New Caledonia</option>
								<option eula="0" value="New Zealand">New Zealand</option>
								<option eula="0" value="Nicaragua">Nicaragua</option>
								<option eula="0" value="Niger">Niger</option>
								<option eula="0" value="Nigeria">Nigeria</option>
								<option eula="0" value="Niue">Niue</option>
								<option eula="0" value="Norfolk Island">Norfolk Island</option>
								<option eula="0" value="Northern Mariana Islands">Northern Mariana Islands</option>
								<option eula="0" value="Norway">Norway</option>
								<option eula="0" value="Oman">Oman</option>
								<option eula="0" value="Pakistan">Pakistan</option>
								<option eula="0" value="Palau">Palau</option>
								<option eula="0" value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
								<option eula="0" value="Panama">Panama</option>
								<option eula="0" value="Papua New Guinea">Papua New Guinea</option>
								<option eula="0" value="Paraguay">Paraguay</option>
								<option eula="0" value="Peru">Peru</option>
								<option eula="0" value="Philippines">Philippines</option>
								<option eula="0" value="Pitcairn">Pitcairn</option>
								<option eula="0" value="Poland">Poland</option>
								<option eula="0" value="Portugal">Portugal</option>
								<option eula="0" value="Puerto Rico">Puerto Rico</option>
								<option eula="0" value="Qatar">Qatar</option>
								<option eula="0" value="Reunion">Reunion</option>
								<option eula="0" value="Romania">Romania</option>
								<option eula="0" value="Russian Federation">Russian Federation</option>
								<option eula="0" value="Rwanda">Rwanda</option>
								<option eula="0" value="Saint Barthelemy">Saint Barthelemy</option>
								<option eula="0" value="Saint Helena">Saint Helena</option>
								<option eula="0" value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
								<option eula="0" value="Saint Lucia">Saint Lucia</option>
								<option eula="0" value="Saint Martin">Saint Martin</option>
								<option eula="0" value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
								<option eula="0" value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
								<option eula="0" value="Samoa">Samoa</option>
								<option eula="0" value="San Marino">San Marino</option>
								<option eula="0" value="Sao Tome and Principe">Sao Tome and Principe</option>
								<option eula="0" value="Saudi Arabia">Saudi Arabia</option>
								<option eula="0" value="Senegal">Senegal</option>
								<option eula="0" value="Serbia">Serbia</option>
								<option eula="0" value="Serbia and Montenegro">Serbia and Montenegro</option>
								<option eula="0" value="Seychelles">Seychelles</option>
								<option eula="0" value="Sierra Leone">Sierra Leone</option>
								<option eula="0" value="Singapore">Singapore</option>
								<option eula="0" value="Sint Maarten">Sint Maarten</option>
								<option eula="0" value="Slovakia">Slovakia</option>
								<option eula="0" value="Slovenia">Slovenia</option>
								<option eula="0" value="Solomon Islands">Solomon Islands</option>
								<option eula="0" value="Somalia">Somalia</option>
								<option eula="0" value="South Africa">South Africa</option>
								<option eula="0" value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
								<option eula="0" value="South Sudan">South Sudan</option>
								<option eula="0" value="Spain">Spain</option>
								<option eula="0" value="Sri Lanka">Sri Lanka</option>
								<option eula="0" value="Sudan">Sudan</option>
								<option eula="0" value="Suriname">Suriname</option>
								<option eula="0" value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
								<option eula="0" value="Swaziland">Swaziland</option>
								<option eula="0" value="Sweden">Sweden</option>
								<option eula="0" value="Switzerland">Switzerland</option>
								<option eula="0" value="Syrian Arab Republic">Syrian Arab Republic</option>
								<option eula="0" value="Taiwan, Province of China">Taiwan, Province of China</option>
								<option eula="0" value="Tajikistan">Tajikistan</option>
								<option eula="0" value="Tanzania, United Republic of">Tanzania, United Republic of</option>
								<option eula="0" value="Thailand">Thailand</option>
								<option eula="0" value="Timor-Leste">Timor-Leste</option>
								<option eula="0" value="Togo">Togo</option>
								<option eula="0" value="Tokelau">Tokelau</option>
								<option eula="0" value="Tonga">Tonga</option>
								<option eula="0" value="Trinidad and Tobago">Trinidad and Tobago</option>
								<option eula="0" value="Tunisia">Tunisia</option>
								<option eula="0" value="Turkey">Turkey</option>
								<option eula="0" value="Turkmenistan">Turkmenistan</option>
								<option eula="0" value="Turks and Caicos Islands">Turks and Caicos Islands</option>
								<option eula="0" value="Tuvalu">Tuvalu</option>
								<option eula="0" value="Uganda">Uganda</option>
								<option eula="0" value="Ukraine">Ukraine</option>
								<option eula="0" value="United Arab Emirates">United Arab Emirates</option>
								<option eula="0" value="United Kingdom">United Kingdom</option>
								<option eula="0" value="United States">United States</option>
								<option eula="0" value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
								<option eula="0" value="Uruguay">Uruguay</option>
								<option eula="0" value="Uzbekistan">Uzbekistan</option>
								<option eula="0" value="Vanuatu">Vanuatu</option>
								<option eula="0" value="Venezuela">Venezuela</option>
								<option eula="0" value="Viet Nam">Viet Nam</option>
								<option eula="0" value="Virgin Islands, British">Virgin Islands, British</option>
								<option eula="0" value="Virgin Islands, U.s.">Virgin Islands, U.s.</option>
								<option eula="0" value="Wallis and Futuna">Wallis and Futuna</option>
								<option eula="0" value="Western Sahara">Western Sahara</option>
								<option eula="0" value="Yemen">Yemen</option>
								<option eula="0" value="Zambia">Zambia</option>
								<option eula="0" value="Zimbabwe">Zimbabwe</option>
							</select>
						</div>
					</div>

					<!-- Industry Row -->
					<div class="formRow row_industry">
						<div class="lblRow" title="Industry">Industry <span>*</span><div class="errMsg"></div></div>
						<div class="inputRow">
							<select class="cmbIndustry theInput" name="industry" placeholder="Please Select..." width="100%" title="Industry">
								<option value="default">Please select</option>
								<option value="Academia">Academia</option>
								<option value="Energy">Energy</option>
								<option value="Entertainment">Entertainment</option>
								<option value="Financial">Financial</option>
								<option value="Government">Government</option>
								<option value="Hospitality">Hospitality</option>
								<option value="IT Consumer">IT Consumer</option>
								<option value="IT Security">IT Security</option>
								<option value="IT Software">IT Software</option>
								<option value="Manufacturing">Manufacturing</option>
								<option value="Marketing">Marketing</option>
								<option value="Real Estate">Real Estate</option>
								<option value="Recruiting">Recruiting</option>
								<option value="Retail">Retail</option>
								<option value="Telecom">Telecom</option>
								<option value="Transportation">Transportation</option>
								<option value="Other">Other</option>
							</select>
						</div>
					</div>

					<!-- Company Name Row -->
					<div class="formRow row_company">
						<div class="lblRow" title="Company">Company <span>*</span><div class="errMsg"></div></div>
						<div class="inputRow">
							<input class="txtCompany theInput" name="company" type="text" title="Company"/>
						</div>
					</div>

					<!-- Job Classification Row -->
					<div class="formRow row_jobClass">
						<div class="lblRow" title="Job Classification">Job Classification <span>*</span><div class="errMsg"></div></div>
						<div class="inputRow">
							<select class="cmbJobClass theInput" name="jobclass" placeholder="Please Select..." width="100%" title="Job Classification">
								<option value="default">Please select</option>
								<option value="Security Analyst / Practitioner / Architect / Consultant">Security Analyst / Practitioner / Architect / Consultant</option>
								<option value="Company Owner">Company Owner</option>
								<option value="C-Level / Business Partner">C-Level / Business Partner</option>
								<option value="VP / Department Head">VP / Department Head</option>
								<option value="Director / Senior Manager">Director / Senior Manager</option>
								<option value="Manager / Staff">Manager / Staff</option>
								<option value="Security Influencer / Evangelist">Security Influencer / Evangelist</option>
								<option value="System / Network Administrator">System / Network Administrator</option>
								<option value="Other">Other</option>
							</select>
						</div>
					</div>

					<!-- TERMS & Conditions Row -->
					<div class="formRow row_terms invisible">
						<div class="lblRow" title="Terms and Conditions">Terms <span>*</span><div class="errMsg"></div></div>
						<div class="disclaimerRow">
							<input type="checkbox" id="chkEULA" name="eula" class="chkEULA theInput" title="Terms and Conditions"/>
							<label class="lblEULA" for="chkEULA">
								<p>
									I agree and consent that AT&T, and their affiliated companies, as well as third parties acting on AT&T’s behalf, may process personal data from or about me as outlined in the AT&T Event Guest GDPR Privacy Notice, dated April 2018 to be necessary to register me and facilitate my participation at the event. I agree and consent that AT&T may process my data effective from today and for up to six months after the last day of the event, although I understand I may withdraw my consent at any time. I am aware of my rights regarding the processing of personal data as summarized in the AT&T Event Guest GDPR Privacy Notice.
								</p>
								<p>
									The event will include a Trivia Game with prizes. The Trivia Game is open to legal residents of the 50 United States and District of Columbia who are participants in the Trivia Game at the event. The Official Rules for the Trivia Game are located here.
								</p>
							</label>
						</div>
					</div>

					<div align="right">
						<button type="button" class="cmdSubmitRegisterForm attHeader" alt="Register Button" title="Register">REGISTER</button>
					</div>

				<!-- /form -->
				</div>

				<!-- waiting box -->
				<div class="waitingBox panel">

					<div class="spinner" alt="Loading Spinner..." title="Loading..."></div>

					<div class="info"><p class="noStyle">Submitting...<br>Please wait.</p></div>
				</div>

				<!-- response box -->
				<div class="responseBox panel" align="center">
					<div class="info lblResultsInfo"><h1 class="noStyle">Success!</h1></div>
					<img class="imgIcon" src="img/gfx/icon_success.png" alt="Success Checkmark" title="Success!" /><br>
					<button type="button" class="cmdSuccess regButton" alt="Continue Button" title="Continue">Continue</button>
					<button type="button" class="cmdTryAgain regButton" alt="Try Again Button" title="Try Again">Try Again</button>
				</div>

			</div>
		`),this.$.divParent.append(this.$.dom)}cacheRefs(){this.$.rows={firstName:this.$.dom.find(".row_firstName"),lastName:this.$.dom.find(".row_lastName"),email:this.$.dom.find(".row_email"),country:this.$.dom.find(".row_country"),industry:this.$.dom.find(".row_industry"),company:this.$.dom.find(".row_company"),jobClass:this.$.dom.find(".row_jobClass"),eula:this.$.dom.find(".row_terms")},this.$.form={txtFirstName:this.$.dom.find(".txtFirstName"),txtLastName:this.$.dom.find(".txtLastName"),txtEmail:this.$.dom.find(".txtEmail"),cmbCountry:this.$.dom.find(".cmbCountry"),cmbIndustry:this.$.dom.find(".cmbIndustry"),txtCompany:this.$.dom.find(".txtCompany"),cmbJobClass:this.$.dom.find(".cmbJobClass"),chkEULA:this.$.dom.find(".chkEULA")},this.$.row_terms=this.$.dom.find(".row_terms"),this.$.lblEULA=this.$.dom.find(".lblEULA"),this.$.errMsgs=this.$.dom.find(".errMsg"),this.$.cmdSubmitRegisterForm=this.$.dom.find(".cmdSubmitRegisterForm"),this.$.panels=this.$.dom.find(".panel"),this.$.panelForm=this.$.dom.find(".form"),this.$.panelWaiting=this.$.dom.find(".waitingBox"),this.$.panelResults=this.$.dom.find(".responseBox"),this.$.lblResultsInfo=this.$.dom.find(".lblResultsInfo"),this.$.imgResultIcon=this.$.dom.find(".imgIcon"),this.$.cmdTryAgain=this.$.dom.find(".cmdTryAgain"),this.$.cmdContinue=this.$.dom.find(".cmdSuccess")}subscribeEvents(){this.$.cmdSubmitRegisterForm.on("click",this.submitForm.bind(this)),this.$.form.chkEULA.on("keyup",e=>{if(32==e.keyCode){let e=this.$.form.chkEULA.is(":checked");setTimeout(()=>{this.$.form.chkEULA.prop("checked",!e),this.$.form.chkEULA.keyup()},1)}}),this.$.cmdContinue.on("click",()=>{this.app.modalSystem.close(),1==App.isDayOf&&(window.location="#agenda")}),this.$.cmdTryAgain.on("click",()=>{this.showPanel(RegisterForm.PANELS.FORM)}),this.$.form.cmbCountry.on("change keyup",this.updateEULAByCountry.bind(this))}updateEULAByCountry(e){let t=$(e.target);e=t.val();let i=this.$.form.cmbCountry.find(`option[value="${e}"]`);e=parseInt(i.attr("eula"),10);-1==e?this.$.row_terms.addClass("invisible"):(this.$.row_terms.removeClass("invisible"),this.$.lblEULA.html(window.eulas[e]))}async submitForm(){if(this.$.cmdSubmitRegisterForm.prop("disabled",!0),0==await this.validateAll())this.$.cmdSubmitRegisterForm.prop("disabled",!1);else{const e=async e=>{e={...this.getFormData(),"g-recaptcha-response":e},e=JSON.stringify(e);this.$.panels.removeClass("show"),this.$.panelWaiting.addClass("show");try{await RegisterForm.axiosClient.post("/register",e,{headers:{"Content-Type":"application/json"}}).then(this.handleSubmitResponse.bind(this)).catch(this.handleSubmitErrors.bind(this))}catch(e){e.response={},this.handleSubmitErrors(e)}};window.grecaptcha.ready(()=>{window.grecaptcha.execute(this.app.recaptchaHelper.RECAPTCHA_CLIENT_SITE_KEY,{action:"submit"}).then(e.bind(this)).catch(this.handleSubmitErrors.bind(this))})}}handleSubmitResponse(e){this.$.lblResultsInfo.html("Success!<br>You are now registered."),setTimeout(()=>{this.$.cmdSubmitRegisterForm.prop("disabled",!1),this.showPanel(RegisterForm.PANELS.SUCCESS)},1500)}handleSubmitErrors(e){void 0===e.response&&(e.response={});var t=e.response.status||500,i=e.response.statusText||"NA",e=e.response.data?.message||"NA";this.$.lblResultsInfo.html("ERROR:<br>"+(`[${t}] ${i}: `+e)),setTimeout(()=>{this.$.cmdSubmitRegisterForm.prop("disabled",!1),this.showPanel(RegisterForm.PANELS.ERROR)},1500)}getFormData(){let t={};for(let e=0;e<this.validators.length;e++)this.validators[e].addNVPToObject(t);let e=Util.getUrlHashParam("partnerref"),i=(e=null==(e=void 0===(e=Object.fromEntries(new URLSearchParams(window.location.search).entries()).partnerref)?null:e)?0:e,t.campaignTID=e,t.dontSharePersonalInformation="N/A",this.$.dom.find(".chkDontShareMyInfo"));return 0<i.length&&(t.dontSharePersonalInformation=i.is(":checked")?"true":"false"),t}async validateAll(){let i=!0;for(let t=0;t<this.validators.length;t++){let e=this.validators[t];!1===await e.validate({type:"blur"})&&(i=!1)}return i}setUpClientSideValidation(){this.validators=[new RegistrationFormRowValidator("First name",this.$.rows.firstName,function(e){e=e.val();return""==e?this.fieldName+" is required.":e.length<2?this.fieldName+" must be 2 characters or longer.":!(100<e.length)||this.fieldName+" must be 100 characters or shorter.."}),new RegistrationFormRowValidator("Last name",this.$.rows.lastName,function(e){e=e.val();return""==e?this.fieldName+" is required.":e.length<2?this.fieldName+" must be 2 characters or longer.":!(100<e.length)||this.fieldName+" must be 100 characters or shorter.."}),new RegistrationFormRowValidator("Email address",this.$.rows.email,async function(e,t){e=e.val().trim();if(""==e)return this.fieldName+" is required.";if(512<e.length)return this.fieldName+" must be 512 characters or shorter..";if(0==this.checkEmail(e))return"Email is invalid or mis-formatted.";if("blur"==t.type){t=await this.checkEmailAlreadyRegistered(e);if(1==t)return"This Email address is already registered!";if(1<t)return"Invalid email address"}return!0}),new RegistrationFormRowValidator("Country",this.$.rows.country,function(e){return"default"!=e.val()||this.fieldName+" is required."}),new RegistrationFormRowValidator("Industry",this.$.rows.industry,function(e){return"default"!=e.val()||this.fieldName+" is required."}),new RegistrationFormRowValidator("Company",this.$.rows.company,function(e){e=e.val();return""==e?this.fieldName+" is required.":e.length<3?this.fieldName+" must be 4 characters or longer.":!(32<e.length)||this.fieldName+" must be 32 characters or shorter.."}),new RegistrationFormRowValidator("Job Classification",this.$.rows.jobClass,function(e){return"default"!=e.val()||this.fieldName+" is required."}),new RegistrationFormRowValidator("Job Classification",this.$.rows.jobClass,function(e){return"default"!=e.val()||this.fieldName+" is required."}),new RegistrationFormRowValidator("Terms",this.$.rows.eula,function(e){return 0!=e.is(":checked")||"You must accept the terms."})]}resetForm(){this.$.form.txtFirstName.val(""),this.$.form.txtLastName.val(""),this.$.form.txtEmail.val(""),this.$.form.cmbCountry.val("default"),this.$.form.cmbIndustry.val("default"),this.$.form.txtCompany.val(""),this.$.form.cmbJobClass.val("default"),this.$.form.chkEULA.prop("checked",!1),this.$.errMsgs.html("")}clearAndShow(){this.resetForm(),this.showPanel(RegisterForm.PANELS.FORM)}showPanel(e){switch(this.$.panels.removeClass("show"),e){case RegisterForm.PANELS.FORM:this.$.panelForm.addClass("show");break;case RegisterForm.PANELS.WAIT:this.$.panelWaiting.addClass("show");break;case RegisterForm.PANELS.SUCCESS:this.$.lblResultsInfo.html(`
					<h1>Success!</h1>
					<p>You are now registered<br>
					for the conference.</p>
					<div class="extraLines">You'll receive conference updates as we add<br>new speakers and exciting content.</div>
				`),this.$.imgResultIcon.attr("src","img/gfx/icon_success.png"),this.$.cmdContinue.show(),this.$.cmdTryAgain.hide(),this.$.panelResults.addClass("show");break;case RegisterForm.PANELS.ERROR:this.$.lblResultsInfo.html(`
					<h1>Error:(</h1>
					<p>Something went wrong<br>&nbsp;</p>
				`),this.$.imgResultIcon.attr("src","img/gfx/icon_fail.png"),this.$.cmdContinue.hide(),this.$.cmdTryAgain.show(),this.$.panelResults.addClass("show")}}}class RegistrationFormRowValidator{constructor(e,t,i){this.fieldName=e,this.$={},this.$.row=t,this.fnValidate=i,this.cacheRefs(),this.subscribeEvents(),this.inputName=this.$.input.attr("name")}cacheRefs(){this.$.input=this.$.row.find(".theInput"),this.$.lbl=this.$.row.find(".lblRow"),this.$.error=this.$.row.find(".errMsg")}subscribeEvents(){this.$.input.on("change keyup blur",this.validate.bind(this))}addNVPToObject(e){let t=this.$.input.val();"checkbox"==this.$.input.attr("type")&&(t=this.$.input.is(":checked").toString()),e[this.inputName]=t}async validate(e){e=await this.fnValidate(this.$.input,e);return!0===e?(this.$.error.html(""),!0):(this.$.error.html(e),!1)}checkEmail(e){let t=new RegExp("([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])");return t.test(e)}async checkEmailAlreadyRegistered(e){let t=0;try{await RegisterForm.axiosClient.get("/register",{headers:{"Content-Type":"application/json"},params:{email:e}}).then(e=>{null!=e.data&&(t=1)}).catch(e=>{t=2})}catch(e){return 3}return t}}RegisterForm.axiosClient=axios.create({baseURL:"/api",headers:{accept:"application/json","cache-control":"no-cache"},timeout:5e3}),RegisterForm.PANELS={FORM:0,WAIT:1,SUCCESS:2,ERROR:3};class STEGraphicsItem{constructor(e,t){this.$={},this.$.rootElement=e,this.changeSpeed=1e3*t,this.mode=0,this.cacheReferences(),this.STEWordsList=["Cloud","Network","Endpoint","Car","Bulb","Phone","App","Infrastructure","Perimeter","Garage Door","Memories","Email","Data","Access","Everything"],this.STEWords=[],this.updateWords(1.5,.5,.1,.1,!1),this.currentWordIndex=0,this.currentWord="Everything",this.nextWord()}updateWords(e,t,i,a,s){function o(e,t,i){return e+(t-e)*i}this.STEWords=[];for(var n=this.STEWordsList.length,r=0;r<n;r++){var l=r/n,d=(s&&(d=l,l=(1-Math.cos(d*(2*Math.PI)))/2),{txt:this.STEWordsList[r],interval:1e3*o(e,i,l),xfrm:o(t,a,l)});this.STEWords.push(d)}this.currentWordIndex=-1}setMode(e){this.mode=e}cacheReferences(){this.$.txtBox=this.$.rootElement.querySelector(".txtAnimationBox"),this.$.innerArea=this.$.rootElement.querySelector(".SECContainerInner")}nextWord(){this.currentWordIndex=(this.currentWordIndex+1)%this.STEWords.length;var e,t=this.STEWords[this.currentWordIndex];switch(this.lastWord=this.currentWord,this.currentWord=t.txt,this.mode){case 0:this.flipCharacterAnimation(this.lastWord,this.currentWord,20);break;case 1:this.slotRotate(this.lastWord,this.currentWord,t.xfrm);break;case 2:this.simpleFade(this.currentWord,.4)}if((this.currentWordIndex+1)%this.STEWords.length==0)return setTimeout(this.nextWord.bind(this),1e4),(e=document.createElement("div")).classList.add("txtAnimationBox"),e.classList.add("glowy"),e.innerHTML="Everything",this.$.innerArea.appendChild(e),this.$.txtBox.style.display="none",void setTimeout(function(){e.remove(),this.$.txtBox.style.display="block"}.bind(this),1500);setTimeout(this.nextWord.bind(this),t.interval)}flipCharacterAnimation(e,a,t){this.$.txtBox.style.opacity=1,a+="                                ";var s=e+="                                ",o=0;var n=this,r=setInterval(function(){e=s,i=a,t=[0,9,14,8,7,4,1,5,3,12,6,11,13,10,15,2][t=o],s=e.substr(0,t)+i[t]+e.substr(t+1),o++;var e,t,i=s.trimRight().replace(/ /gi,"_");n.$.txtBox.innerHTML=i,15<o&&clearInterval(r)},t)}slotRotate(e,t,i){this.$.txtBox.classList.remove("slideDown");var a='<div class="slider"><div class="new">'+t+'</div><div class="old">'+e+"</div></div>";setTimeout(()=>{this.$.txtBox.innerHTML=a,setTimeout(()=>{this.$.txtBox.classList.add("slideDown")},10)},0)}simpleFade(e,t){this.$.txtBox.style.transition="opacity "+t/2+"s ease-in",this.$.txtBox.style.opacity=0,setTimeout(()=>{this.$.txtBox.innerHTML=e,this.$.txtBox.style.opacity=1},510)}}class SpeakerBox{constructor(e,t,i,a){this.app=e,this.speakerData=t,this.fullName=t.fullName,this.company=t.company,this.title=t.title,this.profileUrl=t.picture,this.speakerID=t.ID,this.extraOptions=Util.parseParams(a,{nameOnly:!1,style:null}),this.$={},this.$.divParent=$(i),this.buildDom(),this.cacheRefs(),this.subscribeEvents()}buildDom(){var e=null!=this.extraOptions.style?this.extraOptions.style:"";this.$.dom=$(`
            <div class="speakerBox" align="center" style="${e}">
                
                <div class="speakerPicture" style="background:url('${this.profileUrl}')" title="${this.title}">
                    <div class="gradientBorderThing"></div>
                </div>

                <div class="bottomText">
                    <div class="name">${this.fullName}</div>
                    <div class="title"><i>${this.title}</i></div>
                    <div class="co">${this.company}</div>
                </div>
            </div>
        `),1==this.extraOptions.nameOnly&&this.$.dom.find(".title,.co").remove(),this.$.divParent.append(this.$.dom)}cacheRefs(){this.$.speakerPicture=this.$.dom.find(".speakerPicture")}subscribeEvents(){this.$.speakerPicture.on("click",e=>{this.app.modalSystem.showSpeakerModal(this.speakerData)})}}class SpeakerPanel{constructor(e,t){this.app=e,this.$={},this.$.divParent=$(t),this.buildDom(),this.cacheRefs(),this.subscribeEvents()}buildDom(){this.$.dom=$(`
			<div class="speakerPanel" align="left">				

				<h1 class="spkrName">Dude Dudington</h1>
				<div class="spkrTitle">Cheif Dude</div>
				<div class="spkrCompany">Dude Co.</div>
				<hr class="separator"/>
				<div class="spkrBio">Dude Dudington was the dude.</div>
			</div>
		`),this.$.divParent.append(this.$.dom)}cacheRefs(){this.$.spkrName=this.$.dom.find(".spkrName"),this.$.spkrTitle=this.$.dom.find(".spkrTitle"),this.$.spkrCompany=this.$.dom.find(".spkrCompany"),this.$.spkrBio=this.$.dom.find(".spkrBio")}subscribeEvents(){}setSpeakerDetails(e){this.$.spkrName.html(e.fullName),this.$.spkrTitle.html(e.title),this.$.spkrCompany.html(e.company),this.$.spkrBio.html(e.bio),this.$.spkrBio.scrollTop(0),this.$.spkrBio.scrollLeft(0)}}SpeakerPanel.axiosClient=axios.create({baseURL:"/api",headers:{accept:"application/json","cache-control":"no-cache"},timeout:5e3}),SpeakerPanel.PANELS={FORM:0,WAIT:1,SUCCESS:2,ERROR:3};class SpeakersSection{constructor(e,t,i){this.showAll=void 0!==i&&i,this.app=e,this.$={},this.$.divParent=$(t),this.speakerBoxes=[],this.buildDom(),this.cacheRefs(),this.subscribeEvents()}buildDom(){var e=0==this.showAll?'<div class="attHeader2022">20<span>22</span> Speakers Include</div>':"",e=(this.$.dom=$(`
            <!-- 2022 speakers area -->
            <div class="speakers2022_area" align="center">

                <!-- centered column wrapper that scales responsively -->
                <div class="columnWrapper" align="center">

                    <!-- the header area for the speakers section -->
                    ${e}

                    <!-- grid of seaker icons -->
                    <div class="speakersIconsGrid" align="center"></div>
                
                <!-- /columnWrapper -->
                </div>

            <!-- /speakers2022_area -->
            </div>
        `),this.$.divParent.append(this.$.dom),this.$.dom.find(".speakersIconsGrid"));this.addSpeakerBoxes(App.speakers,e)}cacheRefs(){}subscribeEvents(){}addSpeakerBoxes(e,t){let i=e.filter(e=>1==e.featured);0==this.showAll&&(i=(i=i.filter(e=>0!=parseInt(e.home_sort,10))).sort((e,t)=>{let i=parseInt(e.home_sort,10),a=parseInt(t.home_sort,10);return i=0==i?9e3:i,a=0==a?9e3:a,i-a}));for(let e=0;e<i.length;e++){var a=i[e],a=new SpeakerBox(this.app,a,t);this.speakerBoxes.push(a)}}}class SponsorsArea{constructor(e,t){this.app=e,this.$={},this.$.divParent=$(t),this.buildDom(),this.cacheRefs(),this.subscribeEvents()}buildDom(){this.$.dom=$(`<div class="sponsers_area" align="center" data-nosnippet>

				<!-- centered column wrapper that scales responsively -->
				<div class="columnWrapper" align="center">
				
					<!-- the header area for the sponsors section -->
					<div class="attHeader2022"><h1 class="noStyle">20<span>22</span> Sponsors</h1></div>
					
					<!-- list of sponsors icons -->
					<div class="iconsContainer" align="center">
						
						<a href="https://www.akamai.com/" target="_blank"><div class="aSponsorBox"><img src="img/sponsors/sponsor_01.png" alt="Akamai Logo" title="Akamai"/></div></a>
						<a href="https://www.fortinet.com/" target="_blank"><div class="aSponsorBox"><img src="img/sponsors/sponsor_02.png" alt="Fortinet Logo" title="Fortinet"/></div></a>
						<a href="https://www.ibm.com/us-en/" target="_blank"><div class="aSponsorBox"><img src="img/sponsors/sponsor_03.png" alt="IBM Logo" title="IBM"/></div></a>
						<a href="https://www.paloaltonetworks.com/" target="_blank"><div class="aSponsorBox"><img src="img/sponsors/sponsor_04.png" alt="Paloalto Networks Logo" title="Paloalto Networks"/></div></a>
						<a href="https://www.sentinelone.com/" target="_blank"><div class="aSponsorBox"><img src="img/sponsors/sponsor_05.png" alt="SentinelOne Logo" title="SentinelOne"/></div></a>

					<!-- / iconsContainer-->
					</div>

					<div class="regButtonRow">
						<!-- register button -->
						<div class="cmdRegisterSponsorArea blueButton" alt="Register Button" title="Register Free">
							<div class="buttonInner">Register Free<span class="material-icons arrow">arrow_forward_ios</span></div>
						</div>
					</div>

				<!-- /columnWrapper -->
				</div>

			<!-- /sponsers_area -->
			</div>
		`),this.$.divParent.append(this.$.dom)}cacheRefs(){this.$.cmdRegisterSponsorArea=this.$.dom.find(".cmdRegisterSponsorArea")}subscribeEvents(){this.$.cmdRegisterSponsorArea.on("click",()=>{this.app.modalSystem.showRegisterModal()})}}class Page404{constructor(e,t){this.app=e,this.$={},this.$.divParent=$(t),this.buildDom(),this.cacheRefs(),this.subscribeEvents(),this.sponsors=new SponsorsArea(this.app,this.$.sponsors)}buildDom(){App.strings.STE,App.strings.Logo,App.strings.Reg;var e=Page404.pageSlug;this.$.dom=$(`
			<div class="page_${e} page">

                <!-- page title -->
                <div align="center">
                    <div class="attHeader2022"><h1 class="noStyle">20<span>22</span> NOT FOUND</h1></div>
                
                    <p style="font-size: 22px; padding: 10px 100px;">It's like a 404, but in 2022.<br><br>Sorry, page wasn't found.</p>
                    
                    <!-- sponsers area container -->
                    <div class="sponsors"></div>

                </div>

			</div>
		`),this.$.divParent.append(this.$.dom)}cacheRefs(){this.$.sponsors=this.$.dom.find(".sponsors")}subscribeEvents(){}show(){}}Page404.pageSlug="404",Page404.pageRoutes=["404","/404"];class PageAgenda{constructor(e,t){this.app=e,this.$={},this.$.divParent=$(t),this.buildDom(),this.cacheRefs(),this.subscribeEvents(),this.agendaItems=[],this.buildAgendaItems(App.presentations),this.sponsors=new SponsorsArea(this.app,this.$.sponsors),this.scrollThreshold=380,this.handlePageScroll(),this.startAutomaticHidingOfAgendaRows()}buildDom(){var e=this.constructor.pageSlug;this.$.dom=$(`
			<div class="page_${e} page">

                <!-- page title -->
                <div align="center" class="hideWhenOver">
                    <div class="attHeader2022"><h1 class="noStyle">20<span>22</span> <div class="subtitle" style="display:inline-block">AGENDA</div></h1></div>
                </div>

                <div align="center">

                    <div class="outerWraper" align="left">

                        <a class="pdfAgendaLink hideWhenOver" href="/assets/Agenda_2022.pdf" target="_blank">Download Full Schedule PDF</a>
                        
                        <div class="filterGrid hideWhenOver" align="center">
                            Click any talk with a <span class="inlineLive">Live</span> button to watch the presentation.
                        </div>

                        <div class="agendaItemsContainer" align="center">
							<div class="tabs hideWhenOver">
								<div class="col col_0 selected" tab="A"><div>Track 1</div></div>
								<div class="col col_1" tab="B"><div>Track 2</div></div>
								<div class="col col_2" tab="C"><div>Track 3</div></div>
								<div class="bottomLine"></div>
							</div>
							<div class="tracks hideWhenOver">
								<div class="col col_0"><div>Track 1</div></div>
								<div class="col col_1"><div>Track 2</div></div>
								<div class="col col_2"><div>Track 3</div></div>
							</div>
							<div class="rows A"></div>
							<div class="checkBackMSG">
								<div class="attHeader2022">Thanks for Watching</div>
								<div class="thxBox" align="left">
									<br><br>
									Thanks to all who attended the 2022 AT&T Security Conference.
									<br><br>
									<strong>Live broadcasting has now ended.</strong>
									<br><br>
									We will be releasing the conference replay shortly.
									<br><br>
									Thanks for attending!
								</div>
							</div>
						</div>

                    <!-- /outerWraper -->
                    </div>
                
                </div>
                
                <!-- sponsers area container -->
				<div class="sponsors"></div>

			</div>
		`),this.$.divParent.append(this.$.dom)}cacheRefs(){this.$.agendaItemsContainer=this.$.dom.find(".agendaItemsContainer"),this.$.rows=this.$.agendaItemsContainer.find(".rows"),this.$.tabs=this.$.agendaItemsContainer.find(".tabs"),this.$.tracks=this.$.agendaItemsContainer.find(".tracks"),this.$.hideWhenOver=this.$.dom.find(".hideWhenOver"),this.$.tabItems=this.$.tabs.find(".col"),this.$.sponsors=this.$.dom.find(".sponsors"),this.$.checkBackMSG=this.$.dom.find(".checkBackMSG")}buildAgendaItems(e){this.spawnedRows=[];let t=[],i=new Map;for(let e=0;e<App.presentations.length;e++){var a=App.presentations[e],s=a["timeSort"],s=parseFloat(s);0==t.includes(s)&&t.push(s),0==i.has(s)&&i.set(s,[]),i.get(s).push(a)}for(let e=0;e<t.length;e++){var o,n=t[e],r=i.get(n);r.length<=0||(o=r[0].timeStart,this.buildScheduleRow(o,n,r))}this.$.scheduleRows=this.$.rows.find(".scheduleRow")}buildScheduleRow(e,t,i){i=i.sort((e,t)=>e.trackNum-t.trackNum);var t=1664856e3+60*(60*parseInt(t,10)+t%1*100),a=1==i.length?"singleColumn":"trippleColumn";let s=$(`
			<div class="scheduleRow ${a}" time="${t}" align="center">
				<div class="timeSlot">${e}<div>

			</div>
		`);this.spawnedRows.push({timeCode:t,rowDom:s});for(let e=0;e<i.length;e++){var o=1==i.length?" A B C ":["A","B","C"][e],n=i[e],o=$(`
				<div class="col col_${e} trackCSS ${o}" col="${e}" align="center">

				</div>
			`),o=(s.append(o),new AgendaItem(this,o,n,{useOn24Link:!0,openLinkInNewTab:!0}));this.agendaItems.push(o)}this.$.rows.append(s)}subscribeEvents(){this.$.tabItems.on("click",this.switchTab.bind(this)),window.addEventListener("scroll",this.handlePageScroll.bind(this))}switchTab(e){let t=$(e.target);e=t.attr("tab");this.$.tabItems.removeClass("selected"),this.$.rows.removeClass("A B C"),t.addClass("selected"),this.$.rows.addClass(e)}show(t){let i=-1;if(t){let e=t.split("&");t=e[0].split("=");"testtime"==t[0]&&(i=parseInt(t[1],10),App.timeWhenPageLoaded=i)}-1!=i&&this.filterRowsByTime(i),this.filterByTime()}filterRowsByTime(i){if(i<this.spawnedRows[0].timeCode)this.$.scheduleRows.show();else{if(1664916e3<=i)return this.$.scheduleRows.hide(),this.$.hideWhenOver.hide(),void this.$.checkBackMSG.show();for(let t=0;t<this.spawnedRows.length-1;t++){let e=this.spawnedRows[t];i>=this.spawnedRows[t+1].timeCode?e.rowDom.hide():i>=e.timeCode&&e.rowDom.show()}for(let e=0;e<this.spawnedRows.length;e++)i>=this.spawnedRows[e].timeCode&&this.spawnedRows[e].rowDom.addClass("rowIsLive")}}handlePageScroll(e){var t=$(document).scrollTop();this.scrollThreshold;this.$.rows.position().top-220<t?this.$.dom.addClass("fixTopBars"):this.$.dom.removeClass("fixTopBars"),this.sponsors.$.dom.offset().top-220<t?this.$.dom.addClass("hideTopShit"):this.$.dom.removeClass("hideTopShit")}startAutomaticHidingOfAgendaRows(){var e=App.timeWhenPageLoaded,t=parseInt(Date.now()/1e3);this.timeStamps={serverStartTimeStamp:e,localLoadTime:t},setInterval(this.filterByTime.bind(this),6e4)}filterByTime(){var e=parseInt(Date.now()/1e3)-this.timeStamps.localLoadTime,e=App.timeWhenPageLoaded+e;this.filterRowsByTime(e)}}PageAgenda.pageSlug="agenda",PageAgenda.pageRoutes=["agenda","/agenda"];class PageFAQ{constructor(e,t){this.app=e,this.$={},this.$.divParent=$(t),this.buildDom(),this.cacheRefs(),this.subscribeEvents(),this.sponsors=new SponsorsArea(this.app,this.$.sponsors)}buildDom(){App.strings.STE,App.strings.Logo,App.strings.Reg;var e=PageFAQ.pageSlug;this.$.dom=$(`
			<div class="page_${e} page">

                <!-- page title -->
				<div align="center">
					<div class="attHeader2022"><h1 class="noStyle">20<span>22</span> FREQUENTLY ASKED QUESTIONS</h1></div>
				</div>

                <div align="center">
                    <div class="outerWrapper" align="left">
                        
                        <div class="qBox">
                            <h1 class="question noStyle">Is there a cost for registering?</h1>
                            <p class="answer">The 2022 AT&amp;T Security Conference is free for all attendees. </p>
                        </div>

                        <div class="qBox">
                            <h1 class="question noStyle">Can I attend in person?</h1>
                            <p class="answer">The Conference is virtual, with no in-person events.</p>
                        </div>

                        <div class="qBox">
                            <h1 class="question noStyle">How do I contact conference organizers?</h1>
                            <p class="answer">You can reach us at <a href="mailto:security-conf@att.com">our conference email address</a>.</p>
                        </div>

                        <div class="qBox">
                            <h1 class="question noStyle">How do I contact conference presenters and keynote speakers?</h1>
                            <p class="answer">If available, contact information for our presenters can be found during the conference in the speaker’s bio.
                            <br><br>
                            On the day of the conference, you have the opportunity to ask questions during our live sessions. Presenters may choose to share social media or contact information during their presentation.</p>
                        </div>

                        <div class="qBox">
                            <h1 class="question noStyle">How can I watch the conference? </h1>
                            <div class="answer">
                                All attendees can enjoy the conference through any current web browser.
                                <br><br>
                                For the best experience:
                                <ul>    
                                    <li>Your browser must accept cookies and have Javascript enabled</li>
                                    <li>Watch the conference using a connection of at least 1 Mbps/1,000 Kbps </li>
                                </ul>
                                <br><br>
                                To attend, <a role="button" class="aRegister">register now for the conference.</a> Then visit our site on October 4 and login using the email address you used to register for the conference.
                            </div>
                        </div>

                        <div class="qBox">
                            <h1 class="question noStyle">Will you be providing attendance certificates for CPE credits?</h1>
                            <p class="answer">After attending a select group of our talks, you will be provided with a CPE certificate. This certificate may count towards CPE credits.</p>
                        </div>

                        <div class="qBox">
                            <h1 class="question noStyle">How can I win prizes?</h1>
                            <p class="answer">The more live sessions you attend, the more chances you have to win our incredible prizes. Learn more <a href="https://tcmedia.akamaized.net/conference/2022/docs/2022_Cybersecurity_Conference_Game_Rules.pdf" target="_blank">here.</a></p>
                        </div>

                        <div class="qBox">
                            <h1 class="question noStyle">How can I enter the prize drawing?</h1>
                            <p class="answer">You’re entered to win a prize every time you watch a live presentation. The more you watch, the more chances you have to win. You must reside in continental USA to be eligible for the prize drawing. To learn more and read our official rules, please click <a href="https://tcmedia.akamaized.net/conference/2022/docs/2022_Cybersecurity_Conference_Game_Rules.pdf" target="_blank">here.</a>”</p>
                        </div>

                        <div class="qBox">
                            <h1 class="question noStyle">How can I see talks that I missed?</h1>
                            <p class="answer">Most of our talks will be available after the live event. You will receive an email with the links to the available talks.</p>
                        </div>

                        <div class="qBox">
                            <h1 class="question noStyle">I’m having technical trouble accessing the live event.</h1>
                            <p class="answer">For technical trouble during the conference, please visit our
                            <a href="https://event.on24.com/view/help/faq.html" target="_blank">tech FAQ</a><br>
                            (external site).</p>
                        </div>

                    </div>
                </div>

                <!-- sponsers area container -->
				<div class="sponsors"></div>

			</div>
		`),this.$.divParent.append(this.$.dom)}cacheRefs(){this.$.aRegister=this.$.dom.find(".aRegister"),this.$.sponsors=this.$.dom.find(".sponsors"),this.$.questions=this.$.dom.find(".qBox .question")}subscribeEvents(){this.$.aRegister.on("click",()=>{this.app.modalSystem.showRegisterModal()}),this.$.questions.on("click",this.toggleQuestion.bind(this))}toggleQuestion(e){e.preventDefault();let t=$(e.target).parent();t.toggleClass("open")}show(){}}PageFAQ.pageSlug="faq",PageFAQ.pageRoutes=["faq","/faq"];class PageHome{constructor(e,t){this.app=e,this.$={},this.$.divParent=$(t),this.buildDom(),this.cacheRefs(),this.subscribeEvents(),this.setUpRings(this),this.setUpPopInAnimations(this),this.sponsors=new SponsorsArea(this.app,this.$.sponsors)}buildDom(){App.strings.STE;var e=App.strings.Logo,t=(App.strings.Reg,PageHome.pageSlug),i=App.isDayOf?"noAnimation":"",a=App.isDayOf?`<!-- Live now blurb box -->
			<div class="blurb ${i}" align="center">
				<div class="row row1 header attHeader"><h1 class="noStyle">Thank you for attending the 2022 AT&T Security Conference</h1></div>
				<div class="row row4 btn">
					<!-- watch button -->
					<!--a href="#agenda"><div class="cmdWatch redButton rnb" alt="Watch Button" title="Watch Live">
						<div class="buttonInner">Watch Live<span class="material-icons arrow">arrow_forward_ios</span></div>
					</div></a-->
					<!-- register button -->
					<div class="cmdRegister blueButton rnb" alt="Register Button" title="Register Free">
						<div class="buttonInner">Register Free<span class="material-icons arrow">arrow_forward_ios</span></div>
					</div>
				</div>
			</div>`:`<!-- save the date blurb box, each row slides in slighly later -->
			<div class="blurb" align="center">
				<div class="row row1 header attHeader"><h1 class="noStyle" title="SAVE THE DATE!">SAVE THE DATE!</h1></div>
				<div class="row row2"><p class="noStyle">The AT&AMP;T Security Conference</p></div>
				<div class="row row3"><p class="noStyle">Returns <i>On October 4, 2022!</p></i></div>
				<div class="row row4 btn">
					<!-- register button -->
					<div class="cmdRegister blueButton" alt="Register Button" title="Register Free">
						<div class="buttonInner">Register Free<span class="material-icons arrow">arrow_forward_ios</span></div>
					</div>
				</div>
			</div>
			
			<div class="pdflink" align="center">
				<a href="/assets/Agenda_2022.pdf" target="_blank" title="Download full schedule PDF">Download full schedule PDF</a>
			</div>`;this.$.dom=$(`
			<div class="page_${t} page">

				<div class="ringContainer left">

					<!-- top left rings -->
					<div ringid="01" anchor="ringAnchor_01" class="ring left" radius="650" color="#BB58F6" dotted="false" startCW="true">
						<div class="orbitDot" angle="350" radius="16" color="#1C7DE8"></div>
						<div class="orbitDot" angle="30" radius="16" color="#0057B8"></div>
						<div class="orbitDot" angle="40" radius="8" color="#BB58F6"></div>
						<div class="orbitDot" angle="45" radius="8" color="#6558DA"></div>
					</div>
					<div ringid="02" anchor="ringAnchor_02" class="ring left" radius="650" color="#0057B8" dotted="true" startCW="false">
						<div class="orbitDot" angle="355" radius="8" color="#7658DF" extend="10%"></div>
						<div class="orbitDot" angle="25" radius="10" color="#1C7DE8"></div>
						<div class="orbitDot" angle="50" radius="6" color="#0057B8"></div>
						<div class="orbitDot" angle="130" radius="8" color="#7658DF"></div>
						<div class="orbitDot" angle="150" radius="6" color="#5957D5"></div>
					</div>

					<!-- top right -->
					<div ringid="03" anchor="ringAnchor_03" class="ring" radius="350" color="#019FDB" dotted="true" startCW="false">
						<div class="orbitDot" angle="220" radius="6" color="#019FDB"></div>
						<div class="orbitDot" angle="150" radius="7" color="#0057B8"></div>
					</div>

					<!-- access everything -->
					<div ringid="04" anchor="ringAnchor_04" class="ring" radius="450" offset="250, -70" color="#0057B8" dotted="false" startCW="true">
						<div class="orbitDot" angle="180" radius="16" color="#0057B8"></div>
						<div class="orbitDot" angle="170" radius="8" color="#0057B8"></div>
					</div>
					<div ringid="05" anchor="ringAnchor_05" class="ring" radius="450" offset="200, -50" color="#0057B8" dotted="true" startCW="false">
						<div class="orbitDot" angle="210" radius="6" color="#7658DF" extend="10%"></div>
						<div class="orbitDot" angle="225" radius="5" color="#1C7DE8" extend="12%"></div>
						<div class="orbitDot" angle="150" radius="6" color="#5957D5"></div>
					</div>

					<!-- last year rings -->
					<div ringid="06" anchor="ringAnchor_06" class="ring left" radius="500" color="#BB58F6" dotted="false" startCW="true">
						<div class="orbitDot" angle="350" radius="16" color="#1C7DE8"></div>
						<div class="orbitDot" angle="30" radius="16" color="#0057B8"></div>
						<div class="orbitDot" angle="40" radius="8" color="#BB58F6"></div>
						<div class="orbitDot" angle="45" radius="8" color="#6558DA"></div>
					</div>
					<div ringid="07" anchor="ringAnchor_07" class="ring left" radius="500" color="#0057B8" dotted="true" startCW="false">
						<div class="orbitDot" angle="355" radius="8" color="#7658DF" extend="10%"></div>
						<div class="orbitDot" angle="25" radius="10" color="#1C7DE8"></div>
						<div class="orbitDot" angle="50" radius="6" color="#0057B8"></div>
						<div class="orbitDot" angle="130" radius="8" color="#7658DF"></div>
						<div class="orbitDot" angle="150" radius="6" color="#5957D5"></div>
					</div>

					<div class="ringAnchor_03 ringAnchor" style="position: absolute; right: -200px; top: 300px;"></div>

				</div>
				

				<!-- top area -->
				<div class="top_area" align="right">

					<!-- big logo -->
					<div class="bigLogo ${i}" alt="${e}" title="${e}"></div>

					<!-- targets for our rings to position on -->
					<div class="ringAnchor_01 ringAnchor" style="position: absolute; left: 50%; top: 40%;"></div>
					<div class="ringAnchor_02 ringAnchor" style="position: absolute; left: 56%; top: 43%;"></div>

					<!-- top blurb: save the date / live now, etc -->
					${a}

				<!-- /topArea -->
				</div>


				
				<!-- acess granted (previously, access everything) area -->
				<div class="accessEverything_area shit" align="center">

					<!-- centered column wrapper that scales responsively -->
					<div class="columnWrapper">
						<span class="blur">

							<!-- the main header row -->
							<!--div class="accessEverythingHeader attHeader2022"><h1 class="noStyle">Thank you for attending the 2022 AT&T Security Conference</h1></div-->
							<!-- the topic rows -->
							
							<div class="aeRow row1 thisShouldHaveBeenPlannedNotLastMinute" align="left">
								<p class="">
									We had an amazing day looking at the ways we can work together to help Secure the Everything.
								</p>
							</div>
							<div class="aeRow row2 thisShouldHaveBeenPlannedNotLastMinute" align="left">
								<p class="">
									Come back soon to see the Conference talks on demand.
								</p>
							</div>
							<div class="aeRow row3 thisShouldHaveBeenPlannedNotLastMinute" align="left">
								<p class="">
									From the home office to the world stage, there's never been a more important time to look at how we protect the digital world. Live viewers enjoyed a full day of virtual talks, panels, and deep-thinking keynotes on topics like Data Privacy, Cloud Security, Quantum Computing, Supply Chain Protection and more! Register today to get informed when our talks are available on demand.
								</p>
							</div>				
						
						</span>

					<!-- /columnWrapper -->
					</div>
				<!-- /accessEverything_area-->
				</div>



				<!-- acess granted (previously, access everything) area -->
				<div class="accessEverything_area" align="center">

					<!-- centered column wrapper that scales responsively -->
					<div class="columnWrapper">
						<span class="blur">

							<!-- the main header row -->
							<div class="accessEverythingHeader attHeader2022"><h1 class="noStyle">Access Granted!</h1></div>
							<!-- the topic rows -->
							
							<div class="aeRow row1"><p class="noStyle"><span class="attHeader">Expertise</span> from top security thinkers and practitioners.</p></div>
							<div class="aeRow row2"><p class="noStyle"><span class="attHeader">Implementation Tips</span> that will help bring your security solutions to the next level.</p></div>
							<div class="aeRow row3"><p class="noStyle"><span class="attHeader">A Look into the Future</span> of security innovation and technology.</p></div>
							<div class="aeRow row4"><p class="noStyle"><span class="attHeader">Unique Insights</span> into the threats from abroad and at home.</p></div>
					
						
						</span>

					<!-- /columnWrapper -->
					</div>

					<div class="ringAnchor_04 ringAnchor" style="float: right; position: relative; top: -100px;"></div>
					<div class="ringAnchor_05 ringAnchor" style="float: right; position: relative; top: -30px;"></div>

				<!-- /accessEverything_area-->
				</div>

				<!-- spawn speakers here -->
				<span class="speakersWrapper" data-nosnippet></span>
				<div align="center" class="seeAllSpeakersRow">
					<a href="#speakers">See all speakers</a>
				</div>

				

				<!-- last year section -->
				<div class="lastYear_area" align="center" data-nosnippet>
					
					<!-- pretty graphics area -->
					<div class="gfxArea">
						<div class="ringAnchor_06 ringAnchor" style="float: left; position: relative; left: 100px; top: 450px;"></div>
						<div class="ringAnchor_07 ringAnchor" style="float: left; position: relative; left: 120px; top: 400px;"></div>

						<div class="peopleBubbles">
							<div class="blue"></div>
							<div class="person person_01"></div>
							<div class="person person_02"></div>
							<div class="person person_03"></div>
							<div class="person person_04"></div>
							<div class="person person_05"></div>
						</div>

					</div>

					<!-- info area -->
					
					<div class="txtArea" align="left" data-nosnippet>
						<div class="attHeader lastYearHeader">
						<h1 class="noStyle">Check Out Last Year's Event</h1>
						</div>
						<iframe class="youtubeIframe" width="353" height="198" src="https://www.youtube.com/embed/Pgp3b-N1sD4?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						<div class="txt"><p class="noStyle">In 2021, we gathered to discuss the wide spectrum of security threats, countermeasures, and the steps we can all take to help <b><i>Secure the Everything.</i></b></p></div>
						<div class="link">
							<a href="http://security-conference.att.com/2021/" target="_blank" title="Last year's conference.">Last year's conference.</a>
						</div>
					</div>

				<!-- /lastYear_area -->
				</div>

				<!-- sponsers area container -->
				<div class="sponsors"></div>

			</div>
		`),this.$.divParent.append(this.$.dom),this.speakersSection=new SpeakersSection(this.app,this.$.dom.find(".speakersWrapper"))}cacheRefs(){this.$.rings=this.$.dom.find(".ring"),this.$.ringContainer=this.$.dom.find(".ringContainer"),this.$.top_area=this.$.dom.find(".top_area"),this.$.cmdRegister=this.$.dom.find(".cmdRegister"),this.$.secWrapperBlack=this.$.dom.find(".secWrapperBlack"),this.$.sponsors=this.$.dom.find(".sponsors")}subscribeEvents(){this.$.cmdRegister.on("click",()=>{this.app.modalSystem.showRegisterModal()}),$(window).on("resize",this.resizeRingWrapper.bind(this))}show(){this.resizeRingWrapper();for(let e=0;e<this.rings.length;e++)this.rings[e].repose()}resizeRingWrapper(e){var t=$(document).height();this.$.ringContainer.css("height",t-100+"px")}setUpRings(t){this.rings=[],this.$.rings.each(function(){var e=new BGRingSystem($(this),t.$.dom);t.rings.push(e)}),new RingResizer(this.rings[0],this.$.top_area,1024),new RingResizer(this.rings[1],this.$.top_area,1024),this.resizeRingWrapper()}setUpPopInAnimations(t){this.animationObserver=new IntersectionObserver(function(e,t){e.forEach(e=>{e.isIntersecting&&e.target.classList.add("run")})});const e=this.$.dom.find("[data-inviewport]");e.each(function(){var e=$(this)[0];t.animationObserver.observe(e,{})});let i=this.$.dom.find(".speakersIconsGrid"),a=(i.each(function(){var e=$(this)[0];t.animationObserver.observe(e,{})}),this.$.dom.find(".peopleBubbles"));a.each(function(){var e=$(this)[0];t.animationObserver.observe(e,{})})}}PageHome.pageSlug="home",PageHome.pageRoutes=["","/"];class PageSession{constructor(e,t){this.app=e,this.$={},this.$.divParent=$(t),this.buildDom(),this.cacheRefs(),this.subscribeEvents(),this.sponsors=new SponsorsArea(this.app,this.$.sponsors)}buildDom(){App.strings.STE,App.strings.Logo,App.strings.Reg;var e=PageSession.pageSlug;this.$.dom=$(`
			<div class="page_${e} page">

                <!-- page title -->
                <div align="center">
                    <div class="attHeader2022"><h1 class="noStyle"><span class="title">22</span></h1></div>
                </div>

                <div align="center"> 
                    <div class="centerWrapper">
                        <div class="timeRow timeText"></div>
                        <div class="networkSessionRow timeText">Networking Session to follow: <span class="networkSessionTime"></span></div>
                        <div class="blurb"></div>
                        <div class="speakersArea run"></div>                        
                        <div class="backLink timeText">
                            <a href="#sessions"><span class="arrow">&lt;</span> Back to All Sessions</a>
                        </div>                        
                    </div>
                </div>

                <!-- sponsers area container -->
				<div class="sponsors"></div>

			</div>
		`),this.$.divParent.append(this.$.dom)}buildAgendaItem(t){var i=App.presentations;let a=null;for(let e=0;e<i.length;e++){var s=i[e];if(s.on24id==t){a=s;break}}if(null==a)this.app.router.switchPage(Page404.pageSlug);else{this.$.title.html(a.title),this.$.timeRow.html(a.timeStart),1==a.isSponsor?(this.$.networkSessionTime.html(a.networkSessionRange),this.$.networkSessionRow.show()):this.$.networkSessionRow.hide(),this.$.blurb.html(a.desc),this.$.speakersArea.html("");for(let e=0;e<a.presentersData.length;e++){var o=a.presentersData[e];new SpeakerBox(this.app,o,this.$.speakersArea,{nameOnly:!0,style:`
                        width: 250px;
                        height: 350px;
                        display: inline-block;
                        transform: scale(0.8) translate(-25%, 0%);
                        margin: 0px;

                    `})}}}cacheRefs(){this.$.title=this.$.dom.find(".title"),this.$.timeRow=this.$.dom.find(".timeRow"),this.$.networkSessionRow=this.$.dom.find(".networkSessionRow"),this.$.networkSessionTime=this.$.networkSessionRow.find(".networkSessionTime"),this.$.blurb=this.$.dom.find(".blurb"),this.$.speakersArea=this.$.dom.find(".speakersArea"),this.$.backLink=this.$.dom.find(".backLink"),this.$.outerWraper=this.$.dom.find(".outerWraper"),this.$.sponsors=this.$.dom.find(".sponsors")}subscribeEvents(){}show(e){-1<e.indexOf("/")&&(e=e.split("/")[0]),this.buildAgendaItem(e)}}PageSession.pageSlug="session",PageSession.pageRoutes=["session","/session"];class PageSpeakers{constructor(e,t){this.app=e,this.$={},this.$.divParent=$(t),this.buildDom(),this.cacheRefs(),this.subscribeEvents(),this.setUpPopInAnimations(this),this.sponsors=new SponsorsArea(this.app,this.$.sponsors)}buildDom(){App.strings.STE,App.strings.Logo,App.strings.Reg;var e=PageSpeakers.pageSlug;this.$.dom=$(`
			<div class="page_${e} page">

				<!-- page title -->
				<div align="center">
					<div class="attHeader2022"><h1 class="noStyle">20<span>22</span> Speakers</h1></div>
				</div>
				
                <!-- spawn speakers here -->
                <span class="speakersWrapper"></span>
			
				<!-- sponsers area container -->
				<div class="sponsors"></div>

			</div>
		`),this.$.divParent.append(this.$.dom),this.speakersSection=new SpeakersSection(this.app,this.$.dom.find(".speakersWrapper"),!0)}cacheRefs(){this.$.sponsors=this.$.dom.find(".sponsors")}subscribeEvents(){}show(){}setUpPopInAnimations(t){this.animationObserver=new IntersectionObserver(function(e,t){e.forEach(e=>{e.isIntersecting&&e.target.classList.add("run")})});let e=this.$.dom.find(".speakersIconsGrid");e.each(function(){var e=$(this)[0];t.animationObserver.observe(e,{})})}}PageSpeakers.pageSlug="speakers",PageSpeakers.pageRoutes=["speakers","/speakers"];