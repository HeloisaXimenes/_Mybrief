import BulletList from '../components/BulletList'
import AnnotatedMedia from '../components/AnnotatedMedia'
import FeatureBlock from './FeatureBlock'
import storefront from '../assets/photos/storefront.jpg'
import warehouseActivity from '../assets/photos/warehouse-activity.jpg'
import warehouseStock from '../assets/photos/warehouse-stock.jpg'
import guarita from '../assets/photos/guarita.jpg'

export default function Features() {
  return (
    <section id="solucao" className="scroll-mt-20 bg-black px-6 py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-24 md:gap-32">
        <FeatureBlock
          text={
            <div>
              <h2 className="font-heading text-2xl font-extrabold leading-snug text-white sm:text-3xl">
                Com <span className="text-white">Percepta</span>
                <span className="text-brand">, a câmera vira sensor ativo.</span>
              </h2>
              <p className="mt-4 font-semibold text-white">Ela não fica só gravando.</p>
              <div className="mt-3">
                <BulletList
                  items={[
                    'Se algo errado acontece, você fica sabendo',
                    'Se nada acontece, você sabe que está tudo sob controle',
                  ]}
                />
              </div>
              <p className="mt-5 font-semibold text-white">
                Você não “acha”. Você <span className="text-brand">vê</span>.
              </p>
              <p className="text-gray-300">Com hora, imagem e evidência.</p>
            </div>
          }
          media={
            <AnnotatedMedia
              src={storefront}
              alt="Câmera de segurança monitorando fachada de loja, com destaque em vermelho para o horário de abertura fora do padrão"
              alert={
                <>
                  A loja foi aberta <strong>40 minutos</strong> após o horário.
                </>
              }
            />
          }
        />

        <FeatureBlock
          text={
            <div>
              <h2 className="font-heading text-2xl font-extrabold leading-snug text-white sm:text-3xl">
                Presença não é trabalho.
                <br />
                <span className="text-brand">Comportamento é.</span>
              </h2>
              <p className="mt-4 font-semibold text-white">
                Relógio marca entrada.
                <br />O Percepta mostra o que acontece depois.
              </p>
              <div className="mt-3">
                <BulletList
                  items={[
                    'Permanência em área sensível sem necessidade',
                    'Circulação fora do fluxo da operação',
                    'Pessoas paradas onde não deveriam estar',
                    'Movimento repetitivo sem justificativa',
                  ]}
                />
              </div>
              <p className="mt-5 font-semibold text-brand">Com Percepta:</p>
              <div className="mt-3">
                <BulletList
                  items={['Presença vira evento', 'Permanência vira alerta', 'Comportamento vira evidência']}
                />
              </div>
            </div>
          }
          media={
            <AnnotatedMedia
              src={warehouseActivity}
              alt="Câmera de estoque com destaque em vermelho para funcionário parado ao lado de um palete"
              alert={
                <>
                  Funcionário sem atividade registrada há <strong>37 minutos</strong>. Verifique a
                  situação.
                </>
              }
              recap={
                <>
                  Funcionário entrou no estoque às 16h. Permaneceu <strong>37 minutos</strong> sem
                  atividade registrada.
                  <br />
                  Ninguém solicitou acesso.
                  <br />
                  Ninguém acompanhou.
                  <br />O evento ficou gravado.
                </>
              }
            />
          }
        />

        <FeatureBlock
          text={
            <div>
              <h2 className="font-heading text-2xl font-extrabold leading-snug text-white sm:text-3xl">
                Controle de estoque.
                <br />
                Onde o dinheiro <span className="text-brand">some</span> sem barulho.
              </h2>
              <div className="mt-4">
                <BulletList
                  items={['Acesso fora do horário', 'Pessoa em área restrita', 'Permanência suspeita']}
                />
              </div>
              <p className="mt-5 text-gray-300">
                Você sabe <strong className="text-white">quem, quando e onde.</strong>
              </p>
            </div>
          }
          media={
            <AnnotatedMedia
              src={warehouseStock}
              alt="Câmera de estoque com destaque em vermelho para acesso registrado fora do horário"
              alert={
                <>
                  Acesso ao estoque registrado às <strong>22h</strong>. Verifique a situação.
                </>
              }
              recap={
                <>
                  Estoque acessado às <strong>22h</strong>.
                  <br />
                  Não tinha operação.
                  <br />
                  Não tinha pedido.
                  <br />
                  Não tinha justificativa.
                </>
              }
            />
          }
        />

        <FeatureBlock
          text={
            <div>
              <h2 className="font-heading text-2xl font-extrabold leading-snug text-white sm:text-3xl">
                Quem vigia o <span className="text-brand">vigilante</span>?
              </h2>
              <p className="mt-4 font-semibold text-white">
                Ronda vira fato.
                <br />
                Presença vira evidência.
              </p>
            </div>
          }
          media={
            <AnnotatedMedia
              src={guarita}
              alt="Câmera aérea de guarita com destaque em vermelho para ausência do vigilante"
              alert={
                <>
                  guarita sem presença detectada há <strong>34 minutos</strong>.
                </>
              }
              recap={
                <>
                  Contrato diz “24x7”.
                  <br />A câmera mostra a guarita vazia por <strong>34 minutos</strong>.
                </>
              }
            />
          }
        />
      </div>
    </section>
  )
}
