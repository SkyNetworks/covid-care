//Date
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (date) {
      console.log(date.AN);

      date = `
          <td> ${date.UT.meta.date}</td>
          `;
      $("#date").html(date);
    });
  }
});

//data1 Start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data) {
      console.log(data.AN);

      data = `
          <td> AndhraPradesh</td>
            <td> ${data.AP.meta.population}</td>
          <td> ${data.AP.delta7.confirmed}</td>
           <td>${data.AP.delta7.vaccinated1}</td>
           <td>${data.AP.delta7.vaccinated2}</td>
            <td>${data.AP.delta7.recovered}</td>
            <td>${data.AP.delta7.tested}</td>
          `;
      $("#data").html(data);
    });
  }
});
//Data 1 end
//data2 start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data2) {
      console.log(data2.AP);

      data2 = `
          <td> Arunachal Pradesh</td>
          <td> ${data2.AR.meta.population}</td>
          <td> ${data2.AR.delta7.confirmed}</td>
           <td>${data2.AR.delta7.vaccinated1}</td>
           <td>${data2.AR.delta7.vaccinated2}</td>
            <td>${data2.AR.delta7.recovered}</td>
            <td>${data2.AR.delta7.tested}</td>
          `;
      $("#data2").html(data2);
    });
  }
});
//data 2 end
//data 3 start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data3) {
      console.log(data3.US);

      data3 = `
           <td> Assam </td>
            <td> ${data3.AS.meta.population}</td>
          <td> ${data3.AS.delta7.confirmed}</td>
           <td>${data3.AS.delta7.vaccinated1}</td>
           <td>${data3.AS.delta7.vaccinated2}</td>
            <td>${data3.AS.delta7.recovered}</td>
            <td>${data3.AS.delta7.tested}</td>
          `;
      $("#data3").html(data3);
    });
  }
});
//data 3 end
//data 4 start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data4) {
      console.log(data4.UT);

      data4 = `
           <td> Bihar</td>
            <td> ${data4.BR.meta.population}</td>
          <td> ${data4.BR.delta7.confirmed}</td>
           <td>${data4.BR.delta7.vaccinated1}</td>
           <td>${data4.BR.delta7.vaccinated2}</td>
            <td>${data4.BR.delta7.recovered}</td>
            <td>${data4.BR.delta7.tested}</td>
          `;
      $("#data4").html(data4);
    });
  }
});
//data 4 end

//data 5 start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data5) {
      console.log(data5.UT);

      data5 = `
         <td>Chhattisgarh</td>
            <td> ${data5.CH.meta.population}</td>
          <td> ${data5.CH.delta7.confirmed}</td>
           <td>${data5.CH.delta7.vaccinated1}</td>
           <td>${data5.CH.delta7.vaccinated2}</td>
            <td>${data5.CH.delta7.recovered}</td>
            <td>${data5.CH.delta7.tested}</td>
          `;
      $("#data5").html(data5);
    });
  }
});
//data 5end
//data 6 start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data6) {
      console.log(data6.UT);

      data6 = `
          <td>Goa</td>
            <td> ${data6.GA.meta.population}</td>
          <td> ${data6.GA.delta7.confirmed}</td>
           <td>${data6.GA.delta7.vaccinated1}</td>
           <td>${data6.GA.delta7.vaccinated2}</td>
            <td>${data6.GA.delta7.recovered}</td>
            <td>${data6.GA.delta7.tested}</td>
          `;
      $("#data6").html(data6);
    });
  }
});
//data 6 end
//data 7start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data7) {
      console.log(data7.UT);

      data7 = `
           <td> Gujarat</td>
             <td> ${data7.GJ.meta.population}</td>
          <td> ${data7.GJ.delta7.confirmed}</td>
           <td>${data7.GJ.delta7.vaccinated1}</td>
           <td>${data7.GJ.delta7.vaccinated2}</td>
            <td>${data7.GJ.delta7.recovered}</td>
            <td>${data7.GJ.delta7.tested}</td>
          `;
      $("#data7").html(data7);
    });
  }
});
//data7 end
//data start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data8) {
      console.log(data8.UT);

      data8 = `
             <td> Haryana</td>
                <td> ${data8.HR.meta.population}</td>
          <td> ${data8.HR.delta7.confirmed}</td>
           <td>${data8.HR.delta7.vaccinated1}</td>
           <td>${data8.HR.delta7.vaccinated2}</td>
            <td>${data8.HR.delta7.recovered}</td>
            <td>${data8.HR.delta7.tested}</td>
          `;
      $("#data8").html(data8);
    });
  }
});
//data 8 end
//data start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data9) {
      console.log(data9.UT);

      data9 = `
          <td> Himachal Pradesh </td>
           <td> ${data9.HP.meta.population}</td>
          <td> ${data9.HP.delta7.confirmed}</td>
           <td>${data9.HP.delta7.vaccinated1}</td>
           <td>${data9.HP.delta7.vaccinated2}</td>
            <td>${data9.HP.delta7.recovered}</td>
            <td>${data9.HP.delta7.tested}</td>
          `;
      $("#data9").html(data9);
    });
  }
});
//data 9 end
//data start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data10) {
      console.log(data10.UT);

      data10 = `
          <td>Jharkhand </td>
          <td> ${data10.JH.meta.population}</td>
          <td> ${data10.JH.delta7.confirmed}</td>
           <td>${data10.JH.delta7.vaccinated1}</td>
           <td>${data10.JH.delta7.vaccinated2}</td>
            <td>${data10.JH.delta7.recovered}</td>
            <td>${data10.JH.delta7.tested}</td>
          `;
      $("#data10").html(data10);
    });
  }
});
//data 10 end
//data start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data11) {
      console.log(data11.UT);

      data11 = `
          <td> Karnataka</td>
          <td> ${data11.KA.meta.population}</td>
          <td> ${data11.KA.delta7.confirmed}</td>
           <td>${data11.KA.delta7.vaccinated1}</td>
           <td>${data11.KA.delta7.vaccinated2}</td>
            <td>${data11.KA.delta7.recovered}</td>
            <td>${data11.KA.delta7.tested}</td>
          `;
      $("#data11").html(data11);
    });
  }
});
//data 11 end
//data start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data12) {
      console.log(data12.UT);

      data12 = `
           <td>Kerala </td>
            <td> ${data12.KL.meta.population}</td>
          <td> ${data12.KL.delta7.confirmed}</td>
           <td>${data12.KL.delta7.vaccinated1}</td>
           <td>${data12.KL.delta7.vaccinated2}</td>
            <td>${data12.KL.delta7.recovered}</td>
            <td>${data12.KL.delta7.tested}</td>
          `;
      $("#data12").html(data12);
    });
  }
});
//data 12 end
//data start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data13) {
      console.log(data13.UT);

      data13 = `
           <td>Madhya Pradesh </td>
            <td> ${data13.MP.meta.population}</td>
          <td> ${data13.MP.delta7.confirmed}</td>
           <td>${data13.MP.delta7.vaccinated1}</td>
           <td>${data13.MP.delta7.vaccinated2}</td>
            <td>${data13.MP.delta7.recovered}</td>
            <td>${data13.MP.delta7.tested}</td>
          `;
      $("#data13").html(data13);
    });
  }
});
//data 13 end
//data start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data14) {
      console.log(data14.UT);

      data14 = `
           <td> Maharashtra</td>
            <td> ${data14.MH.meta.population}</td>
          <td> ${data14.MH.delta7.confirmed}</td>
           <td>${data14.MH.delta7.vaccinated1}</td>
           <td>${data14.MH.delta7.vaccinated2}</td>
            <td>${data14.MH.delta7.recovered}</td>
            <td>${data14.MH.delta7.tested}</td>
          `;
      $("#data14").html(data14);
    });
  }
});
//data 14 end
//data start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data15) {
      console.log(data15.UT);

      data15 = `
           <td>Manipur </td>
            <td> ${data15.MN.meta.population}</td>
          <td> ${data15.MN.delta7.confirmed}</td>
           <td>${data15.MN.delta7.vaccinated1}</td>
           <td>${data15.MN.delta7.vaccinated2}</td>
            <td>${data15.MN.delta7.recovered}</td>
            <td>${data15.MN.delta7.tested}</td>
          `;
      $("#data15").html(data15);
    });
  }
});
//data 15 end
//data start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data16) {
      console.log(data16.UT);

      data16 = `
           <td>Meghalaya</td>
            <td> ${data16.ML.meta.population}</td>
          <td> ${data16.ML.delta7.confirmed}</td>
           <td>${data16.ML.delta7.vaccinated1}</td>
           <td>${data16.ML.delta7.vaccinated2}</td>
            <td>${data16.ML.delta7.recovered}</td>
            <td>${data16.ML.delta7.tested}</td>
          `;
      $("#data16").html(data16);
    });
  }
});
//data 16 end
//data start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data17) {
      console.log(data17.UT);

      data17 = `
          <td> Mizoram</td>
          <td> ${data17.MZ.meta.population}</td>
          <td> ${data17.MZ.delta7.confirmed}</td>
           <td>${data17.MZ.delta7.vaccinated1}</td>
           <td>${data17.MZ.delta7.vaccinated2}</td>
            <td>${data17.MZ.delta7.recovered}</td>
            <td>${data17.MZ.delta7.tested}</td>
          `;
      $("#data17").html(data17);
    });
  }
});
//data 17 end
//data start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data18) {
      console.log(data18.NL);

      data18 = `
         <td> Nagaland</td>
         <td> ${data18.NL.meta.population}</td>
          <td> ${data18.NL.delta7.confirmed}</td>
           <td>${data18.NL.delta7.vaccinated1}</td>
           <td>${data18.NL.delta7.vaccinated2}</td>
            <td>${data18.NL.delta7.recovered}</td>
            <td>${data18.NL.delta7.tested}</td>
          `;
      $("#data18").html(data18);
    });
  }
});
//data 18 end
//data start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data19) {
      console.log(data19.UT);

      data19 = `
          <td> Odisha</td>
          <td> ${data19.OR.meta.population}</td>
          <td> ${data19.OR.delta7.confirmed}</td>
           <td>${data19.OR.delta7.vaccinated1}</td>
           <td>${data19.OR.delta7.vaccinated2}</td>
            <td>${data19.OR.delta7.recovered}</td>
            <td>${data19.OR.delta7.tested}</td>
          `;
      $("#data19").html(data19);
    });
  }
});
//data 19 end
//data start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data20) {
      console.log(data20.PB);

      data20 = `
          <td> Punjab</td>
          <td> ${data20.PB.meta.population}</td>
          <td> ${data20.PB.delta7.confirmed}</td>
           <td>${data20.PB.delta7.vaccinated1}</td>
           <td>${data20.PB.delta7.vaccinated2}</td>
            <td>${data20.PB.delta7.recovered}</td>
            <td>${data20.PB.delta7.tested}</td>
          `;
      $("#data20").html(data20);
    });
  }
});
//data 20 end
//data start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data21) {
      console.log(data21.RJ);

      data21 = `
          <td> Rajasthan </td>
          <td> ${data21.RJ.meta.population}</td>
          <td> ${data21.RJ.delta7.confirmed}</td>
           <td>${data21.RJ.delta7.vaccinated1}</td>
           <td>${data21.RJ.delta7.vaccinated2}</td>
            <td>${data21.RJ.delta7.recovered}</td>
            <td>${data21.RJ.delta7.tested}</td>
          `;
      $("#data21").html(data21);
    });
  }
});
//data 21 end
//data start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data22) {
      console.log(data22.UT);

      data22 = `
          <td> Sikkim </td>
            <td> ${data22.SK.meta.population}</td>
          <td> ${data22.SK.delta7.confirmed}</td>
           <td>${data22.SK.delta7.vaccinated1}</td>
           <td>${data22.SK.delta7.vaccinated2}</td>
            <td>${data22.SK.delta7.recovered}</td>
            <td>${data22.SK.delta7.tested}</td>
          `;
      $("#data22").html(data22);
    });
  }
});
//data 22 end
//data start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data23) {
      console.log(data23.UT);

      data23 = `
            <td> Tamil Nadu </td>
              <td> ${data23.TN.meta.population}</td>
          <td> ${data23.TN.delta7.confirmed}</td>
           <td>${data23.TN.delta7.vaccinated1}</td>
           <td>${data23.TN.delta7.vaccinated2}</td>
            <td>${data23.TN.delta7.recovered}</td>
            <td>${data23.TN.delta7.tested}</td>
          `;
      $("#data23").html(data23);
    });
  }
});
//data 23 end
//data start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data24) {
      console.log(data24.UT);

      data24 = `
          <td> Telangana</td>
            <td> ${data24.TG.meta.population}</td>
          <td> ${data24.TG.delta7.confirmed}</td>
           <td>${data24.TG.delta7.vaccinated1}</td>
           <td>${data24.TG.delta7.vaccinated2}</td>
            <td>${data24.TG.delta7.recovered}</td>
            <td>${data24.TG.delta7.tested}</td>
          `;
      $("#data24").html(data24);
    });
  }
});
//data 24 end
//data start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data25) {
      console.log(data25.UT);

      data25 = `
           <td> Tripura</td>
             <td> ${data25.TR.meta.population}</td>
          <td> ${data25.TR.delta7.confirmed}</td>
           <td>${data25.TR.delta7.vaccinated1}</td>
           <td>${data25.TR.delta7.vaccinated2}</td>
            <td>${data25.TR.delta7.recovered}</td>
            <td>${data25.TR.delta7.tested}</td>
          `;
      $("#data25").html(data25);
    });
  }
});
//data 25 end
//data start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data26) {
      console.log(data26.UT);

      data26 = `
          <td> Uttarakhand</td>
            <td> ${data26.UT.meta.population}</td>
          <td> ${data26.UT.delta7.confirmed}</td>
           <td>${data26.UT.delta7.vaccinated1}</td>
           <td>${data26.UT.delta7.vaccinated2}</td>
            <td>${data26.UT.delta7.recovered}</td>
            <td>${data26.UT.delta7.tested}</td>
          `;
      $("#data26").html(data26);
    });
  }
});
//data 26 end
//data start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data27) {
      console.log(data27.UT);

      data27 = `
           <td> Uttar Pradesh</td>
             <td> ${data27.UP.meta.population}</td>
          <td> ${data27.UP.delta7.confirmed}</td>
           <td>${data27.UP.delta7.vaccinated1}</td>
           <td>${data27.UP.delta7.vaccinated2}</td>
            <td>${data27.UP.delta7.recovered}</td>
            <td>${data27.UP.delta7.tested}</td>
          `;
      $("#data27").html(data27);
    });
  }
});
//data 27 end
//data start
$(document).ready(function () {
  init();

  function init() {
    var url = "https://data.covid19india.org/v4/min/data.min.json";
    $.get(url, function (data28) {
      console.log(data28.UT);

      data28 = `
         <td> West Bengal</td>
           <td> ${data28.WB.meta.population}</td>
          <td> ${data28.WB.delta7.confirmed}</td>
           <td>${data28.WB.delta7.vaccinated1}</td>
           <td>${data28.WB.delta7.vaccinated2}</td>
            <td>${data28.WB.delta7.recovered}</td>
            <td>${data28.WB.delta7.tested}</td>
          `;
      $("#data28").html(data28);
    });
  }
});
//data 28 end
