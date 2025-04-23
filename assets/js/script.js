$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

$(function(){
    $('.clickable-image').on('click', function() {
        var imgSrc = $(this).attr('src');
        $('#modalImage').attr('src', imgSrc);
        $('#imageModal').modal('show');
    });
});

$(document).on('shown.bs.collapse', function (e) {
    if ($(e.target).attr('id') === 'id-iniciativa') {
       $('.toast').toast('show');
    }
 });

 $(document).ready(function() {
    $('#contatomodal .modal-footer .btn.btn-primary').click(function() {
        var btn = $(this);

        btn.html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...');
        btn.prop('disabled', true);

        setTimeout(function() {
            btn.html('Enviar');
            btn.prop('disabled', false);
        }, 7000);
    });
 });

 $(function(){
    $('[data-toggle="popover"]').popover({
      container: 'body'
    });
  });

$(function() {
    $('#pdfUpload').on('change', function() {
        var file = this.files[0];
        if (file && file.type === 'application/pdf') {
            var progressBar = $('#uploadProgress');
            progressBar.css('width', '0%');
            progressBar.attr('aria-valuenow', 0);
            progressBar.text('0%');

            var progress = 0;
            var interval = setInterval(function() {
                progress = progress + 10;
                progressBar.css('width', progress + '%');
                progressBar.attr('aria-valuenow', progress);
                progressBar.text(progress + '%');
                if(progress >= 100) {
                    clearInterval(interval);
                }
            }, 200);
        } else {
            alert('Por favor, selecione um arquivo PDF válido.');
            $(this).val('');

        }
    });
});