// Define the async function to fetch and display user data
        async function fetchUserData() {
            const apiUrl = 'https://jsonplaceholder.typicode.com/users';
            const dataContainer = document.getElementById('api-data');

            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const users = await response.json();
                dataContainer.innerHTML = '';
                const userList = document.createElement('ul');

                users.forEach(user => {
                    const listItem = document.createElement('li');
                    listItem.textContent = user.name;
                    userList.appendChild(listItem);
                });

                dataContainer.appendChild(userList);

            } catch (error) {
                console.error('Error fetching user data:', error);
                dataContainer.innerHTML = 'Failed to load user data.';
            }
        }

        // Run the function after DOM is loaded
        document.addEventListener('DOMContentLoaded', fetchUserData);
