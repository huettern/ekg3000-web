

function ddDevicesSelected(text) {
    var btn = document.getElementById("bDevices"); 
    // btn.value(text);
    console.log(btn);
    $('#bDevicesText').text(text);
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
            console.log(response);
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

    $("#btLoad").click(function() {
        console.log("btn");
    });

    $("#ddDevices").click(function() { 
        var sDevName = $("#ddDevices option:selected").text();
        console.log(sDevName);
        var sDevID = $("#ddDevices option:selected").val();
        console.log(sDevID);

        var url = 'http://noahhome.selfhost.bz:8080/ekg3000/getfilelist.php' + '?dev_id=' + sDevID;

        $.ajax({
            url: 'proxy.php',
            type: 'GET',
            data: {
                address: url
            },
            success: function(response) {
                // response now contains full HTML of google.com
                console.log(response);
                var res = JSON.parse(response);
            
                var list = document.getElementById("ddFiles"); 

                for (i = 0; i < res.length; i++) {
                    var opt = res[i].name;   
                    $("#ddFiles").append($('<option>', {
                        value: res[i].id,
                        text: res[i].time + '  |  ' + (res[i].file).split("/").pop() 
                    }))
                }
            }
        });
    });

});