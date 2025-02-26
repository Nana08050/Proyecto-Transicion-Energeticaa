/* globals Chart:false */

(() => {
  'use strict'

  // Graphs

const ctx = document.getElementById('myChart');
  
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          borderColor: '##03bb85',
          backgroundColor: '#03bb85'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });})()

    Swal.fire({ 
      title: "Bienvenidos",
      text: "La revolucion del energetica del campo colombiano comienza ahora",
      imageUrl: "./imagenes/solar-8244680_1280.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      color:'#084db3',
      confirmButtonColor: "#090466" ,
    });


    function test(){  
      Swal.fire({
        confirmButtonText: `
      <iframe width="400" height="400" src="https://www.youtube.com/embed/TzfnlPxCZv0?si=547rW20B-UAx4R_h&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `,imageHeight: 500,
        imageAlt: "A tall image",
        confirmButtonColor:"#d1e3f8",
      });
    }
