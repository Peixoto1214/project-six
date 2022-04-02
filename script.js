//const helloWorld = document.querySelector('.hello');
    //function clickMe(){ 
        //const helloWorld = document.querySelector('button');
        //document.querySelector('.btn').innerHTML('click', clickMe);
    // when I click the button I want to show the class on the DOM

        
       /* document.querySelector('.myDiv').addEventListener('click', helloWorld);
        function clickMe(){ 
            return helloWorld;
            

        }*/
  
    //console.log(helloWorld);
    //document.querySelector('.hello').innerHTML = 'Hello There';
    //const divSpace = document.querySelector('.myDiv');
    
    //const clickMe = document.querySelector('#button'); 
    

    //clickMe.addEventListener('click', function(e){
      //  e.preventDefault();
        //helloThere.style.display= "block";
         //return seeYa;
        
       
        //remove class from DOM on the second click
   
    
    //});
    /*document.querySelector('.myDiv').addEventListener('click', toggleClass);
    function toggleClass (){
        
        
        const helloThere = document.querySelector('.hello');
        const seeYa = document.querySelector('.bye'); 
    
    
   helloThere.classList.toggle('.bye')
    
console.log(helloThere)
    }

    /*helloThere.addEventListener('click',function(e){
        e.preventDefault();
        helloThere.style.background = 'red';
        helloThere.style.fontweight = 'bold';
        



    });*/
    
   //target div 
   document.addEventListener('DOMContentLoaded', function(event){
       //the code from line 59 to 84 works it adds 

    // var container = document.querySelector('.target');

    // var hideButton = document.getElementById('hide').addEventListener('click', function(){

    //     if (container.style.display === 'none'){
    //             container.style.display = 'block';

    //     }else{
    //         container.style.display = 'none';
    //     }



    // })

    // var place = document.querySelector('#holder');

    // var switchButton = document.getElementById('clickMe').addEventListener('click', function(){
    //    if (place.style.display === 'none'){
    //         place.style.display = 'block';

    //    }else{
    //        place.style.display = 'none';
    //    }

    // })

    //i want to change between classes when I click the button '.clickMe'
    document.querySelector('#clickMe').addEventListener('click', function(){
        //create variables for the classes
        console.log('click')

        console.log(document.querySelector('#holder'))
        
        
        const seeYa = document.querySelector('#clickMe');
        console.log(seeYa)
        //
        if (document.querySelector('#holder').style.backgroundColor == 'red'){
            //show the red class 
            document.querySelector('#holder').style.backgroundColor = 'blue';
        }else{
            //call the blue class
            document.querySelector('#holder').style.backgroundColor = 'red';
        }
    // //create a function
    // function toggleClass (){
    //     //if the blue class is not showing 
    //     if (document.querySelector('.red').style.display = 'none'){
    //         //show the red class 
    //         document.querySelector('.red').style.display = 'block';
    //     }else{
    //         //call the blue class
    //         document.querySelector('.blue').style.display = 'block';
    //     }
    // }

})
    
    // para.innerHTML('hello there you silly goose');


   let div = document.createElement('div');

   div.innerHTML = '<p> Hello Sucka I can not believe this nonsense </p>';
    document.body.appendChild(div)


   });
