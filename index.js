function removeEffect(linkName){
    let href=linkName.getAttribute("href");
    let section=href.substring(1);
    document.getElementById(section).classList.remove('activate-float');
    linkName.classList.remove('link-active');
}
const links=document.querySelectorAll("nav ul li a");
links.forEach(link=>{
    link.addEventListener("click",()=>{
        links.forEach(link => {
            removeEffect(link);
        });
        link.classList.toggle("link-active");
        let href_current=link.getAttribute("href");
        let section_current=href_current.substring(1);
        document.getElementById(section_current).classList.toggle('activate-float');
    });
});
