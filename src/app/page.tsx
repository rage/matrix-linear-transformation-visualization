/* eslint-disable @next/next/no-img-element */
"use client";

import { css } from "@emotion/css"
import React, { useState } from 'react'

const Page: React.FC<React.PropsWithChildren> = () => {
  const [a, setA] = useState(1)
  const [b, setB] = useState(0)
  const [c, setC] = useState(0)
  const [d, setD] = useState(1)

  return (
    <div>        
      <div className={css`
        display: flex;
        align-items: center;
        flex-wrap: wrap;

      `}>

      <div className={css`
        display: flex;
        align-items: center;
        padding: 1rem;

      `}>
        <div className={css`
          height: 60px;
          width: 4px;
          padding-right: 5px;
          border-left: 1px solid black;
          border-top: 1px solid black;
          border-bottom: 1px solid black;
        `}/>

        <div className={css`
          display:inline-grid;
          grid-template-columns: 50px 50px;
          grid-column-gap: 8px;
        `}
          >
            <input type="number" value={a} step=".1" onChange={(event) => setA(event.target.valueAsNumber)}/>
            <input type="number" value={b} step=".1" onChange={(event) => setB(event.target.valueAsNumber)}/>
            <input type="number" value={c} step=".1" onChange={(event) => setC(event.target.valueAsNumber)}/>
            <input type="number" value={d} step=".1" onChange={(event) => setD(event.target.valueAsNumber)}/>
        </div>

        <div className={css`
          height: 60px;
          width: 4px;
          padding-left: 5px;
          border-right: 1px solid black;
          border-top: 1px solid black;
          border-bottom: 1px solid black;
        `}/>
        </div>

        <div className={css`
          padding: 8px;
        `}> &times; </div>

        <div className={css`
          display: flex;
          align-items: center;
          justify-content: center;
          width: 150px;
          height: 150px;
        `}>
          <img src="https://rage.github.io/introduction-to-matrix-calculus/static/c4b8116295cab8e3c208d824de6ffd01/5a46d/hedelmat.png"
            width={120}
            height={120}
            alt="Picture of a fruitbowl" 
          />
        </div>
        <div className={css`
            display: flex;
            align-items: center;
          `}>
          <p className={css`
            padding: 8px;
          `}> = </p>
        
          <div className={css` 
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            width: 150px;
            height: 150px;
          `}>
          <img src="https://rage.github.io/introduction-to-matrix-calculus/static/c4b8116295cab8e3c208d824de6ffd01/5a46d/hedelmat.png"
            alt="Matrix linear transformation visualization"
            width={120}
            height={120} 
            className={css`
            transform: matrix(${a}, ${b}, ${c} , ${d}, 0, 0);          
            `}
          />
        </div>
        
          
        </div>
        
      </div>
    </div>
    )
}

export default Page