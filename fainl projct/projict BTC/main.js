for(i of document.getElementsByClassName("fa-solid fa-heart fa-2xl1")){
    iconParentId=i.parentElement.id
    for(localStorageId in localStorage){
        if (iconParentId==localStorageId) {
            i.style.color="#c39d3e"
        }
    }
}

let putRemoveFavorites=(e)=>{
    iconParentId=e.parentElement.id
    for(localStorageId in localStorage){          
        if(iconParentId==localStorageId) {
            e.style.color="#000000"
            localStorage.removeItem(iconParentId);
            return;
        }

    }
    localStorage.setItem(e.parentElement.id, e.parentElement.id);
    e.style.color="#c39d3e"
}

function openFavs(){
    let favPopup=document.createElement("div")
    favPopup.style.position="fixed";
    favPopup.style.zIndex="1";
    favPopup.style.top="9%";
    favPopup.style.left="27%";
    favPopup.style.height="77%";
    favPopup.style.width="40%";
    favPopup.style.paddingBottom="50px";
    favPopup.style.paddingLeft="90px";
    favPopup.style.overflow="auto";
    favPopup.style.border="3px solid #c39d3e";
    favPopup.style.backgroundColor="#e4e4e6";
    document.getElementsByClassName("header")[0].style.position="static"
    document.body.append(favPopup)
    document.getElementsByClassName("page")[0].style.filter="blur(2px) brightness(30%)";
    for(localStorageId in localStorage){
        for(i of document.getElementsByClassName("fa-solid fa-heart fa-2xl1")){
            iconParent=i.parentElement
            if (iconParent.id==localStorageId) {
                let divToAppend=document.createElement("div");
                imgToAppend=document.createElement("img")
                imgToAppend.src=iconParent.children[0].src
                h3ToAppend=document.createElement("h3")
                h3ToAppend.innerHTML=iconParent.children[1].innerHTML
                pToAppend=document.createElement("p")
                pToAppend.innerHTML=iconParent.children[2].innerHTML
                divToAppend.append(imgToAppend)
                divToAppend.append(h3ToAppend)
                divToAppend.append(pToAppend)
                divToAppend.style.cssText=" display: inline-block;width: 200px;text-align: center;margin-right: 30px;padding-top: 50px;"
                imgToAppend.style.cssText=" width: 100%;max-height: 200px;object-fit: cover;"
                favPopup.append(divToAppend)
            }
        }
    }
    cancelButton=document.createElement("button")
    cancelButton.style.position="fixed"
    cancelButton.style.top="10%"
    cancelButton.style.left="70%"
    cancelButton.innerHTML="<b>X</b>"
    cancelButton.onclick=()=>{
        document.body.removeChild(favPopup)
        document.getElementsByClassName("header")[0].style.position="sticky"
        document.getElementsByClassName("page")[0].style.filter="blur(0px) brightness(100%)";        
    }
    favPopup.append(cancelButton)
}
console.log(document.getElementsByClassName("fa-solid fa-heart fa-2xl1")[0].parentElement.children[0].src)