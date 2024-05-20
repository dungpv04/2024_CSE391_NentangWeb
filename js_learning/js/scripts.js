function SubmitHandle(){
    
    var value = document.getElementById('keyword').value;
    var old_img = document.getElementById('image');

    if(old_img != null) old_img.remove();
    var img = document.createElement('img');
    img.id = "image";
    var container = document.getElementById('image_container');

    if(value === ""){
        document.getElementById('text-alert').innerText = "Vui lòng nhập từ khóa";
    }
    else{
        document.getElementById('text-alert').innerText = "";
        if(value === "pepe"){
            img.src = "..\\img\\pepe.jpg";
            container.appendChild(img);
        }
        else if(value === "doraemon"){
            img.src = "..\\img\\doraemon.jpg";
            container.appendChild(img);
        }
        else if(value === "lemon"){
            img.src = "..\\img\\lemon.jpg";
            container.appendChild(img);
        }
        else{
            img.src = "..\\img\\no_image.png";
            container.appendChild(img);
        }
    }
    
    console.log(value);
}