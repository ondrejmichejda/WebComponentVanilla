(()=>{class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadow.innerHTML=`
            <style>
                .circle {
                    width: 100px;
                    height: 100px;
                    background-color: red;
                    border-radius: 50%;
                }
            </style>
            <div>
                <h2>My Circle</h2>
                <div class="circle"></div>
            </div> 
        `}}customElements.define("ondra-tag",e)})();