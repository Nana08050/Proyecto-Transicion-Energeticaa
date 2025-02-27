

    function bienvenida(){
      Swal.fire({
        title: "Bienvenidos",
        text: "La revolucion del energetica del campo colombiano comienza ahora",
        imageUrl: "./imagenes/solar-8244680_1280.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        color:'#084db3',
        confirmButtonColor: "#090466" ,
        timer: 50000
    });
  }


    function test(){  
      Swal.fire({
        confirmButtonText: `
      <iframe width="400" height="400" src="https://www.youtube.com/embed/TzfnlPxCZv0?si=547rW20B-UAx4R_h&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `,imageHeight: 500,
        imageAlt: "A tall image",
        confirmButtonColor:"#d1e3f8",
      });
    }
    
  //   async function cargarDatos() {
  //     try {
  //         const response = await fetch("http://127.0.0.1:5000/datos"); // Llamada a Flask
  //         const datos = await response.json();

  //         const years = Object.keys(datos); // Obtener los años disponibles
  //         const categorias = Object.keys(datos[years[0]]); // Obtener los tipos de energía

  //         const datasets = categorias.map(categoria => ({
  //             label: categoria,
  //             data: years.map(year => datos[year][categoria] || 0), // Si no hay dato, poner 0
  //             backgroundColor: getColor(categoria),
  //         }));

  //         new Chart(document.getElementById("graficoBarras"), {
  //             type: "bar",
  //             data: {
  //                 labels: years,
  //                 datasets: datasets
  //             },
  //             options: {
  //                 responsive: true,
  //                 plugins: {
  //                     legend: { position: "top" },
  //                     title: { display: true, text: "Energía Generada por Año y Tipo" }
  //                 }
  //             }
  //         });

  //     } catch (error) {
  //         console.error("Error al cargar los datos:", error);
  //     }
  // }

  // function getColor(energyType) {
  //     const colors = {
  //         "Hydro": "skyblue",
  //         "Wind": "lightcoral",
  //         "Solar": "lightgreen",
  //         "Geothermal": "gold"
  //     };
  //     return colors[energyType] || "gray"; // Color por defecto si no está definido
  // }

  // cargarDatos();
