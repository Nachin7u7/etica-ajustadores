

const PDFViewer = () => {
  return (
    <div className="w-full h-screen bg-gray-100">
      <div className="w-full h-full">
        <iframe
          src="/ETICA  AJUSTADORES DE SEGURO PRESENTACION 2025 .pdf"
          className="w-full h-full border-none"
          title="ETICA AJUSTADORES DE SEGURO PRESENTACION 2025"
        >
          <p>
            Su navegador no soporta la visualización de PDFs.
            <a
              href="/ETICA  AJUSTADORES DE SEGURO PRESENTACION 2025 .pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Haga clic aquí para descargar el PDF
            </a>
          </p>
        </iframe>
      </div>
    </div>
  );
};

export default PDFViewer;