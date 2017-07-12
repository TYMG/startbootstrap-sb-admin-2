$(function () {

    Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'paul-morris-area-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [
            { year: '2016 Q4', value: 25700 },
            { year: '2017 Q1', value: 25700, Milestone: 'Joined MyServicer' },
            { year: '2017 Q2', value: 25250 }
        ],
        // The name of the data record attribute that contains x-values.
        xkey: 'year',
        // A list of names of data record attributes that contain y-values.
        ykeys: ['value'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Value'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });
    /*   Morris.Line({
       element: 'paul-morris-area-chart',
       data: [
           { period:'2016 Q4', amount:30000 },
           { period:'2017 Q1', amount:30000 },
           { period:'2017 Q2', amount:29320 },
       ],
       xkey: 'period',
       ykeys: ['amount'],
       labels: ['Amount'],
       pointSize: 2,
       hideHover: 'auto',
       resize: true
   });*/

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2016',
            a: 100,
            b: 90
        }, {
            y: '2017',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
