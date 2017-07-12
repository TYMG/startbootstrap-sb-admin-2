$(function () {

    Morris.Area({
        element: 'rasheeda-morris-area-chart',
             data: [
            { year: '2010 Q4', value: 40000 },
            { year: '2011 Q1', value: 38900 },
            { year: '2011 Q2', value: 37009 },
            { year: '2011 Q3', value: 35329 },
            { year: '2011 Q4', value: 32405 },
            { year: '2012 Q1', value: 30000 },
            { year: '2012 Q2', value: 25700 },
            { year: '2012 Q3', value: 25800 },
            { year: '2012 Q4', value: 20000 },
            { year: '2013 Q1', value: 19800 },
            { year: '2013 Q2', value: 19900 },
            { year: '2013 Q3', value: 17000 },
            { year: '2013 Q4', value: 15403 },
            { year: '2014 Q1', value: 12341 },
            { year: '2014 Q2', value: 12000 },
            { year: '2014 Q3', value: 12900 },
            { year: '2014 Q4', value: 11900 },
            { year: '2015 Q1', value: 11900 },
            { year: '2015 Q2', value: 11000 },
            { year: '2015 Q3', value: 11050 },
            { year: '2015 Q4', value: 11000 },
            { year: '2016 Q1', value: 10403 },
            { year: '2016 Q2', value: 10341 },
            { year: '2016 Q3', value: 10230 },
            { year: '2016 Q4', value: 10000 },
            { year: '2017 Q1', value: 9230 },
            { year: '2017 Q2', value: 5203 }
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

    /*Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'paul-morris-area-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [
            { year: '2008', value: 20 },
            { year: '2009', value: 10 },
            { year: '2010', value: 5 },
            { year: '2011', value: 5 },
            { year: '2012', value: 20 }
        ],
        // The name of the data record attribute that contains x-values.
        xkey: 'year',
        // A list of names of data record attributes that contain y-values.
        ykeys: ['value'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Value']
    });*/
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
