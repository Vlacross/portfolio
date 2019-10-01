function hf(str, num) {
    if(typeof str !== 'string' || str.toLowerCase() !== str) {
        return {
            type: 'Invalid',
            message: 'Load must be lowercase letters only'
        }
    };
    
    if(typeof num !== 'number') {
        return {
            type: 'Invalid',
            message: 'Rounds must be a number'
        }
    };
     
    this.splitKey = function splitKey(arr1, arr2) {
        let len = arr1.length/2;
        for (i=0; i< len; i++) {
            arr2.push(arr1[0])
            arr1.shift()
            }
        };
    this.singleRoundHash = function recursion(arr1, arr2, resArr) {
        if (arr2.length > 0) {
            resArr.push(arr1[0])
            resArr.push(arr2[0])
            arr1.shift()
            arr2.shift()
            recursion(arr1.reverse(), arr2.reverse(), resArr)
        } else {
            return resArr;
        }
    };  
        
    this.scramble = function scramble() {
        
        this.legend = () => (['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ':', '/', '.', '-'])
        this.alph = this.legend();
        this.finalArr = []
        
        for (let i = 0; i <= num; i++) {
            if (this.finalArr.length !== 0) {
                this.alph = this.finalArr
            }
            let temp = this.alph;
            let temp2 = [];
            
            this.splitKey(temp, temp2)
            this.singleRoundHash(temp, temp2, this.finalArr)
        }

        return [this.finalArr, this.legend()]
    };

    this.hash = function() {
        let [ scramble, legend ] = this.scramble()
        this.egg = ''
        for (i in str) {this.egg += legend[scramble.indexOf(str[i])] }
        return this.egg
    }

    this.dash = function() {
        let [ scramble, legend ] = this.scramble()
        this.shell = ''
        for (i in str) {this.shell += scramble[legend.indexOf(str[i])] }
        return this.shell
    }


}

let hash = 'nqqbdpffdlebor-erhgnznrh.tuabbzg.efealorhfgnrgtrhd';

let options = {
	method: 'POST',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	},
	body: {}
};
