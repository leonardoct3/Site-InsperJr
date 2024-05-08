document.addEventListener('DOMContentLoaded', function() {
    // Seletor para todos os botões de procedimento
    var procedimentoButtons = document.querySelectorAll('.procedimento-button');

    // Função para lidar com o clique em um botão de procedimento
    function handleProcedimentoClick(event) {
        var procedimentoId = event.target.dataset.procedimentoId;
        // Salve o ID do procedimento para análise na página de edição
        // Aqui você pode fazer uma requisição AJAX para enviar o ID para o servidor, por exemplo
        console.log('Procedimento clicado:', procedimentoId);
    }

    // Adicione um ouvinte de evento para cada botão de procedimento
    procedimentoButtons.forEach(function(button) {
        button.addEventListener('click', handleProcedimentoClick);
    });
});