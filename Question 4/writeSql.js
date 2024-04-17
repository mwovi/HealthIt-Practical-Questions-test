const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const XLSX = require('xlsx');

function removeSpecialCharacters(str) {
    return str.replace(/[^a-zA-Z0-9 ]/g, "");
}

function convertToSql(inputPath, outputPath) {
    const extension = path.extname(inputPath);
    let data = [];

    if (extension === '.csv') {
        fs.createReadStream(inputPath)
            .pipe(csv())
            .on('data', (row) => {
                for (let key in row) {
                    row[key] = removeSpecialCharacters(row[key]);
                }
                data.push(row);
            })
            .on('end', () => {
                writeSqlFile(data, outputPath);
            });
    } else if (extension === '.xlsx') {
        const workbook = XLSX.readFile(inputPath);
        const sheet_name_list = workbook.SheetNames;
        data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        data.forEach((row) => {
            for (let key in row) {
                row[key] = removeSpecialCharacters(row[key]);
            }
        });
        writeSqlFile(data, outputPath);
    } else {
        console.log('Unsupported file format');
    }
}

function writeSqlFile(data, outputPath) {
    let sql = 'CREATE TABLE data (\n';
    for (let key in data[0]) {
        sql += `  ${key} TEXT,\n`;
    }
    sql = sql.slice(0, -2) + '\n);\n';

    data.forEach((row) => {
        sql += 'INSERT INTO data VALUES (';
        for (let key in row) {
            sql += `'${row[key]}', `;
        }
        sql = sql.slice(0, -2) + ');\n';
    });

    fs.writeFileSync(outputPath, sql);
}