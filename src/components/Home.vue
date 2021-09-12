<template>
  <div>
    <div class="center">
      <div class="content ">
        <div class="padding pt-5">
          <div class="text-align-webkit-center">
            <a :href="imgURL" target="_blank">
            <div class="div-img" :style="{backgroundColor: '#' + bgColor}">
              <p :style="{font : font,color: '#' + color}">{{text}}</p>
            </div>
            </a>
            <small class="small-text">
              This is just a virtual form, press the button [Show real image]
            </small>

            <div class="custom-div p-2 m-4 img-link">
              <a :href="imgURL" target="_blank">
                <p>
                  {{ imgURL }}
                </p>
              </a>
            </div>
<a :href="imgURL" target="_blank">
             <div class="show-btn">Show real image </div>
              </a>
              
          </div>
        </div><hr class="separate" />
        <div class="padding text-align-webkit-center">
          <div class="div-form pt-4 pb-4">
            <form class="row g-3 text-start">
              <div class="col-sm-6">
                <label for="width" class="form-label">Width</label>
                <input type="number" class="form-control input-style" id="width" min="0" max="8000" v-model="width"/>
              </div>
              <div class="col-sm-6">
                <label for="height" class="form-label">Height</label>
                <input
                  type="number"
                  class="form-control input-style"
                  id="height"
                  v-model="height"
                  min="0" max="8000"
                />
              </div>
              <div class="col-md-6">
                <label for="text" class="form-label">Text</label>
                <input
                  type="text"
                  class="form-control input-style "
                  id="text"
                  v-model="text"
                  placeholder="Hello World!"
                  maxlength="78"
                />
                <small class="ps-2">?text=Hello World!</small>
              </div>
              <div class="col-md-6">
                <label for="text" class="form-label">Font</label>
                <input
                  type="font"
                  class="form-control input-style "
                  v-model="font"
                  placeholder="1234 Main St"
                  maxlength="50"
                />
                <small class="ps-2"> ?font=bold 30pt Menlo</small>
              </div>

               <div class="col-sm-6">
                <label for="textColor" class="form-label pb-2">Text Color</label>
                <input type="color" class="form-control form-control-color" id="textColor" value="#000000"  @change="colorFunction($event)" title="Choose your color">
                <small class="ps-2">(HEX form without #) ?color=563d7c</small>
              </div>

               <div class="col-sm-6">
                <label for="backgroundColor" class="form-label pb-2">Background Color</label>
                <input type="color" class="form-control form-control-color" id="backgroundColor" value="#ffffff"  @change="bgColorFunction($event)" title="Choose your color">
                 <small class="ps-2">(HEX form without #) ?bgColor=ffffff</small>
              </div>
            </form>
            </div>   
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      width: 800,
      height : 400,
      text : "800x400",
      font : "bold 20pt Menlo",
      color : "",
      bgColor : ""
    };
  },

  computed : {

    imgURL : function() 
    {
      var url = location.protocol + '//' + location.host + location.pathname + this.width + 'x' + this.height + '/';
      var check = true;
      if (this.checkFunction()){
        url +='?';
        
        if(this.text && check )
        {
           url +='text=' + encodeURI(this.text); 
           check = false;
        }
        else if (this.text && !check)
          url +='&text=' + encodeURI(this.text); 

           if(this.font && check )
        {
           url +='font=' + encodeURI(this.font); 
           check = false;
        }
        else if (this.font && !check)
          url +='&font=' + encodeURI(this.font);
          
          
           if(this.color && check )
        {
           url +='color=' + encodeURI(this.color); 
           check = false;
        }
        else if (this.color && !check)
          url +='&color=' + encodeURI(this.color);

        
           if(this.bgColor && check )
        {
           url +='bgColor=' + encodeURI(this.bgColor); 
           check = false;
        }
        else if (this.bgColor && !check)
          url +='&bgColor=' + encodeURI(this.bgColor);

       
      }
      
        return  url;
    }
  },
  methods : {
    checkFunction : function() {
      if (this.text || this.font || this.bgColor)
      {
        return true;
      }
      return false;
    },
    colorFunction : function(e){
      this.color  = e.target.value.replace('#','');
    },
    bgColorFunction : function(e){
      this.bgColor  = e.target.value.replace('#','');
    }
  }
};
</script>
