import React from 'react';

function FormDenuncia() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            location: e.target.location.value,
            problemDescription: e.target.problemDescription.value
        };
        console.log(formData);
        // Limpa o formulário após o envio
        e.target.reset();
    };

    return (
        <div className="max-w-lg mx-auto">
    <header className="gradientBg p-4">
    <h1 className="text-xl font-bold">Formulário de Denuncias de Problemas Locais</h1>
    </header>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Localização:</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="problemDescription" className="block text-sm font-medium text-gray-700">Descrição do Problema:</label>
                    <textarea
                        id="problemDescription"
                        name="problemDescription"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Enviar Denúncia
                </button>
            </form>
        </div>
    );
}

export default FormDenuncia;
