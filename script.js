
        // Simple JavaScript for interactions
        document.getElementById('depositBtn').addEventListener('click', function() {
            alert('Deposit functionality would go here');
        });

        document.getElementById('withdrawBtn').addEventListener('click', function() {
            alert('Withdrawal functionality would go here');
        });

        document.getElementById('searchBtn').addEventListener('click', function() {
            const from = document.getElementById('fromInput').value;
            const to = document.getElementById('toInput').value;
            const date = document.getElementById('dateInput').value;
            const type = document.getElementById('tripType').value;
            const cls = document.getElementById('tripClass').value;
            
            if (!from || !to || !date) {
                alert('Please fill in all fields');
                return;
            }
            
            alert(`Searching for ${type} (${cls}) from ${from} to ${to} on ${date}`);
        });

        document.getElementById('sendBtn').addEventListener('click', function() {
            alert('Send money functionality would go here');
        });

        document.getElementById('requestBtn').addEventListener('click', function() {
            alert('Request money functionality would go here');
        });

        // Set today's date as default for the date input
        document.getElementById('dateInput').valueAsDate = new Date();

        // Notification toggle functionality
        const notificationBtn = document.getElementById('notificationBtn');
        const notificationDropdown = document.getElementById('notificationDropdown');

        notificationBtn.addEventListener('click', function() {
            notificationDropdown.classList.toggle('active');
        });

        // Close notification dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!notificationBtn.contains(event.target) && !notificationDropdown.contains(event.target)) {
                notificationDropdown.classList.remove('active');
            }
        });