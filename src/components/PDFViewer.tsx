

import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// worker de pdfjs usando archivo local
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

const PDFViewer = () => {
  const pdfUrl = encodeURI("/ETICA  AJUSTADORES DE SEGURO PRESENTACION 2025 .pdf");
  const [numPages, setNumPages] = useState<number>(0);
  const [supportsIDB, setSupportsIDB] = useState(true);
  const [hasError, setHasError] = useState(false);

  // En iOS modo privado IndexedDB puede fallar → mostramos enlace fallback
  useEffect(() => {
    try {
      const req = indexedDB.open("test");
      req.onerror = () => setSupportsIDB(false);
    } catch {
      setSupportsIDB(false);
    }
  }, []);

  // Redirección automática cuando hay error
  useEffect(() => {
    if (hasError) {
      const timer = setTimeout(() => {
        window.location.href = pdfUrl;
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [hasError, pdfUrl]);

  return (
    <div className="w-full h-screen bg-gray-100 overflow-auto">
      {!supportsIDB && (
        <div className="p-3 bg-yellow-100 border-l-4 border-yellow-500">
          <p className="text-yellow-700">
            Su navegador no soporta la visualización completa de PDFs.{" "}
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Abrir PDF en una pestaña nueva
            </a>
          </p>
        </div>
      )}

      <div className="flex justify-center">
        <Document
          file={{ url: pdfUrl }}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          onLoadError={() => setHasError(true)}
          loading={
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                <p className="text-gray-600">Cargando PDF...</p>
              </div>
            </div>
          }
          error={
            <div className="flex items-center justify-center h-64">
              <div className="text-center p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
                <p className="text-blue-600">Redirigiendo al PDF...</p>
              </div>
            </div>
          }
          className="max-w-4xl"
        >
          {Array.from({ length: numPages }, (_, i) => (
            <div key={i} className="mb-4 shadow-lg">
              <Page
                pageNumber={i + 1}
                width={Math.min(800, window.innerWidth - 40)}
                className="mx-auto"
              />
            </div>
          ))}
        </Document>
      </div>
    </div>
  );
};

export default PDFViewer;