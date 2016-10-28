

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
        
            var list = document.getElementById("ddDevices"); 

            for (i = 0; i < res.length; i++) {
                var opt = res[i].name;  
                var li = document.createElement("li");
                li.setAttribute("id", "ddLi");   
                var link = document.createElement("a");          
                var text = document.createTextNode(opt);
                link.appendChild(text);
                link.href = "#";
                li.appendChild(link);
                list.appendChild(li);
            }
        }
    });

    $("#btLoad").click(function() {
        console.log("btn");
    });

    $("li").click(function() {
        var v = $(this).text();
        console.log(v);

        // console.log("Selected Option:"+val($(this).HTML()));

/*        var url = 'http://noahhome.selfhost.bz:8080/ekg3000/getfilelist.php';

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
                    var li = document.createElement("li");
                    var link = document.createElement("a");   
                    var oc = "ddDevicesSelected(\"" + opt + "\")";
                    link.setAttribute("onclick", oc);          
                    var text = document.createTextNode(opt);
                    link.appendChild(text);
                    link.href = "#";
                    li.appendChild(link);
                    list.appendChild(li);
                }
            }
        });*/
    });

});