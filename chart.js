//<script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"></script>
//the link will allows us to use the chart... we add it in the end after footer... maybe before the main js src so the variables can be defined

//<canvas id="myChart" width="400" height="400"></canvas>




function createChart () {
  const ctx = document.getElementById('myChart').getContext('2d');

  const goatNames = [];
  const goatVotes = [];

  for (let i = 0; i < Goat.all.length; i++) {
    goatNames.push(Goat.all[i].name);
    goatVotes.push(Goat.all[i].votes);
  }
  const chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',
  
      // The data for our dataset
      data: {
          labels: goatNames,
          datasets: [{
              label: '# of votes:',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              // barPercentage: 0.5,
              // barThickness: 2,
              data: goatVotes,
          }]
      },
  
      // Configuration options go here
      options: {}
  });
}

createChart(); //call this after the voting ends, after removing the eventListener