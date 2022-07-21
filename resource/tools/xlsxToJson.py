
import xlrd
import json
# 运行环境为项目根目录
from_path = r'resource/battle/static_data/base.xlsx'
to_path = r'resource/battle/static_data/base.json'
second_path = [r'../static/advw/index/base.json']

wb = xlrd.open_workbook(from_path)

data = {}

sheet_names = wb.sheet_names()
for i in sheet_names:
    tmp_sheet = {}
    sheet = wb.sheet_by_name(i)
    all_rows = sheet.col_values(0)
    all_cols = sheet.row_values(0)
    all_rows.pop(0)
    for j1, j in enumerate(all_rows):
        tmp_row = {}
        for k in range(1, sheet.ncols):
            tmp_row[all_cols[k]] = sheet.cell_value(j1+1, k)
        tmp_sheet[j] = tmp_row
    data[i] = tmp_sheet


# print(data)


with open(to_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4)


for i in second_path:
    with open(i, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4)
