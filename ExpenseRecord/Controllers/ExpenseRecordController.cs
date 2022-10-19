using ExpenseRecord.Dto;
using ExpenseRecord.ExpenseListService;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseRecord.Controllers
{
    [Route("api/expenseRecord")]
    [ApiController]
    public class ExpenseRecordController : Controller
    {
        private readonly ExpenseRecordService _expenseRecordService;

        public ExpenseRecordController(ExpenseRecordService expenseRecordService)
        {
            _expenseRecordService = expenseRecordService;
        }
        public List<ExpenseRecordDto> FullList = new List<ExpenseRecordDto>();
        
        
        [HttpGet]
        public List<ExpenseRecordDto> Gets()
        {
            _expenseRecordService.Gets();
            return _expenseRecordService.FullList;
        }

       
        [HttpPost]
        public async Task<IActionResult> CreateRecord(ExpenseRecordDto newItem)
        {
            _expenseRecordService.Create(newItem);
            return new ObjectResult(newItem);
        }
        [Route("api/expenseRecord")]
        [HttpDelete(@"{Id}")]
        public void DeleteRecord([FromRoute] string id)
        {
           
            throw new NotImplementedException();
            //_expenseRecordService.Gets();
            //List<ExpenseRecordDto> expenseRecordDtos = _expenseRecordService.data;
            
        }

    }
}
