function ddDevicesSelected(text) {
    var btn = document.getElementById("bDevices");
    // btn.value(text);
    $('#bDevicesText').text(text);
}

function plot(jsonF) {
    /*    console.log(jsonF);
        console.log(jsonF.data);*/
    $('#chart').empty();
    // set up our data series
    var points = [];

    for (var i = 0; i < jsonF.nsamples; i++) {
        points.push({
            "x": i,
            "y": jsonF.data[i]
        });
    }

    console.log(points);
    // instantiate our graph!

    var graph = new Rickshaw.Graph({
        element: document.getElementById("chart"),
        height: 500,
        renderer: 'line',
        series: [{
            color: 'steelblue',
            data: points,
            // name: 'New York',
            strokeWidth: 1,
            opacity: 1
        }]
    });

    // var slider = new Rickshaw.Graph.RangeSlider.Preview({
    //     graph: graph,
    //     element: document.querySelector('#slider')
    // });
    var slider = new Rickshaw.Graph.RangeSlider({
        graph: graph,
        element: document.querySelector('#slider')
    });

    graph.render();

    var xAxis = new Rickshaw.Graph.Axis.Time({
        graph: graph
    });
    xAxis.render();
}

// function removegraph()
// {
//     $("#chart").remove() ;
// }

$(document).ready(function() {
    /* is executed after page is loaded */
    var url = 'http://noahhome.selfhost.bz:8080/ekg3000/getdevices.php';

    $.ajax({
        url: 'proxy.php',
        type: 'GET',
        data: {
            address: url
        },
        success: function(response) {
            // response now contains full HTML of google.com
            var res = JSON.parse(response);

            var list = document.getElementById("#ddDevices");

            for (i = 0; i < res.length; i++) {
                var opt = res[i].name;
                //  var sel = document.createElement("select");
                //li.setAttribute("id", "ddLi" + res[i].id);   
                $("#ddDevices").append($('<option>', {
                        value: res[i].id,
                        text: res[i].name
                    }))
                    // sel.setAttribute("class", "ddLi"); 
                    // sel.setAttribute("value", res[i].id)  
                    //var link = document.createElement("a");          
                    // var text = document.createTextNode(opt);
                    //link.appendChild(text);
                    //link.href = "#";
                    //li.appendChild(link);
                    // sel.appendChild(opt);
                    //list.appendChild(sel);
            }
        }
    });

    $("#ddDevices").change(function() {
        var sDevName = $("#ddDevices option:selected").text();
        var sDevID = $("#ddDevices option:selected").val();

        var url = 'http://noahhome.selfhost.bz:8080/ekg3000/getfilelist.php' + '?dev_id=' + sDevID;

        $.ajax({
            url: 'proxy.php',
            type: 'GET',
            data: {
                address: url
            },
            success: function(response) {
                // response now contains full HTML of google.com
                var res = JSON.parse(response);

                var list = document.getElementById("ddFiles");

                $('#ddFiles').empty().append('<option disabled selected value>Select..</option>');

                for (i = 0; i < res.length; i++) {
                    var opt = res[i].name;
                    $("#ddFiles").append($('<option>', {
                        value: res[i].id,
                        // text: res[i].time + '  |  ' + (res[i].file).split("/").pop() 
                        text: res[i].time
                    }));
                }
            }
        });
    });


    $("#btLoad").click(function() {
        console.log("btn");
        var sFileID = $("#ddFiles option:selected").val();
        var url = 'http://noahhome.selfhost.bz:8080/ekg3000/getfile.php' + '?file_id=' + sFileID;

        $.ajax({
            url: 'proxy.php',
            type: 'GET',
            data: {
                address: url
            },

            success: function(response) {
                // response now contains full HTML of google.com
                var jsonFile = JSON.parse(response);
                plot(jsonFile);
            }
        });

    });

});
