export const formatData = (data) => {
    let finalData = {
      labels: [],
      datasets: [
        {
          label: "Price",
          data: [],
          backgroundColor: "rgb(195, 245, 60, 0.8)",
          borderColor: "rgba(195, 245, 60, 0.4)",
          fill: false
        }
      ]
    };
  
    let dates = data.map((val) => {
      const ts = val[0];
      let date = new Date(ts * 1000);
      // let day = date.getDate();
      // let month = date.getMonth() + 1;
      // let year = date.getFullYear();
      let time = date.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true});
      let final = `${time}`;
      // let final = `${month}-${day}-${year} ${time}`;
      
      return final;
    });
  
    let priceArr = data.map((val) => {
      return val[4];
    });
  
    priceArr.reverse();
    dates.reverse();
    finalData.labels = dates;
    finalData.datasets[0].data = priceArr;

    console.log(finalData);

    return finalData;
  };
  