
const Locations = () => {
    return (
        <section className="bg-blue-50 py-12 mt-8">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-2">
                    También puedes visitarnos en nuestras oficinas
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
                    <div className="bg-white rounded-lg shadow-md p-6 flex-1 max-w-xs">
                        <h3 className="text-xl font-semibold mb-2">Cochabamba</h3>
                        <a href="https://maps.app.goo.gl/rx4boEHoT7uxL3kv5" target="_blank" rel="noopener noreferrer">
                            <img
                                src="src/assets/cbba.png"
                                alt="Ubicación Cochabamba Google Maps"
                                className="rounded-md mb-3 w-full h-40 object-cover border border-blue-200 hover:scale-105 transition-transform duration-200"
                            />
                        </a>
                        <a href="https://maps.app.goo.gl/rx4boEHoT7uxL3kv5" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline justify-center mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418 0-8-4.03-8-9.001C4 7.03 7.582 3 12 3s8 4.03 8 8.999C20 16.97 16.418 21 12 21z" />
                                <circle cx="12" cy="12" r="3" fill="#3b82f6" />
                            </svg>
                            Ver en Google Maps
                        </a>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 flex-1 max-w-xs">
                        <h3 className="text-xl font-semibold mb-2">La Paz</h3>
                        <a href="https://maps.app.goo.gl/Sd5bCWdLHLkh7S2F6" target="_blank" rel="noopener noreferrer">
                            <img
                                src="src/assets/lpz.png"
                                alt="Ubicación La Paz Google Maps"
                                className="rounded-md mb-3 w-full h-40 object-cover border border-blue-200 hover:scale-105 transition-transform duration-200"
                            />
                        </a>
                        <a href="https://maps.app.goo.gl/Sd5bCWdLHLkh7S2F6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline justify-center mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418 0-8-4.03-8-9.001C4 7.03 7.582 3 12 3s8 4.03 8 8.999C20 16.97 16.418 21 12 21z" />
                                <circle cx="12" cy="12" r="3" fill="#3b82f6" />
                            </svg>
                            Ver en Google Maps
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Locations;
