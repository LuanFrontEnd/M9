$(document).ready(function() {
    $('#adicionar-tarefa').click(function() {
        var tarefa = $('#tarefa-input').val();
        if (tarefa.trim() !== '') {
            $('#lista-tarefas').append('<li>' + tarefa + '<span class="delete-tarefa"></span></li>');
            $('#tarefa-input').val('');
            novoItem.hide().fadeIn();
        }
    });

    $('#lista-tarefas').on('click', '.delete-tarefa', function() {
        $(this).parent().remove();
    });

    $('#lista-tarefas').on('click', 'li', function(){
        $(this).toggleClass('riscado');
    })
});