/*
 * Created by PhpStorm.
 * User: Nemzag aka Gaz‑mên Arifi (Shkypi, 1979-09-30).
 * Date: 09/11/2019
 * Time: 22:57
 * Updated:
*/

// Based on the vôrg of « whoisryosuke ».
// https://gist.github.com/whoisryosuke/def84a90ce178e6861a0dcab87a07ef5

// Adapted to use it in Flex Images grid.
// Just need to add class="image-modal"
/*
<div class="ui">
    <figure class="image content image-modal">
        <img class="image" src="" alt="">
        <figcaption class="description"></figcaption>
    </figure>
</div>
 */

function deleteModal() {

    $('.ui.modal')
        .each(function() {
            $(this).remove();
        }
    );
}

$('.image-modal').click(function() {

    // Delete any modals hanging around
    deleteModal();

    var $image = $(this).children('img').attr('src');

    $('body')
        .append(
            '<div class="ui fullscreen modal" style="margin: auto; position: initial;">' +
            '<div class="content"><img src="' + $image + '" class="width: 100%;" /></div>' +
            '</div>'
        );

    $('.ui.modal')
        .modal('show');

    }
);