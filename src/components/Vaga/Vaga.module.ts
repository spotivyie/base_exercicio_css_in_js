import styled from 'styled-components'
import { Props } from '.'

export const Vagas = styled.li<Props>`
  border: 1px solid ${(props) => props.theme.corPrincipal};
  background-color: ${(props) => props.theme.corSecundaria};
  color: ${(props) => props.theme.corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;
`

export const VagasTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagasLink = styled.a`
  border-color: ${(props) => props.theme.corSecundaria};
  background-color: ${(props) => props.theme.corPrincipal};
  color: ${(props) => props.theme.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
}

.vaga:hover {
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
}

.vaga:hover a {
  border-color: var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
}
`
