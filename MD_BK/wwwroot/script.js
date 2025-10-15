
document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/invoice')
        .then(resp => {
            if (!resp.ok) throw new Error('Network response was not ok: ' + resp.status);
            return resp.json();
        })
        .then(data => {
            let html = `<div><strong>Invoice #${data.invoiceId}</strong><div>Customer: ${data.customerName}</div></div>`;
            html += '<ul>';
            (data.items || []).forEach(item => {
                
                html += `<li>${item.name} - $${Number(item.price).toFixed(2)}</li>`;
            });
            html += '</ul>';
            html += `<div class="total">Total: $${Number(data.total).toFixed(2)}</div>`;
            document.getElementById('invoice-container').innerHTML = html;
        })
        .catch(err => {
            console.error("Failed to load invoice:", err);
            document.getElementById('invoice-container').innerText = 'Failed to load invoice.';
        });
});