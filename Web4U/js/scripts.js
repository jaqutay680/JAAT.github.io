document.addEventListener("DOMContentLoaded", function () {
    const printBtn = document.getElementById("printBtn");

    if (printBtn) {
        printBtn.addEventListener("click", function () {
            const contenido = document.querySelector(".contenido-principal").outerHTML;

            const printWindow = window.open("", "_blank");
            printWindow.document.write(`
                <html>
                    <head>
                        <title>${document.title}</title>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                margin: 20px;
                            }
                            table {
                                width: 100%;
                                border-collapse: collapse;
                            }
                            th, td {
                                border: 1px solid #ddd;
                                padding: 8px;
                            }
                            th {
                                background-color: #f4f4f4;
                                text-align: left;
                            }
                        </style>
                    </head>
                    <body>
                        ${contenido}
                    </body>
                </html>
            `);
            printWindow.document.close();
            printWindow.print();
        });
    } else {
        console.error("El botón de impresión no se encontró en el DOM.");
    }
});
