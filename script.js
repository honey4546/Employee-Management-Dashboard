document.querySelector('.add-employee').addEventListener('click', function() {
    document.getElementById('employeeForm').style.display = 'block';
    document.body.classList.add('blur-active');
    document.querySelector('.content').classList.add('blur-background');
    document.querySelector('.Header').classList.add('blur-background');
});

document.getElementById('cancelButton').addEventListener('click', function() {
    document.getElementById('employeeForm').style.display = 'none';
    document.body.classList.remove('blur-active');
    document.querySelector('.content').classList.remove('blur-background');
    document.querySelector('.Header').classList.remove('blur-background');
});


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('employeeFormContent');
    const cancelButton = document.getElementById('cancelButton');
    
    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        // Get form values
        var employeeName = document.getElementById('employeeName').value;
        var employeeEmail = document.getElementById('employeeEmail').value;
        var employeeContact = document.getElementById('employeeContact').value;
        var employeeGender = document.getElementById('employeeGender').value.toLowerCase();
        var employeeDept = document.getElementById('employeeDept').value;
        var employeeSalary = document.getElementById('employeeSalary').value;


        var namePattern = /^[A-Za-z\s]+$/;
        var mobilePattern = /^[0-9]{10}$/;
        var salaryPattern = /^\d+(\.\d{1,2})?$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                   
        if (!namePattern.test(employeeName)) {
            alert("Employee name should only contain letters and spaces.");
            event.preventDefault(); // Prevent form submission
            return;
        }
    
        if (!salaryPattern.test(employeeSalary)) {
            alert("Employee salary should only contain digits and one decimal at most.");
            // event.preventDefault(); // Prevent form submission
            return;
        }
    
        if(!emailPattern.test(employeeEmail)){
            alert("Please enter valid email address");
            return;
        }
    
        if (employeeSalary <= 0 || !/^\d+$/.test(employeeSalary)) {
            alert("Salary must be a positive number.");
            event.preventDefault(); // Prevent form submission
            return;
        }
    
        if (!mobilePattern.test(employeeContact)) {
            alert("Mobile number must be a 10-digit number.");
            event.preventDefault(); // Prevent form submission
            return;
        }


        let avatarUrl = employeeGender === 'male' 
        ? 'https://avatar.iran.liara.run/public/boy' 
        : 'https://avatar.iran.liara.run/public/girl';

        // Create employee object
        const employee = {
            name: employeeName,
            email: employeeEmail,
            contact: employeeContact,
            gender: employeeGender,
            salary: employeeSalary,
            avatarUrl: avatarUrl
        };

        // Store data in localStorage for the specific department
        let departmentData = JSON.parse(localStorage.getItem(employeeDept)) || [];
        departmentData.push(employee);
        localStorage.setItem(employeeDept, JSON.stringify(departmentData));

        // Optionally, reset the form
        alert("Employee added successfully!");
        form.reset();
        document.getElementById('employeeForm').style.display = 'none';
        document.body.classList.remove('blur-active');
        document.querySelector('.content').classList.remove('blur-background');
        document.querySelector('.Header').classList.remove('blur-background');
        
    });

    cancelButton.addEventListener('click', function () {
        form.reset(); // Clear the form
        // Optionally hide the form if you have that functionality
        document.getElementById('employeeForm').style.display = 'none';
        document.body.classList.remove('blur-active');
        document.querySelector('.content').classList.remove('blur-background');
        document.querySelector('.Header').classList.remove('blur-background');
    });

   
    
});
