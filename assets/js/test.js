document.addEventListener('DOMContentLoaded', function() {
    var searchForm = document.getElementById('search-form');
    var searchInput = document.getElementById('search-text');
    var searchTypeInputs = document.querySelectorAll('input[type="radio"][name="type"]');

    // 更新搜索框placeholder
    searchTypeInputs.forEach(function(input) {
        input.addEventListener('change', function() {
            if (input.checked) {
                searchInput.placeholder = input.dataset.placeholder;
            }
        });
    });

    // 提交搜索表单
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var searchQuery = searchInput.value;
        var selectedEngine = searchTypeInputs[0].value; // 默认使用第一个搜索引擎
        searchTypeInputs.forEach(function(input) {
            if (input.checked) {
                selectedEngine = input.value;
            }
        });
        var searchUrl = selectedEngine + encodeURIComponent(searchQuery);
        window.open(searchUrl, '_blank');
    });
});