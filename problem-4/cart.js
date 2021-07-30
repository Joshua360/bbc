const wrapper = document.getElementById('wrapper');
const bill = document.getElementById('sumtotal');

wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  const buttons = document.getElementsByClassName("add");
  let total = 0;


  if (isButton) {
    const payMe = event.target.previousElementSibling.innerHTML;
    const removeDollarSign = payMe.replace('$', '');
    total+= parseInt(removeDollarSign);
  }

  console.log(total)


  



      //     total+= parseInt(removeDollarSign);
      //     console.log(removeDollarSign);
      //     bill.innerHTML = `${total}$`;



      //   }
       

      

      // }

  

})


// const home = document.getElementById("title").innerHTML;
// console.log(home);

