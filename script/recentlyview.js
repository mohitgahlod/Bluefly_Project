let RECENTLY_VIEWED=[
    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/noutH4ms3oVDrEiWN5wgtAevJT1SlmGy-25_large.jpg?v=1661228230",
        title:"BECCA WOMENS MID RISE STRETCH BOOTCUT JEANS",
        dis:"$159",
        price:"45.99",
        save:"Save 71%"
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/7043e64d-fee5-40f6-8433-c6128b56a093_large.jpg?v=1607745937",
        title:"NWT VLONE X PLAM ANGLES BLACK/PURRPLE LOGO SHORT SLEEVLESS",
        dis:"$335",
        price:"275",
        save:"Save 18%"
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/BLF005638_bo_large.jpg?v=1650984622",
        title:"DIAMOND AND PINK SAPHIRE AND 9.9.5",
        dis:"$3240",
        price:"982",
        save:"Save 70%"
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/hUQl0Yvc9k3nas27mz4pl6OTZoQUQUlO-25_large.jpg?v=1661163615",
        title:"WOMENS LACE FLORAL EVENING DRESS",
        dis:"$468",
        price:"155.99",
        save:"Save 67%"
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313395700_RLLZ_2_large.jpg?v=1660342242",
        title:"Women's Pumps & Heels",
        dis:"498",
        price:"324.99",
        save:"Save 35%"
    },
];

append(Youmay)


function append(data){
    data.forEach(function(el){
        let paddingrecvie=document.getElementById("paddingrecviee");
        let CATEGORY=document.getElementById("RECENTLY_VIEWED");
        

        // CATEGORY.innerHTML="";
        var div=document.createElement("div");
        // div.innerHTML=null;
        div.setAttribute("class","RECENTLY_VIEWED_div")
        

        let img=document.createElement("img")
        img.setAttribute("id","RECENTLY_VIEWED_img")

        img.src=el.img;
        let title=document.createElement("h4")
        title.innerText=el.title;
        title.setAttribute("id","RECENTLY_VIEWED_tiltle")

        let div2=document.createElement("div");
        div2.setAttribute("id","RECENTLY_VIEWED_price")

        let p1=document.createElement("del")
        p1.innerText=el.dis;
        let p2=document.createElement("p")
        p2.innerText="$"+el.price;
        let p3=document.createElement("p")
        p3.innerText=el.save
        
        p3.style.color="red";
        div2.append(p1,p2,p3);

        let btn2=document.createElement("button");
        btn2.setAttribute("class","RECENTLY_VIEWED_btn2")
        btn2.innerText="Quick View";
        btn2.style.color="white"
        btn2.style.backgroundColor="black"
        let hr=document.createElement("hr")

        paddingrecvie.append(hr)
        div.append(img,btn2,title,div2)
        CATEGORY.append(div)

      

        
 })

}