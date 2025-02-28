document.getElementById('check-balance').addEventListener('click', async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Debes iniciar sesión primero');
      return;
    }
  
    try {
      const response = await fetch('https://backend-9wrj.onrender.com/check-balance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ email: document.getElementById('username').value })
      });
  
      if (response.ok) {
        const result = await response.json();
        alert(`Tu saldo actual es: $${result.balance}`);
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Error al obtener el saldo');
      }
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
      alert('No se pudo completar la solicitud');
    }
  });
  
  document.getElementById('withdraw').addEventListener('click', async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Debes iniciar sesión primero');
      return;
    }
  
    const amount = prompt('Ingresa la cantidad a retirar:');
    if (!amount || isNaN(amount)) {
      alert('Cantidad inválida');
      return;
    }
  
    try {
      const response = await fetch('https://backend-9wrj.onrender.com/withdraw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ 
          email: document.getElementById('username').value,
          amount: parseFloat(amount)
        })
      });
  
      if (response.ok) {
        const result = await response.json();
        alert(`Retiro exitoso. Tu nuevo saldo es: $${result.balance}`);
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Error al retirar fondos');
      }
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
      alert('No se pudo completar la solicitud');
    }
  });
  
  document.getElementById('deposit').addEventListener('click', async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Debes iniciar sesión primero');
      return;
    }
  
    const amount = prompt('Ingresa la cantidad a depositar:');
    if (!amount || isNaN(amount)) {
      alert('Cantidad inválida');
      return;
    }
  
    try {
      const response = await fetch('https://backend-9wrj.onrender.com/deposit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ 
          email: document.getElementById('username').value,
          amount: parseFloat(amount)
        })
      });
  
      if (response.ok) {
        const result = await response.json();
        alert(`Depósito exitoso. Tu nuevo saldo es: $${result.balance}`);
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Error al depositar fondos');
      }
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
      alert('No se pudo completar la solicitud');
    }
  });
