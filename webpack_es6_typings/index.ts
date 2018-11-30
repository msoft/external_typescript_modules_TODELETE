// import { publicFunc as publicFuncFromModule1 } from "./module1";
// import 'jquery';

//import ImportedModules;
// import * as moduleInFile from './dependencies'; 



class Startup {

        public static main(): number {
    
        // publicFuncFromModule1();
        console.log("OK");


        var data = [
            [
                "Tiger Nixon",
                "System Architect",
                "Edinburgh",
                "5421",
                "2011/04/25",
                "$3,120"
            ],
            [
                "Garrett Winters",
                "Director",
                "Edinburgh",
                "8422",
                "2011/07/25",
                "$5,300"
            ]
        ]

        $(document).ready( function () {
            var datatable = $('#table_id').DataTable({
                data,
                // columns: [
                //     { data: 'name' },
                //     { data: 'position' },
                //     { data: 'salary' },
                //     { data: 'office' }
                // ]                                
            });
            //datatable.cells.cell()
        } );

        $(document).ready(function(){
            $('#clickme').click(function(){
                // console.log("OK OK");
                var datatable = $('#table_id').DataTable();
                datatable.cell(1, 1).data('new data').draw();
                // datatable
                //     .rows({ selected: true })
                //     .every(function (rowIdx, tableLoop, rowLoop) {
                //         datatable.cell(rowIdx,2).data("");
                //         datatable.cell(rowIdx, 3).data("");
                //     })
                //     .draw();
            });
        });     

        this.ReplaceCellContent();

        return 0;
    }

    private static ReplaceCellContent(): void
    {                

        

        // jQuery(document).ready(function(){
        //     $("button").click(function(){
        //         $("div").animate({left: '250px'});
        //         $("div").animate({bottom: '250px'}); 
        //         $("#cellToUpdate").text("er");
        //     });
        // });     
    }
}

Startup.main();
