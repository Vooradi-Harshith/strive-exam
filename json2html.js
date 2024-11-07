export default function json2html(data) {
    // Create the table structure with `data-user` attribute
    let html = '<table data-user="harshithmudiraj201@gmail.com">';
    html += '<thead><tr>';

    // Extract headers from the first object's keys
    const headers = new Set(data.flatMap(Object.keys));
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });

    html += '</tr></thead><tbody>';

    // Fill table rows with data
    data.forEach(row => {
        html += '<tr>';
        headers.forEach(header => {
            html += `<td>${row[header] || ''}</td>`;
        });
        html += '</tr>';
    });

    html += '</tbody></table>';
    return html;
}
