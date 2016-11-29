/**
 * Created by User on 28-11-2016.
 */
$(document).ready(function() {
    var table = $('#qatable').DataTable( {
        rowReorder: {
            selector: 'td:nth-child(2)'
        },
        responsive: true
    } );
} );