window.onscroll = function(e){
    console.log(this.document.body.scrollTop);
    console.log(scrollY);

    let div = document.getElementById("sk8rboy");

    if(this.document.body.scrollTop < 50 || document.documentElement.scrollTop < 50){
        div.style.backgroundPosition = '0px 0px';
        div.style.top = '-700px';
    }
    
    if(this.document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        div.style.backgroundPosition = '-67px 0px';
        div.style.top = '40px';
        div.style.height = '80px';
        div.style.width = '70px';
    }

    if(this.document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        div.style.backgroundPosition = '-142px 0px';
        div.style.top = '80px';
        div.style.height = '80px';
        div.style.width = '70px';
    }

    if(this.document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
        div.style.backgroundPosition = '0px -80px';
        div.style.top = '160';
        div.style.height = '80px';
        div.style.width = '70px';
    }

    if(this.document.body.scrollTop > 1750 || document.documentElement.scrollTop > 2000){
        div.style.backgroundPosition = '-67px -80px';
        div.style.top = '240px';
        div.style.height = '80px';
        div.style.width = '70px';
    }

    if(this.document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500){
        div.style.backgroundPosition = '-142px -80px';
        div.style.top = '280px';
        div.style.height = '80px';
        div.style.width = '70px';
    }


}