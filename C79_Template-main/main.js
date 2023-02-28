menuListArray = ["Pizza Vegetariana","Pizza de Mussarela","Pizza de Frango",
"Pizza de Calabresa",
"Pizza Portuguesa",
"Pizza 4 Queijos",
"Pizza Extravaganza"
                    ];

function getMenu(){
var htmldata = " "

for(var i = 0; i < menuListArray.length; i++ ){ 
    htmldata = htmldata + menuListArray[i] + '<br>'
}

    document.getElementById("displayMenu").innerHTML = htmldata;

//afunção sort organiza a minha array em ordem alfabética;
menuListArray.sort();



}

function addItem(){
var htmldata;

//a função push empurra itens para meu array sem precisar modificar a array original

 var imgtags='<img id="im1" src="images/pizzaImg.png">'

 var item = document.getElementById("addItem").value;

 menuListArray.sort();

 htmldata=""

for(var i = 0; i< menuListArray.length; i++){ 
    htmldata = htmldata + imgtags + menuListArray[i] + '<br>'
}

document.getElementById("displayAddedMenu").innerHTML = item + htmldata;
}

function addTop(){
   var item = document.getElementById("additem").value;

   menuListArray.push(item);


   addItem();

}