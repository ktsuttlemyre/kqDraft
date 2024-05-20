function launchFullScreen(element) {
  if(element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}

var alert=_.bind(function(arg){
	this(arg.toString())
},bootbox.alert);

var isStandAlone=function(){
	return navigator.standalone||(window.matchMedia('(display-mode: standalone)').matches)// (screen.height-document.documentElement.clientHeight<40);
};

(function ($) {
 $.fn.longclick = function (selector,callback,timeout) {
 	if(typeof selector == 'function'){
 		timeout=callback
 		callback=selector
 		selector=null
 	}
 	if(!timeout){
 		timeout=1000;
 	}
   var startEvents = "touchstart.longclick mousedown.longclick";
   var endEvents   = "touchend.longclick touchcancel.longclick touchleave.longclick mouseup.longclick mouseout.longclick";
 
   var target;
   $(this).on(startEvents,selector,function (event) {
   	console.log('longclick started',event)
   	target=$(this)
   	target.addClass('longclick')
    // save the initial event object
    var initialEvent = event;
    // set delay after which the callback will be called
    var timer = window.setTimeout(function () { callback.call(target[0],initialEvent); }, timeout);
    // bind to global event(s) for clearance
    $(document).on(endEvents, function (e) {
    	target.removeClass('longclick')
        // clear timer
        window.clearTimeout(timer);
        // reset global event handlers
        $(document).off(endEvents);
        //e.preventDefault()
        return true
        // use 'return false;' if you need to prevent default handler and
        // stop event bubbling
    });
    //event.preventDefault()
    event.stopPropagation()
    return ;
    // use 'return false;' if you need to prevent default handler and
    // stop event bubbling
   });
 };
})(jQuery);
 

	var weightIncrement=1

	var counter=0;
	var uniqueID=function(prefix){
		if(prefix){
			return prefix+counter++
		}else{
			return counter++
		}
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
				,asQueen:0
				,asDrone:0
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
				,asQueen:0
				,asDrone:0
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
				,asQueen:0
				,asDrone:0
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
				,asQueen:0
				,asDrone:0
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
				,asQueen:0
				,asDrone:0
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
				,asQueen:0
				,asDrone:0
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
				,asQueen:0
				,asDrone:0
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
				,asQueen:0
				,asDrone:0
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
				,asQueen:0
				,asDrone:0
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
				,asQueen:0
				,asDrone:0
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
				,asQueen:0
				,asDrone:0
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
				,asQueen:0
				,asDrone:0
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
				,asQueen:0
				,asDrone:0
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
				,asQueen:0
				,asDrone:0
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
				,asQueen:0
				,asDrone:0
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
				,asQueen:0
				,asDrone:0
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
				,asQueen:0
				,asDrone:0
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
				,asQueen:0
				,asDrone:0
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
				,asQueen:0
				,asDrone:0
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
				,asQueen:0
				,asDrone:0
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
				,asQueen:0
				,asDrone:0
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
				,asQueen:0
				,asDrone:0
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
				,asQueen:0
				,asDrone:0
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
				,asQueen:0
				,asDrone:0
			}
		}



	];
	var Player=function(obj){
		if(obj instanceof Player){
			return obj
		}else if(!(this instanceof Player)){
			return new Player(obj)
		}
		if(typeof obj=='string'){
			obj={name:obj}
		}
		
		var template={
			id:null
			,name:null
			,teir:1
			,turns:0
			,optimize:'drone'
			,frequency:{queen:.8}
			,stats:{
				queen:{military:[0,0],snail:[0,0],berries:[0,0]}
				,drone:{military:[0,0],snail:[0,0],berries:[0,0]}
			}
			,history:{
				games:0
				,asQueen:0
				,asDrone:0
			}
		}

		$.extend(true,this,template)
		$.extend(true,this,obj)

		if(this.id==null){
			this.id=Date.now()
		}
		if(typeof this.turns != 'number'){
			this.turns = 0
		}
	 }



	var scale = function(num, minA, maxA, minB, maxB, delta0Default){
		var oldRange=maxA - minA
		if (oldRange == 0){
			if(delta0Default=='MIN'){
 				return minB
			}else if(delta0Default=='MAX'){
				return maxB
			}else{
				return (minB + maxB) / 2
			}
		}
		return (
				/*to range*/	  (maxB - minB)
				/*scale fator*/	* (num - minA))
				/*from range*/	/ (oldRange)
				/*normalize*/	+  minB
		}

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

	var KQQueue=function(){
		if(!(this instanceof KQQueue)){return new KQQueue()}
		this.q=[]
	}
	KQQueue.prototype.add=function(players){ //TODO normalize outliers each time and bring their weights to the middle each time new people are added
		if(!Array.isArray(players)){
			players=[players]
		}
		players=_.shuffle(players)
		var stop=false
		players=players.map(function(player){
			return Player(player)
		})
		_.forEach(players,_.bind(function(player){
			console.log(this.q,_.find(this.q,{name:player.name}))
			this.q.some(function(element, i) {
			    if (player.name.toLowerCase() === element.name.toLowerCase()) {
					alert('Player ['+element.name+'] already exists')
			        stop = true;
			        return true;
			    }
			});
		},this))
		if(stop){
			return 
		}
		var analysis=this.analyze()
		
		var min=1
		if(this.q.length){
			min=Math.ceil(this.q.reduce(function(prev, curr) {
				return prev.weight < curr.weight ? prev : curr;
			}).weight)
		}
		// var calc=(analysis.average-min)/3 //delta div by 3
		// var startWeight=Math.floor((min+calc))||1
		var startWeight=min||1
		_.forEach(players,_.bind(function(player){
			if(player.weight==null){
				player.weight=startWeight
			}
			this.q.push(player);
		},this))
		this.draw()
		return analysis;
	}
	KQQueue.prototype.remove=function(playerIDs){
		debugger
		if(!Array.isArray(playerIDs)){
			playerIDs=[playerIDs]
		}
		var removed=_.remove(this.q,function(player){
			return _.includes(playerIDs,player.id)
		})
		var analysis=this.analyze()

		this.draw()
		return analysis;
	}
	KQQueue.prototype.clear=function(){
		while(this.q.length){
			this.q.pop()
		}
		this.draw()
	}
	KQQueue.prototype.setAll=function(attr,val){
		for(var i=0,l=this.q.length;i<l;i++){
			this.q[i][attr]=val;
		}
		this.draw()
	}
	KQQueue.prototype.analyze=function(){
		clamp=true //force clamping always for now
		var partition=partitionOutliers(this.q,'weight')
		var startWeight=Math.floor(average(partition.inliers||[],'weight')||1);
		partition.average=startWeight
		var min=Math.ceil(partition.min),max=Math.floor(partition.max);
		//outlier clamping
		// if(clamp){
		// 	_.forEach(partition.outliers,function(player){
		// 		player.weight=_.clamp(player.weight,min,max)
		// 	})
		// }
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
		,heart:String.fromCharCode(0x2764,0xFE0F)
	}
	var dataToPlayerDiv=function(player){
		var div=$('<div/>',{class:'player draggable',id:'id_'+player.id,'data-id':player.id})
		div.append($('<span/>',{class:'name'}).text(player.name))
		var optimizeSpan=$('<span/>',{class:'metric optimize'})
		var optimize=emojis.controller;
		switch(player.optimize){
			case 'queen':
				optimize=emojis.crown;
				break;
			case 'drone':
				optimize=emojis.bee;
				break;
			case 'queenOnly':
				optimize=emojis.crown;
				optimizeSpan.addClass('parenthetical')
				break;
			case 'droneOnly':
				optimize=emojis.bee;
				optimizeSpan.addClass('parenthetical')
				break;
		}

		//div.append($('<a/>').append($('<i/>',{class:'remove metric glyphicon glyphicon-remove-sign glyphicon-white'}).html('&nbsp;')).click(function(){
		//		debugger
		//		var id=$(this).parent().attr('id').split(':')[1]
		//		queue.remove(id)
		//	}))
		div.append($('<span/>',{class:'metric weight'}).text(player.weight==null?'_ ':player.weight))
		div.append(optimizeSpan.text(optimize==null?'_ ':optimize))
		div.append($('<span/>',{class:'metric turns'}).text(player.turns==null?'_ ':player.turns))
		//div.append($('<span/>',{class:'metric wins'}).text(player.weight))
		return div
	}
	KQQueue.prototype.draw=function(id){
		if(!id){
			id='#everyone-list'
		}
		var elem=$(id)
		elem.empty()
		_.forEach(_.sortBy(this.q,['weight']),function(player){
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
			return .2+x
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
			return .60+x;
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
				player.weight+=weightIncrement
				player.turns++
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

	window.curve=.4 //this will increase all numbers by this percent. the idea is to skew the weights so lower turn players get more chances
	var onDeck=function(queue,number){
		debugger
		
		var weightMultiplier=1;
		//set a tmp weighted order
		queue=queue.slice()
		var tmp=[],weightedHash={};
		var list=queue.filter(function(o){
			if(o.weight==null){
				o.weight=1;
			}
			return o.weight!=null
		}).map(function(o){return o.weight})

		var maxWeight=Math.max.apply(Math,list)*weightMultiplier
		var minWeight=Math.min.apply(Math,list)
		var sum=0

		_.forEach(queue,function(obj){
			var val = scale(obj.weight,minWeight,maxWeight,1,100)//turn to percent first
			if(val){ //if it isn't 0 then turn to decimal and invert
				val=val/100
				val=1-val //invert the percent
			}

			//var val = ((maxWeight+1)-(obj.weight*weightMultiplier)) //plus one ensures that there will always be 1 for weight

			if(val<0){
				alert('no 0 allowed')
			}
			if(curve){ //larger numbers get chosen less
				val=Math.min(val+(val*curve),1)
			}
			weightedHash[obj.id]=val;
			sum+=val
		})
		if(!sum){//if sum == 0
			alert('sum ==0 :/')
		}
		var fudge=.001
		_.forEach(weightedHash,function(val,id){
			if(!val&&!sum){
				weightedHash[id]=fudge;
			}
			weightedHash[id]=(val/sum)+fudge //fudge number so the values are >=1
		})
		var total=0;
		while(!(total>=1)){
			total=0;
			_.forEach(weightedHash,function(val,id){
				total+=val
			})
			if(!(total>=1)){
				_.forEach(weightedHash,function(val,id){
					weightedHash[id]=val+fudge
				})
			}
		}
		console.log('weighted total',total)

		for(var i=0,l=queue.length;i<l;i++){
			var id=rwc.select(weightedHash,null,{rand:uniformRandom0to1Ex,normal:false})//choose players
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
		var tag=$('<span/>',{class:'tag draggable '+cssClass,'data-sort':type+'-'+name,id:'id_'+obj.id+'_'+uniqueID(),'data-id':obj.id})
		tag.append($('<span/>',{class:'tag-text'}).text(name))
		//tag.append($('<a/>').append($('<i/>',{class:'remove glyphicon glyphicon-remove-sign glyphicon-white'})))
		return tag
	}


	var KQDraft=function(){
		if(!(this instanceof KQDraft)){return new KQDraft()}
		this.draftIndex=0
	}
	

	KQDraft.prototype.draft=function(number){
		if(queue.q.length<4){
			alert('Please add at least 4 people')
			return null
		}
	
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
		//elem.addClass('no-drag')
		blueTeam.append(elem)
		elem=tag(draft.queens[1],'queen')
		elem.css('display','block')

		//elem.addClass('no-drag')
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
					if(to.el.parentNode.id=='trash'|| to.el.id=='everyone-list'|| to.el.parentNode.id=='quickJumpTile'){
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
		filter: ".no-drag",  // Selectors that do not lead to dragging (String or Function)
		draggable: ".draggable",  // Specifies which items inside the element should be draggable
		ghostClass: "from-draft-place-holder",  // Class name for the drop placeholder
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
			var item=$(e.item)
			var to = $(e.to)
			var id=getID(item)


			if(to.hasClass('team')&& to.children().length==1){ //adding from draft to a team
				//turn the first add into a queen if they are not already
				if(!item.hasClass('queen')){
					item.addClass('queen').removeClass('drone col-xs-5')
					var id=item.attr('data-sort').split('-')[1]
					item.attr('data-sort','0-'+id)
					//todo update data with queen selection number
				}
			}else if($(e.from).attr('id')=='everyone-list'){ //adding from active to draft
				var data = getData(e.item)
				if(data){
					//to.children("[data-id='" +id + "']").length>=2||
					if(to.parents('.slick-slide').find("[data-id='" +id + "']").length >=2 ){ //player is already drafted silly
						alert('player is already drafted silly')
						item.detach()
						queue.draw()
						drawHighlights()
						return
					}
					var elem=tag(data,'drone')
					//elem.css('display','inline-block')
					elem.addClass('col-xs-5')
					item.detach()
					to.append(elem)
					data.weight+=weightIncrement
					data.turns++
					queue.draw()
					drawHighlights()
				}else{
					$(e.from).append($(e.item).detach())
				}
			}else if(to.hasClass('draftPool')){
				item.addClass('col-xs-5')
				item.removeClass('queen').addClass('drone')
			}
		},onChoose:function(){
			unlockActiveList()
		}
	}
	var draftSortable = new Sortable(draftDiv[0],options);
	var blueSortable = new Sortable(blueTeam[0],options);
	var goldSortable = new Sortable(goldTeam[0],options);

	blueTeam.add(goldTeam).longclick('.tag',function(e){
		console.log('long click for change',this,e)
		//turn a queen into a drone by user action
		var item=$(this)
		if(item.hasClass('queen')){
			item.removeClass('queen').addClass('drone col-xs-5')
			var id=item.attr('data-sort').split('-')[1]
			item.attr('data-sort','1-'+id)
		}else if(item.hasClass('drone')){
			item.removeClass('drone col-xs-5').addClass('queen')
			var id=item.attr('data-sort').split('-')[1]
			item.attr('data-sort','0-'+id)
		}
		//draftSortable.sort()
		//blueSortable.sort()
		//goldSortable.sort()

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
	drawHighlights()
	return draft

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

var queue=new KQQueue();
//queue.add(database)
var draftCarousel;
var getID=function(item){
	var id;
	if(isNode(item)){
		id=(item.id||'').split('_')[1]
	}
	if(!id){
		if(item instanceof $){
		 	id=(item.attr('id')||'').split('_')[1]
		}else if(typeof item== 'string'){
			id=item
		}else{
			throw "can't get data for "+item
		}
	}
	return id
}
var getData=function(item){
	var id=getID(item)
	return _.find(queue.q,{id:id})
}

var isElementInView= function (element, percent) {
        element=$(element)
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = element.offset().top;
        var elementBottom = elementTop + element.height();
        var elementHeightPercent=element.height()*percent

        if (percent == 1){
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else if(!percent){
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        } else{
        	//alert( (pageBottom+'-'+elementTop)+' && '+(elementBottom+'-'+pageTop)+' = '+elementHeightPercent+ ' '+(pageBottom-elementTop>elementHeightPercent && elementBottom-pageTop>elementHeightPercent))
        	return (pageBottom-elementTop>elementHeightPercent && elementBottom-pageTop>elementHeightPercent)
        }
    }

$(document).on('scroll',_.throttle(function(e){
	var active=(document.activeElement||$(":focus"))
	if(!isElementInView(active,.1)){
		active.blur()
	}
},300))


var reinitQueue=[]
window.kQDraft=KQDraft()
var trash,quickJumpTile,slickNext,drawHighlights;
$(function(){
	trash=$('#trash'),quickJumpTile=$('#quickJumpTile');
	quickJumpTile.on('click touchstart',function(){
		var everyone=$('#everyone')
		if(!isElementInView(everyone,.80)){
			$("html, body").animate({ scrollTop: everyone.offset().top }, 300);
		}else{
			$("html, body").animate({ scrollTop: 0 }, 300);
		}
	})
	window.saveState=function(){
		debugger
		var children=everyoneList.children(),list=[];
		_.forEach(children,function(item,i){
			list.push(getData(item))
		})
		localStorage.setItem('activeQueue', JSON.stringify(list));
		localStorage.setItem('activeQueueSaveTime',new Date().toLocaleString().split(', ')[0])
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
		filter: ".no-drag",  // Selectors that do not lead to dragging (String or Function)
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
				data.weight-=weightIncrement
				data.turns--
				queue.remove(data.id)
				queue.draw()
				drawHighlights()
			}else{ //undo
				//$(e.from).append(
				item.detach()
			}
		 }
	}
	trashSortable= new Sortable(trash.find('.floating-tile')[0],trashOptions)

	var funMessage=$('#fun_message')
	var everyoneList=$('#everyone-list')
	var autoLock=false
	var queueOptions={
		group: {name:'sortable'
			,pull:function(to,from){
				if(to.el.parentNode.id=='trash'){
					return true
				}
				if(from.el.id==to.el.id||from.el.parentNode.id==to.el.parentNode.id){
					return false
				}
				if($(to.el).hasClass('draftPool')){
					return true
				}
				//dont allow quick drop yet
				// if(to.el.parentNode.id=='quickJumpTile'&&from.el.id=='everyone-list'){
				// 	return true
				// }
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
		disabled: autoLock, // Disables the sortable if set to true.
		store: null,  // @see Store
		animation: 150,  // ms, animation speed moving items when sorting, `0` — without animation
		//handle: ".my-handle",  // Drag handle selector within list items
		filter: ".no-drag",  // Selectors that do not lead to dragging (String or Function)
		draggable: ".draggable",  // Specifies which items inside the element should be draggable
		ghostClass: "from-queue-place-holder",  // Class name for the drop placeholder
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
				if(e.to.parentNode.id=='quickJumpTile' && e.from.id=='everyone-list'){ //condition is going from everyone queue to quickJump
					alert('not implemented yet')
					return
				}
				//remove player's html element
				item.detach()
				//decrease weight
				data.weight-=weightIncrement
				data.turns--
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
				drawHighlights()
			}else{ //undo
				item.detach()
			}
		 },onChoose:function(){
		 	trash.fadeIn()
		 	isMobile && quickJumpTile.fadeIn()
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
	var isMobile=false;
	queueSortable= new Sortable(everyoneList[0],queueOptions)
	new Sortable(quickJumpTile.find('.floating-tile')[0],queueOptions)

	window.unlockActiveList=function(lock){
		return
		if(typeof lock!='boolean'){
			lock=null;
		}
		var relock=function(){
				autoLock && queueSortable.option('disabled',true)
			 	autoLock && everyoneList.addClass('no-drag')
		 		trash.fadeOut()
		 		quickJumpTile.fadeOut()
			 	$(document).off(activityEvents)
		}
		if(lock){
			relock()
			return
		}
		autoLock && queueSortable.option("disabled", false); // set
		autoLock && everyoneList.toggleClass('no-drag',false)
		trash.fadeIn()
		isMobile && quickJumpTile.fadeIn()
		if(isMobile){
			var debounce_relock=_.debounce(relock,5000)
			debounce_relock()

			var activityEvents='click mousedown mousemove touchstart touchmove keydown keypress scroll'.split(' ').map(function(evnt){return evnt+'.inactiveDetect_'+Date.now()+'_'+uniqueID()})
			var scroll=activityEvents.pop()

			$(document).on(activityEvents.join(' '),debounce_relock)
			$(document).on(scroll,relock)
		}
	}
	// $(document).on('mousemove.yyyyyyyyy',function(){
	// 	alert('mousemove')
	// 	unlockActiveList(true)
	// 	$(document).off('mousemove.yyyyyyyyy')
	// })
	autoLock && everyoneList.longclick('.player',unlockActiveList)
	$(document).on('touchstart', function (e) {
		// if (e.touches.length == 3){
		// 	alert()
		// 	alert('3 touch')
		// 	unlockActiveList()
		// }
		if(!isMobile){
			isMobile=true
			trash.fadeIn()
			quickJumpTile.fadeIn()
		}
		//unlockActiveList(true)
	});

	setTimeout(unlockActiveList)

	autoLock && everyoneList.addClass('no-drag')

	var commandHandler=function(name){
		var argStart= name.indexOf(':'),args='',cmd=name
		if(argStart!=-1){
			args=name.substring(argStart+1,name.length);
			cmd=name.substring(0,argStart)
		}
		cmd=cmd.toUpperCase().replace(/\s+/g, '');
		console.log(cmd,args)

		switch(cmd){
			case 'STANDALONE':
				alert(isStandAlone())
				return 1
			case 'DEMO':
			case 'DEMODATA':
				queue.add(database)
				return 1
			case 'DRAFT':
				if(args){
					args=parseFloat(args)
					while(args){
						setTimeout(function(){kQDraft.draft()})
						args--
					}
					return 1
				}
				kQDraft.draft()
				return 1
			case 'CURVE':
				if(args){
					window.curve=parseFloat(args)
				}else{
					alert(window.curve)
				}
				return 1
			case 'REFRESH':
				window.location.reload&&window.location.reload(true); //hard reload
				window.location=window.location
				return 1
			case 'CLEAR':
				queue.clear()
				return 1
			case 'RESETTURNS':
				queue.setAll('turns',0)
				return 1
			case 'RESETWEIGHT':
				queue.setAll('weight',1)
				return 1
			case 'RESETALL':
				commandHandler('resetTurns')
				commandHandler('resetWeight')
				return 1
			case 'SAVE':
			case 'SAVESTATE':
				window.saveState()
				return 1
			case 'LOAD':
			case 'LOADSTATE':
				window.loadState()
				return 1
			case 'FULLSCREEN':
				// Launch fullscreen for browsers that support it!
				launchFullScreen(document.documentElement); // the whole page
			}
		return 0
	}

	$('#addUser').submit(function(ev) {
		//do not focus on input again after submit it makes it hard to use on smaller mobile devices with on screen keyboards
		//setTimeout(function(){$('#userName').focus()})
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
			queue.draw()
			drawHighlights()
			return 
		}
		var player={id:uniqueID('player').toString(),name:name,optimize:optimize,turns:0,history:{games:0,asQueen:0,asDrone:0}}
		queue.add(player);

		(document.activeElement||$(":focus")).blur()
		//this.submit(); // If all the validations succeeded
	});
	$('#dropdownCommands').on('click','a',function(){
		var command=$(this).text()
		commandHandler(command)
	})




	draftCarousel=$('#draftCarousel');
	debugger
	


	//alert(draftCarousel.slick('getSlick').slideCount)
	draftCarousel.on('reInit',function(e){ //breakpoint
		if(!window.init){
			//setTimeout(function(){draftCarousel.find('.slick-next, .slick-prev').addClass('display-none')})
			return
		}

		//do all promises
		while(reinitQueue.length){
			var fn=reinitQueue.shift()
			fn.call(fn)
		}
		//alert(e.type)
	})

	var draftButtonAction=function(e){
			debugger
			var draft=kQDraft.draft()
			if(!draft){
				return
			}
			if(window.init!=true){
				window.init=true

				//reinitQueue.push(function(){setTimeout(function(){draftCarousel.slick('slickGoTo',draftCarousel.slick('getSlick').slideCount-2 , true)})})//-(5-draftCarousel.slick('getOption','slidesToShow')
				carouselOverlay.fadeOut()
				setTimeout(function(){draftCarousel.find('.slick-next, .slick-prev').removeClass('display-none')})
				attachDraftButton()

				//draftCarousel.find('.slick-next').click()
				// if(window.init){
				// 	fauxButton.detach()
				// }else{
				// 	kQDraft.draft();
				// }
			}

			funMessage.text(_.sample(quotes))

			//$('.slick-next').click()
			var slick=draftCarousel.slick('getSlick')
			var current=slick.slickCurrentSlide()
			var count = slick.slideCount

			var slidesToShow=slick.slickGetOption('slidesToShow')
			var offset=(slick.slickGetOption('centerMode'))?(Math.ceil(slidesToShow/2)):slidesToShow;

			var next=(slick.slideCount-offset)
			
			//setTimeout(function(){
				//if(current==count-offset){
				//	slick.slickNext()
				//}else{
					//$('.slick-next').click()
					//slick.slickNext()
					afterChangePromises.push(function(){slick.slickGoTo(next)})
				//}
			//})

			//setTimeout(function(){$('.slick-next').addClass('slick-disabled')})

			draftButton.addClass('disabled spin-icon').find('.glyphicon').removeClass('glyphicon-random').addClass('glyphicon-hourglass')
			setTimeout(function(){
			//	if(nextSlide>=slick.slideCount-2){
					$("#draft_button").removeClass('disabled spin-icon').find('.glyphicon').addClass('glyphicon-random').removeClass('glyphicon-hourglass')
			//	}else{
			//		$("#draft_button").addClass('disabled')
			//	}
			},5000)
			
			if(slick.slickGetOption('centerMode')){
				var newE=$.extend({},e)
				newE.type='afterChange'
				draftCarousel.trigger(newE,slick,current)
			}
			


		}
	var afterChangePromises=[]
	var draftButton;
	var attachDraftButton=function(){
		draftButton=$('<button id="draft_button" class="btn btn-default" style="width:25%;"><i class="glyphicon glyphicon-random"></i>&nbsp;</button>')
		$('#carousel-overlay').after($('<div/>',{style:"position:relative;transform:translateY(-100%);text-align: center;margin-top: .25em;"}).append(draftButton))

		draftButton.on('click',draftButtonAction)
	}

	draftCarousel.on('breakpoint',function(e){
		//reattach buttons n stuff
		//attachDraftButton()
		var slick=draftCarousel.slick('getSlick')
		setTimeout(function(){slick.slickGoTo(slick.slideCount-2,true)})
	})
	draftCarousel.on('init',function(){
		setTimeout(function(){draftCarousel.find('.slick-next, .slick-prev').addClass('display-none')})
		slickNext=$('.slick-next')
	})
	
	draftCarousel.on('afterChange', function(event, slick, currentSlide){
		if(!window.init){
			//setTimeout(function(){draftCarousel.find('.slick-next, .slick-prev').addClass('display-none')})
			return
		}
		if(afterChangePromises.length){
			while(afterChangePromises.length){
				var fn=afterChangePromises.shift()
				setTimeout(fn)
			}
		}else{
			//setTimeout(function(){
				var slidesToShow=slick.slickGetOption('slidesToShow')
				var offset=(slick.slickGetOption('centerMode'))?(Math.ceil(slidesToShow/2)):slidesToShow;
				if(currentSlide>=slick.slideCount-offset){
					$('.slick-next').addClass('slick-disabled')
				}else{
					$('.slick-next').removeClass('slick-disabled')
				}
			//})
		}


		funMessage.text(_.sample(quotes))
		
		drawHighlights(currentSlide)

	})
	drawHighlights=function(currentSlide){
		if(!currentSlide){
			currentSlide=draftCarousel.find('.slick-current').index()
		}
	 	var onMachineSlide=$(draftCarousel.find('.slick-track').children()[currentSlide])
		var currentDraftSlide=onMachineSlide.next()

		everyoneList.children().removeClass('currently-drafted currently-playing blue gold')
		
		currentDraftSlide.find('.draftPool')
			.add('.blueTeam',currentDraftSlide)
			.add('.goldTeam',currentDraftSlide)
			.children().each(function(){
			var id=getID(this)
			everyoneList.find("[data-id='" + id + "']").addClass('currently-drafted');
		})

		onMachineSlide.find('.blueTeam')
			.children().each(function(){
			var id=getID(this)
			everyoneList.find("[data-id='" + id + "']").addClass('currently-playing blue');
		})
		onMachineSlide.find('.goldTeam')
			.children().each(function(){
			var id=getID(this)
			everyoneList.find("[data-id='" + id + "']").addClass('currently-playing gold');
		})
	 }

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
		initialSlide:2,
		responsive: [
			{
			breakpoint: 992,//768,
			settings: {
				//dots:true,
				initialSlide:2,
				centerMode: false,
				draggable:false,
				swipe:false,
				adaptiveHeight:true,
				centerPadding: '0px',
				slidesToShow: 2,
				infinite:false,
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

	var quotes=[
			,emojis.crown
			,'Destory the '+emojis.crown
			,'Royal flush '+emojis.crown+emojis.bee+emojis.grapes
			,"If you can't "+emojis.bee+"t 'em, "+emojis.grapes+ "'em"
			,"If you can't "+emojis.bee+"t 'em, "+emojis.snail+ "'em"
			,emojis.bee
			,emojis.bee+' all that you can '+emojis.bee
			,'You are '+emojis.bee+'autiful'
			,emojis.grapes
			,emojis.grapes+' your enemy!'
			,'Hello, '+emojis.grapes+' my old friend'
			,emojis.snail
			,'sneaky '+emojis.snail
			,emojis.snail+' ya later!'
			,emojis.heart+'Calvin Harris'+emojis.heart
		]
	queue.clear()
	var carouselOverlay=$('#carousel-overlay')
	//var fauxButton=$('<button/>',{class:'proxy-arrow-next slick-arrow slick-next',type:'button'})
	var fauxButton=$('<div/>',{class:'',style:'position:absolute;top:0;left:0;right:0; white-space: nowrap;text-align:center'})
	var block=$('<div/>',{style:'margin:0 auto;background-color:white;border-radius:2em;padding:2em;cursor:hand;display:inline-block'})
	fauxButton.append(block)
	block.append($('<span/>',{style:'font-size:3em;'}).html('Start'))
	block.append($('<span/>',{class:'glyphicon glyphicon-chevron-right', style:'font-size:3em;'}))
	fauxButton.append($('<br>'))
	fauxButton.append($('<br>'))
	fauxButton.append($('<br>'))
	//block.append($('<span/>',{style:"font-size:1em"}).text("Get ready to BUMBLE!"))
	fauxButton.append($('<span/>',{style:"font-size:1em"}).html('Made with '+emojis.heart+' for <a href="https://www.facebook.com/groups/killerqueencity/">Killer Queen City</a><br>Twitter:@ktsuttle'))
	//draftCarousel.parent().append(fauxButton.click(function(){
	carouselOverlay.append(fauxButton)
	block.click(draftButtonAction)
	// draftCarousel.parent().append($('<button/>',{class:'proxy-arrow-prev slick-arrow slick-prev',type:'button'}).click(function(){
	// 	//$('#draftCarousel .slick-prev').click()
	// 	if(window.init){
	// 		$(this).detach()
	// 		draftCarousel.find('.slick-prev').click()
	// 	}
	// }))

	var loadState=function(){
		var list =localStorage.getItem('activeQueue');
		var dateSaved=(localStorage.getItem('activeQueueSaveTime'))
		var today=new Date().toLocaleString().split(', ')[0]

		if(list){
			list=JSON.parse(list)
			queue.add( list);
			if(dateSaved && today!=dateSaved){
				bootbox.confirm('Would you like to reset active users weight?',function(ans){
					console.log(ans)
					if(ans){
						queue.setAll('weight',1)
					}
				})
			}
		}

	}
	loadState()
	$('#optimizationTech input[type="radio"]').on('change',function(){
		setTimeout(function(){$('#userName').focus()})
	})
	queue.draw()
	drawHighlights()
})




// Push.create("Hello world!", {
//     body: "How's it hangin'?",
//     icon: 'icon.png',
//     timeout: 4000,
//     onClick: function () {
//         window.focus();
//         this.close();
//     }
// });

// _.forEach(_.sample(toPlay,5),function(obj) {
// 	console.log(obj.name)
// })
// console.log('======')
// console.log(rwc(players))
