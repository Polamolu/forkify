function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n,i,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},s=r.parcelRequire3a11;null==s&&((s=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},r.parcelRequire3a11=s),s.register("27Lyk",function(t,n){e(t.exports,"register",()=>i,e=>i=e),e(t.exports,"resolve",()=>r,e=>r=e);var i,r,o={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},r=function(e){var t=o[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),s("27Lyk").register(JSON.parse('{"f9fpV":"index.e88a32c8.js","hfd23":"icons.c14567a0.svg"}'));var c={};c=new URL(s("27Lyk").resolve("hfd23"),import.meta.url).toString(),(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,i,r=num.split(" ");if(r[0]&&(n=r[0]),r[1]&&(i=r[1]),n%1==0&&i&&i.match("/"))return new Fraction(n).add(new Fraction(i));if(!n||i)return;if("string"==typeof n&&n.match("/")){var o=n.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,n=this.denominator,i=[];return 0!=e&&i.push(e),0!=t&&i.push((0===e?t:Math.abs(t))+"/"+n),i.length>0?i.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(n=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},i=function(e,t){if(!t)return Math.round(e);var n=Math.pow(10,t);return Math.round(e*n)/n},function(){if(n(this.denominator)){var e=i(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(n(this.numerator)){var e=i(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var r=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=r,this.denominator/=r,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var n=[],i=Fraction.primeFactors(e),r=Fraction.primeFactors(t);return(i.forEach(function(e){var t=r.indexOf(e);t>=0&&(n.push(e),r.splice(t,1))}),0===n.length)?1:function(){var e,t=n[0];for(e=1;e<n.length;e++)t*=n[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),n=[],i=2;i*i<=t;)t%i==0?(n.push(i),t/=i):i++;return 1!=t&&n.push(t),n},Fraction;const u=document.querySelector(".recipe");document.querySelector(".recipe__ingredient-list");let l=document.querySelector(".search__btn");document.querySelector(".search-results");let d=document.querySelector(".results"),p=document.querySelector(".search__field"),f=document.querySelector(".pagination"),h=function(e){let n=`<div class="error">
            <div>
              <svg>
                <use href="${t(c)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${e}. Please try again!</p>
          </div> `;u.innerHTML="",d.innerHTML="",u.insertAdjacentHTML("afterbegin",n)},g=function(e){let n=`<div class="spinner">
          <svg>
            <use href="${t(c)}#icon-loader"></use>
          </svg>
        </div>`;e.insertAdjacentHTML("afterbegin",n)},m=function(e){u.innerHTML="";let n=`<figure class="recipe__fig">
                    <img src="${e.image_url}" alt="Tomato" class="recipe__img" />
                    <h1 class="recipe__title">
                      <span>${e.title}</span>
                    </h1>
                  </figure>

                  <div class="recipe__details">
                    <div class="recipe__info">
                      <svg class="recipe__info-icon">
                        <use href="${t(c)}#icon-clock"></use>
                      </svg>
                      <span class="recipe__info-data recipe__info-data--minutes">45</span>
                      <span class="recipe__info-text">minutes</span>
                    </div>
                    <div class="recipe__info">
                      <svg class="recipe__info-icon">
                        <use href="${t(c)}#icon-users"></use>
                      </svg>
                      <span class="recipe__info-data recipe__info-data--people messi">4</span>
                      <span class="recipe__info-text">servings</span>

                      
                    </div>

                    
                  </div>
                  

                  
                  <div class="recipe__ingredients">
                    <h2 class="heading--2">Recipe ingredients</h2>
                    <ul class="recipe__ingredient-list">
                      
                      ${e.ingredients.map(function(e){return`<li class="recipe__ingredient">
                              <svg class="recipe__icon">
                                <use href="${t(c)}#icon-check"></use>
                              </svg>
                              <div class="recipe__quantity">${e.quantity?new Fraction(e.quantity).toString():""}</div>
                              <div class="recipe__description">
                                <span class="recipe__unit">${e.unit}</span>
                                ${e.description}
                              </div>
                            </li>`}).join("")}
                    </ul>
                  </div>

                  <div class="recipe__directions">
                    <h2 class="heading--2">How to cook it</h2>
                    <p class="recipe__directions-text">
                      This recipe was carefully designed and tested by
                      <span class="recipe__publisher">The Pioneer Woman</span>. Please check out
                      directions at their website.
                    </p>
                    <a
                      class="btn--small recipe__btn"
                      href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
                      target="_blank"
                    >
                      <span>Directions</span>
                      <svg class="search__icon">
                        <use href="${t(c)}#icon-arrow-right"></use>
                      </svg>
                    </a>
                  </div>`;u.insertAdjacentHTML("afterbegin",n)},v=async function(e){try{g(d);let t=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${e}`),n=await t.json();if(console.log(n),"success"===n.status&&0!=n.data.recipes.length)return d.innerHTML="",n.data.recipes;throw Error("this recipe is not present in our database.")}catch(e){throw e}};window.addEventListener("load",function(e){e.preventDefault(),l.addEventListener("click",function(e){e.preventDefault(),document.querySelector(".search-results").style.paddingTop=0,v(p.value).then(function(e){console.log(e);let n=[],i=[];e.forEach(function(e,r){let o=`<li class="preview">
                    <a class="preview__link preview__link--active" href="#${e.id}">
                      <figure class="preview__fig">
                        <img src="${e.image_url}" alt="Test" />
                      </figure>
                      <div class="preview__data">
                        <h4 class="preview__title">${e.title}</h4>
                        <p class="preview__publisher">The Pioneer Woman</p>
                        <div class="preview__user-generated">
                          <svg>
                            <use href="${t(c)}#icon-user"></use>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </li>`;i.push(o),(r+1)%10==0&&(n.push(i.join("")),i=[]),d.insertAdjacentHTML("afterbegin",o)}),n.push(i.join("")),console.log(n),1===n.length?d.insertAdjacentHTML("afterbegin",n[0]):(n.forEach(function(e,n){if(0===n){d.innerHTML="",d.insertAdjacentHTML("afterbegin",e);let i=`
                                    <button class="btn--inline pagination__btn--next">
                                      <span id="${n+2}">Page ${n+2}</span>
                                      <svg class="search__icon">
                                        <use href="${t(c)}#icon-arrow-right"></use>
                                      </svg>
                                    </button>`;f.insertAdjacentHTML("afterbegin",i)}}),f.addEventListener("click",function(e){if(e.preventDefault(),e.target.hasAttribute("id")){let i=Number(e.target.getAttribute("id"));if(console.log(i),i-2+1+1!=n.length){let e=`<button class="btn--inline pagination__btn--prev">
                                        
                                        <svg class="search__icon">
                                          <use href="${t(c)}#icon-arrow-left"></use>
                                        </svg>
                                        <span id1="${i-1}">Page ${i-1}</span>
                                      </button>
                                      <button class="btn--inline pagination__btn--next">
                                        <span id="${i+1}">Page ${i+1}</span>
                                        <svg class="search__icon">
                                          <use href="${t(c)}#icon-arrow-right"></use>
                                        </svg>
                                      </button>`;d.innerHTML="";let r=n[i-2+1];console.log(r),d.insertAdjacentHTML("afterbegin",r),f.innerHTML="",f.insertAdjacentHTML("afterbegin",e)}else if(i-2+2===n.length){let e=`<button class="btn--inline pagination__btn--prev">
                                
                                <svg class="search__icon">
                                  <use href="${t(c)}#icon-arrow-left"></use>
                                </svg>
                                <span id1="${i-1}">Page ${i-1}</span>
                              </button>`;d.innerHTML="";let r=n[i-1];console.log(r),d.insertAdjacentHTML("afterbegin",r),f.innerHTML="",f.insertAdjacentHTML("afterbegin",e)}}}),f.addEventListener("click",function(e){if(e.preventDefault(),e.target.hasAttribute("id1")){let i=Number(e.target.getAttribute("id1"));if(console.log(i),i-2+1+1>1){let e=`<button class="btn--inline pagination__btn--prev">
                                        
                                        <svg class="search__icon">
                                          <use href="${t(c)}#icon-arrow-left"></use>
                                        </svg>
                                        <span id1="${i-1}">Page ${i-1}</span>
                                      </button>
                                      <button class="btn--inline pagination__btn--next">
                                        <span id="${i+1}">Page ${i+1}</span>
                                        <svg class="search__icon">
                                          <use href="${t(c)}#icon-arrow-right"></use>
                                        </svg>
                                      </button>`;d.innerHTML="";let r=n[i-1];console.log(r),d.insertAdjacentHTML("afterbegin",r),f.innerHTML="",f.insertAdjacentHTML("afterbegin",e)}else if(i-2+2==1){let e=`<button class="btn--inline pagination__btn--next">
                                
                                <span id1="${i+1}">Page ${i+1}</span>
                                <svg class="search__icon">
                                  <use href="${t(c)}#icon-arrow-right"></use>
                                </svg>
                              </button>`;d.innerHTML="";let r=n[i-1];console.log(r),d.insertAdjacentHTML("afterbegin",r),f.innerHTML="",f.insertAdjacentHTML("afterbegin",e)}}}))}).catch(function(e){h(e.message)})})});let _=async function(){try{let e=window.location.hash.slice(1);console.log(e),u.innerHTML="",g(u);let t=`https://forkify-api.herokuapp.com/api/v2/recipes/${e}`,n=await Promise.race([fetch(t),new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 5 second"))},5e3)})]);if(console.log(n),n.ok){let e=await n.json();console.log(e);let t=e.data.recipe;return console.log(t),t}throw Error(`${n.statusText}`)}catch(e){throw e}},b=function(e,t){if((e.target.classList.contains("suzuki")||e.target.classList.contains("inc"))&&t){let e=Number(document.querySelector(".messi").textContent);e+=1,document.querySelector(".messi").textContent=`${e}`,console.log(e);let n=t.ingredients.map(function(n){return n.quantity?{...n,quantity:e*n.quantity/t.servings}:n});t.ingredients=n,t.servings=e,u.innerHTML="",m(t)}e.stopPropagation()};window.addEventListener("hashchange",function(e){e.preventDefault(),_().then(function(e){console.log(e.ingredients),m(e),u.removeEventListener("click",b),u.addEventListener("click",function(t){b(t,e)})}).catch(function(e){h(e.message)})});
//# sourceMappingURL=index.e88a32c8.js.map
