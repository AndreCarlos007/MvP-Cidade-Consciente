import { useState } from 'react';
import { Element, scroller } from 'react-scroll';
import { motion } from 'framer-motion';

const Peticao = () => {
  const [Peticoes, setPeticoes] = useState([]);
  const [currentPetitionIndex, setCurrentPetitionIndex] = useState(null);
  const [name, setName] = useState('');
  const [novaPet, setNovaPet] = useState('');

  const adicionarP = () => {
    if (name.trim() !== '') {
      const updtPeticao = [...Peticoes];
      updtPeticao[currentPetitionIndex].signatures.push(name.trim());
      setPeticoes(updtPeticao);
      setName('');
      scroller.scrollTo('signaturesSection', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }
  };

  const createNewPetition = () => {
    if (novaPet.trim() !== '') {
      setPeticoes([
        ...Peticoes,
        { title: novaPet.trim(), signatures: [] },
      ]);
      setNovaPet('');
      setCurrentPetitionIndex(Peticoes.length);
    }
  };

  return (
    <div>
    <header className="gradientBg p-4">
    <h1 className="text-xl font-bold">Petições da Comunidade - Cidade Consciente</h1>
    </header>

      <div className="container mx-auto p-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Titulo da Petição"
            value={novaPet}
            onChange={(e) => setNovaPet(e.target.value)}
            className="border p-2 mr-2 rounded"
          />
          <button
            onClick={createNewPetition}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Criar Nova Petição
          </button>
        </div>

        {Peticoes.length > 1 && (
          <div className="mb-4">
            <h2 className="text-2xl font-bold">Selecione a Petição: </h2>
            <div className="flex space-x-4">
              {Peticoes.map((petition, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPetitionIndex(index)}
                  className={`px-4 py-2 rounded ${currentPetitionIndex === index ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                  {petition.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {currentPetitionIndex !== null && (
          <>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-3xl font-bold mb-4"
            >
              {Peticoes[currentPetitionIndex].title}
            </motion.h1>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Seu Nome!"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 mr-2 rounded"
              />
              <button
                onClick={adicionarP}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Enviar Assinatura
              </button>
            </div>

            <Element name="signaturesSection">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="border-t pt-4"
              >
                <h2 className="text-2xl font-bold mb-4">
                  Assinaturas ({Peticoes[currentPetitionIndex].signatures.length})
                </h2>
                {Peticoes[currentPetitionIndex].signatures.length > 0 ? (
                  <ul className="list-disc pl-5">
                    {Peticoes[currentPetitionIndex].signatures.map((signature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        {signature}
                      </motion.li>
                    ))}
                  </ul>
                ) : (
                  <p>Ainda não há assinaturas. Seja o primeiro a assinar!</p>
                )}
              </motion.div>
            </Element>
          </>
        )}
      </div>
    </div>
  );
};

export default Peticao;
