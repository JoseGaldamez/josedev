import React from 'react'

const diplomaImages = [
    // Reemplaza estas URLs con las de tus diplomas
    'https://res.cloudinary.com/jose-galdamez-dev/image/upload/f_auto,q_auto/v1/PersonalPage/certifications/oztwner6vtgqezyk9dcn',
    'https://res.cloudinary.com/jose-galdamez-dev/image/upload/f_auto,q_auto/v1/PersonalPage/certifications/p586v7qith9uutcjvlyq',
]

export const Student = () => {
    return (
        <div className='bg-[#14426d] bg-opacity-10 w-full py-10'>
            <section id='student' className='max-w-6xl mx-auto px-4 py-10 text-center text-white'>
                <h2 className="text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    Estudiante eterno
                </h2>
                <section>
                    <p className="my-8 max-w-2xl mx-auto text-[#516d88]">
                        Siempre estoy aprendiendo y mejorando mis habilidades. Aquí están algunos de los diplomas que he obtenido recientemente.
                    </p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-10'>
                        {diplomaImages.map((src, idx) => (
                            <div key={idx} className='border rounded shadow p-2 bg-white'>
                                <img src={src} alt={`Diploma ${idx + 1}`} className='w-full h-auto object-contain' />
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </div>
    )
}
