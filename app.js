const portfolioItem = document.querySelectorAll('.porfolio-item');
const portImg = document.querySelectorAll('.port-img');
const about = document.querySelector('.about');
const hamburger = document.querySelector('.hamburgers');
const line = document.querySelectorAll('.line');
for(let i = 0; i < portfolioItem.length; i++){
    portfolioItem[i].addEventListener('click',() => {
      portfolioItem.forEach(item => item.classList.remove('active'))
      /* for(let j = 0; j < portfolioItem.length; j++){
        portfolioItem[j].classList.remove('active');
      } */
      portfolioItem[i].classList.add('active');
     const dataItem =  portfolioItem[i].getAttribute('data-item');

     for(let e = 0; e < portImg.length; e++){
         portImg[e].classList.remove('active');
         portImg[e].classList.add('hide');

          if(dataItem === portImg[e].getAttribute('data-filtering') || dataItem == 'all'){
            portImg[e].classList.remove('hide');
         portImg[e].classList.add('active');
          }
     }
    })
  }

  hamburger.addEventListener('click',() => {
     hamburger.classList.toggle('clicked')
  })

  

  window.addEventListener('scroll', () => {
    const windowsHeight = window.innerHeight;
    const abTop = about.getBoundingClientRect().top;
    const point = 150;
    console.log(abTop);
    const site = document.querySelectorAll('.site');
    for(let i = 0; i < site.length; i++){

      if(abTop < windowsHeight - point){

        site[i].classList.add('anime')

      }
      else{
        site[i].classList.remove('anime')
      }
        
    }

  })

  









  var typed = new Typed('.animate', {
    strings: [
        "Teacher",
        "Developer",
        "Web Designer"
    ],
    typeSpeed:150,
    backSpeed:75,
    loop:true,
  });

