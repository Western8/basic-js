const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],


  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    let arr = this.chain;
      if ((!Number.isInteger(position)) || (position < 1) || (position > arr.length)) {
        this.chain = [];
        throw new Error('You can\'t remove incorrect link!');
      }
      arr.splice(position - 1, 1);
      return this;
  },

  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },

  finishChain() {
    let res = this.chain.join('~~');
    this.chain = [];
    return res;
  }
};

module.exports = {
  chainMaker
};


//let res = chainMaker.addLink(1).addLink(2).addLink(3).addLink(4).removeLink(2).finishChain();
//console.log('res ', res);
/*
let res2 = chainMaker.addLink('5555').finishChain();
console.log('res2 ', res2);

let res = chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain();
console.log('res ', res);
*/
//let res = chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4);
//console.log('res ', res);

//let res = chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain()
//console.log('res ', res);