// var jsonFile = 0;


function ddDevicesSelected(text) {
    var btn = document.getElementById("bDevices");
    // btn.value(text);
    $('#bDevicesText').text(text);
}

function plot(jsonF) {
    console.log(jsonF);
    console.log(jsonF.ekg.data);

      var chart = c3.generate({
               size: {
                 height: 400
               },
               bindto: '#chart',
               data: {
                columns: [jsonF.ekg.data]
               },

               zoom: {
                 enabled: true,
               }
             });

}

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
                        text: res[i].time + '  |  ' + (res[i].file).split("/").pop()
                    }));
                }
            }
        });
    });


    $("#btLoad").click(function() {
        var sFileID = $("#ddFiles option:selected").val();
        var url = 'http://noahhome.selfhost.bz:8080/ekg3000/getfile.php' + '?file_id=' + sFileID;

        $.ajax({
            url: 'proxy.php',
            type: 'GET',
            data: {
                address: url
            },
            //         dataType: 'json; charset=utf-8',
            success: function(response) {
                // response now contains full HTML of google.com
                jsonFile = JSON.parse(response);
                plot(jsonFile);
            }
        });   

    });
});
