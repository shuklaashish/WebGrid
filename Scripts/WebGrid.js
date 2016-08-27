(function ($) {
    $.fn.GetValues = function () {
        //this.html("helloooo !");
        alert('ggggggg');
        CreateTable(1, 1, this);

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


}(jQuery));

function CreateTable(noOfColumns, noOfRows, obj) {
    $(obj).add("table").add("tr").add("td").append("Dynamic Table 11111");
}
