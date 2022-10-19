using System.Runtime.Serialization;
using ExpenseRecord.Dto;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseRecord.ExpenseListService
{
    public class ExpenseRecordService : IExpenseRecordService
    {

        public List<ExpenseRecordDto> FullList = new List<ExpenseRecordDto>();
        public void Create(ExpenseRecordDto expenseRecordDto)
        {
            var id = Guid.NewGuid().ToString();
            var demo = new ExpenseRecordDto
            {
                Id = id,
                Description = expenseRecordDto.Description,
                Type = expenseRecordDto.Type,
                Price = expenseRecordDto.Price,
                CreateTime = DateTime.Now
            };
            FullList.Add(demo);
            //_expenseRecordService.Gets();
            //List<ExpenseRecordDto> expenseRecordDtos = _expenseRecordService.data;
        }

        public Task DeleteAsync(string id)
        {
            var index = FullList.Find(x => x.Id == id);
            FullList.Remove(index);
            return Task.CompletedTask;
        }

        public Task<ExpenseRecordDto> GetByName(string Name)
        {
            throw new NotImplementedException();
        }

        public void Gets()
        {
            var id = Guid.NewGuid().ToString();
            var demo = new ExpenseRecordDto
            {
                Id = id,
                Description = "this is a test",
                Type = "duck",
                Price = 1999,
                CreateTime = null
            };
            FullList.Add(demo);
            //_expenseRecordService.Gets();
            //List<ExpenseRecordDto> expenseRecordDtos = _expenseRecordService.data;
            
        }
    }

   
}
