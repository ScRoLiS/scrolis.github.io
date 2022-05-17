(()=>{"use strict";var t,e,o={};o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t})(),function(t){t.UP="UP",t.DOWN="DONW",t.LEFT="LEFT",t.RIGHT="RIGHT"}(t||(t={})),function(t){t.UP="ArrowUp",t.DOWN="ArrowDown",t.LEFT="ArrowLeft",t.RIGHT="ArrowRight"}(e||(e={}));var n,i=function(){function t(t,e){this.setX(t),this.setY(e),this.setColor(p.config.bodyColor)}return t.prototype.render=function(t){var e=p.config.partSize;t.fillStyle=this.color,t.fillRect(this.x*e,this.y*e,e,e),t.strokeStyle=p.config.bgColor,t.lineWidth=2.5,t.strokeRect(this.x*e+5,this.y*e+5,e-10,e-10),t.lineWidth=2.5,t.strokeRect(this.x*e,this.y*e,e,e)},t.prototype.setX=function(t){this.x=t},t.prototype.setY=function(t){this.y=t},t.prototype.setColor=function(t){this.color=t},t.prototype.getX=function(){return this.x},t.prototype.getY=function(){return this.y},t}(),s=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=function(t){function e(e,o){var n=t.call(this,e,o)||this;return n.setColor(p.config.headColor),n}return s(e,t),e}(i),a=function(){function o(e,o){this.keyBePressed=!1,this.snake=new Array,this.snakeHead=new r(e,o),this.addPart(this.snakeHead),this.setDirection(t.UP),window.addEventListener("keydown",this.keyPressed.bind(this))}return o.createSnake=function(t,e,n){for(var s=new o(e,n),r=0;r<t;r++)s.addPart(new i(e,n+1));return s},o.prototype.render=function(t){(function(t,e,o){if(o||2===arguments.length)for(var n,i=0,s=e.length;i<s;i++)!n&&i in e||(n||(n=Array.prototype.slice.call(e,0,i)),n[i]=e[i]);return t.concat(n||Array.prototype.slice.call(e))})([],this.snake,!0).reverse().forEach((function(e){e.render(t)}))},o.prototype.addPart=function(t){this.snake.push(t)},o.prototype.getLastX=function(){return this.snake[this.snake.length-1].getX()},o.prototype.getLastY=function(){return this.snake[this.snake.length-1].getY()},o.prototype.getLength=function(){return this.snake.length},o.prototype.setDirection=function(t){this.direction=t},o.prototype.checkFoodCollision=function(t){return this.snakeHead.getX()===t.getX()&&this.snakeHead.getY()===t.getY()},o.prototype.checkWallCollision=function(){var t=p.config,e=t.width,o=t.height,n=t.partSize,i=t.wallCollision,s=e/n-1,r=o/n-1;if(this.snakeHead.getX()<0){if(i)return!0;this.snakeHead.setX(s)}if(this.snakeHead.getX()>s){if(i)return!0;this.snakeHead.setX(0)}if(this.snakeHead.getY()<0){if(i)return!0;this.snakeHead.setY(r)}if(this.snakeHead.getY()>r){if(i)return!0;this.snakeHead.setY(0)}return!1},o.prototype.checkBodyCollision=function(){for(var t=1;t<this.snake.length;t++)if(this.snakeHead.getX()===this.snake[t].getX()&&this.snakeHead.getY()===this.snake[t].getY())return!0;return!1},o.prototype.moveUp=function(){this.snakeHead.setY(this.snakeHead.getY()-1)},o.prototype.moveDown=function(){this.snakeHead.setY(this.snakeHead.getY()+1)},o.prototype.moveLeft=function(){this.snakeHead.setX(this.snakeHead.getX()-1)},o.prototype.moveRight=function(){this.snakeHead.setX(this.snakeHead.getX()+1)},o.prototype.moveSnake=function(){for(var e=this.snake.length-1;e>0;e--)this.snake[e].setY(this.snake[e-1].getY()),this.snake[e].setX(this.snake[e-1].getX());switch(this.direction){case t.UP:this.moveUp();break;case t.DOWN:this.moveDown();break;case t.LEFT:this.moveLeft();break;case t.RIGHT:this.moveRight()}this.keyBePressed=!1},o.prototype.keyPressed=function(o){if(!this.keyBePressed)switch(this.keyBePressed=!0,o.key){case e.UP:this.direction!==t.DOWN&&this.setDirection(t.UP);break;case e.DOWN:this.direction!==t.UP&&this.setDirection(t.DOWN);break;case e.LEFT:this.direction!==t.RIGHT&&this.setDirection(t.LEFT);break;case e.RIGHT:this.direction!==t.LEFT&&this.setDirection(t.RIGHT)}},o}(),h=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),c=function(t){function e(){var e=t.call(this,3,3)||this;return e.setColor(p.config.foodColor),e}return h(e,t),e.prototype.generateNewPosition=function(t){var e,o,n=p.config,i=n.width,s=n.height,r=n.partSize,a=i/r-1,h=s/r-1,c=t.snake;do{e=Math.round(Math.random()*a),o=Math.round(Math.random()*h);for(var l=0;l<c.length;l++)if(e===c[l].getX()&&o===c[l].getY()){e=null,o=null;break}}while(null===e&&null===o);this.setX(e),this.setY(o)},e}(i);const l=o.p+"assets/sounds/aa3c582a772cdfb78f42.mp3",d=o.p+"assets/sounds/1523aac19736d914e306.mp3",u=o.p+"assets/sounds/ebed9bd3fac1c9712044.mp3",f=o.p+"assets/sounds/9b1687e534b04f7750d0.mp3";var p=function(){function t(e,o){this.score=0;var n=o.width,i=o.height,s=n%2?Math.round(n/2-1):n/2,r=i%2?Math.round(i/2-1):i/2;o.width=o.width*o.partSize,o.height=o.height*o.partSize,e.setAttribute("width",o.width.toString()),e.setAttribute("height",o.height.toString()),t.config=o,this.winSound=new Audio(d),this.looseSound=new Audio(l),this.bodySound=new Audio(u),this.foodSound=new Audio(f),this.canvas=e.getContext("2d"),this.snake=a.createSnake(o.snakeLength,s,r),this.food=new c,this.food.generateNewPosition(this.snake)}return t.prototype.render=function(e){this.clearCanvas(e),this.food.render(e),this.snake.render(e),t.config.grid&&this.renderGrid(e)},t.prototype.clearCanvas=function(e){var o=t.config,n=o.width,i=o.height;e.fillStyle=t.config.bgColor,e.fillRect(0,0,n,i)},t.prototype.renderGrid=function(e){var o=t.config,n=o.partSize,i=o.width,s=o.height;e.strokeStyle="#000000",e.lineWidth=1.5;for(var r=0;r<=i/n;r++)e.beginPath(),e.moveTo(r*n,0),e.lineTo(r*n,s),e.stroke();for(r=0;r<=s/n;r++)e.beginPath(),e.moveTo(0,r*n),e.lineTo(i,r*n),e.stroke()},t.prototype.renderEndScreen=function(e,o,n){var i=t.config.width/t.config.partSize;e.fillStyle="#ffffffaa",e.fillRect(0,0,t.config.width,t.config.height),e.fillStyle=n,e.textAlign="center",e.font="".concat(1.5*i,"px gameover"),e.fillText(o,t.config.width/2,t.config.height/2),e.font="".concat(i,"px gameover"),e.fillText("Score: ".concat(this.score),t.config.width/2,t.config.height/2+i)},t.prototype.win=function(){console.log("WIN!","SCORE:",this.score),this.renderEndScreen(this.canvas,"You win!","#00aa00"),this.winSound.play(),this.stop()},t.prototype.lose=function(){console.log("FAIL!","SCORE:",this.score),this.renderEndScreen(this.canvas,"You loose!","#aa0000"),this.looseSound.play(),this.stop()},t.prototype.gamePlay=function(){var e=t.config,o=e.width,n=e.height,s=e.partSize,r=o/s*(n/s);if(this.snake.moveSnake(),!(this.snake.getLength()>=r))return this.snake.checkBodyCollision()||this.snake.checkWallCollision()?(this.bodySound.play(),void this.lose()):void(this.snake.checkFoodCollision(this.food)&&this.snake.getLength()<r&&(this.stopSound(this.foodSound),this.snake.addPart(new i(this.snake.getLastX(),this.snake.getLastY())),this.food.generateNewPosition(this.snake),this.foodSound.play(),this.score++));this.win()},t.prototype.stopSound=function(t){t.pause(),t.currentTime=0},t.prototype.setVolume=function(t){t/=100,this.winSound.volume=t,this.looseSound.volume=t,this.foodSound.volume=t,this.bodySound.volume=t},t.prototype.start=function(){this.gamePlayId=setInterval(this.gamePlay.bind(this),t.config.gameSpeed),this.renderId=setInterval(this.render.bind(this,this.canvas),1)},t.prototype.stop=function(){clearInterval(this.gamePlayId),clearInterval(this.renderId)},t}(),g=function(){return g=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},g.apply(this,arguments)},y=document.getElementById("config"),k=document.getElementById("canvas"),w=document.getElementById("volume"),v=document.getElementById("show-controls"),S=C(y),m=new p(k,g({},S));function b(t){return Math.abs(parseInt(t))}function C(t){var e=new FormData(t),o={};return o.width=b(e.get("width")),o.height=b(e.get("height")),o.partSize=b(e.get("partSize")),o.snakeLength=b(e.get("snakeLength")),o.gameSpeed=b(e.get("gameSpeed")),o.grid=!!e.get("grid"),o.wallCollision=!!e.get("wallCollision"),o.bgColor=e.get("bgColor").toString(),o.headColor=e.get("headColor").toString(),o.bodyColor=e.get("bodyColor").toString(),o.foodColor=e.get("foodColor").toString(),o}m.setVolume(parseInt(w.value)),v.addEventListener("click",(function(t){y.classList.toggle("hide")})),w.addEventListener("input",(function(t){m.setVolume(parseInt(w.value))})),y.addEventListener("input",(function(){S=C(y)})),y.addEventListener("submit",(function(t){t.preventDefault(),m.stop(),m.stopSound(m.looseSound),m.stopSound(m.winSound),(m=new p(k,g({},S))).setVolume(parseInt(w.value)),m.start()})),m.start()})();