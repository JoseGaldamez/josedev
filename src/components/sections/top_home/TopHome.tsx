import { CodeBracketIcon } from '@heroicons/react/20/solid'
import Jose from '@/assets/JoseGaldamez.png';
import Image from 'next/image';

export const TopHomeSection = () => {
    return (
        <div className='my-10'>
            <div>
                <Image className='w-32 rounded-full' width={128} height={128} src={Jose} alt="José Galdámez" />
            </div>
            <div className='my-8'>
                <h2 className='text-3xl text-white py-3'>Hola mundo, soy
                </h2>
                <h1 className='font-semibold text-5xl'>
                    José Galdámez
                </h1>
                <h3 className='py-3 text-gray-500 flex items-center'>
                    <CodeBracketIcon className='h-8 w-8' />
                    <span className='mx-3 text-lg'>
                        FullStack Developer
                    </span>
                </h3>
            </div>
        </div>
    )
}
