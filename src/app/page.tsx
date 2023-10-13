/* eslint-disable @next/next/no-img-element */
"use client";

import { css } from "@emotion/css"
import React, { useState } from 'react'

export default function Page() {
  const [a, setA] = useState(1)
  const [b, setB] = useState(0)
  const [c, setC] = useState(0)
  const [d, setD] = useState(1)

  return (

    <div className={css`
        display: flex;
        flex-wrap: wrap;
      `}>
      <div className={css`
          display: flex;
          align-items: center;
          justify-content: center;
          gap:20px;
        `}>

        <div className={css`
            display: flex;
            align-items: center;
        `}>

          <div className={css`
              height: 70px;
              width: 6px;
              border-left: 1px solid black;
              border-top: 1px solid black;
              border-bottom: 1px solid black;
            `} />

          <div className={css`
              display:inline-grid;
              height: 50px;
              grid-template-columns: 60px 60px;
              grid-column-gap: 6px;
              grid-row-gap: 4px;
            `}>
            <input type="number" value={a} step=".1" onChange={(event) => setA(event.target.valueAsNumber)} />
            <input type="number" value={b} step=".1" onChange={(event) => setB(event.target.valueAsNumber)} />
            <input type="number" value={c} step=".1" onChange={(event) => setC(event.target.valueAsNumber)} />
            <input type="number" value={d} step=".1" onChange={(event) => setD(event.target.valueAsNumber)} />
          </div>

          <div className={css`
              height: 70px;
              width: 6px;
              border-right: 1px solid black;
              border-top: 1px solid black;
              border-bottom: 1px solid black;
            `} />
        </div>

        <div className={css`
            font-size: 24px;
            padding-left: 15px;
          `}>&times;</div>

        <div className={css`
            display: flex;
            align-items: center;
            justify-content: center;
            width: 170px;
            height: 170px;
          `}>
          <img src="https://rage.github.io/introduction-to-matrix-calculus/static/c4b8116295cab8e3c208d824de6ffd01/5a46d/hedelmat.png"
            width={140}
            height={140}
            alt="Picture of a fruitbowl"
          />
        </div>
      </div>

      <div className={css`
            display: flex;
            align-items: center;
            gap: 20px;
        `}>
        <p className={css`
            padding: 8px;
            font-size: 24px;
          `}>=</p>

        <div className={css`
            display: flex;
            align-items: center;
            overflow: hidden;
            width: 170px;
            height: 170px;
          `}>
          <img src="https://rage.github.io/introduction-to-matrix-calculus/static/c4b8116295cab8e3c208d824de6ffd01/5a46d/hedelmat.png"
            alt="Matrix linear transformation visualization"
            width={140}
            height={140}
            className={css`
              transform: matrix(${a}, ${b}, ${c} , ${d}, 0, 0);          
            `} />
        </div>
      </div>
    </div>
  )
}
