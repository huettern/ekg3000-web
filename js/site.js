/**
 * site.js
 *
 * Functions for the website EKG3000
 *
 * @author     Stocker Jan
 * @Date       01.12.2016
 * @copyright  FHNW 2016 (EKG3000)
 * @version    1.0
 */


/**
 * Global Variables
 */
var jsonFile, graph, slider;
var offset = 0,
    showbutton = 0;

/**
 * is executed after page is loaded
 */
$(document).ready(function() {
    /*  */
    $("#btPrev").hide();
    $("#btNext").hide();

    ajaxDevice();
    setInterval(ajaxDevice, 3000);

    $("#ddDevices").change(function() {
        ajaxFile();
        setInterval(ajaxFile, 3000);
    });

    $("#btLoad").click(function() {
        offset = 0;
        var sFileID = $("#ddFiles option:selected").val();
        var url = 'http://noahhome.selfhost.bz:4280/getfile.php' + '?file_id=' + sFileID;

        $.ajax({
            url: 'proxy.php',
            type: 'GET',
            data: {
                address: url
            },

            success: function(response) {
                jsonFile = JSON.parse(response);
                jsonFile.data = jsonFile.data.filter(Boolean);
                jsonFile.nsamples = jsonFile.data.length;
                plot(jsonFile);
            }
        });

    });

    $("#btNext").click(function() {
        offset++;
        plot(jsonFile);
    });


    $("#btPrev").click(function() {
        offset--;
        plot(jsonFile);
    });

    $("#timeRange").on('keyup', function(e) {
        if (e.keyCode == 13) {
            plot(jsonFile);
        }

    });


    /*function ddDevicesSelected(text) {
        var btn = document.getElementById("bDevices");
        $('#bDevicesText').text(text);
    }*/

    /**
     * Plots new graph
     *
     * @param      {json}  jsonF   Json object
     */
    function plot(jsonF) {
        // delete the graph datas
        $('#chart').empty();
        $('#slider').empty();

        // set up buttons
        $("#btPrev").show();
        $("#btNext").show();

        // set up our data series
        var points = [];
        var ekgTime = 1 / jsonF.samplerate

        // split data in ??sec parts. Default 10sec
        if (document.getElementById("timeRange").value == 0) {
            t = 10;
        } else {
            t = document.getElementById("timeRange").value;
        }

        var off = t * offset * jsonF.samplerate;
        var i = (off == 0 ? 1 : 0);
        for (; i < (t * jsonF.samplerate); i++) {
            if ((i + off) == jsonF.nsamples) {
                points.push({
                    "x": (i + off) * ekgTime,
                    "y": null
                });
            } else {
                points.push({
                    "x": (i + off) * ekgTime,
                    "y": jsonF.data[i + off]
                });
            }
        }

        // enable and disable next & prev buttons
        if (off <= 0) {
            if ((t * (offset + 1) * jsonF.samplerate) >= jsonF.nsamples) {
                document.getElementById("btNext").disabled = true;
                document.getElementById("btPrev").disabled = true;
            } else {
                document.getElementById("btNext").disabled = false;
                document.getElementById("btPrev").disabled = true;
            }
        } else {
            if ((t * (offset + 1) * jsonF.samplerate) >= jsonF.nsamples) {
                document.getElementById("btNext").disabled = true;
                document.getElementById("btPrev").disabled = false;
            } else {
                document.getElementById("btNext").disabled = false;
                document.getElementById("btPrev").disabled = false;
            }
        }

        // instantiate our graph!
        graph = new Rickshaw.Graph({
            element: document.getElementById("chart"),
            renderer: 'line',
            min: Math.min.apply(null, jsonF.data),
            max: Math.max.apply(null, jsonF.data),
            series: [{
                color: 'steelblue',
                data: points,
                strokeWidth: 1,
                opacity: 1
            }]
        });

        slider = new Rickshaw.Graph.RangeSlider.Preview({
            graph: graph,
            element: document.querySelector('#slider')
        });
        // var slider = new Rickshaw.Graph.RangeSlider({
        //     graph: graph,
        //     element: document.querySelector('#slider')
        // });

        graph.render();

        var xAxis = new Rickshaw.Graph.Axis.Time({
            graph: graph
        });
        xAxis.render();

        var yAxis = new Rickshaw.Graph.Axis.Y({
            graph: graph,
        });
        yAxis.render();
    }

    /**
     * Ajax request to the server and load devices into dropdown
     */
    function ajaxDevice() {
        var url = 'http://noahhome.selfhost.bz:4280/getdevices.php';

        $.ajax({
            url: 'proxy.php',
            type: 'GET',
            data: {
                address: url
            },
            success: function(response) {
                var res = JSON.parse(response);

                var list = document.getElementById("#ddDevices");

                var e = ddDevices.selectedIndex;
                $('#ddDevices').empty().append('<option disabled selected value> Device Select.. </option>');

                for (i = 0; i < res.length; i++) {
                    var opt = res[i].name;
                    $("#ddDevices").append($('<option>', {
                        value: res[i].id,
                        text: res[i].name
                    }))
                }

                ddDevices.selectedIndex = e;
            }
        });
    }

    /**
     * Ajax request to the server and load files from the device into dropdown
     */
    function ajaxFile() {
        var sDevName = $("#ddDevices option:selected").text();
        var sDevID = $("#ddDevices option:selected").val();

        var url = 'http://noahhome.selfhost.bz:4280/getfilelist.php' + '?dev_id=' + sDevID;

        $.ajax({
            url: 'proxy.php',
            type: 'GET',
            data: {
                address: url
            },
            success: function(response) {
                var res = JSON.parse(response);

                var list = document.getElementById("ddFiles");

                var e = ddFiles.selectedIndex;

                $('#ddFiles').empty().append('<option disabled selected value> File Select.. </option>');

                for (i = 0; i < res.length; i++) {
                    var opt = res[i].name;
                    $("#ddFiles").append($('<option>', {
                        value: res[i].id,
                        text: res[i].time
                    }));
                }

                ddFiles.selectedIndex = e;
            }
        });
    }

    /**
     * resize the graph and slider while window size change
     */
    $(window).on('resize', function() {
        graph.configure({
            width: document.getElementById("chartContainer").offsetWidth
                // height: document.getElementById("chartContainer").offsetHeight
        });

        slider.configure({
            width: document.getElementById("sliderContainer").offsetWidth,
            height: document.getElementById("sliderContainer").offsetHeight
        });
        graph.render();
    });
});