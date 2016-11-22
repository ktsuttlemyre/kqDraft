	var counter=0;
	var uniqueID=function(){
		return counter++
	}
	var trashSortable=null
	var queueSortable=null
	var database=[
		{
			id:'0'
			,name:'Kyle'
			,teir:1
			,optimize:'queen'
			,frequency:{queen:.9}
			,stats:{
				queen:{military:[0,0],snail:[0,0],berries:[0,0]}
				,drone:{military:[0,0],snail:[0,0],berries:[0,0]}
			}
			,history:{
				games:0
				,timesAs:{queen:0,drone:0}
			}
		},{
			id:'1'
			,name:'Ryan M'
			,teir:1
			,optimize:'queen'
			,frequency:{queen:.4}
			,stats:{
				queen:{military:[0,0],snail:[0,0],berries:[0,0]}
				,drone:{military:[0,0],snail:[0,0],berries:[0,0]}
			}
			,history:{
				games:0
				,timesAs:{queen:0,drone:0}
			}
		},{
			id:'2'
			,name:'Ryan L'
			,teir:1
			,optimize:'queen'
			,frequency:{queen:1}
			,stats:{
				queen:{military:[0,0],snail:[0,0],berries:[0,0]}
				,drone:{military:[0,0],snail:[0,0],berries:[0,0]}
			}
			,history:{
				games:0
				,timesAs:{queen:0,drone:0}
			}
		},{
			id:'3'
			,name:'Jorge'
			,teir:1
			,optimize:'queen'
			,frequency:{queen:.5}
			,stats:{
				queen:{military:[0,0],snail:[0,0],berries:[0,0]}
				,drone:{military:[0,0],snail:[0,0],berries:[0,0]}
			}
			,history:{
				games:0
				,timesAs:{queen:0,drone:0}
			}
		},{
			id:'4'
			,name:'Jason'
			,teir:1
			,optimize:''
			,frequency:{queen:.4}
			,stats:{
				queen:{military:[0,0],snail:[0,0],berries:[0,0]}
				,drone:{military:[0,0],snail:[0,0],berries:[0,0]}
			}
			,history:{
				games:0
				,timesAs:{queen:0,drone:0}
			}
		},{
			id:'5'
			,name:'Jordan'
			,teir:1
			,optimize:''
			,frequency:{queen:.2}
			,stats:{
				queen:{military:[0,0],snail:[0,0],berries:[0,0]}
				,drone:{military:[0,0],snail:[0,0],berries:[0,0]}
			}
			,history:{
				games:0
				,timesAs:{queen:0,drone:0}
			}
		},{
			id:'6'
			,name:'Eli'
			,teir:1
			,optimize:'drone'
			,frequency:{queen:0}
			,stats:{
				queen:{military:[0,0],snail:[0,0],berries:[0,0]}
				,drone:{military:[0,0],snail:[0,0],berries:[0,0]}
			}
			,history:{
				games:0
				,timesAs:{queen:0,drone:0}
			}
		},{
			id:'7'
			,name:'Jacky'
			,teir:1
			,optimize:'drone'
			,frequency:{queen:0}
			,stats:{
				queen:{military:[0,0],snail:[0,0],berries:[0,0]}
				,drone:{military:[0,0],snail:[0,0],berries:[0,0]}
			}
			,history:{
				games:0
				,timesAs:{queen:0,drone:0}
			}
		},{
			id:'8'
			,name:'Travis'
			,teir:1
			,optimize:'drone'
			,frequency:{queen:0}
			,stats:{
				queen:{military:[0,0],snail:[0,0],berries:[0,0]}
				,drone:{military:[0,0],snail:[0,0],berries:[0,0]}
			}
			,history:{
				games:0
				,timesAs:{queen:0,drone:0}
			}
		},{
			id:'9'
			,name:'Bobby'
			,teir:1
			,optimize:''
			,frequency:{queen:.3}
			,stats:{
				queen:{military:[0,0],snail:[0,0],berries:[0,0]}
				,drone:{military:[0,0],snail:[0,0],berries:[0,0]}
			}
			,history:{
				games:0
				,timesAs:{queen:0,drone:0}
			}
		},{
			id:'10'
			,name:'Forest'
			,teir:1
			,optimize:''
			,frequency:{queen:.8}
			,stats:{
				queen:{military:[0,0],snail:[0,0],berries:[0,0]}
				,drone:{military:[0,0],snail:[0,0],berries:[0,0]}
			}
			,history:{
				games:0
				,timesAs:{queen:0,drone:0}
			}
		},{
			id:'11'
			,name:'P'
			,teir:1
			,optimize:''
			,frequency:{queen:.8}
			,stats:{
				queen:{military:[0,0],snail:[0,0],berries:[0,0]}
				,drone:{military:[0,0],snail:[0,0],berries:[0,0]}
			}
			,history:{
				games:0
				,timesAs:{queen:0,drone:0}
			}
		},{
			id:'12'
			,name:'Tyler'
			,teir:1
			,optimize:''
			,frequency:{queen:.8}
			,stats:{
				queen:{military:[0,0],snail:[0,0],berries:[0,0]}
				,drone:{military:[0,0],snail:[0,0],berries:[0,0]}
			}
			,history:{
				games:0
				,timesAs:{queen:0,drone:0}
			}
		},{
			id:'13'
			,name:'John'
			,teir:1
			,optimize:'queen'
			,frequency:{queen:.8}
			,stats:{
				queen:{military:[0,0],snail:[0,0],berries:[0,0]}
				,drone:{military:[0,0],snail:[0,0],berries:[0,0]}
			}
			,history:{
				games:0
				,timesAs:{queen:0,drone:0}
			}
		},{
			id:'14'
			,name:'Steven'
			,teir:1
			,optimize:'drone'
			,frequency:{queen:.8}
			,stats:{
				queen:{military:[0,0],snail:[0,0],berries:[0,0]}
				,drone:{military:[0,0],snail:[0,0],berries:[0,0]}
			}
			,history:{
				games:0
				,timesAs:{queen:0,drone:0}
			}
		},{
			id:'15'
			,name:'Aaron'
			,teir:1
			,optimize:'drone'
			,frequency:{queen:.8}
			,stats:{
				queen:{military:[0,0],snail:[0,0],berries:[0,0]}
				,drone:{military:[0,0],snail:[0,0],berries:[0,0]}
			}
			,history:{
				games:0
				,timesAs:{queen:0,drone:0}
			}
		},{
			id:'16'
			,name:'Andrew'
			,teir:1
			,optimize:'queen'
			,frequency:{queen:.8}
			,stats:{
				queen:{military:[0,0],snail:[0,0],berries:[0,0]}
				,drone:{military:[0,0],snail:[0,0],berries:[0,0]}
			}
			,history:{
				games:0
				,timesAs:{queen:0,drone:0}
			}
		},{
			id:'17'
			,name:'Emily'
			,teir:1
			,optimize:'drone'
			,frequency:{queen:.8}
			,stats:{
				queen:{military:[0,0],snail:[0,0],berries:[0,0]}
				,drone:{military:[0,0],snail:[0,0],berries:[0,0]}
			}
			,history:{
				games:0
				,timesAs:{queen:0,drone:0}
			}
		},{
			id:'18'
			,name:'Will'
			,teir:1
			,optimize:'drone'
			,frequency:{queen:.8}
			,stats:{
				queen:{military:[0,0],snail:[0,0],berries:[0,0]}
				,drone:{military:[0,0],snail:[0,0],berries:[0,0]}
			}
			,history:{
				games:0
				,timesAs:{queen:0,drone:0}
			}
		},{
			id:'19'
			,name:'NoobQueen'
			,teir:1
			,optimize:'queen'
			,frequency:{queen:.8}
			,stats:{
				queen:{military:[0,0],snail:[0,0],berries:[0,0]}
				,drone:{military:[0,0],snail:[0,0],berries:[0,0]}
			}
			,history:{
				games:0
				,timesAs:{queen:0,drone:0}
			}
		},{
			id:'20'
			,name:'NoobDrone'
			,teir:1
			,optimize:'drone'
			,frequency:{queen:.8}
			,stats:{
				queen:{military:[0,0],snail:[0,0],berries:[0,0]}
				,drone:{military:[0,0],snail:[0,0],berries:[0,0]}
			}
			,history:{
				games:0
				,timesAs:{queen:0,drone:0}
			}
		},{
			id:'21'
			,name:'NoobPlay'
			,teir:1
			,optimize:''
			,frequency:{queen:.8}
			,stats:{
				queen:{military:[0,0],snail:[0,0],berries:[0,0]}
				,drone:{military:[0,0],snail:[0,0],berries:[0,0]}
			}
			,history:{
				games:0
				,timesAs:{queen:0,drone:0}
			}
		},{
			id:'22'
			,name:'QueenOnly'
			,teir:1
			,optimize:'queenOnly'
			,frequency:{queen:.8}
			,stats:{
				queen:{military:[0,0],snail:[0,0],berries:[0,0]}
				,drone:{military:[0,0],snail:[0,0],berries:[0,0]}
			}
			,history:{
				games:0
				,timesAs:{queen:0,drone:0}
			}
		},{
			id:'23'
			,name:'DroneOnly'
			,teir:1
			,optimize:'droneOnly'
			,frequency:{queen:.8}
			,stats:{
				queen:{military:[0,0],snail:[0,0],berries:[0,0]}
				,drone:{military:[0,0],snail:[0,0],berries:[0,0]}
			}
			,history:{
				games:0
				,timesAs:{queen:0,drone:0}
			}
		}



	];

	//http://stackoverflow.com/questions/20811131/javascript-remove-outlier-from-an-array
	//http://mathworld.wolfram.com/Outlier.html
	//https://www.dataz.io/display/Public/2013/03/20/Describing+Data%3A+Why+median+and+IQR+are+often+better+than+mean+and+standard+deviation
	function partitionOutliers(data,prop) {
		debugger
		if(!data.length){
			return {outliers:[],inliers:[]}
		}
	    // 
	    var values = _.filter(data,function(o){
			return o&&o[prop]!=null
		})/* .map(function(v) {
		     return v[prop];
		})*/.sort( function(a, b) {
		        return a[prop] - b[prop];
		     });

		/* Then find a generous IQR. This is generous because if (values.length / 4) 
	     * is not an int, then really you should average the two elements on either 
	     * side to find q1.
	     */ 
		var q1 = (values[Math.floor((values.length / 4))]||{})[prop]||0;
		// Likewise for q3. 
		var q3 = (values[Math.ceil((values.length * (3 / 4)))]||{})[prop]||0;
		var iqr = q3 - q1;


		// Then find min and max values
		var maxValue = q3 + iqr*1.5;
		var minValue = q1 - iqr*1.5;

		// Then filter anything beyond or beneath these values.
		var outliers = _.remove(values,function(x) {
			x=(prop)?x[prop]:x;
			return (x > maxValue) || (x < minValue);
		});

		// Then return
		return {outliers:outliers,inliers:values,q1:q1,q3:q3,iqr:iqr,max:maxValue,min:minValue}
	}


	var median =function(data,prop) {
		// extract the .values field and sort the resulting array
		var m = data.filter(function(o){
			return o[prop]!=null
		}).map(function(v) {
		    return v[prop];
		}).sort(function(a, b) {
		    return a - b;
		});

		var middle = Math.floor((m.length - 1) / 2); // NB: operator precedence
		if (m.length % 2) {
		    return m[middle];
		} else {
		    return (m[middle] + m[middle + 1]) / 2.0;
		}
	}


	var average=function(queue,prop){
		debugger
		if(!queue.length){
			return 0
		}
		var total = 0,length=0;
		for(var i = 0; i < queue.length; i++) {
			var value=(prop)?(queue[i][prop]):queue[i];
			if(value!=null){
				length++
				total += value;
			}
		}
		return (total/length)||0;
	}

	var QKQueue=function(){
		if(!(this instanceof QKQueue)){return new QKQueue()}
		this.q=[]
	}
	QKQueue.prototype.add=function(players){ //TODO normalize outliers each time and bring their weights to the middle each time new people are added
		var analysis=this.analyze(true)
		var startWeight=analysis.average
		if(!Array.isArray(players)){
			players=[players]
		}
		_.forEach(_.shuffle(players),_.bind(function(player){
			if(player.weight==null){
				player.weight=startWeight
			}
			this.q.push(player);
		},this))
		this.draw()
		return analysis;
	}
	QKQueue.prototype.remove=function(playerIDs){
		debugger
		if(!Array.isArray(playerIDs)){
			playerIDs=[playerIDs]
		}
		var removed=_.remove(this.q,function(player){
			return _.includes(playerIDs,player.id)
		})
		var analysis=this.analyze(true)
		var startWeight=analysis.average
		this.draw()
		return analysis;
	}
	QKQueue.prototype.clear=function(){
		while(this.q.length){
			this.q.pop()
		}
		this.draw()
	}
	QKQueue.prototype.resetWeight=function(){
		for(var i=0,l=this.q.length;i<l;i++){
			this.q[i].weight=1;
		}
		this.draw()
	}
	QKQueue.prototype.analyze=function(clamp){
		clamp=true //force clamping always for now
		var partition=partitionOutliers(this.q,'weight')
		var startWeight=Math.round(average(partition.inliers||[],'weight')||1);
		partition.average=startWeight
		var min=Math.ceil(partition.min),max=Math.floor(partition.max);
		//outlier clamping
		if(clamp){
			_.forEach(partition.outliers,function(player){
				player.weight=_.clamp(player.weight,min,max)
			})
		}
		return partition
	}
	var emojis={ 		//html pairs		html single		unicode
		bee:String.fromCharCode(0xD83D,0xDC1D) //&#xD83D;&#xDC1D;	&#x1F41D;	'\u1F41D'
		,controller:String.fromCharCode(0xD83C,0xDFAE)//		&#xD83C;&#xDFAE;	&#x1F3AE;	\u1F3AE
		,crown:String.fromCharCode(0xD83D,0xDC51) //&#xD83D;&#xDC51;	&#x1F451; '\u1F451'
		,snail:String.fromCharCode(0xD83D,0xDC0C) //	&#xD83D;&#xDC0C;	&#x1F40C;	\u1F40C
		,grapes:String.fromCharCode(0xD83C,0xDF47) //		&#xD83C;&#xDF47;	&#x1F347;	\u1F347
		,police:String.fromCharCode(0xD83D,0xDEC3)	//&#xD83D;&#xDEC3;	&#x1F6C3;	\u1F6C3
		,clover:String.fromCharCode(0xD83C,0xDF40) //&#xD83C;&#xDF40;	&#x1F340;	\u1F340
	}
	var dataToPlayerDiv=function(player){
		var div=$('<div/>',{class:'player draggable',id:'id_'+uniqueID()+'_'+player.id})
		div.append($('<span/>',{class:'name'}).text(player.name))
		var optimize=emojis.controller;
		switch(player.optimize){
			case 'queen':
				optimize=emojis.crown;
				break;
			case 'drone':
				optimize=emojis.bee;
				break;
			case 'queenOnly':
				optimize='['+emojis.crown+' ]';
				break;
			case 'droneOnly':
				optimize='['+emojis.bee+' ]';
				break;
		}

		//div.append($('<a/>').append($('<i/>',{class:'remove metric glyphicon glyphicon-remove-sign glyphicon-white'}).html('&nbsp;')).click(function(){
		//		debugger
		//		var id=$(this).parent().attr('id').split(':')[1]
		//		queue.remove(id)
		//	}))
		div.append($('<span/>',{class:'metric weight'}).text(player.weight))
		div.append($('<span/>',{class:'metric optimize'}).text(optimize))
		//div.append($('<span/>',{class:'metric wins'}).text(player.weight))
		return div
	}
	QKQueue.prototype.draw=function(id){
		if(!id){
			id='#everyone-list'
		}
		var elem=$(id)
		elem.empty()
		_.forEach(_.sortBy(this.q,['weight']).reverse(),function(player){
			elem.append(dataToPlayerDiv(player))
		})
	}
	var queenFrequencyGetter=function(player,iteration){
		var x=(iteration*.01)
		if(player.optimize=='queenOnly'){
			return 1+x
		}else if(player.optimize=='queen'){
			return .80+x //player.frequency.queen+x
		}else if(player.optimize=='drone'){
			return .1+x
		}else if(player.optimize=='droneOnly'){
			return 0+x
		}//else if(player.optimize=='play'){
		return .20+x
	}
	var droneFrequencyGetter=function(player,iteration){
		var x=(iteration*.01)
		if(player.optimize=='queenOnly'){
			return 0+(iteration*.001) 
		}else if(player.optimize=='queen'){
			return .50+x;
		}else if(player.optimize=='drone'){
			return 1.0+x
		}else if (player.optimize=='droneOnly'){
			return 1.0+x
		}//elseif(player.optimize=='play'){
		return .8+x

		//return 1-(player.frequency.queen+(iteration*.01))
		//}//else player.queenpref=='maxPlay' //more play time
	}

	//getter should expect a player object and an iteration number (multiplier) I also add a bonus probablity in case iteration isn't compensated for.
	var frequencyPick=function(queue,n,getter){
		var fn;
		if(!getter){
			fn=function(){return 1}
		}else if(typeof getter!='function'){
			fn=function(player){return players[getter]};
		}else{
			fn=getter;
		}
		var picked=[]
		var index=0;
		var bonusProbablity=0
		while(picked.length<n && queue.length){
			var player=queue[index]
			if(randomEngine.integer(1,100)<=(100*fn(player,index))+bonusProbablity){
				player.weight++
				picked.push(_.pullAt(queue,index)[0]);
			}else{
				index++
			}

			if(index>=queue.length){
				bonusProbablity+=.001
				index=0
			}
		}
		return picked
	}
	// var chooseQueens=function(queue){ //mutates queue //removes 2 number of queen players from the queue and adds +1 weight// if no queen chosen then everyone gets a temp increase in queen probablity
	// 	var queens=[]
	// 	var index=0;
	// 	var queenProbablity=0
	// 	debugger
	// 	do{
	// 		var player=queue[index]
	// 		if(_.random(0,100)<=(100*player.frequency.queen)+queenProbablity){
	// 			player.weight++
	// 			queens.push(_.pullAt(queue,index)[0]);
	// 		}
	// 		index++
	// 		if(index>=queue.length){
	// 			queenProbablity+=.01
	// 			index=0
	// 		}
	// 	}while(queens.length<2)
	// 	return queens
	// }
	// var chooseDrones=function(queue,n){ //mutates queue //removes n number of drone players from the queue and adds +1 weight
	// 	var drones=[],initialQueueLength=queue.length
	// 	while(queue.length){
	// 		var pulled=queue.shift()
	// 		if(n<initialQueueLength && pulled.frequency.queen>=1){//skip queens with frequency = 1 unless the queuepool is too small
	// 			//queenSitout.push(pulled)
	// 			continue;
	// 		}
	// 		pulled.weight++
	// 		drones.push(pulled)
	// 		if(drones.length>=n){
	// 			break
	// 		}
	// 	}
	// 	// if(drones.length<n && queenSitout.length){
	// 	// 	drones.push.apply(drones,chooseDrones(queenSitout,n,true))
	// 	// }
	// 	return drones
	// }
	var randomEngine=Random();
	var uniformRandom0to1Ex=function(){
		return randomEngine.realZeroToOneExclusive()
	}
	if(!window.rwc){
		window.rwc=module.export||module.exports;
	}

	var onDeck=function(queue,number){
		//set a tmp weighted order
		queue=queue.slice()
		var tmp=[],weightedHash={};
		var list=queue.filter(function(o){return o.weight!=null}).map(function(o){return o.weight})
		debugger
		var maxWeight=Math.max.apply(Math,list)

		_.forEach(queue,function(obj){
			
			weightedHash[obj.id]=maxWeight-(obj.weight-1)

		})
		debugger
		for(var i=0,l=queue.length;i<l;i++){
			var id=rwc.select(weightedHash,null,uniformRandom0to1Ex)//choose players
			//tmp.push(_.find(queue,{id:id}))[0] //get the object
			tmp.push(_.remove(queue,{id:id})[0]) //get the object and remove it
			delete weightedHash[id]
		}

		if(number){
			return tmp.slice(0,number)
		}
		var queens=_.shuffle(frequencyPick(tmp,2,queenFrequencyGetter));
		var drones=_.shuffle(frequencyPick(tmp,8,droneFrequencyGetter)); //always choose drone function(){return 1}


		//add everyone back into the queue
		//queue.push.apply(queue, queens)
		//queue.push.apply(queue, drones)

		return {queens:queens,drones:drones,queueScreenshot:tmp};
	}

	var chooseTeams=function(draft){

	}

	function tag (obj,cssClass){
		var name=obj.name
		var id=obj.id
		if(!cssClass){
			cssClass=''
		}
		var type=0
		if(cssClass=='drone'){
			type=1
		}
		var tag=$('<span/>',{class:'tag draggable '+cssClass,'data-sort':type+'-'+name,id:'id_'+uniqueID()+'_'+obj.id})
		tag.append($('<span/>').text(name))
		//tag.append($('<a/>').append($('<i/>',{class:'remove glyphicon glyphicon-remove-sign glyphicon-white'})))
		return tag
	}


	var KQDraft=function(){
		if(!(this instanceof KQDraft)){return new KQDraft()}
		this.draftIndex=0
	}
	

	KQDraft.prototype.draft=function(number){
		// if(!this.draftIndex){
		// 	console.log(draftCarousel.slick('getSlick'))
		// 		//alert(draftCarousel.slick('getSlick').slideCount)


		// }
	
	var div=$('<div/>')
	// var container=$('<div class="container-fluid">'+
	// 	'<div class="row" style="text-align:center;font-size: 1.5em;">Bout ' + (this.draftIndex++) + '</div>'+
	// 	'</div>')
	var container=$('<div/>',{'class':"container-fluid team-viewport"})
	div.append(container)

	var draft=onDeck(queue.q,number)
	console.log('drafted',draft);
	if(Array.isArray(draft)){
		return draft
	}


	var topRow=$('<div/>',{class:'row'})
	//var bottomRow=$('<div/>',{class:'col-xs-12'})
	var col=$('<div/>',{class:'col-xs-6'})
	var timeStamp='time-'+Date.now();
	var draftDiv=$('<div/>',{class:'col-xs-12',id:timeStamp+'_'+'draft'}).addClass('draftPool') //$('<div/>',{class:'sortable draftPool'})
	var blueTeam=col.clone().addClass('team blueTeam') //$('<div/>',{class:'sortable blueTeam'})
	var goldTeam=col.clone().addClass('team goldTeam') //$('<div/>',{class:'sortable goldTeam'})
	blueTeam.attr('id',timeStamp+'_'+'blue')
	goldTeam.attr('id',timeStamp+'_'+'gold')


	var teams = $('<div/>',{class:'teams'})
	teams.append(blueTeam).append(goldTeam)
	topRow.append(teams)
	.append(draftDiv);

	//_.forEach(draft.queens,function(player){
		var elem=tag(draft.queens[0],'queen')
		elem.css('display','block')
		elem.addClass('disabled')
		blueTeam.append(elem)
		elem=tag(draft.queens[1],'queen')
		elem.css('display','block')

		elem.addClass('disabled')
		goldTeam.append(elem)
	//})

	_.forEach(draft.drones,function(player){
		var elem=tag(player,'drone')
		//elem.css('display','inline-block')
		elem.addClass('col-xs-5')
		draftDiv.append(elem)
	})
	container.append(topRow)
	//container=$('<div/>',{'class':'dugh'}).append(container)
	div.append($('<div/>',{'class':"bout-label"}).text('' + (++this.draftIndex)))
	//container.append(bottomRow)

	var conglomorate=draftDiv.add(blueTeam).add(goldTeam)
	
	var forceQueenTop=function(){
			var order = this.toArray();
			this.sort(order.sort(function(a,b){
				return parseInt(a)-parseInt(b)
			})); // apply
		}
	var options={
		group: {name:'sortable'
				,pull:function(to,from){
					console.log('to',to,'from',from)
					if(to.el.id=='trash'|| to.el.id=='everyone-list'){
						return true
					}
					if(to.el.id.split('_')[0]==from.el.id.split('_')[0]){
						return true
					}
					//if(to.options.group.name==from.options.group.name && to.el.children.length<5){
					//	return true
					//}
					return false
				},put:function(to){
					return true
				}},  // or { name: "...", pull: [true, false, clone], put: [true, false, array] }
		sort: true,  // sorting inside list
		delay: 0, // time in milliseconds to define when the sorting should start
		disabled: false, // Disables the sortable if set to true.
		store: null,  // @see Store
		animation: 150,  // ms, animation speed moving items when sorting, `0` — without animation
		//handle: ".my-handle",  // Drag handle selector within list items
		filter: ".disabled",  // Selectors that do not lead to dragging (String or Function)
		draggable: ".draggable",  // Specifies which items inside the element should be draggable
		ghostClass: "place-holder",  // Class name for the drop placeholder
		//chosenClass: "white-out",  // Class name for the chosen item
		//dragClass: "sortable-drag",  // Class name for the dragging item
		dataIdAttr: 'data-sort',
		forceFallback: true,  // ignore the HTML5 DnD behaviour and force the fallback to kick in
		//fallbackClass: "sortable-fallback",  // Class name for the cloned DOM Element when using forceFallback
		//fallbackOnBody: false,  // Appends the cloned DOM Element into the Document's Body
		//fallbackTolerance: 0 // Specify in pixels how far the mouse should move before it's considered as a drag.        

		scroll: container[0], // or HTMLElement
		//scrollFn: function(offsetX, offsetY, originalEvent) { ... }, // if you have custom scrollbar scrollFn may be used for autoscrolling
		//scrollSensitivity: 30, // px, how near the mouse must be to an edge to start scrolling.
		//scrollSpeed: 10, // px
		onSort:forceQueenTop,
		onUpate:forceQueenTop,
		//setData: function (/** DataTransfer */dataTransfer, /** HTMLElement*/dragEl) {
		//	dataTransfer.setData('Text', $(dragEl).attr('class')+dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent
		//},
		onAdd:function(e){
			debugger
			console.log('added',e)
			var parent = $(e.to)
			if(parent.hasClass('team')&& parent.children().length==1){
				//turn the first add into a queen if they are not already
				var item =$(e.item) 
				if(!item.hasClass('queen')){
					item.addClass('queen disabled').removeClass('drone col-xs-5')
					var id=item.attr('data-sort').split('-')[1]
					item.attr('data-sort','0-'+id)
					//todo update data with queen selection number
				}
			}else if($(e.from).attr('id')=='everyone-list'){
				var data = getData(e.item)
				if(data){
					var elem=tag(data,'drone')
					//elem.css('display','inline-block')
					elem.addClass('col-xs-5')
					$(e.item).detach()
					$(e.to).append(elem)
					data.weight++
				}else{
					$(e.from).append($(e.item).detach())
				}
			}
		}
	}
	var draftSortable = new Sortable(draftDiv[0],options);
	var blueSortable = new Sortable(blueTeam[0],options);
	var goldSortable = new Sortable(goldTeam[0],options);

	blueTeam.add(goldTeam).on('dblclick','.tag',function(e){
		//turn a queen into a drone by user action
		var item=$(this)
		if(item.hasClass('queen')){
			item.removeClass('disabled queen').addClass('drone col-xs-5')
			var id=item.attr('data-sort').split('-')[1]
			item.attr('data-sort','1-'+id)
		}else if(item.hasClass('drone')){
			item.removeClass('drone col-xs-5').addClass('disabled queen')
			var id=item.attr('data-sort').split('-')[1]
			item.attr('data-sort','0-'+id)
		}
		driftSortable.sort()
		blueSortable.sort()
		goldSortable.sort()

		//todo update data with queen selection number
	})

	


	/*,{connectWith:timeStamp,items:':not(.disabled)',placeholder:'<span class="place-holder">&nbsp;</span>'});
	draftDiv.on('sortupdate', function(e) {
		console.log(e)
		
		// This event is triggered when the user stopped sorting and the DOM position has changed.

		// e.detail.item contains the current dragged element.
		// e.detail.index contains the new index of the dragged element (considering only list items)
		// e.detail.oldindex contains the old index of the dragged element (considering only list items)
		// e.detail.elementIndex contains the new index of the dragged element (considering all items within sortable)
		// e.detail.oldElementIndex contains the old index of the dragged element (considering all items within sortable)
		// e.detail.startparent contains the element that the dragged item comes from
		// e.detail.endparent contains the element that the dragged item was added to (new parent)
		
		var parent = $(e.detail.endparent)
		if(parent.hasClass('team')&& parent.children().length>5){
			console.log('ppp',e.detail.item)
			$(e.detail.startparent).append($(e.detail.item).detach())
		}
		
	});*/
	draftCarousel.slick('slickAdd',div[0],null);

	queue.draw()

	}

//Returns true if it is a DOM node
function isNode(o){
  return (
    typeof Node === "object" ? o instanceof Node : 
    o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName==="string"
  );
}

//Returns true if it is a DOM element    
function isElement(o){
  return (
    typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
    o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
);
}

var queue=new QKQueue();
//queue.add(database)
var draftCarousel;
var getData=function(item){
	var id;
	if(isNode(item)){
		id=(item.id||'').split('_')[2]
	}
	if(!id){
		if(item instanceof $){
		 	id=(item.attr('id')||'').split('_')[2]
		}else if(typeof item== 'string'){
			id=item
		}else{
			throw "can't get data for "+item
		}
	}
	return _.find(queue.q,{id:id})
}
var reinitQueue=[]
var kQDraft=KQDraft()
$(function(){
	window.saveState=function(){
		debugger
		var children=everyoneList.children(),list=[];
		_.forEach(children,function(item,i){
			list.push(getData(item))
		})
		localStorage.setItem('activeQueue', JSON.stringify(list));
	};
	window.onbeforeunload=saveState



	var trashOptions={
		group: {name:'sortable'
			,pull:function(to,from){
				return false
			},put:function(to){
				//alert('trash')
				return true
			}
		},  // or { name: "...", pull: [true, false, clone], put: [true, false, array] }
		sort: false,  // sorting inside list
		delay: 0, // time in milliseconds to define when the sorting should start
		disabled: false, // Disables the sortable if set to true.
		store: null,  // @see Store
		animation: 150,  // ms, animation speed moving items when sorting, `0` — without animation
		//handle: ".my-handle",  // Drag handle selector within list items
		filter: ".disabled",  // Selectors that do not lead to dragging (String or Function)
		draggable: ".draggable",  // Specifies which items inside the element should be draggable
		ghostClass: "place-holder",  // Class name for the drop placeholder
		//chosenClass: "white-out",  // Class name for the chosen item
		//dragClass: "sortable-drag",  // Class name for the dragging item
		dataIdAttr: 'data-sort',
		forceFallback: true,  // ignore the HTML5 DnD behaviour and force the fallback to kick in
		//fallbackClass: "sortable-fallback",  // Class name for the cloned DOM Element when using forceFallback
		//fallbackOnBody: false,  // Appends the cloned DOM Element into the Document's Body
		//fallbackTolerance: 0 // Specify in pixels how far the mouse should move before it's considered as a drag.        

		scroll: false, // or HTMLElement
		//scrollFn: function(offsetX, offsetY, originalEvent) { ... }, // if you have custom scrollbar scrollFn may be used for autoscrolling
		//scrollSensitivity: 30, // px, how near the mouse must be to an edge to start scrolling.
		//scrollSpeed: 10, // px
		// onSort:forceQueenTop,
		// onUpate:forceQueenTop,
		//setData: function (/** DataTransfer */dataTransfer, /** HTMLElement*/dragEl) {
		//	dataTransfer.setData('Text', $(dragEl).attr('class')+dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent
		//},
		onAdd:function(e){//delete action
			console.log(e)
			//alert('trash')
			var item=$(e.item)
			var data = getData(item)
			if(data){
				item.detach()
				data.weight--
				queue.remove(data.id)
				queue.draw()
			}else{ //undo
				$(e.from).append(item.detach())
			}
		 }
	}
	trashSortable= new Sortable($('#trash')[0],trashOptions)


	var everyoneList=$('#everyone-list')
	var queueOptions={
		group: {name:'sortable'
			,pull:function(to,from){
				if(to.el.id=='trash'){
					return true
				}
				if(from.el.id==to.el.id){
					return false
				}
				if($(to.el).hasClass('draftPool')){
					return true
				}
				return false
			},put:function(to){
				//if(to.el.id==everyoneList.attr('id')){
				//	return false
				//}
				//alert('trash')
				return true
			}
		},  // or { name: "...", pull: [true, false, clone], put: [true, false, array] }
		sort: false,  // sorting inside list
		delay: 0, // time in milliseconds to define when the sorting should start
		disabled: false, // Disables the sortable if set to true.
		store: null,  // @see Store
		animation: 150,  // ms, animation speed moving items when sorting, `0` — without animation
		//handle: ".my-handle",  // Drag handle selector within list items
		filter: ".disabled",  // Selectors that do not lead to dragging (String or Function)
		draggable: ".draggable",  // Specifies which items inside the element should be draggable
		ghostClass: "to-draft-placeholder",  // Class name for the drop placeholder
		//chosenClass: "white-out",  // Class name for the chosen item
		//dragClass: "sortable-drag",  // Class name for the dragging item
		dataIdAttr: 'data-sort',
		forceFallback: true,  // ignore the HTML5 DnD behaviour and force the fallback to kick in
		//fallbackClass: "sortable-fallback",  // Class name for the cloned DOM Element when using forceFallback
		//fallbackOnBody: false,  // Appends the cloned DOM Element into the Document's Body
		//fallbackTolerance: 0 // Specify in pixels how far the mouse should move before it's considered as a drag.        

		scroll: false, // or HTMLElement
		//scrollFn: function(offsetX, offsetY, originalEvent) { ... }, // if you have custom scrollbar scrollFn may be used for autoscrolling
		//scrollSensitivity: 30, // px, how near the mouse must be to an edge to start scrolling.
		//scrollSpeed: 10, // px
		// onSort:forceQueenTop,
		// onUpate:forceQueenTop,
		//setData: function (/** DataTransfer */dataTransfer, /** HTMLElement*/dragEl) {
		//	dataTransfer.setData('Text', $(dragEl).attr('class')+dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent
		//},
		onAdd:function(e){//delete action
			console.log(e)
			//alert('removed from draft')
			var item=$(e.item)
			var data = getData(item)
			if(data){
				//remove player's html element
				item.detach()
				//decrease weight
				data.weight--

				//draft a new player
				// var players=kQDraft.draft(1);
				// _.forEach(players,function(player){
				// 	//turn it into a html element
				// 	var elem=tag(player,'drone')
				// 	//elem.css('display','inline-block')
				// 	elem.addClass('col-xs-5')
				// 	$(e.from).append(elem)
				// })

				queue.draw()
			}else{ //undo
				$(e.from).append(item.detach())
			}
		 }
		//  ,store: {
		// 	/**
		// 	 * Get the order of elements. Called once during initialization.
		// 	 * @param   {Sortable}  sortable
		// 	 * @returns {Array}
		// 	 */
		// 	get: function (sortable) {
		// 	    var order = localStorage.getItem('activeQueue');
		// 	    return order ? order.split('|') : [];
		// 	},

		// 	/**
		// 	 * Save the order of elements. Called onEnd (when the item is dropped).
		// 	 * @param {Sortable}  sortable
		// 	 */
		// 	set: function (sortable) {
		// 	    var order = sortable.toArray();
		// 	    localStorage.setItem('activeQueue', order.join('|'));
		// 	}
		// }
	}
	queueSortable= new Sortable(everyoneList[0],queueOptions)

	var commandHandler=function(name){
		var cmd=name.toLowerCase().replace(/\s+/g, '');
		if(cmd=='demo'||cmd=='demodata'){
			queue.add(database)
			return 1
		}else if(cmd=='clear'){
			queue.clear()
			return 1
		}else if(cmd=='resetweight'){
			queue.resetWeight()
			return 1
		}else if(cmd=='save'||cmd=='savestate'){
			window.saveState()
			return 1
		}else if(cmd=='load'||cmd=='loadstate'){
			window.loadState()
			return 1
		}
		return 0
	}

	$('#addUser').submit(function(ev) {
		ev.preventDefault(); // to stop the form from submitting
		debugger
		var form=$(this)
		var optimizeElem=form.find('input[name=optimize]:checked')
		var optimize=optimizeElem.val();

		var nameElem=form.find('#userName')
		var name=nameElem.val();
		nameElem.val('')

		if(!name){
			return 
		}
		if(commandHandler(name)){
			return 
		}
		var player={id:Date.now().toString(),name:name,optimize:optimize}
		queue.add(player)

		//this.submit(); // If all the validations succeeded
	});
	$('#dropdownCommands').on('click','a',function(){
		var command=$(this).text()
		commandHandler(command)
	})

	queue.draw()


	draftCarousel=$('#draftCarousel');
	debugger
	


	//alert(draftCarousel.slick('getSlick').slideCount)
	draftCarousel.on('reInit',function(e){ //breakpoint
		if(!window.init){
			setTimeout(function(){draftCarousel.find('.slick-next, .slick-prev').addClass('display-none')})
			return
		}

		//do all promises
		while(reinitQueue.length){
			var fn=reinitQueue.shift()
			fn.call(fn)
		}
		//alert(e.type)
	})
	draftCarousel.on('init',function(){
		setTimeout(function(){draftCarousel.find('.slick-next, .slick-prev').addClass('display-none')})
	})
	
	draftCarousel.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		if(!window.init){
			setTimeout(function(){draftCarousel.find('.slick-next, .slick-prev').addClass('display-none')})
			return
		}
		if(nextSlide>=slick.slideCount-1){
		//alert('draft'+currentSlide+' '+nextSlide+' '+slick.slideCount)
			kQDraft.draft();
		}
	})

	draftCarousel.slick({
		//dots:true,
		centerMode: true,
		draggable:false,
		swipe:false,
		adaptiveHeight:true,
		arrows:true,
		accessibility:false,
		//variableWidth: true,
		centerPadding: '0px',
		slidesToShow: 3,
		infinite:false,
		//waitForAnimate:false,
		responsive: [
			{
			breakpoint: 992,//768,
			settings: {
				//dots:true,
				centerMode: false,
				draggable:false,
				swipe:false,
				adaptiveHeight:true,
				centerPadding: '0px',
				slidesToShow: 2,
				infinite:true,
				}
		 	}
			// ,{
			//   breakpoint: 480,
			//   settings: {
			//     arrows: false,
			//     centerMode: true,
			//     centerPadding: '40px',
			//     slidesToShow: 1
			//   }
			// }
		 ]
	});

	//kQDraft.draft();
	

	//var programaticForceSlide=false
	// draftCarousel.on('beforeChange', function(event, slick, currentSlide, nextSlide){
	// 	console.log(nextSlide,event)
	// 	if(programaticForceSlide){
	// 		programaticForceSlide=false
	// 		return
	// 	}
	// 	if(nextSlide==1){
	// 		//programaticForceSlide=true
	// 		//draftCarousel.slick('setOption','centerMode',true,true)
	// 		slick.setOption('slidesToShow',2,true)
	// 		//slick.goTo(nextSlide,true)
	// 		//slick.setOption('centerMode',true,false)
	// 		//slick.setPosition()
	// 	}else{
	// 		//slick.setOption('centerMode',false,false)
	// 		//slick.setOption('slidesToShow',1,true)
	// 	}

	// });

	queue.clear()
	var carouselOverlay=$('#carousel-overlay')
	//var fauxButton=$('<button/>',{class:'proxy-arrow-next slick-arrow slick-next',type:'button'})
	var fauxButton=$('<div/>',{class:'',style:'position:absolute;top:0;left:0;right:0; white-space: nowrap;text-align:center'})
	var block=$('<span/>',{style:'margin:0 auto;background-color:white;border-radius:2em;padding:2em;cursor:hand'})
	fauxButton.append(block)
	block.append($('<span/>',{style:'font-size:3em;'}).text('Start'))
	block.append($('<span/>',{class:'glyphicon glyphicon-chevron-right', style:'font-size:3em;'}))
	//draftCarousel.parent().append(fauxButton.click(function(){
	carouselOverlay.append(fauxButton.click(function(){
		debugger 
		if(queue.q.length<4){
			alert('Please add at least 4 people')
			return
		}
		window.init=true

		reinitQueue.push(function(){setTimeout(function(){draftCarousel.slick('slickGoTo',draftCarousel.slick('getSlick').slideCount-2 , true)})})//-(5-draftCarousel.slick('getOption','slidesToShow')
		carouselOverlay.hide()
		kQDraft.draft()
		setTimeout(function(){draftCarousel.find('.slick-next, .slick-prev').removeClass('display-none')})

		//draftCarousel.find('.slick-next').click()
		// if(window.init){
		// 	fauxButton.detach()
		// }else{
		// 	kQDraft.draft();
		// }
	}))
	// draftCarousel.parent().append($('<button/>',{class:'proxy-arrow-prev slick-arrow slick-prev',type:'button'}).click(function(){
	// 	//$('#draftCarousel .slick-prev').click()
	// 	if(window.init){
	// 		$(this).detach()
	// 		draftCarousel.find('.slick-prev').click()
	// 	}
	// }))

	window.loadState=function(){
		var list =localStorage.getItem('activeQueue');
		if(list){
			queue.add( JSON.parse(list));
		}
	}
	loadState()
})

// _.forEach(_.sample(toPlay,5),function(obj) {
// 	console.log(obj.name)
// })
// console.log('======')
// console.log(rwc(players))