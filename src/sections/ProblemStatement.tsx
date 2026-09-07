export default function ProblemStatement() {
  return (
    <section className="bg-black px-6 py-20 text-center md:py-28">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          Você já gastou dinheiro.
          <br />
          Hoje ele está <span className="text-danger">parado</span>.
        </h2>

        <div className="mt-14">
          <p className="font-heading text-xl font-bold text-white">Você pagou câmeras.</p>
          <p className="mt-4 text-lg text-gray-300">
            Pagou instalação.
            <br />
            Pagou manutenção.
            <br />
            Pagou empresa de segurança.
          </p>
        </div>

        <div className="mt-12">
          <p className="font-heading text-xl font-bold text-white">E mesmo assim:</p>
          <p className="mt-4 text-lg text-gray-300">
            Só olha imagem depois do problema
            <br />
            Não sabe se todas estão funcionando
            <br />
            Não extrai nenhum dado do dia a dia
          </p>
        </div>

        <h2 className="mt-16 font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          Você tem custo.
          <br />
          Mas não tem <span className="text-danger">controle</span>.
        </h2>
      </div>
    </section>
  )
}
