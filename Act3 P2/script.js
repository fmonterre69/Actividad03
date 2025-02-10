
        const suggestions = ["Google", "Gmail", "GitHub", "Facebook", "Golang", "Youtube", "WhatsApp"];
        
        function highlightMatch(text, query) {
            const regex = new RegExp((${query}), "gi");
            return text.replace(regex, "<span class='highlight'>$1</span>");
        }
        
        function showSuggestions(value) {
            const list = document.getElementById("autocomplete");
            list.innerHTML = "";
            if (!value) {
                list.style.display = "none";
                return;
            }
            
            const filtered = suggestions.filter(s => s.toLowerCase().includes(value.toLowerCase()));
            if (filtered.length > 0) {
                list.style.display = "block";
                filtered.forEach(item => {
                    const div = document.createElement("div");
                    div.classList.add("autocomplete-item");
                    div.innerHTML = highlightMatch(item, value);
                    div.onclick = function() {
                        document.getElementById("search").value = item;
                        list.style.display = "none";
                    };
                    list.appendChild(div);
                });
            } else {
                list.style.display = "block";
                const noResultsDiv = document.createElement("div");
                noResultsDiv.classList.add("no-results");
                noResultsDiv.innerHTML = "No se encontraron resultados";
                list.appendChild(noResultsDiv);
            }
        }
    