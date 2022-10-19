using System.Diagnostics.Metrics;
using ExpenseRecord.Dto;

namespace ExpenseRecord.ExpenseListService
{
    public interface IExpenseRecordService
    {
        
        public void Create(ExpenseRecordDto expenseRecordDto);
        //Task UpdateAsync(string id, ExpenseRecordDto expenseRecordDto);
        Task DeleteAsync(string id);
        Task <ExpenseRecordDto> GetByName(string Name);
        public void Gets();
    }
}
