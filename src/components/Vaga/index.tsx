import { Vagas, VagasLink, VagasTitulo } from './Vaga.module'

export type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin?: number
  salarioMax?: number
  requisitos: string[]
}

const Vaga = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos
}: Props) => (
  <Vagas>
    <VagasTitulo>{titulo}</VagasTitulo>
    <ul>
      <li>Localizacao: {localizacao}</li>
      <li>Senioridade: {nivel}</li>
      <li>Tipo de contratacao: {modalidade}</li>
      <li>
        Salário: {salarioMin} - {salarioMax}
      </li>
      <li>Requisitos: {requisitos.join(', ')}</li>
    </ul>
    <VagasLink href="#">Ver detalhes e candidatar-se</VagasLink>
  </Vagas>
)

export default Vaga
