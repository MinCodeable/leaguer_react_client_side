import styled from '@emotion/styled'
import React from 'react'

const WrapperSearch = styled.div`
    display: flex;    
    background-color: red;
    width: 100%;
    height: 100%;
`;

const ContentWrapper = styled.div`

    /* justify-content: end; */
    position: absolute;
    background-color: #00000099;
    color: white;
    top: 0;
`;

export default function Search() {
  return (
      <WrapperSearch>
        <div>

            <div>
                <label htmlFor=""> Ordenar: </label>
                <select name="" id="">
                    <option value="1"> Ordenar de AZ</option>
                    <option value="2"> Ordenar de ZA</option>
                </select>
            </div>
            <div>
                <label htmlFor=""> Buscar</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor=""> Tipo de campeones</label>
                <select name="" id="">
                    <option value="todos"> Todos </option>
                    <option value="asesino"> Asesino </option>
                    <option value="luchador"> Luchador </option>
                    <option value="mago"> Mago </option>
                    <option value="tirador"> Tirador </option>
                    <option value="soporte"> Soporte </option>
                    <option value="tanque"> Tanque </option>
                </select>
            </div>
            <div>
                <label htmlFor=""> Dificultades </label>
                <select name="" id="">
                    <option value="baja">Baja</option>
                    <option value="moderada">Moderada</option>
                    <option value="alta">Alta</option>
                </select>
            </div>
        </div>
      </WrapperSearch>
  )
}
