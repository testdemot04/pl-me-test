import * as XLSX from 'xlsx';
import * as fs from 'fs';

export function createExcelFromJson(data: any[], filePath: string) {

  // Exclude employeeCode from Excel
  const filteredData = data.map(({ employeeCode, ...rest }) => rest);

  const ws = XLSX.utils.json_to_sheet(filteredData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Updates');
  XLSX.writeFile(wb, filePath);
}