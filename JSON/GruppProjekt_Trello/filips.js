            let parentDiv = document.querySelector('.lists-container');
            let count = 0;
            let button = document.createElement('button');
            function makeList() {
                let div = document.createElement('div');
                div.classList.add('lists-container__list', count++);
                div.textContent = `id: ${count}`;
                let addItemButton = document.createElement('button');
                addItemButton.textContent = 'Add item';
                addItemButton.classList.add('lists-container__button');
                // till emmas kod: addItemButton.addEventListener('click' () => {});
                let a = document.createElement('a');
                a.href = '#';
                a.classList.add('boxclose', count);
                a.addEventListener('click', () => {
                    a.parentNode.remove(div);
                });
                parentDiv.appendChild(div);
                div.appendChild(addItemButton);
                div.appendChild(a);
                addList();
            }
        function addList() {
            button.classList.add('lists-container__add-list-button');
            button.textContent = 'Add new list';
            button.addEventListener('click', makeList);
            parentDiv.appendChild(button);
        }
        makeList();
        makeList();
        makeList();
