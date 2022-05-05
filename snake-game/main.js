(()=>{"use strict";var t,e,n={};n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),function(t){t.UP="UP",t.DOWN="DONW",t.LEFT="LEFT",t.RIGHT="RIGHT"}(t||(t={})),function(t){t.UP="ArrowUp",t.DOWN="ArrowDown",t.LEFT="ArrowLeft",t.RIGHT="ArrowRight"}(e||(e={}));var o,i=function(){function t(t,e){this.setX(t),this.setY(e),this.setColor(p.config.bodyColor)}return t.prototype.render=function(t){var e=p.config.partSize;t.fillStyle=this.color,t.fillRect(this.x*e,this.y*e,e,e),t.strokeStyle=p.config.bgColor,t.lineWidth=2.5,t.strokeRect(this.x*e+5,this.y*e+5,e-10,e-10),t.lineWidth=2.5,t.strokeRect(this.x*e,this.y*e,e,e)},t.prototype.setX=function(t){this.x=t},t.prototype.setY=function(t){this.y=t},t.prototype.setColor=function(t){this.color=t},t.prototype.getX=function(){return this.x},t.prototype.getY=function(){return this.y},t}(),r=(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t){function e(e,n){var o=t.call(this,e,n)||this;return o.setColor(p.config.headColor),o}return r(e,t),e}(i),a=function(){function n(e,n){this.keyBePressed=!1,this.snake=new Array,this.snakeHead=new s(e,n),this.addPart(this.snakeHead),this.setDirection(t.UP),window.addEventListener("keydown",this.keyPressed.bind(this))}return n.createSnake=function(t,e,o){for(var r=new n(e,o),s=0;s<t;s++)r.addPart(new i(e,o+1));return r},n.prototype.render=function(t){(function(t,e,n){if(n||2===arguments.length)for(var o,i=0,r=e.length;i<r;i++)!o&&i in e||(o||(o=Array.prototype.slice.call(e,0,i)),o[i]=e[i]);return t.concat(o||Array.prototype.slice.call(e))})([],this.snake,!0).reverse().forEach((function(e){e.render(t)}))},n.prototype.addPart=function(t){this.snake.push(t)},n.prototype.getLastX=function(){return this.snake[this.snake.length-1].getX()},n.prototype.getLastY=function(){return this.snake[this.snake.length-1].getY()},n.prototype.getLength=function(){return this.snake.length},n.prototype.setDirection=function(t){this.direction=t},n.prototype.checkFoodCollision=function(t){return this.snakeHead.getX()===t.getX()&&this.snakeHead.getY()===t.getY()},n.prototype.checkWallCollision=function(){var t=p.config,e=t.width,n=t.height,o=t.partSize,i=t.wallCollision,r=e/o-1,s=n/o-1;if(this.snakeHead.getX()<0){if(i)return!0;this.snakeHead.setX(r)}if(this.snakeHead.getX()>r){if(i)return!0;this.snakeHead.setX(0)}if(this.snakeHead.getY()<0){if(i)return!0;this.snakeHead.setY(s)}if(this.snakeHead.getY()>s){if(i)return!0;this.snakeHead.setY(0)}return!1},n.prototype.checkBodyCollision=function(){for(var t=1;t<this.snake.length;t++)if(this.snakeHead.getX()===this.snake[t].getX()&&this.snakeHead.getY()===this.snake[t].getY())return!0;return!1},n.prototype.moveUp=function(){this.snakeHead.setY(this.snakeHead.getY()-1)},n.prototype.moveDown=function(){this.snakeHead.setY(this.snakeHead.getY()+1)},n.prototype.moveLeft=function(){this.snakeHead.setX(this.snakeHead.getX()-1)},n.prototype.moveRight=function(){this.snakeHead.setX(this.snakeHead.getX()+1)},n.prototype.moveSnake=function(){for(var e=this.snake.length-1;e>0;e--)this.snake[e].setY(this.snake[e-1].getY()),this.snake[e].setX(this.snake[e-1].getX());switch(this.direction){case t.UP:this.moveUp();break;case t.DOWN:this.moveDown();break;case t.LEFT:this.moveLeft();break;case t.RIGHT:this.moveRight()}this.keyBePressed=!1},n.prototype.keyPressed=function(n){if(!this.keyBePressed)switch(this.keyBePressed=!0,n.key){case e.UP:this.direction!==t.DOWN&&this.setDirection(t.UP);break;case e.DOWN:this.direction!==t.UP&&this.setDirection(t.DOWN);break;case e.LEFT:this.direction!==t.RIGHT&&this.setDirection(t.LEFT);break;case e.RIGHT:this.direction!==t.LEFT&&this.setDirection(t.RIGHT)}},n}(),h=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),c=function(t){function e(){var e=t.call(this,3,3)||this;return e.setColor("#0a4622"),e}return h(e,t),e.prototype.generateNewPosition=function(t){var e,n,o=p.config,i=o.width,r=o.height,s=o.partSize,a=i/s-1,h=r/s-1,c=t.snake;do{e=Math.round(Math.random()*a),n=Math.round(Math.random()*h);for(var l=0;l<c.length;l++)if(e===c[l].getX()&&n===c[l].getY()){e=null,n=null;break}}while(null===e&&null===n);this.setX(e),this.setY(n)},e}(i);const l=n.p+"assets/sounds/aa3c582a772cdfb78f42.mp3",f=n.p+"assets/sounds/1523aac19736d914e306.mp3",d=n.p+"assets/sounds/ebed9bd3fac1c9712044.mp3",u=n.p+"assets/sounds/9b1687e534b04f7750d0.mp3";var p=function(){function t(e,n){this.score=0;var o=n.width,i=n.height,r=o%2?Math.round(o/2-1):o/2,s=i%2?Math.round(i/2-1):i/2;n.width=n.width*n.partSize,n.height=n.height*n.partSize,e.setAttribute("width",n.width.toString()),e.setAttribute("height",n.height.toString()),t.config=n,this.winSound=new Audio(f),this.looseSound=new Audio(l),this.bodySound=new Audio(d),this.foodSound=new Audio(u),this.canvas=e.getContext("2d"),this.snake=a.createSnake(n.snakeLength,r,s),this.food=new c,this.food.generateNewPosition(this.snake)}return t.prototype.render=function(e){this.clearCanvas(e),this.food.render(e),this.snake.render(e),t.config.grid&&this.renderGrid(e)},t.prototype.clearCanvas=function(e){var n=t.config,o=n.width,i=n.height;e.fillStyle=t.config.bgColor,e.fillRect(0,0,o,i)},t.prototype.renderGrid=function(e){var n=t.config,o=n.partSize,i=n.width,r=n.height;e.strokeStyle="#000000",e.lineWidth=1.5;for(var s=0;s<=i/o;s++)e.beginPath(),e.moveTo(s*o,0),e.lineTo(s*o,r),e.stroke();for(s=0;s<=r/o;s++)e.beginPath(),e.moveTo(0,s*o),e.lineTo(i,s*o),e.stroke()},t.prototype.renderLooseScreen=function(e){e.fillStyle="#ffffffaa",e.fillRect(0,0,t.config.width,t.config.height),e.fillStyle="#aa0000",e.textAlign="center",e.font="30px gameover",e.fillText("You loose!",t.config.width/2,t.config.height/2),e.font="15px gameover",e.fillText("Score: ".concat(this.score),t.config.width/2,t.config.height/2+24)},t.prototype.renderWinScreen=function(e){e.fillStyle="#ffffffaa",e.fillRect(0,0,t.config.width,t.config.height),e.fillStyle="#008a00",e.textAlign="center",e.font="30px gameover",e.fillText("You win!",t.config.width/2,t.config.height/2),e.font="15px gameover",e.fillText("Score: ".concat(this.score),t.config.width/2,t.config.height/2+24)},t.prototype.win=function(){console.log("WIN!","SCORE:",this.score),this.renderWinScreen(this.canvas),this.winSound.play(),this.stop()},t.prototype.lose=function(){console.log("FAIL!","SCORE:",this.score),this.renderLooseScreen(this.canvas),this.looseSound.play(),this.stop()},t.prototype.gamePlay=function(){var e=t.config,n=e.width,o=e.height,r=e.partSize,s=n/r*(o/r);if(this.snake.moveSnake(),!(this.snake.getLength()>=s))return this.snake.checkBodyCollision()||this.snake.checkWallCollision()?(this.bodySound.play(),void this.lose()):void(this.snake.checkFoodCollision(this.food)&&this.snake.getLength()<s&&(this.snake.addPart(new i(this.snake.getLastX(),this.snake.getLastY())),this.food.generateNewPosition(this.snake),this.foodSound.play(),this.score++));this.win()},t.prototype.start=function(){this.gamePlayId=setInterval(this.gamePlay.bind(this),t.config.gameSpeed),this.renderId=setInterval(this.render.bind(this,this.canvas),1)},t.prototype.stop=function(){clearInterval(this.gamePlayId),clearInterval(this.renderId)},t}(),g=function(){return g=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},g.apply(this,arguments)},y=document.getElementById("config"),k=document.getElementById("canvas"),w=b(y),v=new p(k,g({},w));function S(t){return parseInt(t)}function b(t){var e=new FormData(t),n={};return n.width=S(e.get("width")),n.height=S(e.get("height")),n.partSize=S(e.get("partSize")),n.snakeLength=S(e.get("snakeLength")),n.gameSpeed=S(e.get("gameSpeed")),n.grid=!!e.get("grid"),n.wallCollision=!!e.get("wallCollision"),n.bgColor=e.get("bgColor").toString(),n.headColor=e.get("headColor").toString(),n.bodyColor=e.get("bodyColor").toString(),n}y.addEventListener("input",(function(){w=b(y)})),y.addEventListener("submit",(function(t){t.preventDefault(),v.stop(),(v=new p(k,g({},w))).start()})),v.start()})();