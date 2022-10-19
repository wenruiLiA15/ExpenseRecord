using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ExpenseRecord.Dto
{
    public class ExpenseRecordDto
    {
        
        public string? Id { get; set; }

        public string Description { get; set; }

        public string? Type { get; set; }

        public float ? Price { get; set; }

        public DateTime? CreateTime { get; set; }

    }
}
