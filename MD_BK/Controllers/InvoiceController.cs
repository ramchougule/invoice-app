using Microsoft.AspNetCore.Mvc;

namespace MD_BK.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InvoiceController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetInvoice()
        {
            var invoice = new
            {
                invoiceId = 1,
                customerName = "John Doe",
                items = new[] {
                    new { itemId = 1, name = "Widget A", price = 19.99M },
                    new { itemId = 2, name = "Widget B", price = 9.50M }
                },
                total = 29.49M
            };
            return Ok(invoice);
        }
    }

}
