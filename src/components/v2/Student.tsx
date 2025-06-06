import React from 'react'

const diplomaImages = [
    // Reemplaza estas URLs con las de tus diplomas
    'https://res.cloudinary.com/jose-galdamez-dev/image/upload/f_auto,q_auto/v1/PersonalPage/certifications/oztwner6vtgqezyk9dcn',
    'https://res.cloudinary.com/jose-galdamez-dev/image/upload/f_auto,q_auto/v1/PersonalPage/certifications/p586v7qith9uutcjvlyq',
]

export const Student = () => {
    return (
        <section id='student' className='max-w-6xl mx-auto px-4 py-10 text-center'>
            <h2 className="text-3xl text-[#14426d] font-bold tracking-tight sm:text-4xl md:text-5xl">
                Estudiante eterno
            </h2>
            <section>
                <h3 className='text-2xl text-[#14426dd0] font-semibold mb-8'>Diplomas obtenidos recientemente</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4'>
                    {diplomaImages.map((src, idx) => (
                        <div key={idx} className='border rounded shadow p-2 bg-white'>
                            <img src={src} alt={`Diploma ${idx + 1}`} className='w-full h-auto object-contain' />
                        </div>
                    ))}
                </div>
            </section>
        </section>
    )
}
