document.getElementById('suggest-btn').addEventListener('click', () => {
  const days = parseInt(document.getElementById('days').value, 10);
  const budget = parseInt(document.getElementById('budget').value, 10);

  if (isNaN(days) || isNaN(budget)) {
    document.getElementById('result').textContent = 'Please enter valid inputs for days and budget.';
    return;
  }

  const places = [
    { name: 'Chennai', costPerDay: 2000 },
    { name: 'Madurai', costPerDay: 1500 },
    { name: 'Ooty', costPerDay: 2500 },
    { name: 'Kanyakumari', costPerDay: 1800 },
    { name: 'Theni', costPerDay: 1200 },
    { name: 'Thekkady', costPerDay: 2000 },
    { name: 'Kodaikanal', costPerDay: 2200 },
    { name: 'Coimbatore', costPerDay: 1500 },
    { name: 'Munnar', costPerDay: 2500 },
    { name: 'Alleppey', costPerDay: 2300 },
    { name: 'Vagamon', costPerDay: 2000 },
  ];

  const affordablePlaces = places.filter(place => place.costPerDay * days <= budget);

  const resultDiv = document.getElementById('result');
  if (affordablePlaces.length === 0) {
    resultDiv.textContent = 'Sorry, no destinations match your budget. Try adjusting the budget or days.';
    resultDiv.style.color = 'red';
  } else {
    const plan = affordablePlaces.map(
      place => `${place.name} - ₹${place.costPerDay * days} (₹${place.costPerDay}/day)`
    );
    resultDiv.innerHTML = `
      <p>Here are some destinations within your budget:</p>
      <ul>${plan.map(p => `<li>${p}</li>`).join('')}</ul>
    `;
    resultDiv.style.color = 'green';
  }
});
