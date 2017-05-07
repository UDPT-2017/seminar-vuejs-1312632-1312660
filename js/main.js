var vm = new Vue({
	el: '#app',
	data:{
		number: 0,
		total: 0,
		operator: 0,
		display: ''
	},
	methods: {
		displayNumber:function(val){
	      	if(this.number == 0) {
	      		if(this.operator == 0){
	      			this.total = 0;
	      		}
	      		this.number = val;
          		this.display = val.toString();
	      	}else{
	      		this.number *= 10;
	      		this.number += val;
	      		this.display += val.toString();	
	      	}	
		},
		inputOperator:function(val){
			if(this.number == 0 && this.total == 0)
				return;
			if(this.total == 0)
				this.total += this.number;
			switch (this.operator){
				case 1:
					this.total += this.number;
					break;
				case 2:
					this.total -= this.number;
					break;
				case 3:
					this.total *= this.number;
					break;
				case 4:
					this.total /= this.number;
					break;
				case 0:
					break;
			}
			this.number = 0;
			this.operator = val;
		},
		result:function(){
			if(this.number != 0 && this.operator == 0){
				this.total = this.number;
			}
			switch (this.operator){
				case 1:
					this.total += this.number;
					break;
				case 2:
					this.total -= this.number;
					break;
				case 3:
					this.total *= this.number;
					break;
				case 4:
					this.total /= this.number;
					break;
				case 0:
					break;
			}
			this.display = this.total.toString();
			this.operator = 0;
			this.number = 0;
		},
		del: function() {
			if (this.number > 0) {
				this.number = parseInt(this.number.toString().slice(0,-1));
				if (isNaN(this.number)){
					this.number = 0;
				}
				this.display = this.number;
			} else if (this.number == 0) {
				this.display = '';
			}
		},
		clear:function(){
			this.number = 0;
			this.total = 0;
			this.operator = 0;
			this.display = '';
		}
	}	
});