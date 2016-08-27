
var tableId ;
(function ($) {
    $.fn.GetValues = function () {
        //this.html("helloooo !");
        //debugger;
        //tableId = $(this);
       // alert(tableId("id"));
       // alert($(tableId).children("tr").length);
      
       // obj.empty();
       
        BindAll();
                 $("#btnInsert").click(
                 function () {


                   
                     // $('#tblEmployees').append('<tr><td>test 2</td></tr>');
                     // $(this).id.('tr').length();
                   
                     var c1 = $(tableId).children("tr").length;
                     alert(c1);
                     var rowCount1 = $('#tblEmployees tr').length;
                     alert(rowCount1);
                     rowCount = rowCount1 + 1;
                     $(this).after('<tr><td><input type="text" id="txtName' + rowCount + '" value=""/></td><td><input type="text"  id="txtAge' + rowCount + '"  value=""/></td><td><input type="text" id="txtId' + rowCount + '" value=""/></td><td><input id=btnDelete' + rowCount + ' data-id="' + rowCount + '" type="button" value="delete" /></td><td><input id="btnAdd" onclick="SetAddMethodOnButtonClick()"  type="button" value="Add"  data-id="' + rowCount + '" />    <td></tr>');
                 }
        );

                 //BuildTable(1, 1, this);

        // alert('1111');
        //$.ajax({
        //    url: "/api/values",
        //    //data: { id: 1 },
        //    type: "GET",
        //    success: function (data) {
        //        return this.append('Hello  !');
        //        for (var iCount = 0; iCount < data.length; iCount++) {
        //            var id = "btnDelete" + iCount;
        //            BuildTable(iCount, data);
        //            BindMethods(iCount);
        //        }
        //    },
        //    error: function (xhr, status, error) {
        //        alert("Plugin hello 111");
        //        alert(error);
        //    }
        //})
    }

    var BindAll = function () {
        $.ajax({
            url: "/api/values",
            //data: { id: 1 },
            type: "GET",
            success: function (data) {
                alert(data);
                for (var iCount = 0; iCount < data.length; iCount++) {
                    var id = "btnDelete" + iCount;
                    BuildTable(iCount, data);
                    BindMethods(iCount);



                }


            },
            error: function (xhr, status, error) {
                alert(error);
            }
        })
    };

}(jQuery));

function BuildTable(iCount, data) {
    // alert('');
    // $('#tblEmployees').empty();
    
   // alert(id);
    $('#tblEmployees tr:last').after('<tr><td><input type="text" id="txtName' + data[iCount].Id + '" value="' + data[iCount].Name + '"/></td><td><input type="text"  id="txtAge' + data[iCount].Id + '"  value="' + data[iCount].Age + '"/></td><td><input type="text" id="txtId' + data[iCount].Id + '" value="' + data[iCount].Id + '"/></td><td><input id=btnDelete' + iCount + ' data-id="' + data[iCount].Id + '" type="button" value="delete" /></td><td><input id=btnUpdate' + iCount + ' data-id="' + data[iCount].Id + '" type="button" value="Update" />    <td></tr>');

}



function CreateTable(noOfColumns, noOfRows, obj) {
    $(obj).add("table").add("tr").add("td").append("Dynamic Table111");
}

