class Food{
constructor(x,y){
  var foodStock, lastFed 
  this.image= loadImage("images/Milk.png")
}
display()
{
   

 //var foodstock
    
//this.body.addImage("images/Milk.png");
var x= 200, y=400


/*foodstock=database.ref('Food'); 
foodstock.on("value",function(data){
    foodstock= data.val();
text("this:"+foodstock+"hey",200,200)
})*/



//check wit teach(calling to database not working) 
//foodstock=20


imageMode(CENTER)
//image(this.image,200,400,100,100);

if(foodstock!=0){
            text("food:"+foodstock,100,300);

    for(var i=0;i<foodstock;i++){
        if(i%10==0){
            x= 50
            y = y+150
        }
        image(this.image,x,y,100,100);
        x=x+50
        //text("hello",100,300)

      
    }
}

}

getFoodstock(){
    var getfoodRef= database.ref("food")
    getfoodRef.on("value",function(data){
        foodS= data.val();
    }) 
}

updateFoodstock(){

}

deductFoodstock(){

}
}


